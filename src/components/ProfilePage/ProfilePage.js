import React from 'react';
import './ProfilePage.css';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { flexbox } from '@material-ui/system';
import AddIcon from '@material-ui/icons/Add';

const MyCard = styled(Card)({
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    height: 32,
    width: 90,
    paddingLeft: 7,
    paddingTop: 5,
    margin: 5,
    fontSize: 12,
    display: flexbox,
    textAlign: "center"
});

const MyDelete = styled(DeleteIcon)({
    padding: 0,
    margin: 0,
    height: 30,
})

const NewIconBtn = styled(IconButton)({
    padding: 0,
    margin: 0
})

const ProfilePage = () => (
    <div>
        <h1>
            Your Preferences:
    </h1>
    <p>You Like:</p>
        <div className="prefs">
        <MyCard>
            Genre One
                <NewIconBtn>
                    <MyDelete/>
                </NewIconBtn>
        </MyCard>
        <MyCard>
            Genre Two
                <NewIconBtn>
                    <MyDelete />
                </NewIconBtn>
        </MyCard>
            <MyCard>
                Genre Three
                <NewIconBtn>
                    <MyDelete />
                </NewIconBtn>
            </MyCard>
            <MyCard>
                <NewIconBtn>
                    <AddIcon />
                </NewIconBtn>
            </MyCard>
        </div>
    <p>You Dislike:</p>
        <div className="prefs">
            <MyCard>
                Genre One
                <NewIconBtn>
                    <MyDelete />
                </NewIconBtn>
            </MyCard>
            <MyCard>
                Genre Two
                <NewIconBtn>
                    <MyDelete/>
                </NewIconBtn>
            </MyCard>
            <MyCard>
                Genre Three
                <NewIconBtn>
                    <MyDelete />
                </NewIconBtn>
            </MyCard>
            <MyCard>
                <NewIconBtn>
                    <AddIcon/>
                </NewIconBtn>
            </MyCard>
        </div>
    <p>You Watched:</p>
    Someday there will be a carousel here
    </div>
);

export default ProfilePage;
