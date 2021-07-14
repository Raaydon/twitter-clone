import React from 'react';
import HomePage from '../../components/HomePage'

import {
  Container,
  Header,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <ProfileInfo>
          <strong>Home</strong>
        </ProfileInfo>
      </Header>

      <HomePage />

      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};
