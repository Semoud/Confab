import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
	return (
		<div className='justify-center bg-cloudy py-8 md:py-16 lg:py-32'>
			<div className='relative flex flex-col gap-10 overflow-hidden'>
				<div className='to-cloudy/15 absolute left-[5%] h-full w-[5%] bg-gradient-to-r from-cloudy md:hidden' />
				<div className='to-cloudy/15 absolute right-[5%] h-full w-[5%] bg-gradient-to-l from-cloudy md:hidden' />
				<div className='no-scrollbar mx-auto flex w-[90%] snap-x snap-mandatory justify-start gap-5 overflow-scroll md:w-full md:justify-center md:gap-10 md:overflow-hidden'>
					<TestimonialCard profile='peep_01' name='George' job='Art Director, Germany.' body='Its free!' />
					<TestimonialCard profile='peep_02' name='Kamala' job='Product Designer, Indonesia.' body='Dream come true' />
					<TestimonialCard profile='peep_08' name='Elliot' job='Software Engineer, Australia.' body='Best event site!' />
					<TestimonialCard profile='peep_07' name='Watson' job='Sr. Motion Graphic, USA.' body='Site of the year' />
				</div>
				<div className='hidden justify-center gap-10 md:flex'>
					<TestimonialCard profile='peep_06' name='Angela' job='Public Speakers, Singapore.' body='Excellent ideas' />
					<TestimonialCard profile='peep_05' name='Olive' job='Creative Director, Scotland.' body='Best experiences' />
					<TestimonialCard profile='peep_04' name='Thomas' job='3D Animator, Netherlands.' body='Meeting made easy' />
					<TestimonialCard profile='peep_03' name='Ali' job='Interaction Design, UAE.' body='Fun fun fun!' />
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
