import Footer from '../components/footer';
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
			<body className='text-white bg-black-900 flex flex-col h-screen'>
				<NavBar />
				<div className='flex-grow'>{children}</div>

				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
