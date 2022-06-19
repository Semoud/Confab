import { CollectionIcon } from '@heroicons/react/solid';

const Preview = () => {
	return (
		<div className='contain py-10 sm:py-12 md:py-20'>
			<img src='./assets/feature_livestream.png' alt='livestream app' />
			<div className=' mt-4 grid grid-cols-1 items-center gap-9 sm:mt-6 sm:grid-cols-2 sm:gap-6 md:mt-12 md:grid-cols-3'>
				<div className='flex flex-col gap-1 sm:gap-4'>
					<img className='w-12 sm:w-16 md:w-20' src='./assets/feature_eye.svg' alt='watch exclusive' />
					<div>
						<h2 className='text-2xl sm:text-4xl'>Watch Exclusive</h2>
						<p>
							Free and{' '}
							<a className='text-crayola' href='https://www.semoud.com/portfolio'>
								exclusive event
							</a>{' '}
							conferences with special guest and speakers.
						</p>
					</div>
				</div>
				<div className='flex flex-col gap-1 sm:gap-4'>
					<img className='w-12 sm:w-16 md:w-20' src='./assets/feature_lovestruck.svg' alt='watch exclusive' />
					<div>
						<h2 className='text-2xl sm:text-4xl'>Top speakers</h2>
						<p>
							Anyone can{' '}
							<a className='text-crayola' href='https://www.semoud.com/portfolio'>
								become a host
							</a>{' '}
							and customize the number of participants.
						</p>
					</div>
				</div>
				<div className='col-span-auto rounded-3xl bg-cloudy p-8 sm:col-span-2 md:col-span-1'>
					<p>Virtual meetings, and conferences, anyone can share, join or host (virtual events).</p>
					<div className='mt-7 flex flex-wrap gap-2'>
						<a className='rounded-full border border-black bg-black py-2 px-6 text-center font-["GeneralSans-SemiBold"] text-white' href='https://www.semoud.com/portfolio'>
							Get Started
						</a>
						<a className='flex justify-center gap-2 rounded-full border border-black py-2 px-6 font-["GeneralSans-SemiBold"]' href='https://www.semoud.com/portfolio'>
							<CollectionIcon className='w-5' />
							<p>Browse</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
