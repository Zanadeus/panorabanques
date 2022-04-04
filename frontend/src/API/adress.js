export async function getAdress(fetchAdress) {
  return fetch(`https://api-adresse.data.gouv.fr/search/?q=${fetchAdress}`, {
    method: "GET",
    headers: 
    {
      'Content-Type': 'application/json',
    },
  })
    .then(data => data.json())
}