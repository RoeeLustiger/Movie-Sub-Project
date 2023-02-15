const members = require("../DAL/membersWS_DAL");
const users = require("../DAL/usersWS_DAL");
const permissions = require("../DAL/PermissionsWS_DAL");
const movies = require('../DAL/moviesWS_DAL');
const subscriopsions = require('../DAL/subscriopsionsWS_DAL')



const removeAllCollections = async () => {
    await members.removeDataCollection();
    await permissions.removeDataCollection();
    await users.removeDataCollection();
    await movies.removeDataCollection();
    await subscriopsions.removeDataCollection();
    console.log('removeAllCollections');
}

module.exports = { removeAllCollections };
