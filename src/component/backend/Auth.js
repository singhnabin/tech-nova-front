const API = "http://localhost:8080/api/user"
// axiox
// fetch()
export const createuser = (data) => {
    return fetch(`${API}/create`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "applciation/json"
        },
        body: JSON.stringify(data)
    }).then(resp => {
        console.log(resp);
    }).catch(err => {
        console.log(err);
    })
}