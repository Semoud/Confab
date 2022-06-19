const Features = () => {
	return (
		<div className='bg-cloudy py-9'>
			<div className='contain'>
				<div className='flex flex-col md:flex-row md:items-end md:justify-between'>
					<h2 className='text-4xl md:text-6xl'>
						Main <br />
						<span className='text-opal'>Features</span>
					</h2>
					<p className='mt-4 max-w-xs text-smoke'>Virtual meetings, and conferences, anyone can share, join or host (virtual events).</p>
				</div>
				<div className='mt-12 flex flex-col gap-8 md:flex-row'>
					<div className='flex flex-col gap-4 rounded-3xl bg-white p-6 sm:flex-row sm:items-center sm:gap-8 md:flex-col md:items-start md:gap-0 lg:p-8'>
						<img className='w-24 lg:w-32' src='./assets/person_03.png' alt='become a host' />
						<div>
							<h2 className='text-4xl'>Become a host</h2>
							<p className='mt-2'>
								Anyone can <a href='https://www.semoud.com/portfolio'>become a host</a> and customize the number of participants.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-4 rounded-3xl bg-white p-6 sm:flex-row sm:items-center sm:gap-8 md:flex-col md:items-start md:gap-0 lg:p-8'>
						<img className='w-24 lg:w-32' src='./assets/person_01.png' alt='plan ahead' />
						<div>
							<h2 className='text-4xl'>Plan ahead</h2>
							<p className='mt-2'>
								Click <a href='https://www.semoud.com/portfolio'>New Event</a> to schedule meetings or conferences and send invites.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-4 rounded-3xl bg-white p-6 sm:flex-row sm:items-center sm:gap-8 md:flex-col md:items-start md:gap-0 lg:p-8'>
						<img className='w-24 lg:w-32' src='./assets/person_02.png' alt='get a link' />
						<div>
							<h2 className='text-4xl'>Get a link, share.</h2>
							<p className='mt-2'>
								Click <a href='https://www.semoud.com/portfolio'>New Event</a> to get a link you can send to people you want to invite.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
