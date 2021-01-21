import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import PhysicianPage from '../pages/PhysicianPage';
import PatientPage from '../pages/PatientPage';
import AppointmentPage from '../pages/AppointmentPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/physicians" exact component={PhysicianPage} />
    <Route path="/patients" component={PatientPage} />
    <Route path="/appointments" component={AppointmentPage} />
  </Switch>
);

export default Routes;
