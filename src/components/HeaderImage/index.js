import React from 'react';
import { Link } from 'gatsby';

import Wrapper from './Wrapper';
import imgSrc from '../../main.png';

function HeaderImage() {
  return (
    <Wrapper>
      <Link to="/">
        <img src={imgSrc} alt="" />
      </Link>
    </Wrapper>
  );
}

export default HeaderImage;
