export const DeleteUser = (token, id, cpf) => {
    return fetch('http://localhost:3001/auth/usuario/deletar', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', "Authorization": "Bearer " + token },
        body:JSON.stringify({
            "idusuario": id,
            "cpf": cpf
        })
    }).then((data) => {
        return data
    }).catch((e) => {
        console.error(e)
    });
}