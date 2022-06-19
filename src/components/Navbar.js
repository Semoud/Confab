import { PlusSmIcon } from '@heroicons/react/solid';

const Navbar = () => {
	return (
		<div className='py-4 sm:py-8'>
			<div className='container flex items-center justify-between '>
				<a href='http://www.semoud.com/portfolio'>
					<img src='./assets/logo.svg' alt='confab logo' />
				</a>
				<a className='flex items-center rounded-3xl bg-black py-2 px-6 text-white' href='http://www.semoud.com/portfolio'>
					<span className='sm:mr-2'>
						<PlusSmIcon className='h-5 w-5' />
					</span>
					<span className='hidden sm:inline-block'>New event</span>
				</a>
			</div>
		</div>
	);
};

export default Navbar;
