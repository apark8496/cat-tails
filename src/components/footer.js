import Icon from './icon';
import React from 'react';
import { LINKS } from '../utils/footerLinks';

function Footer() {
	return (
		<footer className='footer'>
			<div>
			<Icon links={LINKS}></Icon>
			<p> © 2022 Ashley Park, Connie Barrantes, Melany Pietrowsk, Trevor Long</p>
			</div>
		</footer>
	);
}

export default Footer;