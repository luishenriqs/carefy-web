import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import PhysicianPage from '../pages/PhysicianPage';
import PatientPage from '../pages/PatientPage';
import AppointmentPage from '../pages/AppointmentPage';
import ShowAppointmentPhysician from '../pages/ShowAppointmentsPhysician';
import ShowAppointmentPatient from '../pages/ShowAppointmentsPatient';
import EditPatient from '../pages/EditPatient';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/physicians" component={PhysicianPage} />
    <Route path="/patients" component={PatientPage} />
    <Route path="/appointments" component={AppointmentPage} />
    <Route path="/showappointmentsphysicians" component={ShowAppointmentPhysician} />
    <Route path="/showappointmentspatients" component={ShowAppointmentPatient} />
    <Route path="/patientsedit" component={EditPatient} />
  </Switch>
);

export default Routes;
