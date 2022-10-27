import ProductCard from '../../../components/product-card';
import products from '../../../data/products.json';

type ParamsProps = {
	params: {
		category: string;
	};
};
const Page = ({ params }: ParamsProps) => {
	console.log(params);
	return (
		<section>
			<h1 className='text-2xl font-bold'>{params.category}</h1>
			<ul className='grid grid-cols-3 gap-4 mt-5'>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						prodImage={product.image}
						prodName={product.name}
						prodPrice={product.price}
					/>
				))}
			</ul>
		</section>
	);
};

export default Page;
