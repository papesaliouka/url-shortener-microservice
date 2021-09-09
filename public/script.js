const form = document.querySelector('form');
const input = document.getElementById('url_input')

function handleSubmit(){
    event.preventDefault();
    (async () => {
        const rawResponse = await fetch('https://url-shortener-microservice.pskath1.repl.co/api/shorturl', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({url: input.value})
        });
      })();
      
}

form.addEventListener('submit', handleSubmit)