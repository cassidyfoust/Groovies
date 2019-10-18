const userPreferencesForGroup = (state = [], action) => {
    switch (action.type) {
        case 'USER_PREFERENCES_FOR_GROUP':
            let genresIn = action.payload;
            genresIn.forEach(genre => {
                let matches = 0
                state.forEach(stateGenre => {
                    if (stateGenre.genre_name == genre.genre_name && stateGenre.like == genre.like){
                        matches += 1
                    }
                })
                if (matches == 0){
                    state.push(genre)
                }
            });
            console.log(state)
            return state;
        default:
            return state;
    }
}

export default userPreferencesForGroup;