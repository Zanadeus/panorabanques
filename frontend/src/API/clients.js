export async function createClientFunction(item) {
  return fetch('http://localhost:8080/api/profile/', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({ item })
   })
   .then(data => data.json())
  }

  export async function getClientListFunction() {
    return fetch('http://localhost:8080/api/profile/', {
      method: "GET",
      headers: 
      {
        'Content-Type': 'application/json',
      },
    })
      .then(data => data.json())
  }