import React from "react";

export function About(){
    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

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
        <main>
            <img src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2013/05/17/1331591151559_2/felix-baumgartner-capsule-jump" width="100%"></img>
                <br/><br/>
                <p>Expedition Extraterrestrial is a new application that displays </p>
                <p>our solar system for an interactive learning experience.</p>
                <br/>
                <p id="quote">{quote}</p>
        </main>
    );
}