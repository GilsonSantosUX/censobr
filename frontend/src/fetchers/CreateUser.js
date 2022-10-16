export const CreateUser = (email, senha, fkpapel, supervisor, nome, cpf, rg) => {
    const response = fetch('https://censo-ufms.herokuapp.com/auth/usuario/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "email": email,
            "senha": senha,
            "fkpapel": fkpapel,
            "supervisor": supervisor,
            "nome": nome,
            "cpf": cpf,
            "rg": rg
        })
    }).then((data) => {
        console.log('the data', data);
        return data.json();
    }).then((data) => {
        return data;
    }).catch((e) => {
        console.error(e)
        return false;
    });

    return response;
}