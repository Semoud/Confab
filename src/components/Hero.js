import { ArrowNarrowRightIcon, BellIcon, UserGroupIcon } from '@heroicons/react/solid';

const Hero = () => {
	return (
		<div className='contain pt-3 pb-16'>
			<div className='mb-6 lg:flex lg:items-end lg:justify-between'>
				<h1 className='text-4xl md:text-8xl'>
					Virtual
					<br />
					<span className='text-opal'>Conferences</span>
				</h1>
				<p className=' mt-4 max-w-sm text-smoke md:mt-0 lg:p-4'>Virtual meetings, and conferences, anyone can share, join or host (virtual events).</p>
			</div>
			<div className='sm:relative'>
				<img className='-z-10 h-full w-full rounded-t-3xl object-cover sm:absolute sm:rounded-3xl' src='./assets/hero_image.png' alt='illustration of people' />
				<div className='flex flex-col sm:p-8 lg:flex-row lg:items-end'>
					<div className='flex flex-col justify-between rounded-b-3xl bg-cloudy py-8 px-6 sm:max-w-sm sm:rounded-3xl sm:bg-white sm:p-8'>
						<div>
							<h2 className='text-xl sm:text-4xl'>Make a unique illustration design character</h2>
							<p className='font-["Koulen"] text-xl text-crayola'>Thu, 19 May 2022</p>
						</div>
						<div className='mt-10 sm:mt-28'>
							<img className='mb-4 h-12 w-12 rounded-2xl' src='./assets/hero_profile.png' alt='profile image' />
							<div className='flex flex-wrap items-center justify-between'>
								<div>
									<p className='font-["Koulen"] text-xl text-stormy'>Pablo stanley</p>
									<p className='text-sm text-smoke'>Art Director & Illustrator</p>
								</div>
								<a className='mt-4 px-2 pt-1 sm:mt-0' href='https://www.semoud.com/portfolio'>
									<ArrowNarrowRightIcon className='h-5 w-5' />
								</a>
							</div>
						</div>
					</div>
					<div className='mt-6 flex flex-col gap-3 font-["GeneralSans-SemiBold"] sm:mt-11 sm:flex-row sm:gap-2 md:w-full lg:justify-end'>
						<a className='flex items-center justify-center rounded-full bg-cloudy py-2 pr-6 pl-4 text-black sm:justify-start sm:bg-white' href='https://www.semoud.com/portfolio'>
							<BellIcon className='mr-2 h-4 w-4' />
							<p>Remind me</p>
						</a>
						<a className='flex items-center justify-center rounded-full bg-cloudy py-2 pr-6 pl-4 text-black sm:justify-start sm:bg-white' href='https://www.semoud.com/portfolio'>
							<UserGroupIcon className='mr-2 h-4 w-4' />
							<p>
								<span className='text-crayola'>32</span>/128 participants
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
