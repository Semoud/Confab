const TestimonialCard = ({ profile, name, job, body }) => {
	return (
		<div className='shrink-0 snap-start rounded-3xl border bg-white p-8'>
			<div>
				<p className='font-["Koulen"] text-3xl text-crayola md:text-4xl'>
					"<span className='text-black'>{body}</span>"
				</p>
			</div>
			<div className='mt-4 flex items-end gap-4 md:mt-8'>
				<img className='w-12 overflow-hidden rounded-2xl bg-cloudy' src={`./assets/${profile}.svg`} alt={name} />
				<div>
					<p className='font-["Koulen"] text-xl text-stormy'>{name}</p>
					<p className='text-sm text-smoke'>{job}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
