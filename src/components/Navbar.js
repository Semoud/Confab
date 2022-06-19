const Navbar = () => {
	return (
		<div className='py-4 sm:py-8'>
			<div className='container flex items-center justify-between '>
				<a href='http://www.semoud.com/portfolio'>
					<img src='./assets/logo.svg' alt='confab logo' />
				</a>
				<a className='flex items-center rounded-3xl bg-black py-2 px-6 text-white' href='http://www.semoud.com/portfolio'>
					<span className='sm:mr-2'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
							<path fillRule='evenodd' d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z' clipRule='evenodd' />
						</svg>
					</span>
					<span className='hidden sm:inline-block'>New event</span>
				</a>
			</div>
		</div>
	);
};

export default Navbar;
