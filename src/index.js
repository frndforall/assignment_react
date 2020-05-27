import React from 'react';  
import ReactDOM from 'react-dom';  
import './index.css';  
import * as serviceWorker from './serviceWorker';  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import EmployeeActionApp from './Employees/EmployeesActionApp';
 
ReactDOM.render(<EmployeeActionApp />, document.getElementById('root'));  
serviceWorker.unregister();
