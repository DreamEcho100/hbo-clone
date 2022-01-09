import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ls from '@utils/v1/localStorage';
import useMounted from '@hooks/useMounted';

const AuthCheck = (component: JSX.Element): JSX.Element => {
	const router = useRouter();

	const [userExist, setUserExist] = useState(false);

	const { hasMounted } = useMounted();

	let activeUID: string = ls.get<string>('activeUID', '');
	let users: any[] = ls.get<any[]>('users', []);

	useEffect(() => {
		// if(users.length >= 1) {
		//   router.push('/login')
		// }
		if (activeUID.length < 0 || users.length < 1) {
			router.push('/create');
		} else setUserExist(true);
	}, [activeUID.length, router, users.length]);

	if (!hasMounted || !userExist) {
		return (
			<div className='create-user'>
				<div className='create-user__top'>
					<div className='create-user__logo'></div>
				</div>
			</div>
		);
	}

	return component;
};

export default AuthCheck;

// function withMoreInfo<T extends React.Component<{ language: string, pathname: string }, any>>(Wrapped: new (props: { language: string, pathname: string }, context?: any) => T) {
//   return class WithMoreInfo extends React.Component<{ asPath: string }> {
//       static async getInitialProps({ asPath }: { asPath: string }) {
//           return { asPath }
//       }

//       render() {
//           const { asPath } = this.props
//           const language = asPath.indexOf('/ro') === 0 ? 'ro' : 'en'
//           return <Wrapped language={language} pathname={asPath} />
//       }
//   }
// }
