document.querySelector('button').addEventListener('click', () => {
    fetch('https://loginregister-5i1a.onrender.com/)
    .then(response => response.text())
    .then (data => document.querySelector('h1').innerText=data)
    .catch(err => console.log(err))
})