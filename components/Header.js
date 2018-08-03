import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
	return (
		<Menu style={ {marginTop: '10px'} }>
			<Menu.Item name="kickstartETH">
				KickstartETH
			</Menu.Item>

			<Menu.Menu position="right">
				<Link route="/index">
					<a className="item">Campaigns</a>
				</Link>
				<Link route="/campaigns/new">
					<a className="item">+</a>
				</Link>
			</Menu.Menu>
		</Menu>
	);
}