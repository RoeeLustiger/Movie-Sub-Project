  const initialValue = {
    userid: 0,
    permissions : []
  };
  
  const applyUser = (state = initialValue, action) => {
    switch (action.type) {
      case 'ADDUSER':
        return { ...state, userid: action.payload.userid };
      case 'ADDPERMISSIONS':
        return { ...state, permissions: action.payload.permissions };
      default:
        return state;
    }
  };
  
  export default applyUser;