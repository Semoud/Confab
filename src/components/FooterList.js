const FooterList = ({ title, links }) => {
	return (
		<div>
			<p className='text-l font-["GeneralSans-SemiBold"] text-smoke'>{title}</p>
			<ul className='mt-4'>
				{links.map(link => {
					return (
						<li className='mt-6 first-of-type:mt-0'>
							<a className='text-smoke' href='https://www.semoud.com/portfolio'>
								{link}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default FooterList;
