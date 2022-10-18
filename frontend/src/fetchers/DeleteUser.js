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
            "idusuario": id,
            "cpf": cpf
        }
    }).then((data) => {
        return data
    }).catch((e) => {
        console.error(e)
    });
}