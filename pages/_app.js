import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
				<title>lylics4u</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="당신이 선호하는 노래의 가사를 기반으로 노래를 추천받아보세요. lylics4u가 당신을 위해 분석해드립니다."
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
