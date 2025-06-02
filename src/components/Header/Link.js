import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import userConfig from '../../../config';

const Link = styled(GatsbyLink)`
  color: ${userConfig.primaryColor};
  text-decoration: none;
`;

export default Link;
