import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import userConfig from '../../../config';

const Link = styled(GatsbyLink)`
  color: #222222;
  text-decoration: none;

  &:hover {
    color: ${userConfig.primaryColor};
  }
`;

export default Link;
