import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import {Login} from './login/login';
import {About} from './about/about';
import {Planets} from './planets/planets';
import {Solar} from './solar/solar';
import { Create } from "./create/create";

function NotFound(){
    return <main>404: return to sender. Address unknown...</main>
}

export default function App(){
    return (
        <BrowserRouter>
            <div>
                <header>
                    <h1>Expedition Extraterrestrial</h1>
                    <hr/>
                </header>
                
                <Routes>
                    <Route path='/' element={<Login/>} exact />
                    <Route path='/solar' element={<Solar/>} />
                    <Route path='/planets' element={<Planets/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/create' element={<Create/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>

                <footer>  
                    <hr/>
                    <br/>
                    <div align="center">
                        <span className="text-reset">Quenton Barger</span>
                    </div>
                    <br/>
                    <div align="center">
                        <a href="https://github.com/qbarger/Startup-App.git" target="_blank">Github</a>
                    </div>
                    <br/>
                </footer>
            </div>
        </BrowserRouter>
    );
}