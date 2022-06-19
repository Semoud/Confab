import UpcomingCard from './UpcomingCard';

const Upcoming = () => {
	return (
		<div className='py-10 md:py-20'>
			<div className='contain pb-12'>
				<h2 className=' text-4xl md:text-6xl'>
					Upcoming <br />
					<span className='text-opal'>events</span>
				</h2>
				<p className='max-w-xs pt-3'>Virtual meetings, and conferences, anyone can share, join or host (virtual events).</p>
			</div>
			<div className='ml-[5%] flex items-end sm:max-w-7xl md:mx-auto md:w-[90%]'>
				<p className='hidden max-w-xs md:block'>Virtual meetings, and conferences, anyone can share, join or host (virtual events).</p>
				<div className='overflow-hidden md:ml-40'>
					<div className='no-scrollbar flex snap-x snap-mandatory gap-10 overflow-scroll'>
						<UpcomingCard title='Make a 3d motion graphic looks mesmerizing' date='Thu, 19 jul 2022' profile='peep_09' name='Jerry' position='3D Motion Graphics' />
						<UpcomingCard title='Art direction and design leadership ' date='Fri, 20 aug 2022' profile='peep_05' name='Angela' position='Creative Director' />
						<UpcomingCard title='Motion Design to create delightful experiences' date='Sat, 21 sep 2022' profile='peep_04' name='Alderson' position='Interaction Design' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Upcoming;
