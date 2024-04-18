import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router";


export function Create(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function createAccount() {

        const response = await fetch(`/api/auth/create`, {
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
                <h1 align="center">Create Account</h1>
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
                <button align="center" type="submit" onClick={createAccount}>Create</button>
            </div>
            <br/>
            <br/>
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