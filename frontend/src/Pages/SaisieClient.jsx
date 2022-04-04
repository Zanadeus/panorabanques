import { useState } from "react";
import { useForm } from "react-hook-form";
import { getAdress } from "../API/adress";
import { createClientFunction } from "../API/clients"

function SaisieClient() {

  //Fonctionnement du formulaire
  const 
  {
    register, 
    handleSubmit, 
    formState: {errors} 
  } = useForm();

  //fonction censée ajouter l'adresse suggérée dans le champ du formulaire
  function insertChosenSuggestedAdress(newAdress){
    alert(`C'est à ce moment que l'adresse ${newAdress} doit s'intégrer dans le champ du formulaire`)
  }
  //récupération de l'adresse recherchée + récupération des adresses suggérées
  const [typedAdress, setTypedAdress] = useState('');
  const [suggestedAdress, setSuggestedAdress] = useState([])

  const getTypedAdress = (typedAdress) => {
    setTypedAdress(typedAdress);//On récupère l'adresse entrée par l'utilisateur

    //on transforme l'adresse pour être utilisée dans fetch
    const splittedAdress = typedAdress.split(" ");
    const fetchAdress = splittedAdress.join("+");
    //console.log(fetchAdress);
    //Appel API pour obtenir les suggestions d'adresses
    getAdress(fetchAdress)
    .then((response) => {
      setSuggestedAdress(response.features);
    })
  }
  //console.log(suggestedAdress);

  return (
    <main>
      <h1>Saisir un nouveau client</h1>
      <section>
      <article>
          <h2>Veuillez rentrer les informations ci-dessous</h2>
          <form id="submitForm" onSubmit={handleSubmit((data) => {
            console.log("datas trying to be submitted");
            console.log(data);
            createClientFunction(data)
            .then(response => console.log(response));
            alert("un nouveau profil a été créé");
          })}>
            <div>
              <label htmlFor="lastName">nom: </label><br/>
              <input type="string" {...register("lastName", 
              { 
                required: "Ce champ est requis"
              })} 
              placeholder='nom' />
              <p>{errors.lastName?.message}</p>
            </div>
            <div>
              <label htmlFor="firstName">prénom: </label><br/>
              <input type="string" {...register("firstName", 
              { 
                required: "Ce champ est requis"
              })} 
              placeholder='prénom' />
              <p>{errors.firstName?.message}</p>
            </div>
            <div>
              <label htmlFor="birthDate">date de naissance: </label><br/>
              <input type="string" {...register("birthDate", 
              { 
                required: "Ce champ est requis"
              })} 
              placeholder='JJ/MM/AAAA' />
              <p>{errors.birthDate?.message}</p>
            </div>
            <div >
              <label htmlFor="email">mail: </label><br/>
              <input type="email" {...register("email", 
              { required: "Ce champ est requis" })} 
              placeholder='aaa@exemple.com' />
              <p>{errors.email?.message}</p>
            </div>
            <div >
              <label htmlFor="adress">adresse: </label><br/>
              <textarea type="text" {...register("adress", 
              { 
                required: "Ce champ est requis"
              })} 
              placeholder='55 Rue du Faubourg Saint-Honoré, 75008 Paris' 
              onChange={e => getTypedAdress(e.target.value)}
              value={typedAdress}
              />
              <p>{errors.adress?.message}</p>
            </div>
            <div>
              {
                suggestedAdress.map((item, index) => (
                  <p key={index} onClick={() => insertChosenSuggestedAdress(item.properties.label)}>
                    {item.properties.label}
                    </p>
                ))
              }
            </div>
            <div >
              <button type="submit" className="button">
                Ajouter
              </button>
            </div>
          </form>
        </article>
      </section>
    </main>
  )
}

export default SaisieClient