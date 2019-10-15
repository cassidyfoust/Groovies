import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const ProfilePage = () => (
    <div>
        <h1>
            Your Preferences:
    </h1>
    <p>You Like:</p>
    <p>You Dislike:</p>
    <p>You've Watched:</p>
    </div>
);

export default ProfilePage;
