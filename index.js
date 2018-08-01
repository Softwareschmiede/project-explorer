import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers/index';

import CustomNavbar from './components/navbar';
import ProjectTable from './components/project-table';
import NewProjectModal from './components/new-project.modal';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import "./styles.css";


const store = createStore(reducers);
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
  <div className="container">
    <CustomNavbar />
    <NewProjectModal />
    <ProjectTable />  
  </div>
  </Provider>, 
  rootElement
);
