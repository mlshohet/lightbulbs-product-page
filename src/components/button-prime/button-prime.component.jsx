import React from 'react';

import './button-prime.styles.scss';

const ButtonPrime = ({ children, add, ways, ...otherProps}) => {
	return (
		<button
			className={`
				button-prime
				${ add ? 'add-button' : '' }
				${ ways ? 'ways-button' : '' }
			`}
			{ ...otherProps }
			>
			{ children }
		</button>
	);
}

export default ButtonPrime;