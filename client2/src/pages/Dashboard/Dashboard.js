import React from 'react';
import Sitting from '../../assets/Sitting1.png';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header/Header';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: '5vh 5vw',
    backgroundColor: '#f2fbfde6',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  heading: {
    fontWeight: '700 !important',
    marginBottom: 30,
    textAlign: 'center',
  },
  subHeading: {
    fontWeight: '700 !important',
    marginBottom: 7,
    textAlign: 'center',
  },
  card: {
    position: 'relative',
    '& img': {
      width: '100%',
      objectFit: 'fill',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    opacity: 0,
    transition: '.5s ease',
    // backgroundColor: '#008CBA',
    padding: 12,
    boxSizing: 'border-box',
    '&:hover': {
      opacity: 0.8,
    },
  },
}));

const Dashboard = () => {
  // initializing classes
  const { root, heading, subHeading, card, overlay } = useStyles();

  return (
    <Grid container className={root}>
      {/* <Header /> */}
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <h1 className={heading}>Media</h1>
      </Grid>
      <Grid item xs>
        <Grid container spacing={3}>
          {[...Array(8).keys()].map((entry, idx) => (
            <Grid key={idx} item xs={12} md={4} lg={3} className={card}>
              <img src={Sitting} alt="..." />
              <div class={overlay}>
                <Grid
                  container
                  style={{
                    backgroundColor: '#8c8cd8',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '1rem',
                  }}
                >
                  <h3 className={subHeading}>Title</h3>
                  <p style={{ textAlign: 'justify', textJustify: 'inner-word' }}>
                    um is that it has a more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like readable
                  </p>
                </Grid>
              </div>
            </Grid>
          ))}
          {/* <Grid item xs={12} md={4} lg={3} className={card}>
            <img src={Sitting} alt="..." />
          </Grid>
          <Grid item xs={12} md={4} lg={3} className={card}>
            <img src={Sitting} alt="..." />
          </Grid>
          <Grid item xs={12} md={4} lg={3} className={card}>
            <img src={Sitting} alt="..." />
          </Grid>
          <Grid item xs={12} md={4} lg={3} className={card}>
            <img src={Sitting} alt="..." />
          </Grid>
          <Grid item xs={12} md={4} lg={3} className={card}>
            <img src={Sitting} alt="..." />
          </Grid>
          <Grid item xs={12} md={4} lg={3} className={card}>
            <img src={Sitting} alt="..." />
          </Grid>
          <Grid item xs={12} md={4} lg={3} className={card}>
            <img src={Sitting} alt="..." />
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
