import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

export default function FollowSuggestion({ name, nickname }) {
  return (
    <Container>
      <div>
        <Avatar>
          <img src={require('../../assets/avatar.png')} alt="Avatar" />
        </Avatar>

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Follow</FollowButton>
    </Container>
  );
};

