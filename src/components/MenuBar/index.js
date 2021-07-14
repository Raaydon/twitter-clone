import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ListIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

export default function MenuBar() {
  return (
    <Container>
      <Topside>
          <Logo />
          <MenuButton>
            <NavLink to="/">
              <HomeIcon />
              <span className="navText">Home</span>
            </NavLink>
          </MenuButton>

          <MenuButton>
            <NavLink to="/explore">
            <ExploreIcon />
            <span className="navText">Explore</span>
            </NavLink>
          </MenuButton>

          <MenuButton>
            <NavLink to="/notifications">
            <BellIcon />
            <span className="navText">Notfications</span>
            </NavLink>
          </MenuButton>

          <MenuButton>
            <NavLink to="/messages">
            <EmailIcon />
            <span className="navText">Messages</span>
            </NavLink>
          </MenuButton>

          <MenuButton>
            <NavLink to="/bookmarks">
            <FavoriteIcon />
            <span className="navText">Bookmarks</span>
            </NavLink>
          </MenuButton>

          <MenuButton>
            <NavLink to="/lists">
            <ListIcon />
            <span className="navText">Lists</span>
            </NavLink>
          </MenuButton>

          <MenuButton>
            <NavLink to="/profile">
            <ProfileIcon />
            <span className="navText">Profile</span>
            </NavLink>
          </MenuButton>
          <Button>
            <span className="navText">Tweet</span>
          </Button>


      </Topside>

      <Botside>
        <Avatar>
          <img
            src="https://avatars1.githubusercontent.com/u/53025782?s=400&u=f1ffa8eaccb8545222b7c642532161f11e74a03d&v=4"
            alt="Elton Lazzarin"
          />
        </Avatar>

        <ProfileData>
          <strong>Elton Lazzarin</strong>
          <span>@elton_lazzarin</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

