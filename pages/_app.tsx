import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@styles/globals.css';
import '@styles/helpers.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>HBO Clone</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
