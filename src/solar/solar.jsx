import React from "react";

export function Solar(){
    return (
        <main className="solarMain">
            <section className="solarSection">
                <form method="get" action="sun.html">
                    <button id="sun" type="submit" onClick="broadcastEvent(getPlayerName(), 'travel', 1)" className="btn btn-outline-light">Sun</button> 
                </form>
                <br/><br/>
                <form method="get" action="mercury.html">
                    <button id="mercury" type="submit" onClick="broadcastEvent(getPlayerName(), 'travel', 2)" className="btn btn-outline-light">Mercury</button> 
                </form>
                <br/><br/>
                <form method="get" action="venus.html">
                    <button id="venus" type="submit" onClick="broadcastEvent(getPlayerName(), 'travel', 3)" className="btn btn-outline-light">Venus</button> 
                </form>
                <br/><br/>
                <form method="get" action="earth.html">
                    <button id="earth" type="submit" onClick="broadcastEvent(getPlayerName(), 'travel', 4)" className="btn btn-outline-light">Earth</button> 
                </form>
                <br/><br/>
                <form method="get" action="mars.html">
                    <button id="mars" type="submit" onClick="broadcastEvent(getPlayerName(), 'travel', 5)" className="btn btn-outline-light">Mars</button> 
                </form>
                <br/><br/>
                <form method="get" action="jupiter.html">
                    <button id="jupiter" type="submit" onClick="broadcastEvent(getPlayerName(), 'travel', 6)" className="btn btn-outline-light">Jupiter</button> 
                </form>
                <br/><br/>
                <form method="get" action="saturn.html">
                    <button id="saturn" type="submit" onClick="broadcastEvent(getPlayerName(), 'travel', 7)" className="btn btn-outline-light">Saturn</button> 
                </form>
                <br/><br/>
                <form method="get" action="uranus.html">
                    <button id="uranus" type="submit" onClick="broadcastEvent(getPlayerName(), 'travel', 8)" className="btn btn-outline-light">Uranus</button> 
                </form>
                <br/><br/>
                <form method="get" action="neptune.html">
                    <button id="neptune" type="submit" onClick="broadcastEvent(getPlayerName(), 'travel', 9)" className="btn btn-outline-light">Neptune</button> 
                </form>
                <br/><br/>
                <form id="about" method="get" action="about.html">
                    <button type="submit" className="btn btn-light">About</button> 
                </form>
            </section>
            <section className="solarSection">
                <div id="Sun"></div>
                <div id="Mercury"></div>
                <div id="Venus"></div>
                <div id="Earth"></div>
                <div id="Mars"></div>
                <div id="Jupiter"></div>
                <div id="Saturn"></div>
                <div id="Uranus"></div>
                <div id="Neptune"></div>
            </section>
        </main>
    );
}