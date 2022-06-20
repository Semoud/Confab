import React from 'react';

const FooterSocial = ({ icon }) => {
	return (
		<a className='flex h-8 w-8 items-center justify-center rounded-lg bg-transparent transition-colors duration-300 hover:bg-cloudy' href='https://www.semoud.com/portfolio'>
			<img src={`./assets/social_${icon}.svg`} alt={icon} />
		</a>
	);
};

export default FooterSocial;
