import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

//  background-size: cover; make image width same as container width
const ImageBackground = styled('div')`
  background-image: url('/images/sterling-davis-la.jpg');
  background-position: top 40% center;
  background-size: cover;
  height: 50vh;

  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`;

// linear-gradient: fade from high opacity at top, to zero opacity 2rem from bottom
const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <ImageBackground>
      <TextBox>
        <h1>Gatsby Workshop</h1>
        <p>Hello <Link to="/about">Learn more</Link></p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero;
