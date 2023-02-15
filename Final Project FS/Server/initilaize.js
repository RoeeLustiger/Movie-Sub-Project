const members = require('./BLL/membersWS_BLL');
// const movies = require('./BLL/moviesWS');
const users = require('./BLL/usersWS_BLL');
const permissions = require('./BLL/permissionsWS_BLL');
const services = require('./BLL/services');
const movies = require('./BLL/moviesWS_BLL')
const subscriopsions = require('./BLL/subscriopsionsWS_BLL')



const init = async () => {
    await services.removeAllCollections();
    members.addDataCollections();
    permissions.addDataCollections();
    users.addDataCollections();
    movies.addDataCollections();
    subscriopsions.addDataCollections();

    // movies.getALLMovies().then(ret => {
    //   db.addCollection('movies',ret.data)
    // })

    // userslogin.getuserslogin().then(ret => console.log(ret))

}

module.exports = { init };
