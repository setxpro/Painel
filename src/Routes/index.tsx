import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalendarScreen from '../Screens/CalendarScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import HistoricScreen from '../Screens/HistoricScreen';
import SalesScreen from '../Screens/SalesScreen';
import TodoScreen from '../Screens/TodoScreen';

const GetRoutes: React.FC = () => {
  return (
      <Routes>
          <Route path='/' element={<DashboardScreen/>}/>
          <Route path='/sales' element={<SalesScreen/>}/>
          <Route path='/todo' element={<TodoScreen/>}/>
          <Route path='/calendar' element={<CalendarScreen/>}/>
          <Route path='/historic' element={<HistoricScreen/>}/>
      </Routes>
  );
}

export default GetRoutes;