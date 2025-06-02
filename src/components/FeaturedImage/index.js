import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Wrapper from "./Wrapper";

const FeaturedImage = ({ image }) => {
  // Works whether `image` is the whole File node or the childImageSharp object
  const img = getImage(image);

  if (!img) return null;

  return (
    <Wrapper>
      <GatsbyImage image={img} alt="" />
    </Wrapper>
  );
};

export default FeaturedImage;
