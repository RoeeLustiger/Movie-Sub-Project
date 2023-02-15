const memberWS = require("../DAL/membersWS_DAL");

// GET - Get All
const getAllmembers = async () => {
  const members = await memberWS.getAllMembers();
  return members.data.map((item) => {
    return {
      Name: item.name,
      Email: item.email,
      City: item.address.city,
    };
  });
};

const addDataCollections = () => {
  getAllmembers().then((ret) => {
    // console.log(ret);
    memberWS.addDataCollections(ret);
    console.log("create member collection");
  });
};

const deleteMembersById = (id) => {
  return memberWS.deleteById(id);
};

const postMember = (obj) => {
  memberWS.AddNewMember(obj);
};

module.exports = {
  getAllmembers,
  addDataCollections,
  deleteMembersById,
  postMember,
};
