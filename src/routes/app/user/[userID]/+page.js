export async function load( { params }) {
    const response = await fetch(`https://reqres.in/api/users/${params.userID}`)
    const data = await response.json();
    return(data.data)
}