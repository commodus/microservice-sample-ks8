import "./registration.scss";

import React, { useState } from "react";
import { handleUserChange, registerUser } from "../actions/register-actions";

import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import config from "../config";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Erman
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Registration = (props) => {
  const classes = useStyles();
  const [isForwarded, SetIsForwarded] = useState(false);
  const handleSubmit = () => {
    props.register(props.user);
  };

  const handleLinkSignIn = () => {
    window.location.href = config.DataView_Frontend_Url_Base;
  };

  const internalHandleChange = (event) => {
    const user = { ...props.user };

    switch (event.target.name) {
      case "name":
        user.name = event.target.value;
        break;
      case "age":
        user.age = event.target.value;
        break;
      case "score":
        user.score = event.target.value;
        break;
      case "password":
        user.password = event.target.value;
        break;
    }

    props.handleChange(user);
  };

  if (isForwarded) {
    // redirect
    window.location.href = config.DataView_Frontend_Url_Base;
  }

  if (props.registrationOK) {
    setTimeout(() => {
      SetIsForwarded(true);
    }, 3000);
    return (
      <div className="registration-main">
        <label className="registration-forwarding">
          Registration Succeded. You are forwarding to login...
        </label>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                value={props.user.name}
                onChange={internalHandleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={props.user.password}
                onChange={internalHandleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                value={props.user.age}
                onChange={internalHandleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="score"
                label="Score"
                name="score"
                value={props.user.score}
                onChange={internalHandleChange}
              />
            </Grid>
            {props.errorMessage && (
              <Grid item xs={12}>
                <label className="registration-errorMessage">
                  {" "}
                  {props.errorMessage}{" "}
                </label>
              </Grid>
            )}
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" onClick={handleLinkSignIn}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    user: state.user,
    registrationOK: state.registrationOK,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (user) => {
      dispatch(registerUser(user));
    },
    handleChange: (user) => {
      dispatch(handleUserChange(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
