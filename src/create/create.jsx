import React from "react";

export function Create(){
    return (
        <main>
            <div>
                <h1 align="center">Create Account</h1>
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