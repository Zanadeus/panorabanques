module.exports = (sequelize, Sequelize) => {
  const ProfileModel = sequelize.define("profiles", {
    profileId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    lastName: { type: Sequelize.STRING, required: true},
    firstName: { type: Sequelize.STRING, required: true},
    birthDate: { type: Sequelize.STRING, required: true},
    email: { type: Sequelize.STRING, required: true, unique: true},
    adress: { type: Sequelize.STRING, required: true}
  });
  return ProfileModel;
};