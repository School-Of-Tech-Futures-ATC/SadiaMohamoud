const fetch = require('node-fetch')

fetch('https://regres.in/api/users?page=2')
    .then(response => respoonse.json())
    .then(data => console.log(data))