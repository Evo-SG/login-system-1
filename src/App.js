import React from 'react';

const App = () => {
    const [person, setPerson] = React.useState({
        username: '',
        password: ''
    })
    const [token, changeToken] = React.useState({})
    const change = (e) => {
        e.preventDefault();
        var name = e.target.name,
            value = e.target.value;
        setPerson({ ...person, [name]: value })
    }
    /**
     * 
     * @param {React.FormEvent<HTMLFormElement>} e 
     */
    const submit = (e) => {
        e.preventDefault();
        var Formdata = new FormData();
        Formdata.append("username", "admin");
        Formdata.append("password", "admin");
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (this.readyState === 4) changeToken(JSON.parse(this.response))
        }
        req.open("POST", "http://localhost:8080/authenticate", true);
        req.send(Formdata);
        setPerson({ username: '', password: '' })
    }
    const click = () => {
        alert(token.token ?? "Login first...")
    }
    const login = () => {
        var msg = token.token ?? "dont have token";
        if (msg === "dont have token") return alert("login fail");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4) alert(this.responseText)
        }
        xhttp.open("GET", "http://localhost:8080/admin", true);
        xhttp.setRequestHeader("Authorization", token.token);
        xhttp.send();
    }

    return (
        <>
            <form onSubmit={submit}>
                <input
                    type="text"
                    value={person.username}
                    name="username"
                    id="username"
                    onChange={change} />
                <input
                    type="password"
                    value={person.password}
                    name="password"
                    id="password"
                    onChange={change} />
                <input
                    type="submit"
                    placeholder="Submit" />
            </form>
            <button
                type="button"
                onClick={click}
            >GET TOKEN</button>
            <button
                type="button"
                onClick={login}
            >LOGIN</button>
        </>
    )
}

export default App;