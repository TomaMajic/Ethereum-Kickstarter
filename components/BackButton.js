import React from 'react';
import { Link } from '../routes';

export default (props) => {

	return(
		<Link route={props.route}>
			<a>Back</a>
		</Link>
	);
}