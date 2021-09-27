import React from 'react';

const App = () => {
    const [person, setPerson] = React.useState({
        username: '',
        password: ''
    })
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
        Formdata.append("username", person.username);
        Formdata.append("password", person.password);
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                var json = JSON.parse(this.response)
                login(json)
            }
        }
        req.open("POST", "http://localhost:8080/authenticate", true);
        req.send(Formdata);
        setPerson({ username: '', password: '' })
    }
    const login = (json) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            var code = Number(json.code)
            if (this.readyState === 4 && code >= 200 && code < 300) {
                document.write(this.responseText)
            } else if (this.readyState === 4) {
                document.write("Error")
            }
        }
        xhttp.open("GET", "http://localhost:8080/admin", true);
        xhttp.setRequestHeader("Authorization", json.token);
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
        </>
    )
}

export default App;