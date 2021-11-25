import styled from 'styled-components';

export const Wrapper = styled.div `
  padding: var(--large) var(--medium);
`

export const Container = styled.section `
  max-width: var(--container);
  margin: 0 auto;
`

export const Heading = styled.h1 `
  font-size: var(--large);
  margin-bottom: var(--medium);

  @media (max-width: 700px) {
      font-size: 3rem;
  }
`

export const Body = styled.div `
  margin-bottom: var (--large);
  p { 
    margin-bottom: var (--medium);
  }
`

export const Gallery = styled.div `
  display: grid;  
  gap: var(--medium);

  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`