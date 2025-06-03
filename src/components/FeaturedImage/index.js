import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Wrapper from "./Wrapper";

const FeaturedImage = ({ image }) => {
  // Works whether `image` is the whole File node or the childImageSharp object
  const img = getImage(image);

  if (!img) return null;

  return (
    <Wrapper>
      <GatsbyImage
        image={img}
        alt=""
        loading="eager"            // start download immediately
        backgroundColor="#f0f0f0"  // fill with a solid block until the PNG/WebP/AVIF arrives
      />
    </Wrapper>
  );
};

export default FeaturedImage;
