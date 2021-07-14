import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import ProfilePage from '../../components/ProfilePage';
import db from '../../firebase';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

export default function Profile() {
  let user = firebase.auth().currentUser;
  var userEmail = user.email;
  var userData = db.collection('users').doc(userEmail).get();

  async function getUserInfo() {
    let usersdb = await db.collection('users')
      .get()
      .then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => doc.data());
      })
      console.log(usersdb)
  }
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>username</strong>
          <span>{} Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}
