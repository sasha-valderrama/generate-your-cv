import React from 'react';
import styled from '@emotion/styled';
import { centerContent } from './ui/styles/utilities';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <HomeStyled>
        <Outlet />
      </HomeStyled>
    </>
  );
}

const HomeStyled = styled.div`
  position: relative;
  ${centerContent};
  padding-top: min(4rem, 10vh);
  padding-bottom: 2rem;
  min-height: calc(100vh - 13rem);
  align-items: flex-start;
  color: ${(props) => props.theme.colors.quaternary};
  background-color: ${(props) => props.theme.colors.neutral};
`;
