import { SpeakerphoneIcon } from '@heroicons/react/outline';

const Newsletter = () => {
	return (
		<div className='bg-cloudy py-20'>
			<div className='contain'>
				<div className='grid items-end gap-8 md:grid-cols-2 lg:gap-16'>
					<div>
						<h2 className='text-4xl md:text-6xl'>
							Subscribe to <br />
							<span className='text-opal'>our newsletter</span>
						</h2>
						<div className='mt-4 flex items-center gap-3 md:gap-6'>
							<SpeakerphoneIcon className='h-5 w-5 shrink-0' />
							<p className=' w-9/12'>
								Get the latest <span className='text-crayola'>free</span> event conference notification and a reminder of upcoming speakers.
							</p>
						</div>
					</div>
					<form action='https://www.semoud.com/portfolio'>
						<input className='w-full appearance-none rounded-full border border-smoke bg-cloudy px-8 py-6 focus:border-smoke focus:ring-stormy' type='text' placeholder='Your email address' />
						<div className='mt-6 flex flex-col justify-between gap-6 md:flex-row'>
							<div className='flex items-center md:w-2/4'>
								<input className='h-6 w-6 appearance-none rounded-lg bg-cloudy p-1 text-stormy checked:bg-stormy focus:ring-stormy' type='checkbox' name='terms' id='terms' />
								<p className='ml-4 text-xs'>
									I agree with{' '}
									<a className='text-black underline' href='https://www.semoud.com/portfolio'>
										Privacy Policy
									</a>{' '}
									and{' '}
									<a className='text-black underline' href='https://www.semoud.com/portfolio'>
										Terms of Conditions
									</a>
								</p>
							</div>
							<input className='rounded-full bg-black py-4 px-8 text-white' type='submit' value='Submit' required />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
