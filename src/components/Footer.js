import { PlusSmIcon } from '@heroicons/react/solid';
import FooterList from './FooterList';
import FooterSocial from './FooterSocial';

const Footer = () => {
	return (
		<div>
			<div className='contain py-16'>
				<div className='grid'>
					<div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
						<img className='w-40' src='./assets/logo.svg' alt='confab' />
						<div className='flex justify-end gap-4'>
							<FooterSocial icon='twitter' />
							<FooterSocial icon='medium' />
							<FooterSocial icon='instagram' />
							<FooterSocial icon='linkedin' />
						</div>
					</div>
				</div>
				<div className='mt-9 flex flex-col items-center justify-between sm:mt-14 md:flex-row md:items-start'>
					<div className='flex h-full flex-col items-center justify-between md:items-start'>
						<p className='max-w-xs text-center text-smoke md:text-left'>Virtual meetings, and conferences, anyone can share, join or host (virtual events).</p>
						<a className='mt-6 inline-block rounded-full border border-black py-2 pl-4 pr-6 text-black sm:mt-8' href='https://www.semoud.com/portfolio'>
							<div className='flex items-center gap-2'>
								<PlusSmIcon className='h-5 w-5' />
								Get Started
							</div>
						</a>
					</div>
					<div className='mt-12 flex flex-col gap-16 text-center sm:flex-row sm:text-left md:mt-0'>
						<FooterList title='Menu' links={['Confab Platform Overview', 'New Event or Meetings', 'Customer Stories', 'Confab Events']} />
						<FooterList title='About us' links={['Contact Us', 'Our Team', 'Careers', 'Press']} />
					</div>
				</div>
			</div>
			<div className='bg-cloudy py-6'>
				<div className='contain'>
					<div className='flex flex-col justify-center gap-5 text-center text-xs text-smoke sm:flex-row sm:justify-between sm:text-left'>
						<p>© 2022. All rights reserved.</p>
						<div className='flex justify-center gap-10 sm:justify-end'>
							<a className='text-xs text-smoke' href='https://www.semoud.com/portfolio'>
								Privacy Policy
							</a>
							<a className='text-xs text-smoke' href='https://www.semoud.com/portfolio'>
								Terms & Conditions
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
