import React from 'react';

import './header.styles.scss';
import logo from '../../assets/logo.png';

const Header = () => (
	<div className="header">
		<div className="logo">
			<img className="img-logo" src={logo} alt="logo" />
			<span className="text-logo">CTOPUS <span className="energy">ENERGY</span></span>
		</div>
		<div className="menu-icon">&#9776;</div>
	</div>
);

export default Header;