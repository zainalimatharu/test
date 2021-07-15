import React, { useState } from 'react';
import Sitting1 from '../../assets/Sitting1.png';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// apply custom styles to material-ui components
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#8c8cd8',
    padding: '5vh 5vw',
    minHeight: '100vh',
  },
  content: {
    backgroundColor: '#f2fbfde6',
    height: '100%',
    borderRadius: 10,
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
  },
  form: {
    // height: '100%',
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: '10px 0 0 10px',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      borderRadius: '10px',
    },
  },
  image: {
    height: '100%',
    borderRadius: '0 10px 10px 0',
    alignItems: 'flex-end',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      display: 'none',
    },
    '& img': {
      width: '100%',
      objectFit: 'fill',
    },
  },
  formWrapper: {
    // flexDirection: 'column',
    alignItems: 'baseline',
  },
  input: {
    width: 'calc(100% - 30px)',
    height: 35,
    border: '1px solid #d8e5f2',
    outline: 'none',
    padding: '0 15px',
    borderRadius: 7,
  },
  inputGroup: {
    marginBottom: '15px',
    '& p': {
      textAlign: 'left',
      margin: '0 0 7px 0',
      fontWeight: 'bold',
      fontSize: '0.8rem',
    },
  },
  welcome: {
    fontWeight: '700 !important',
    marginBottom: 30,
  },
}));

const Login = () => {
  // intializing classes
  const { root, content, form, image, formWrapper, input, inputGroup, welcome } = useStyles();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Grid container className={root}>
      <Grid item xs={12} container className={content}>
        <Grid item xs={12} md={6} container className={form}>
          <Grid item xs={11} md={9} container className={formWrapper}>
            <Grid item xs={12} className={welcome}>
              <h1>Welcome!</h1>
            </Grid>
            <Grid item xs={12} className={inputGroup}>
              <p>Email Adrress</p>
              <input
                type="text"
                className={input}
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} className={inputGroup}>
              <p>Password</p>
              <input
                type="password"
                className={input}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={onChange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} container className={image}>
          <img src={Sitting1} alt="..." />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
