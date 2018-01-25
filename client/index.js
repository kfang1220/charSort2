//select our form and give it an action
document.querySelector('#charSort').addEventListener('sort', event => {
   event.preventDefault();

   let userInput = document.querySelector('input[name=str]');
   //let userResponse = document.querySelector('input[name=result]')

   //should use axios but trying fetch, directly off develop.moz for reference

   fetch('/', {
     method: 'POST',
     body: JSON.stringify({input: userInput}),
     headers: new Headers({
      'Content-Type': 'application/json'
     })
   })
   .then(res => res.json())
   .catch(error => console.error('Error:', error))
   .then(res => {userResponse.value = res.body)};
})
