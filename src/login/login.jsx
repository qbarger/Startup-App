import React from "react";
import { useNavigate } from "react-router";

(async () => {
    const userName = localStorage.getItem('username');
    if (userName) {
        document.querySelector('#player-name').textContent = userName;
    }
})();

export function Login(){

    const onSubmit = async (values) => {
        const userName = document.querySelector('#name')?.value;
        const password = document.querySelector('#password')?.value;
        const response = await fetch(`/api/auth/login`, {
            method: 'post',
            body: JSON.stringify({ name: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if(response.ok){
            localStorage.setItem('username', userName);
            window.location.href = 'solarsystem.html';
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
                <input type="text" id="name" placeholder="Your name here" required/>
                <br/>
                <br/>
                <label htmlFor="password">Password :</label>
                <input type="password" id="password" placeholder="Your password here" required/>
                <br/>
                <br/>
                <button align="center" type="submit" onClick={() => onSubmit()}>Login</button>
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

function loginUser(){
    signInOrUp(`/api/auth/login`);
}

async function signInOrUp(){
    const userName = document.querySelector('#name')?.value;
    const password = document.querySelector('#password')?.value;
    const response = await fetch(`/api/auth/login`, {
        method: 'post',
        body: JSON.stringify({ name: userName, password: password }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if(response.ok){
        localStorage.setItem('username', userName);
        window.location.href = 'solarsystem.html';
    } else {
        const body = await response.json();
        const modalEL = document.querySelector('#msgModal');
        modalEL.querySelector('.modal-body').textContent = `Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEL, {});
        msgModal.show();
    }
}