export const GetUser = (token, idUser) => {
    return fetch('https://censo-ufms.herokuapp.com/auth/usuario', {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            "idUser": idUser
        })
    }).then((data) => {
        return data.json();
    }).then((data) => {
        return data;
    }).catch((e) => {
        console.error(e)
    });
}