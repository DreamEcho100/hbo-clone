import Header from '.@components/UI/V1/Header/Header';
import SideNav from '.@components/UI/V1/SideNav/SideNav';

interface Props {
	children: React.ReactNode;
}

const MaimLayout = ({ children }: Props): JSX.Element => {
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
			<section className='content-container'>{children}</section>
		</div>
	);
};

export default MaimLayout;
