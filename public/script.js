const form = document.querySelector('form');
const input = document.getElementById('url_input')

function handleSubmit(){
    event.preventDefault();
    (async () => {
        const rawResponse = await fetch('http://localhost:3000/api/shorturl', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({originalUrl: input.value})
        });
      })();
      
}

form.addEventListener('submit', handleSubmit)