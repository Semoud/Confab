import { CollectionIcon, ArrowCircleRightIcon, PlusSmIcon } from '@heroicons/react/solid';

const Button = ({ pre, text, post, setButtonFill, setButtonBorder, additionalClass }) => {
	const iconStyle = 'h-5 w-5';
	return (
		<a className={`inline-block rounded-full ${setButtonBorder ? setButtonBorder : 'border'} ${setButtonFill ? 'bg-black text-white' : 'text-black'} border-black py-2 ${pre ? 'pl-4 pr-6' : 'pl-6 pr-6'} ${additionalClass}`} href='https://www.semoud.com/portfolio'>
			<div className='flex items-center gap-2'>
				{pre == 'CollectionIcon' && <CollectionIcon className={iconStyle} />}
				{pre == 'ArrowCircleRightIcon' && <ArrowCircleRightIcon className={iconStyle} />}
				{pre == 'PlusSmIcon' && <PlusSmIcon className={iconStyle} />}
				{text}
				{post == 'CollectionIcon' && <CollectionIcon className={iconStyle} />}
				{post == 'ArrowCircleRightIcon' && <ArrowCircleRightIcon className={iconStyle} />}
				{post == 'PlusSmIcon' && <PlusSmIcon className={iconStyle} />}
			</div>
		</a>
	);
};

export default Button;
