import React from "react";
import { useNavigate } from "react-router";

export function About(){
    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
    const navigate = useNavigate();
    
    function goBack(){
        navigate('/solar');
    }

    React.useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            setQuote(data.content);
            setQuoteAuthor(data.author);
        })
        .catch();
    }, []);

    return (
        <main className="about">
            <form>
                <button type="submit" className="btn btn-outline-light" onClick={goBack}>Back to Exploration!</button>
            </form>
            <img id="felix" src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2013/05/17/1331591151559_2/felix-baumgartner-capsule-jump"></img>
            <br/><br/>
            <p>Expedition Extraterrestrial is a new application that displays </p>
            <p>our solar system for an interactive learning experience.</p>
            <br/>
            <p id="quote">{quote}</p>
            <p id="author">{quoteAuthor}</p>
        </main>
    );
}