
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css';
import './../../node_modules/@fortawesome/fontawesome-free/js/all.js';

export default class Icon extends Component {

	componentDidMount() {}
  
	render() {
		return (
			<div className="icon">
				<i class={this.props.classElement}></i>
			</div>
		);
	}
}

Icon.propTypes = {
	classElement: PropTypes.string.isRequired
}