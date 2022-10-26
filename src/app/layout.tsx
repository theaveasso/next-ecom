import NavBar from '../components/navbar';

import '../styles/globals.css';

interface LayoutProps {
	children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
	return (
		<html>
			<head>
				<title>Next Solutions</title>
				<meta name='description' content='Move your store to degital' />
			</head>
			<body className='text-white bg-primary-700'>
				<NavBar />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
