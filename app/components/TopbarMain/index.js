/**
 *
 * TopbarMain
 *
 */

import React, { memo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Banner from './logo.png';
import LocaleToggle from 'containers/LocaleToggle';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    backgroundColor: "#0795DF",
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

function  TopbarMain (props){
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo BKU"
            src={Banner}
            width="60px"
            height="70px"
          />
        </RouterLink>
        <div style={{ marginLeft: "13px", textAlign: "center" }}><b>
          ĐẠI HỌC QUỐC GIA TP.HCM
          <br/>
          TRƯỜNG ĐẠI HỌC BÁCH KHOA</b>
        </div>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <LocaleToggle />
        </Hidden>
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
       
      </Toolbar>
    </AppBar>
  );
};

TopbarMain.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default memo(TopbarMain);

