import "./login.scss";

import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import config from "../config";
import { connect } from "react-redux";
import { loginUser } from "./account-reducer";
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  //const history = useHistory();
  const [loginParam, setloginParam] = useState({
    name: "",
    password: "",
  });
  const classes = useStyles();
  const handleSubmit = () => {
    props.login(loginParam);
  };

  const handleGoSignUp = () => {
    window.location.href = config.Registration_Frontend_Url_Base;
  };

  const internalHandleChange = (event) => {
    const temploginParam = { ...loginParam };

    switch (event.target.name) {
      case "name":
        temploginParam.name = event.target.value;
        break;
      case "password":
        temploginParam.password = event.target.value;
        break;
    }

    setloginParam(temploginParam);
  };

  if (props.redirectTo) {
    return <Redirect to={props.redirectTo} />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            value={loginParam.name}
            onChange={internalHandleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={loginParam.password}
            onChange={internalHandleChange}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link variant="body2" onClick={handleGoSignUp}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    redirectTo: state.redirectTo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginParam) => {
      dispatch(loginUser(loginParam));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
