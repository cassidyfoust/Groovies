const groupMoviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GROUP_MOVIES':
            return action.payload;
        default:
            return state;
    }
};

export default groupMoviesReducer;