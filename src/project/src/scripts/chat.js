function initChatPage() {
    getUserData().then(user => {
        return user;
    }).then(user => {
        _user = user;
        fillFriendList();
    });
}

async function fillFriendList() {
    const friendList = document.getElementById('friend-list');
    friendList.innerHTML = '';

    let friendListTemplate = document.getElementById('friend-list-template');
    if (_user.friends.length === 0 && _user.friend_requests.length === 0) {
        let clone = friendListTemplate.content.cloneNode(true);
        clone.querySelector('h6').textContent = 'No friends yet';
        clone.querySelector('small').classList.add('d-none');
        clone.querySelector('img').classList.add('d-none');
        clone.querySelector('li').classList.add('disabled');
        clone.querySelector('button').classList.add('d-none');
        friendList.appendChild(clone);
    }

    if (_user.friend_requests.length > 0) {
        let friendRequestTemplate = document.getElementById('friend-request-template');
        for (let request of _user.friend_requests) {
            let clone = friendRequestTemplate.content.cloneNode(true);
            let user = (await getUserByID(request));
            clone.querySelector('h6').textContent = user.username;
            clone.querySelector('img').src = user.avatar;
            friendList.appendChild(clone);
        }
        friendList.appendChild(document.createElement('hr'));
    }

    for (let friendID of _user.friends) {
        let friend = await getUserByID(friendID);
        let clone = friendListTemplate.content.cloneNode(true);
        clone.querySelector('h6').textContent = friend.username;
        clone.querySelector('small').textContent = friend.is_online === true ? '🟢' : '⚫';
        clone.querySelector('img').src = friend.avatar;
        friendList.appendChild(clone);
    }
}

function toggleSelectedFriend(element) {
    const friendList = document.getElementById('friend-list');
    for (let friend of friendList.children) {
        friend.classList.remove('active');
    }
    element.classList.add('active');
    document.getElementById('selected-friend').innerText = element.querySelector('h6').innerText;
    let chatArea = document.getElementById('chat-area');
    if (chatArea.classList.contains('d-none')) {
        chatArea.classList.remove('d-none');
    }
}

function showFriendOptions(event) {
    event.stopPropagation();
}

function showAddFriendModal() {
    let addFriendModal = new bootstrap.Modal(document.getElementById('add-friend-modal'));
    addFriendModal.show();
}

async function addFriend() {
    let friendName = document.getElementById('inputFriendUsername');
    if (friendName.value === '') {
        friendName.classList.add('is-invalid');
        document.getElementById('friend-name-error').innerText = 'Name cannot be empty';
        return;
    }
    if (friendName.value === _user.username) {
        friendName.classList.add('is-invalid');
        document.getElementById('friend-name-error').innerText = 'You cannot add yourself as a friend';
        return;
    }
    let friendList = document.getElementById('friend-list');
    for (let friend of friendList.children) {
        if (friend.querySelector('h6').innerText === friendName.value) {
            friendName.classList.add('is-invalid');
            document.getElementById('friend-name-error').innerText = 'User is already your friend';
            return;
        }
    }
    let result = await addFriendAsync(friendName.value).catch(error => {
        console.error(error);
    });
    if (result.status === 404) {
        friendName.classList.add('is-invalid');
        document.getElementById('friend-name-error').innerText = 'User not found';
        return;
    }
    else if (result.status === 200) {
        friendName.classList.remove('is-invalid');
        friendName.value = '';
        await fillFriendList();
        let addFriendModal = bootstrap.Modal.getInstance(document.getElementById('add-friend-modal'));
        addFriendModal.hide();
    }
}

async function acceptFriendRequest(button){
    const friendName = button.parentElement.parentElement.querySelector('h6').innerText;
    await acceptFriendRequestAsync(friendName);
    _user = await getUserData();
    fillFriendList();
}

function showRemoveFriendModal(button){
    const friendName = button.parentElement.parentElement.parentElement.querySelector('h6').innerText;
    let removeFriendModal = new bootstrap.Modal(document.getElementById('del-block-friend-modal'));
    removeFriendModal._element.querySelector('h1').innerText = `Remove Friend`;
    removeFriendModal._element.querySelector('p').innerText = `Are you sure you want to remove "${friendName}" from your friend list?`;
    removeFriendModal._element.querySelector('.btn-danger').addEventListener('click', () => removeFriend(button));
    removeFriendModal.show();
}

async function removeFriend(button){
    const friendName = button.parentElement.parentElement.parentElement.querySelector('h6').innerText;
    await removeFriendAsync(friendName);
    _user = await getUserData();
    fillFriendList();
}

async function rejectFriendRequest(button){
    const friendName = button.parentElement.parentElement.querySelector('h6').innerText;
    await rejectFriendRequestAsync(friendName);
    _user = await getUserData();
    fillFriendList();
}

function showBlockUserModal(button){
    const userName = button.parentElement.parentElement.parentElement.querySelector('h6').innerText;
    let removeUserModal = new bootstrap.Modal(document.getElementById('del-block-friend-modal'));
    removeUserModal._element.querySelector('h1').innerText = `Block user`;
    removeUserModal._element.querySelector('p').innerText = `Are you sure you want to block "${userName}"?`;
    removeUserModal._element.querySelector('.btn-danger').addEventListener('click', () => blockUser(button));
    removeUserModal.show();
}

async function blockUser(button){
    const userName = button.parentElement.parentElement.parentElement.querySelector('h6').innerText;
    await blockUserAsync(userName);
    _user = await getUserData();
    fillFriendList();
}