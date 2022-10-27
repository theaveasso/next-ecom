'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

interface Props {
	href: string;
	children: React.ReactNode;
}

const CategoryButton = ({ href, children }: Props) => {
	let segment = useSelectedLayoutSegments();

	console.log(segment);
	return (
		<Link
			href={`/products/${href}`}
			className={`text-xs uppercase cursor-pointer rounded-full px-6 py-2 font-semibold bg-gradient-to-b from-purple-500 to-purple-600`}
		>
			{children}
		</Link>
	);
};

export default CategoryButton;
