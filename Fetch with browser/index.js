async function retrieveData() {
    const response = await fetch('https://regres.in/api/users?page=2')
    const data = await response.json();
    console.log(err)
}
retrieveData
