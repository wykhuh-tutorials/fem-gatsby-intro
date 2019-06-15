import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
  // set initial value to zero
  const [waves, setWaves] = useState(0);
  const label = ` ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button
      css={css`
        background: purple;
        border: none;
        color: white;
        font-size: 1.25rem;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
};

export default Wave;
