// Invoke this api and find if ID 8 exists
// 	If not throw error
// 	If present print the name
// Mock API : https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user

const fetchPromise = fetch('https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user');

fetchPromise.then(response => {
    return response.json();
}).then(users => {
    // console.log(users);
    let user = users.find(user => user.id === '8');
    if(user) {
        console.log(user.name);
    } else {
        throw new Error('User with ID 8 not found');
    }
}).catch(error => {
    console.log(error);
}
);

