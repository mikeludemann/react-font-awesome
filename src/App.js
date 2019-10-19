import React from 'react';
import logo from './logo.svg';
import './App.css';

import Icon from "./components/fw-icon";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
				<Icon classElement="fab fa-microsoft fa-5x"></Icon>
			</section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
	);
}

export default App;
