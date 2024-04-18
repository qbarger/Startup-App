import React from "react";
import { useNavigate } from "react-router";

export function Solar(){

    const navigate = useNavigate();
    
    function logout() {
        fetch(`/api/auth/logout`, {
          method: 'delete',
        })
          .catch(() => {
            // Logout failed. Assuming offline
          })
          .finally(() => {
            localStorage.removeItem('userName');
            navigate('/');
          });
      }

    function explore(value){
        const planet = getElementId(value);
        
        switch(planet){
            case 'the sun':
                navigate('/sun');
            case 'mercury':
                navigate('/mercury');
            case 'venus':
                navigate('/venus');
            case 'earth':
                navigate('/earth');
            case 'mars':
                navigate('/mars');
            case 'jupiter':
                navigate('/jupiter');
            case 'saturn':
                navigate('/saturn');
            case 'uranus':
                navigate('uranus');
            case 'neptune':
                navigate('neptune');
            default:
                return null;
        }
    }

    function getElementId(planetNumber) {
        switch (planetNumber) {
            case 1:
                return 'the sun';
            case 2:
                return 'mercury';
            case 3:
                return 'venus';
            case 4:
                return 'earth';
            case 5:
                return 'mars';
            case 6:
                return 'jupiter';
            case 7:
                return 'saturn';
            case 8:
                return 'uranus';
            case 9:
                return 'neptune';
            default:
                return null;
        }
    }

    return (
        <main className="solarMain">
            <hr/>
            <section className="solarSection">
                <form>
                    <button id="sun" type="submit" onClick={explore(1)} className="btn btn-outline-light">Sun</button> 
                </form>
                <br/><br/>
                <form>
                    <button id="mercury" type="submit" onClick={explore(2)} className="btn btn-outline-light">Mercury</button> 
                </form>
                <br/><br/>
                <form>
                    <button id="venus" type="submit" onClick={explore(3)} className="btn btn-outline-light">Venus</button> 
                </form>
                <br/><br/>
                <form>
                    <button id="earth" type="submit" onClick={explore(4)} className="btn btn-outline-light">Earth</button> 
                </form>
                <br/><br/>
                <form>
                    <button id="mars" type="submit" onClick={explore(5)} className="btn btn-outline-light">Mars</button> 
                </form>
                <br/><br/>
                <form>
                    <button id="jupiter" type="submit" onClick={explore(6)} className="btn btn-outline-light">Jupiter</button> 
                </form>
                <br/><br/>
                <form>
                    <button id="saturn" type="submit" onClick={explore(7)} className="btn btn-outline-light">Saturn</button> 
                </form>
                <br/><br/>
                <form>
                    <button id="uranus" type="submit" onClick={explore(8)} className="btn btn-outline-light">Uranus</button> 
                </form>
                <br/><br/>
                <form>
                    <button id="neptune" type="submit" onClick={explore(9)} className="btn btn-outline-light">Neptune</button> 
                </form>
                <br/><br/>
                <form id="about">
                    <button type="submit" className="btn btn-light">About</button> 
                </form>
                <br/>
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
            <hr/>
        </main>
    );
}