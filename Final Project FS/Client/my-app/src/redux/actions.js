const addUser = (id) => {
    return {
      type: 'ADDUSER',
      payload: {userid: id},
    };
  };
  
const addpermissions = (permissions) => {
    return {
      type: 'ADDPERMISSIONS',
      payload: {permissions},
    };
  };
  
  export { addUser,addpermissions };