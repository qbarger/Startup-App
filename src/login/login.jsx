import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router";


export function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function loginUser() {

        const response = await fetch(`/api/auth/login`, {
            method: 'post',
            body: JSON.stringify({ name: username, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if(response.ok){
            localStorage.setItem('username', username);
            navigate("/solar");
        } else {
            const body = await response.json();
            const modalEL = document.querySelector('#msgModal');
            modalEL.querySelector('.modal-body').textContent = `Error: ${body.msg}`;
            const msgModal = new bootstrap.Modal(modalEL, {});
            msgModal.show();
        }
    };

    return (
        <main>
            <div>
                <h1 align="center">Login</h1>
            </div>
            <br/>
            <div align="center">
                <label htmlFor="Username">Username:</label>
                <input type="text" id="name" placeholder="Your name here" value={username} onChange={(user) => setUsername(user.target.value)} required/>
                <br/>
                <br/>
                <label htmlFor="password">Password :</label>
                <input type="password" id="password" placeholder="Your password here" value={password} onChange={(user) => setPassword(user.target.value)} required/>
                <br/>
                <br/>
                <button align="center" className="btn btn-outline-light" type="submit" onClick={loginUser}>Login</button>
            </div>
            <br/>
            <br/>
            <form align="center" method="get" action="/create">
                <span>Don't have an account? Make one  </span>
                <button type="submit" className="btn btn-outline-light">here</button>
            </form>
            <div className="modal fade" id="msgModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-dark">
                        <div className="modal-body">error message here</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </main>
    );
}