console.log('Hello world!');

pageSetup();

function pageSetup() {
    initGlobalUsers();
    renderUsers();
}

let globalUsers = [];

function initGlobalUsers() {
    globalUsers.push({
        username: 'Robin',
        password: 'poker'
    });
    globalUsers.push({
        username: 'Waldemar',
        password: 'hockey'
    });
    globalUsers.push({
        username: 'Kalinasson',
        password: 'pingis'
    });
    globalUsers.push({
        username: 'Walle',
        password: 'lego'
    });
}




function renderUsers() {
    const bodyRef = document.querySelector('body');

    for(let user of globalUsers) {
        let pRef = document.createElement('p');
        pRef.textContent = user.username;
        bodyRef.appendChild(pRef);
        console.log(pRef);
    }
}