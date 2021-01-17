import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PatientPage from '../pages/PatientPage';
import PhysicianPage from '../pages/PhysicianPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/patients" component={PatientPage} />
    <Route path="/" exact component={PhysicianPage} />
  </Switch>
);

export default Routes;
