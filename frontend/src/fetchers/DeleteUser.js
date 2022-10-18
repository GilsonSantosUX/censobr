export const DeleteUser = (token, id, cpf) => {
    console.log(token)
    console.log(id)
    console.log(cpf)
    return fetch('https://censo-ufms.herokuapp.com/auth/usuario/deletar', {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer " + token
        },
        body: {
            "idusuario": 9,
            "cpf": "33345678912"
        }
    }).then((data) => {
        console.log('the delete', data)
        return data
    }).catch((e) => {
        console.error(e)
    });
}