import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import Cursor from '../Cursor'
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Header({ config }) {
  const { author, description, social, whoami, cursor } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H1>{author}</H1>
        <P>{description} <Link to="/whoami">{whoami}</Link><Cursor>{cursor}</Cursor></P>
        
        
        {social &&
          <Social
            malapi={social.malapi}
            github={social.github}
            twitter={social.twitter}
          />
        }
      </Wrapper>
    </Container> 
  );
}

export default Header;