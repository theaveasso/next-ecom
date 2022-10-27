// assets data
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';

const Sidebar = () => {
	return (
		<div className='h-[800px] top-20 mt-10 flex-shrink-0 rounded-lg w-[200px] bg-gradient-to-br bg-opacity-0 from-black-600 to-transparent p-5 divide-y-[1px] divide-gray-400'>
			<div className='font-semibold p-2 flex items-center space-x-4'>
				<AiOutlineHome />
				<Link href='/'>Home</Link>
			</div>
			<h2 className='py-2'>Test</h2>
		</div>
	);
};

export default Sidebar;
