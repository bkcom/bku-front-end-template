/**
 *
 * Minimal
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import TopbarMinimal  from 'components/TopbarMinimal/Loadable';
import Footer  from 'components/Footer';


const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: '100%'
  },
  content: {
    height: '100%'
  }
}));

function MinimalLayout(props) {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopbarMinimal />
      <main className={classes.content}>{children}</main>
      <Footer/>
    </div>
  );
};

MinimalLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default memo(MinimalLayout);
