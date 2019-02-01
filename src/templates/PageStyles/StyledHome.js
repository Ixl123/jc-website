import styled from 'styled-components';
import DarkHeaderBG from './homebg.jpg';
import WhiteHeaderBG from './whiteHomeBg.jpg';
import DarkHeaderBGWebP from './homebg.webp';
import WhiteHeaderBGWebP from './whiteHomeBg.webp';
import { zIndexLogo } from '../../components/Styles/zIndex';

import theme from 'styled-theming';

export const StyledLogo = styled.svg`
  position: ${props => (props.scrollPositionY > 0 ? 'fixed' : 'static')};
  top: -325px;
  left: -200px;
  align-self: flex-start;
  z-index: ${zIndexLogo};
  height: 80rem;
  width: 60rem;
  margin-left: 6rem;
  transition: all 0.25s ease-out 0s;
  transform: ${props =>
    props.scrollPositionY > 0 ? 'scale(0.2)' : 'scale(1.0)'};

  ${props => props.theme.small} {
    display: none;
  }
  ${props => props.theme.medium} {
    display: none;
  }
  ${props => props.theme.large} {
    height: 60rem;
    width: 40rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  height: 1028px;
  height: 80vh;
`;

const InformationTextShadow = theme('mode', {
  light: '3px 3px 0 rgba(0, 0, 0, 0.2)',
  dark: '3px 3px 0 rgba(255, 255, 255, 0.2)',
});

export const Information = styled.div`
  position: absolute;
  top: 25rem;
  left: 30rem;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-right: 6rem;
  text-shadow: ${InformationTextShadow};


  ${props => props.theme.small} {
    position: initial;
    padding-top: 18rem;
    padding-bottom: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
   
  }
  ${props => props.theme.medium} {
    position: initial;
    padding-top: 25rem;
    padding-bottom: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
  
  }
  ${props => props.theme.large} {
    padding-top: 10rem;
    padding-bottom: 10rem;
    top: 8rem;
    left: 25rem;
  }

  h1 {
    font-size: 5rem;
    transition: color ${props => props.theme.themeTransition};
    ${props => props.theme.small} {
      font-size: 4rem;
    }
    ${props => props.theme.medium} {
      font-size: 4rem;
    }
    ${props => props.theme.large} {
      font-size: 4rem;
    }
    span {
      font-size: 5rem;
      text-shadow: none;
    }
  }

  span {
    font-size: 2rem;
    /* color: ${props => props.theme.colors.secondary}; */
    font-weight: 800;
    ${props => props.theme.small} {
      font-size: 1.5rem;
    }
    ${props => props.theme.medium} {
      font-size: 1.5rem;
    }
    ${props => props.theme.large} {
      font-size: 1.5rem;
    }
  }
`;

const themedHeaderBG = theme('mode', {
  light: WhiteHeaderBG,
  dark: DarkHeaderBG,
});

export const HeaderBG = styled.header`
  /* Full height */
  display: flex;
  flex-direction: column;
  @supports (display: grid) {
    background: url(${DarkHeaderBGWebP}) no-repeat center right fixed;
  }
  @supports not (display: grid) {
    background: url(${themedHeaderBG}) no-repeat center right fixed;
  }
  background-size: auto;
  background-repeat: no-repeat;
  height: 1024px;
  height: 100vh;
  width: 100%;
  ${props => props.theme.medium} {
    height: 600px;
    height: 100vh;
    background: url(${DarkHeaderBGWebP}) no-repeat center center fixed;
  }
  ${props => props.theme.large} {
    height: 800px;
    height: 100vh;
    background: url(${DarkHeaderBGWebP}) no-repeat center center fixed;
  }
`;

export const StyledName = styled.span`
  font-size: 1.5rem;
  padding: 20px;
  font-style: italic;
  display: flex;
  justify-content: center;
`;
