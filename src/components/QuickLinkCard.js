import Button from './Button';

const QuickLinkCard = ({ body, setButtonFill, thumbnail, children }) => {
	return (
		<div className='group mt-16 grid items-center gap-5 first-of-type:mt-0 sm:grid-cols-2 md:mt-28 md:gap-10'>
			<div className='text-center sm:text-left md:mr-12'>
				<h2 className='text-3xl md:text-6xl'>{children}</h2>
				<p className='mt-4 text-smoke md:mt-8'>{body}</p>
				<Button additionalClass='mt-8' pre='ArrowCircleRightIcon' text='Get Started' setButtonFill={setButtonFill} setButtonBorder='border-2' />
			</div>
			<div className='order-first sm:group-even:order-last sm:group-even:justify-self-end'>
				<img className='mx-auto w-4/5 sm:mx-0 sm:w-auto' src={`./assets/quick-links_${thumbnail}.svg`} alt={body} />
			</div>
		</div>
	);
};

export default QuickLinkCard;
