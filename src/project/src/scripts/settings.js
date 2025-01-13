
async function updateSettingsPage() {
    if (_user === null)
        _user = await getUserData();
    document.getElementById('userName').innerText = `${_user.username}`;
    document.getElementById('userEmail').innerText = `${_user.email}`;
    document.getElementById('user-avatar').src = _avatar;
    const date = new Date(_user.date_joined);
    const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
    document.getElementById('userJoinDate').innerText = `Joined on ${formattedDate}`;
    loadGeneralSettings();
}

//Load the widget for general settings
function loadAccountSettings() {
    var contentDiv = document.getElementById('settings-container');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `/src/components/settings-account.html`, true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4)
            return;
        if (this.status !== 200) {
            contentDiv.innerHTML = `<h2>Content not found!</h2>`
            return;
        }
        contentDiv.innerHTML = this.responseText;
        document.getElementById('InputUsername')?.setAttribute('placeholder', _user?.username);
        document.getElementById('InputEmail')?.setAttribute('placeholder', _user?.email);
        var form = document.getElementById('accountDetailsForm');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            updateAccountDetails();
        });
    }
    xhr.send();
}

//Update account details
async function updateAccountDetails() {
    let newUser = await getUpdatedAccountDetails();
    if (newUser === undefined)
        return;
    if (newUser.username === _user.username && newUser.email === _user.email) {
        document.getElementById('InputUsername').classList.remove('is-valid');
        document.getElementById('InputEmail').classList.remove('is-valid');
        return;
    }
    let xhr = new XMLHttpRequest();
    const userId = getUserID();
    const url = `https://ft-transcendence.com/api/users/${userId}/edit`;
    xhr.open('PUT', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.getItem('jwt')}`);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4)
            return;
        if (this.status === 400) {
            document.getElementById('InputUsername').classList.remove('is-valid');
            document.getElementById('InputUsername').classList.add('is-invalid');
            return;
        }
        else if (this.status !== 200) {
            console.log('Error updating user details', this);
            return;
        }
        showUpdatedValues();
    }
    xhr.send(JSON.stringify(newUser));
}

//Show updated or invalid values
function showUpdatedValues() {
    let username = document.getElementById('InputUsername');
    let email = document.getElementById('InputEmail');
    let tmp = _user;

    getUserData().then(user => {
        _user = user;

        if (username.value !== '' && username.value !== tmp.username) {
            username.classList.remove('is-invalid');
            username.classList.add('is-valid');
            document.getElementById('userName').innerText = _user.username;
        }
        else
            username.classList.remove('is-valid');

        if (email.value !== '' && email.value !== tmp.email) {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
            document.getElementById('userEmail').innerText = _user.email;
        }
        else
            email.classList.remove('is-valid');
    });
}

//Get object with new account details
async function getUpdatedAccountDetails() {
    let username = document.getElementById('InputUsername').value.trim();
    let email = document.getElementById('InputEmail').value.trim();
    let avatar = document.getElementById('InputPicture').value;

    let usernameInput = document.getElementById('InputUsername');
    if (username !== '') {
        if (username.match(/^[a-zA-Z0-9_\+\-\.\@]+$/)) {
            usernameInput.classList.remove('is-invalid');
            usernameInput.classList.add('is-valid');
        }
        else {
            usernameInput.classList.remove('is-valid');
            usernameInput.classList.add('is-invalid');
            return;
        }
    }
    else {
        usernameInput.classList.remove('is-valid');
        usernameInput.classList.remove('is-invalid');
    }

    let emailInput = document.getElementById('InputEmail');
    if (email !== '') {
        if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }
        else {
            emailInput.classList.remove('is-valid');
            emailInput.classList.add('is-invalid');
            return;
        }
    }
    else {
        emailInput.classList.remove('is-valid');
        emailInput.classList.remove('is-invalid');
    }
    let newUser = {
        username: username !== '' ? username : _user.username,
        email: email !== '' ? email : _user.email
    }
    if (avatar !== '')
        await updateAvatar();
    return newUser;
}

//Update user avatar
async function updateAvatar() {
    let avatar = document.getElementById('InputPicture');
    let formData = new FormData();
    formData.append('avatar', avatar.files[0]);
    let xhr = new XMLHttpRequest();
    const userId = await getUserID();
    const url = `https://ft-transcendence.com/api/users/${userId}/add_avatar/`;
    xhr.open('PUT', url, true);
    xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.getItem('jwt')}`);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4)
            return;
        if (this.status !== 200) {
            console.log('Error updating user avatar', this);
            //TODO: log error
            return;
        }
        else
        {
            getUserAvatar(userId).then(avatar => {
                _avatar = avatar;
                document.getElementById('user-avatar').src = _avatar;
                document.getElementById('header-avatar').src = _avatar;
            });
        }
    }
    xhr.send(formData);
}

//Load the widget for security settings
function loadSecuritySettings() {
    var contentDiv = document.getElementById('settings-container');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `/src/components/settings-security.html`, true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4)
            return;
        if (this.status !== 200) {
            contentDiv.innerHTML = `<h2>Content not found!</h2>`
            return;
        }
        contentDiv.innerHTML = this.responseText;
        var form = document.getElementById('accountSecurityForm');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            updateSecurityDetails();
        });
    }
    xhr.send();
}

//Update password
function updateSecurityDetails() {
    let newPassword = getUpdatedSecuriyDetails();
    if (newPassword === undefined)
        return;
    let xhr = new XMLHttpRequest();
    const userId = getUserID();
    const url = `https://ft-transcendence.com/api/users/${userId}/edit`;
    xhr.open('PUT', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.getItem('jwt')}`);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4)
            return;
        if (this.status === 400) {
            document.getElementById('InputCurrentPassword').classList.remove('is-valid');
            document.getElementById('InputCurrentPassword').classList.add('is-invalid');
            console.warn(this);
            return;
        }
        else if (this.status !== 200) {
            console.log('Error updating user details', this);
            return;
        }
        showSucessfulSave();
    }
    xhr.send(JSON.stringify(newPassword));
}

//Show alert for successful save
function showSucessfulSave() {
    const alertPlaceholder = document.getElementById('saveSucessfulPlaceholder');
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
    appendAlert('Password updated successfully!', 'success');
    document.getElementById('InputPassword').value = '';
    document.getElementById('InputPasswordConfirm').value = '';
    document.getElementById('InputCurrentPassword').value = '';
}

//Get object with new password details
function getUpdatedSecuriyDetails() {
    let password = document.getElementById('InputPassword');
    let confirmPassword = document.getElementById('InputPasswordConfirm');
    let currentPassword = document.getElementById('InputCurrentPassword');

    if (password.value === '' || confirmPassword.value === '' || currentPassword.value === '')
        return;

    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.remove('is-valid');
        confirmPassword.classList.add('is-invalid');
        return;
    }
    else
        confirmPassword.classList.remove('is-invalid');

    const newPassword = {
        username: _user.username,
        password: password.value,
        confirm_password: confirmPassword.value,
        old_password: currentPassword.value
    }
    return newPassword;
}

//Show confirmation modal for deleting account
function deleteAccount() {
    let modal = new bootstrap.Modal(document.getElementById('deleteAccountModal'));
    modal.show();
}

//Delete account
async function deleteAccountConfirmed() {
    let password = document.getElementById('inputDelAccountPassword').value;
    if (password === '') {
        document.getElementById('inputDelAccountPassword').classList.add('is-invalid');
        return;
    }
    else
        document.getElementById('inputDelAccountPassword').classList.remove('is-invalid');

    let isPasswordCorrect = await confirmPassword(password);
    if (!isPasswordCorrect) {
        document.getElementById('inputDelAccountPassword').classList.add('is-invalid');
        return;
    }
    else {
        let xhr = new XMLHttpRequest();
        const userId = getUserID();
        const url = `https://ft-transcendence.com/api/users/${userId}/edit/`;
        xhr.open('DELETE', url, true);
        xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.getItem('jwt')}`);
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4)
                return;
            if (this.status !== 204) {
                document.getElementById('inputDelAccountPassword').classList.add('is-invalid');
                console.log('Error deleting user', this);
                return;
            }
            sessionStorage.removeItem('jwt');
            sessionStorage.removeItem('refresh');
            location.reload();
        }
        xhr.send();
    }
}

//Confirm password before deleting account
async function confirmPassword(password) {
    let xhr = new XMLHttpRequest();
    const userId = getUserID();
    const url = `https://ft-transcendence.com/api/users/${userId}/edit/`;
    xhr.open('PUT', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Bearer ${sessionStorage.getItem('jwt')}`);
    xhr.send(JSON.stringify(
        {
            username: _user.username,
            password: password,
            confirm_password: password,
            old_password: password
        }));
    if (xhr.status === 200)
        return true;
    return false;
}

function loadGeneralSettings(){
    var contentDiv = document.getElementById('settings-container');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `/src/components/settings-general.html`, true);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4)
            return;
        if (this.status !== 200) {
            contentDiv.innerHTML = `<h2>Content not found!</h2>`
            return;
        }
        contentDiv.innerHTML = this.responseText;
    }
    xhr.send();
}