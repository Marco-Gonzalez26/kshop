import css from 'styled-jsx/css'
import { fonts, colors, breakPoints } from '../../styles/theme'
import { addOpacity } from '../../styles/utils'

const backgroundColor = addOpacity(colors.primary, 0.3)

export const globalStyles = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }
`

export default css`
  .app__container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }
  main {
    background: #fff;
    border: 1px solid #f2f2f2;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow-y: auto;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    z-index: 9999;
  }
  @media (min-width: ${breakPoints.mobile}) {
    main {
      width: ${breakPoints.mobile};
      height: 100vh;
    }
  }
  section {
    background-color: #f0f0f0;
    height: 100vh;
    width:50%;
    display: grid;
    place-items: center;
  }

  a {
    width: 50%;
    padding: 0.75em;
    color: #fff;
    text-decoration: none;
    border-radius: 2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
  .tiktok {
    background-color: #000;
  }
  .facebook {
    background-color: #4267b2;
  }
  .instagram {
    background: #f09433;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
  
  }

  a > :global(svg) {
    font-size: 1.75rem;
    margin-right: 0.5rem;
  }
  @media (max-width: 1200px) {
    section {
      display: none;
    }
  }

  img {
    border-radius: 1rem;
  }
`
