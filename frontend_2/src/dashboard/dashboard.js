import "./dashboard.scss";

import * as utils from "../utils";

import { Avatar, Paper } from "@material-ui/core";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import React from "react";
import { connect } from "react-redux";

const Dashboard = (props) => {
  let account = utils.getAccountFromLocal();

  return (
    <div className="dashboard-main">
      <Paper elevation={3} className="dashboard-paper">
        <h1 style={{ color: "blue" }}>WELCOME</h1>
        <Avatar>
          <AccountBoxIcon />
        </Avatar>
        <h2>Name : {props.user.name || account.name}</h2>
        <h2>Your Score: {props.user.score || account.score}</h2>
        <h2>Your Age : {props.user.age || account.age}</h2>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.account,
  };
};

export default connect(mapStateToProps, null)(Dashboard);
