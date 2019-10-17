const groupDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_GROUP_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

export default groupDetails;