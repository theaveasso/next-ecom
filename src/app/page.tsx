import Image from 'next/image';
import Link from 'next/link';

// components
import Button from '../components/button';

// asset data
import products from '../data/products.json';

const Homepage = () => {
	return (
		<section className='w-full container max-w-[1024px] px-6 mx-auto'>
			<div className='relative mt-5 w-full rounded-md'>
				<Link href='#'>
					<div className='absolute top-10 left-8'>
						<h2 className='font-extrabold text-4xl xl:text-6xl'>
							Prepare for liftoff.
						</h2>
						<p className='mt-5 text-lg text-gray-300'>
							Apparel that&apos;s out of this world!
						</p>
					</div>
					<Image
						className='w-full object-cover rounded-lg shadow-md shadow-primary-400'
						src='/images/space-jelly-gear-banner.jpg'
						alt=''
						width={1024}
						height={600}
					/>
				</Link>
			</div>

			<h2 className='text-2xl font-bold mt-10'>Featured Gear</h2>

			<ul className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
				{products.slice(0, 4).map((product) => (
					<li key={product.id}>
						<Link href='#'>
							<div className='p-4 rounded-md bg-gradient-to-br from-primary-400 to-primary-500'>
								<div>
									<Image
										className='rounded-lg shadow-lg shadow-primary-400 '
										src={product.image}
										alt=''
										width='500'
										height='500'
									/>
									<div className='flex items-center justify-between mt-2'>
										<h3 className='font-bold text-sm'>
											{product.name}
										</h3>
										<p>
											$
											<span className='ml-1 font-extrabold'>
												{product.price}
											</span>
										</p>
									</div>
								</div>
								<Button className='mt-2'>Add to Cart</Button>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Homepage;
