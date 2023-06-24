import styled from '@emotion/styled';

export function HeroSection() {
  return (
    <Container>
      <StyledVideo autoPlay muted loop playsInline>
        <source src="/assets/hero.mp4" type="video/mp4" />
      </StyledVideo>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const StyledVideo = styled.video`
  width: 100%;
`;
