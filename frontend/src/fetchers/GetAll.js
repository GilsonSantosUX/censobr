export const GetAll = (token) => {
    return fetch('https://censo-ufms.herokuapp.com/auth/usuarios', {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
        }
    }).then((data) => {
        return data.json();
    }).then((data) => {
        return data;
    }).catch((e) => {
        console.error(e)
    });
}