import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardScreen from '../Screens/DashboardScreen';
import SalesScreen from '../Screens/SalesScreen';

const GetRoutes: React.FC = () => {
  return (
      <Routes>
          <Route path='/' element={<DashboardScreen/>}/>
          <Route path='/sales' element={<SalesScreen/>}/>
      </Routes>
  );
}

export default GetRoutes;