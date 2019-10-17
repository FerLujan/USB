import React from 'react';
import PropTypes from 'prop-types';

import LinearProgress from '@material-ui/core/LinearProgress';


function Header ( props ) {
	const { title, step } = props;
	const completed = step*20;
	const buffer = (step+1)*20;
	return (
		<>
			<h2>{title}</h2>
			<LinearProgress 
				variant="buffer" 
				value={completed} 
				valueBuffer={buffer} />
		</>
	);
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	step: PropTypes.number.isRequired
};

export default Header;