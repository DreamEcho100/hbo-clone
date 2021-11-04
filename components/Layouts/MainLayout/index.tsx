import Header from '@components/UI/V1/Header';
import SideNav from '@components/UI/V1/SideNav';

interface Props {
	children: JSX.Element[];
}

const MainLayout = ({ children }: Props): JSX.Element => {
	return (
		<div
			style={{
				background:
					'linear-gradient(135deg, rgba(0,0,0,1) 55%, rgba(119,30,135,1) 100%)',
				minHeight: '100vh',
				backgroundAttachment: 'fixed',
			}}
		>
			<Header />
			<SideNav />
			<main className='content-container'>{children}</main>
		</div>
	);
};

export default MainLayout;
