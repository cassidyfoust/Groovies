const groupDetails = (state = {details:[], admin:0, name: ''}, action) => {
    switch (action.type) {
        case 'SET_GROUP_DETAILS':
            return {details: action.payload,
                    admin: action.payload[0].admin,
                    name: action.payload[0].group_name};
        default:
            return state;
    }
}

export default groupDetails;