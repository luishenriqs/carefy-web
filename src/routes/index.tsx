import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import PhysicianPage from '../pages/PhysicianPage';
import PatientPage from '../pages/PatientPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/physicians" exact component={PhysicianPage} />
    <Route path="/patients" component={PatientPage} />
  </Switch>
);

export default Routes;
