import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import Button from './button';

interface Props {
	prodImage: StaticImageData | string;
	prodName: string;
	prodPrice: number;
}
const ProductCard = ({ prodImage, prodName, prodPrice }: Props) => {
	return (
		<Link href='#'>
			<div className='p-4 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200'>
				<div>
					<Image
						className='rounded-lg shadow-md shadow-primary-100 '
						src={prodImage}
						alt=''
						width='500'
						height='500'
					/>
					<div className='flex items-center text-black justify-between mt-2'>
						<h3 className='font-bold text-sm'>{prodName}</h3>
						<p>
							$
							<span className='ml-1 font-extrabold'>
								{prodPrice}
							</span>
						</p>
					</div>
				</div>
				<Button className='mt-2'>Add to Cart</Button>
			</div>
		</Link>
	);
};

export default ProductCard;
