import Link from 'next/link';

// assets icons
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = () => {
	return (
		<header className=' w-full p-4 bg-gradient-to-r from-primary-600 to-primary-500'>
			<nav className='container max-w-[1024px] mx-auto flex justify-between items-center'>
				<Link
					href='/'
					className='font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
				>
					Storefront Solutions
				</Link>
				<div className='flex space-x-5 items-center'>
					<ul className='flex space-x-4'>
						<li>
							<Link href='#'>Link</Link>
						</li>
						<li>
							<Link href='#'>Link</Link>
						</li>
						<li>
							<Link href='#'>Link</Link>
						</li>
					</ul>
					<button className='flex items-center space-x-2 bg-gradient-to-l from-black-400 to-transparent px-4 py-1 rounded-full'>
						<FiShoppingCart />
						<span>$ 0.00</span>
					</button>
					<Link href='#'>
						<div className='p-1 px-2 bg-gradient-to-br from-black-400 to-transparent rounded-full'>
							TS
						</div>
					</Link>
				</div>
			</nav>

			<div></div>
		</header>
	);
};

export default NavBar;
