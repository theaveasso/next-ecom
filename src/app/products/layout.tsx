import Footer from '../../components/footer';
import NavBar from '../../components/navbar';
import Sidebar from './sidebar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<section className='flex container mx-auto p-5 max-w-6xl gap-6'>
			<Sidebar />
			{children}
		</section>
	);
};

export default Layout;
