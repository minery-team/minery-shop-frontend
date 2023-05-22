import styled from '@emotion/styled';
import React from 'react';
import Router from 'next/router';

export function Profile() {
  return (
    <React.Fragment>
      <Container onClick={() => Router.push('/my')}>
        {/* <ProfileImage size={35} /> */}
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  cursor: pointer;
  transition: all 200ms;
  &:hover {
    opacity: 0.7;
  }
`;
