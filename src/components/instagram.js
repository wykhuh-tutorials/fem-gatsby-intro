import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const Instagram = () => {
  const instagramPhotos = useInstagram();
  const { username } = instagramPhotos[0];

  return (
    <>
      <h2>Instagram post from @{username}</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem -0.5rem;
          padding: 0.5rem 0;
        `}
      >
        {instagramPhotos.map(photo => (
          <a
            key={photo.id}
            href={`https://instagram.com/p/${photo.id}/`}
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: calc(33% - 1rem);
              width: 120px;
              transition: 200ms box-shadow linear;

              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              css={css`
                width: 100%;
                * {
                  margin-top: 0;
                }
              `}
              fluid={photo.fluid}
              alt={photo.caption}
            />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/${username}`}>@gatsbyjs</a>
    </>
  );
};

export default Instagram;
