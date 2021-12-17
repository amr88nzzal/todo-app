import React from 'react';
import SettingsProvider from './context/settings';
import ToDo from './components/todo/todo.js';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <Header />
        <ToDo />
      </SettingsProvider>
    );
  }
}
