import React from 'react';
import { Grid } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: 50,
    borderBottom: '2px solid #d9e2e4e6',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subHeading: {
    fontWeight: '700 !important',
    textAlign: 'center',
    margin: 0,
  },
}));

const Header = () => {
  // initializing classes
  const { root, subHeading } = useStyles();

  return (
    <Grid className={root} container>
      <p className={subHeading}>Zain Ali</p>
      <Person />
    </Grid>
  );
};

export default Header;
