const groups = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_GROUPS':
            return action.payload;
        default:
            return state;
    }
}

export default groups;