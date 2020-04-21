import React from 'react';
// import styled from 'styled-components';
import { StyledH1, Subheading, SubheadingMobile, Social, HeaderContainer, PageHeader } from './styles';

function Header() {
    return (
      <PageHeader>
        <HeaderContainer>
          <StyledH1>Vish Singh</StyledH1>
          <Subheading className='Subheading'>FRONT-END WEB DEVELOPER / FULL-STACK INTERLOPER</Subheading>
          <div className='mobileHeading'>
              <SubheadingMobile className='SubheadingMobile'>FRONT-END WEB DEVELOPER /</SubheadingMobile>
              <SubheadingMobile className='SubheadingMobile'>FULL-STACK INTERLOPER</SubheadingMobile>
          </div>
          <Social>
              <a href="https://www.linkedin.com/in/vish213/" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/vishalicious213" title="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://neophyte.home.blog/" title="Wordpress"><i className="fab fa-wordpress"></i></a>
              <a href="https://twitter.com/vishalicious213" title="Twitter"><i className="fab fa-twitter"></i></a>
              {/* <a href="https://www.facebook.com/vish213" title="Facebook"><i className="fab fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/vishalicious213/" title="Instagram"><i className="fab fa-instagram"></i></a> */}
              <a href="mailto:vishalicious213@gmail.com" title="Gmail"><i className="fas fa-envelope"></i></a>
          </Social>
        </HeaderContainer>
      </PageHeader>
    );
  }
  
  export default Header;