import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

// components
import Button from '../components/button';
import CategoryButton from './category-button';

// asset data
import ProductCard from '../components/product-card';
import products from '../data/products.json';

const HOMEPAGE = {
	query: gql`
		query Homepage {
			page(where: { slug: "home" }) {
				heroBackground {
					height
					url
					width
				}
				heroLink
				heroText
				heroTitle
				name
			}
		}
	`,
};
export async function getData() {
	const client = new ApolloClient({
		uri: 'https://api-ap-southeast-2.hygraph.com/v2/cl9pq8zj9232301rp80ysd26z/master',
		cache: new InMemoryCache(),
	});

	const data = await client.query(HOMEPAGE);
	return data?.data.page;
}

const categories = ['Featured', 'Clothing', 'Assesories'];

const Homepage = async () => {
	const pageData = await getData();

	return (
		<section className='w-full container max-w-[1024px] px-6 mx-auto flex items-center flex-col'>
			<div className='relative mt-5 w-full h-[600px] rounded-xl bg-gradient-to-b from-black-500 to-transparent'>
				<Link href={pageData.heroLink}>
					<div className='absolute top-10 left-8'>
						<h2 className='max-w-[450px] font-extrabold text-4xl xl:text-6xl'>
							{pageData.heroTitle}
						</h2>
						<p className='max-w-[500px] mt-5 text-lg text-gray-300'>
							{pageData.heroText}
						</p>
					</div>
					{/* <Image
						className='w-full object-cover rounded-lg shadow-md shadow-primary-400'
						src={pageData.heroBackground.url}
						alt=''
						width={1024}
						height={600}
						priority
					/> */}
				</Link>
			</div>
			{/* <Categories /> */}
			<ul className='space-x-6'>
				{categories.map((category) => (
					<CategoryButton key={category} href={category}>
						{category}
					</CategoryButton>
				))}
			</ul>
			<h2 className='text-2xl font-bold mt-10'>Featured Gear</h2>
			<ul className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
				{products.slice(0, 4).map((product) => (
					<li key={product.id}>
						<ProductCard
							prodImage={product.image}
							prodName={product.name}
							prodPrice={product.price}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Homepage;
