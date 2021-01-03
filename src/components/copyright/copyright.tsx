import React, { FC } from 'react';
import { Link, Typography } from '@material-ui/core';

const Copyright: FC = () => {
  return (
    <>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href='/'>
          The Arborway Committee for Public Transit, Inc.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      <Typography variant='body2' color='textSecondary' align='center'>
        A 501(c)(3) Organization
      </Typography>
    </>
  );
};

export { Copyright };
