const PermissionsWS = require("../DAL/PermissionsWS_DAL");
const getPermissionsData = async (id) => {
  //from file
  return await PermissionsWS.getPermissions();
  // const perm = permissions.find((item) => item.id === id);
  // return {
  //   id,
  //   permission: perm.permission,
  // };
};

const getAllPermissions = async () => {
  const permissions = await PermissionsWS.getPermissions();
  return permissions.map((item) => {
   
    return {
      permission: item.permission,
      id: item.id
    }
  })
}

const addDataCollections = () => {
  getAllPermissions().then(ret => {
    // console.log(ret);
    PermissionsWS.addDataCollections(ret);
    console.log('create Permissions collection');

  })
}
module.exports = { addDataCollections, getPermissionsData, getAllPermissions };
