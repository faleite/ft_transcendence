//Login user
async function login(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const keepLoggedIn = document.getElementById('keepLogin').checked;

    if (keepLoggedIn)
        localStorage.setItem('keepLoggedIn', true);
    else
        localStorage.removeItem('keepLoggedIn');

    const url = 'https://ft-transcendence.com/api/auth/login/';
    document.getElementById('loginLoading').classList.toggle('d-none');
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    }).then(response => {
        if (response.status === 200) {
            document.getElementById('loginUsername').classList.remove('is-invalid');
            document.getElementById('loginPassword').classList.remove('is-invalid');
            return response.json();
        }
        else if (response.status === 401) {
            document.getElementById('loginUsername').classList.add('is-invalid');
            document.getElementById('loginPassword').classList.add('is-invalid');
            return null;
        }
        else {
            return null;
        }
    }).then(data => {
        if (data !== null) {
            sessionStorage.setItem('jwt', data.access);
            sessionStorage.setItem('refresh', data.refresh);
            if (keepLoggedIn)
                localStorage.setItem('refresh', data.refresh);
            loggedIn = true;
            document.getElementById('loginLoading').classList.toggle('d-none');
        }
        else {
            document.getElementById('loginLoading').classList.toggle('d-none');
            return;
        }
    }).catch(error => {
        let modal = new bootstrap.Modal(document.getElementById('loginFailModal'));
        modal.show();
        document.getElementById('loginLoading').classList.toggle('d-none');
        //log error
    });

    if (loggedIn) {
        document.getElementById('header').style.display = 'block';
        _user = await getUserData();
        await getNotifications();
        await getUserAvatar(_user.id).then(avatar => { _avatar = avatar;});
        document.getElementById('header-avatar').src = _avatar;
        changeContent('overview', true);
        history.replaceState(pageState, null, "");
    }
}

//Logout the user
async function logout() {
    const url = 'https://ft-transcendence.com/api/auth/logout/';
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            refresh: sessionStorage.getItem('refresh')
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
        }
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        }
        else {
            return null;
        }
    }).then(data => {
        if (data !== null) {
            return;
        }
        else {
            alert('Logout failed!');
            return;
        }
    }).catch(error => {
        let modal = new bootstrap.Modal(document.getElementById('loginFailModal'));
        modal.show();
        document.getElementById('loginLoading').classList.toggle('d-none');
        //log error
    });
    clearSession();
}

function clearSession() {
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('refresh');
    localStorage.removeItem('refresh');
    loggedIn = false;
    _user = null;
    document.getElementById('header').style.display = 'none';
    document.getElementById('notification-area').innerHTML = '';
    changeContent('login', false);
}

//Create a new user account
function signup(event) {
    event.preventDefault();
    let username = document.getElementById('signupUsername');
    let email = document.getElementById('signupEmail');
    let password = document.getElementById('signupPassword');
    let confirmPassword = document.getElementById('signupConfirmPassword');

    if (username.value === '' || email.value === '' || password.value === '' || confirmPassword.value === '')
        return;
    if (password.value !== confirmPassword.value) {
        document.getElementById('signupConfirmPassword').classList.add('is-invalid');
        return;
    }
    else
        document.getElementById('signupConfirmPassword').classList.remove('is-invalid');

    const url = 'https://ft-transcendence.com/api/auth/signup/';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value,
            confirm_password: confirmPassword.value
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    }).then(response => {
        if (response.status === 400) {
            document.getElementById('signupUsername').classList.add('is-invalid');
            console.warn(response);
            return;
        }
        else if (response.status === 201) {
            return response.json();
        }
        else {
            //log error
            return;
        }
    }).then(data => {
        if (data !== undefined) {
            const alertPlaceholder = document.getElementById('signupSuccessAlert');
            const appendAlert = (message, type) => {
                const wrapper = document.createElement('div')
                wrapper.innerHTML = [
                    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                    `   <div>${message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('')

                alertPlaceholder.append(wrapper)
            }
            appendAlert('Account created sucessfully! You may login now.', 'success');
            email.value = '';
            username.value = '';
            password.value = '';
            confirmPassword.value = '';
        }
    }).catch(error => {
        let modal = new bootstrap.Modal(document.getElementById('signupFailModal'));
        modal.show();
        //log error
    });
}

//Get user data
//TODO change to be able to get any user instead of just the logged in user
async function getUserData() {
    const userID = await getUserID();
    if (userID === null)
        return;
    const url = `https://ft-transcendence.com/api/users/${userID}/`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
        }
    });
    if (response.status === 401) {
        let data = await refreshLogin();
        return data;
    }
    if (response.status !== 200) {
        console.error('Error fetching user data');
        logout();
        return;
    };
    const data = await response.json();
    //TODO cache data
    return data;
}

//Get the user ID from the access token
async function getUserID() {
    try {
        if (sessionStorage.getItem('jwt') === null) 
            await refreshLogin();
        const payload = sessionStorage.getItem('jwt').split('.')[1];
        return JSON.parse(atob(payload))?.user_id;
    }
    catch (e) {
        return null;
    }
}

//Refresh the login token
async function refreshLogin() {
    if (sessionStorage.getItem('refresh') !== null) {
        const refreshToken = sessionStorage.getItem('refresh');
        const url = 'https://ft-transcendence.com/api/auth/token/refresh/';
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                refresh: refreshToken
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        }).then(response => {
            if (response.status === 200) {
                return response.json();
            }
            else {
                console.error('Error refreshing token', response);
                return null;
            }
        }).then(data => {
            if (data !== null) {
                sessionStorage.setItem('jwt', data.access);
                sessionStorage.setItem('refresh', data.refresh);
                if (localStorage.getItem('keepLoggedIn') === true)
                    localStorage.setItem('refresh', data.refresh);
                return getUserData();
            }
            else {
                return;
            }
        });
        return response;
    }
    return null;
}

async function verifyRefreshToken(refresh){
    const url = 'https://ft-transcendence.com/api/auth/token/refresh/';
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            refresh: refresh
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    }).then(response => {
        return response.status === 200;
    }).catch(error => {
        return false;
    });
}

async function addFriendAsync(friendName) {
    const userID = await getUserID();
    if (userID === null)
        return;
    const url = `https://ft-transcendence.com/api/users/${userID}/invite_friend/`;
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            add_friend: friendName
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
        }
    });
    if (response.status === 401) {
        await refreshLogin();
        return await addFriendAsync(friendName);
    }
    return response;
}

async function getUserByID(userID) {
    const url = `https://ft-transcendence.com/api/users/${userID}/`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
        }
    });
    if (response.status === 401) {
        await refreshLogin();
        return await getUserByID(userID);
    }
    const data = await response.json();
    return data;
}

async function acceptFriendRequestAsync(friendID) {
    const userID = await getUserID();
    if (userID === null)
        return;
    const url = `https://ft-transcendence.com/api/users/${userID}/accept_friend/`;
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            accept_friend: friendID
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
        }
    });
    if (response.status === 401) {
        await refreshLogin();
        return await acceptFriendRequestAsync(friendID);
    }
    return response;
}

async function removeFriendAsync(friendName) {
    const userID = await getUserID();
    if (userID === null)
        return;
    const url = `https://ft-transcendence.com/api/users/${userID}/remove_friend/`;
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            remove_friend: friendName
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
        }
    });
    if (response.status === 401) {
        await refreshLogin();
        return await removeFriendAsync(friendName);
    }
    return response;
}

async function rejectFriendRequestAsync(friendName) {
    const userID = await getUserID();
    if (userID === null)
        return;
    const url = `https://ft-transcendence.com/api/users/${userID}/remove_friend_request/`;
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            remove_friend: friendName
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
        }
    });
    if (response.status === 401) {
        await refreshLogin();
        return await rejectFriendRequestAsync(friendName);
    }
    return response;
}

async function blockUserAsync(userName) {
    const userID = await getUserID();
    if (userID === null)
        return;
    const url = `https://ft-transcendence.com/api/users/${userID}/block/`;
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            user: userName
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
        }
    });
    if (response.status === 401) {
        await refreshLogin();
        return await blockUserAsync(userName);
    }
    return response;
}

async function getUserAvatar(userID) {
    let url = `https://ft-transcendence.com/api/users/${userID}/get_avatar/`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('jwt')}`
            }
        });
        if (response.ok) {
            const blob = await response.blob();
            const objectURL = URL.createObjectURL(blob);
            return objectURL;
        } else {
            console.error('Error fetching avatar');
            return null;
        }
    } catch (error) {
        console.error('Error fetching avatar', error);
        return null;
    }
}