import BrandItem from './BrandItem';

const Brands = () => {
	return (
		<div className='bg-cloudy'>
			<div className='contain pt-16 pb-8'>
				<div className='mx-auto max-w-5xl'>
					<div className='grid grid-cols-3 items-center justify-items-center gap-6 sm:flex sm:flex-wrap sm:justify-between'>
						<BrandItem company='forbes' />
						<BrandItem company='fortune' />
						<BrandItem company='tc' />
						<BrandItem company='wall-st-journal' />
						<BrandItem company='financial-times' />
						<BrandItem company='cnbc' />
					</div>
				</div>
				<div>
					<p className='mx-auto mt-12 max-w-xs text-center'>
						Used by over <span className='text-crayola'>50+ million</span> users worldwide and trusted by top-tier companies.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Brands;
