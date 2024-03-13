window.onload = async function(data){
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            const container = document.querySelector('#quote');
            const info = document.createElement('p');
            const author = document.createElement('p');

            info.classList.add('quote');
            author.classList.add('author');

            info.textContent = data.content;
            author.textContent = data.author;

            container.append(info);
            container.append(author);
        }
    )
}