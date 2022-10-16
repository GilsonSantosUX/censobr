export const GetLogin = (email, password, name, cpf) => {
    const response = fetch('https://censo-ufms.herokuapp.com/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "email": email,
            "senha": password,
            "fkpapel": 3,
            "supervisor": 5,
            "nome": name,
            "cpf": "98765432106",
            "rg": "001000001"
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