import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillAlert } from 'react-icons/ai';
import { wave } from './ui/styles/keyframes';
import { nanoid } from 'nanoid';
import { PrimaryButton } from './ui/styles/buttons';
import {
  Message,
  MessageFootnote,
  MessageTitle,
  MessageWrapper,
} from './ui/styles/infoBox';

const listOfInstructions = [
  {
    id: nanoid(),
    instruction: 'If you need some inspiration click on SHOW TEMPLATE.',
  },
  {
    id: nanoid(),
    instruction: 'You can add or remove items in each section.',
  },
  {
    id: nanoid(),
    instruction: 'If you want to have a clean start, click on ERASE ALL.',
  },
  {
    id: nanoid(),
    instruction: 'Click on RESET to lose all your info and come back here',
  },
];

export default function Instructions() {
  return (
    <MessageWrapper>
      <MessageTitle big>
        Hello there! <WelcomeEmoji>👋🏽</WelcomeEmoji>
      </MessageTitle>
      <Message>
        {listOfInstructions.map((item) => {
          return <ListItem key={item.id}>{item.instruction}</ListItem>;
        })}
      </Message>
      <Link to="/cv-form">
        <PrimaryButton>Let's get started</PrimaryButton>
      </Link>
      <MessageFootnote>
        <AiFillAlert />
        Built to be seen on desktop screens.
      </MessageFootnote>
    </MessageWrapper>
  );
}

const WelcomeEmoji = styled.span`
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;

const ListItem = styled.li`
  list-style: square;
  padding: 0.3rem;
  margin-left: 2rem;
  font-weight: bold;
  &:hover {
    color: ${(props) => props.theme.colors.tertiary};
  }
`;
