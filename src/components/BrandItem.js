const BrandItem = ({ company }) => {
	return (
		<div>
			<img src={`./assets/brands_${company}.svg`} alt={company} />
		</div>
	);
};

export default BrandItem;
