const groupPreferences = (state = [], action) => {
    switch (action.type) {
        case 'SET_PAGE_GROUP_PREFERENCES':
            return action.payload;
        default:
            return state;
    }
}

export default groupPreferences;