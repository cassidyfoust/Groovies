const userGenresReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_GENRES':
            return action.payload;
        default:
            return state;
    }
}

export default userGenresReducer;