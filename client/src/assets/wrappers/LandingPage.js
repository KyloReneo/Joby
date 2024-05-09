import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(40vh - var(--nav-height));
    margin-top: -3rem;
    display: grid;
    align-items: center;
  }

  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
  }

  p {
    color: var(--grey-600);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
  }

  a {
    max-width: 11.5rem;
    height: 2.5rem;
    display: flex;
    margin-left: 28rem;
  }

  .img {
    max-width: 850px;
    display: flex;
    margin: 0 auto;
  }

  .main-img {
    display: none;
  }
  @media (min-width: 700px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      justify-content: center;
    }
  }
`;
export default Wrapper;
