import QuickLinkCard from './QuickLinkCard';

const QuickLinks = () => {
	return (
		<div className='contain py-10'>
			<div className='mx-auto max-w-6xl'>
				<QuickLinkCard body='Virtual meetings, and conferences, anyone can become a host and customize the number of participants.' setButtonFill='' thumbnail='green'>
					Become an event <span className=' text-opal'>speakers</span>
				</QuickLinkCard>
				<QuickLinkCard body='Virtual meetings, and conferences, click New Event to schedule meetings or conferences and send invites.' setButtonFill='true' thumbnail='yellow'>
					Plan ahead with <span className=' text-mango'>scheduling</span>
				</QuickLinkCard>
				<QuickLinkCard body='Virtual meetings, and conferences, click New Event to get a link you can send to people you want to invite.' setButtonFill='' thumbnail='red'>
					Level up your <span className=' text-crayola'>engagement</span>
				</QuickLinkCard>
			</div>
		</div>
	);
};

export default QuickLinks;
