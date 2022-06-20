import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

const UpcomingCard = ({ title, date, profile, name, position }) => {
	return (
		<div className='flex w-3/4 shrink-0 snap-start snap-always flex-col justify-between rounded-3xl bg-cloudy py-8 px-6 last-of-type:mr-[5%] sm:w-96 sm:p-8'>
			<div>
				<h2 className='text-xl sm:text-4xl'>{title}</h2>
				<p className='font-["Koulen"] text-xl text-crayola'>{date}</p>
			</div>
			<div className='mt-10 sm:mt-28'>
				<img className='mb-4 h-12 w-12 rounded-2xl' src={`./assets/${profile || 'peep_01'}.svg`} alt='profile image' />
				<div className='flex flex-col flex-wrap sm:flex-row sm:items-center sm:justify-between'>
					<div>
						<p className='font-["Koulen"] text-xl text-stormy'>{name}</p>
						<p className='text-sm text-smoke'>{position}</p>
					</div>
					<a className='mt-4 px-2 pt-1 text-black sm:mt-0' href='https://www.semoud.com/portfolio'>
						<ArrowNarrowRightIcon className='h-5 w-5' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default UpcomingCard;
