export const GetAuthUser = (token) => {
    return fetch('http://localhost:3001/authenticate', {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + token
        },
    }).then((data) => {
        return data.json();
    }).then((data) => {
        console.log(data)
        return data;
    }).catch((e) => {
        console.error(e)
    });
}