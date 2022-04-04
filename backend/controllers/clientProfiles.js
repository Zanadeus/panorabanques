//Fonctionnement du code
const db = require("../models/index");
const Profile = db.profiles;

exports.createOneProfile = (req, res, next) => {
  const newProfile = 
  {
    lastName: req.body.item.lastName,
    firstName: req.body.item.firstName,
    birthDate: req.body.item.birthDate,
    email: req.body.item.email,
    adress: req.body.item.adress,
  };
  Profile.create(newProfile)
  .then(() => res.status(201).json({ message: 'Nouveau profil enregistré !'}))
  .catch(error => res.status(400).json({ message: error }));
};

exports.getAllProfiles = (req, res, next) => {
  Profile.findAll(
    {
      order: [['profileId', 'DESC']] 
    },
  )
  .then(
    (allProfiles) => {
      res.status(200).json(allProfiles);
    }
  )
  .catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.deleteOneProfile = (req, res, next) => {
  Profile.destroy({where: {email: req.params.email}})
  .then(() => res.status(200).json({ message: `Fichier client supprimé !` }))
  .catch(error => res.status(400).json({ error }));
};