import { useState, useEffect} from "react";
import { getClientListFunction } from "../API/clients";

function AfficherClient() {
  const [clientList, setClientList] = useState([]);
  const [loading, setLoading] = useState(true);
  //let pageId = window.location.href.split("post/").pop();
  useEffect(() => {
    getClientListFunction()
    .then((response) => {
      setClientList(response);
      setLoading(false);
    })
  }, [])
  console.log(clientList);

  return (
    <main id="feed"> 
      {//SI la page est en cours de chargement :
      }
      { loading?(<>
        <h1>CHARGEMENT EN COURS</h1>
        <section>
          <p>CHARGEMENT EN COURS</p>
        </section>
      </>):(<>
      {//Lorsque la page est chargée
      }
        <h1>Liste de clients enregistrés</h1>
        <section>
          {
            clientList.map((client) =>
            (
              <article key={client.profileId}>
                <h2>Informations du profil de {client.lastName} {client.firstName}</h2>
                <p>prenom : {client.lastName}</p>
                <p>nom : {client.firstName}</p>
                <p>date de naissance : {client.birthDate}</p>
                <p>email : {client.email}</p>
                <p>adresse : {client.adress}</p>
              </article>
            )
          )}
        </section>
      </>) }
    </main>
  )
}

export default AfficherClient