import ProductCard from '../../../components/product-card';
import products from '../../../data/products.json';

const Page = () => {
	return (
		<section>
			<h1 className='text-xl font-bold'>Test</h1>
			<ul className='grid grid-cols-3 gap-4'>
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
