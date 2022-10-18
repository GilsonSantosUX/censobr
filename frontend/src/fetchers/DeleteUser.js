export const DeleteUser = (token, id) => {
    return fetch('https://censo-ufms.herokuapp.com/auth/usuario/deletar', {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer " + token
        },
        body: {
            "cpf": id
        }
    }).then((data) => {
        return data
    }).catch((e) => {
        console.error(e)
    });
}