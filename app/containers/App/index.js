/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch , Redirect} from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';


import RouteWithLayout from 'components/RouteWithLayout/Loadable';
import MainLayout from 'components/MainLayout/Loadable';
import MinimalLayout from 'components/MinimalLayout/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <RouteWithLayout
          component={HomePage}
          exact
          layout={MainLayout}
          path="/"
        />
        <RouteWithLayout
          component={FeaturePage}
          layout={MainLayout}
          path="/features"
        />
        <RouteWithLayout
          component={NotFoundPage}
          layout={MinimalLayout}
          path="/notfound"
        />
        <Redirect to="/notfound" />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
