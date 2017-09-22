import React from 'react';
import { Route, IndexRoute } from 'react-router';
import UserRegistration from './components/UserRegistration';
import NotFoundPage from './components/NotFoundPage';
import Layout from './components/Layout';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={UserRegistration} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
