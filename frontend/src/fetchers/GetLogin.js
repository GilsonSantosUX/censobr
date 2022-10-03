export const GetLogin = (email, password) => {
    const response = fetch('http://localhost:3001/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            // "u_email": email,
            // "u_password": password
            "u_email": "ghaby@gmail.com",
            "u_password": "1234*"
        })
    }).then((data) => {
        return data.json();
    }).then((data) => {
        return data;
    }).catch((e) => {
        console.error(e)
    });

    return response;
}