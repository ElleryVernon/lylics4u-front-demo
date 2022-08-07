import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import scrapper from "../utils/scrapper";
import artistData from "../utils/dummy";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ songData, artistData }) {
	return (
		<div className="">
			<Head>
				<title>lylics4u</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Banner />

			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">인기 노래 살펴보기</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2">
						{songData?.map(({ songTitle, artist, albumCover }) => (
							<SmallCard key={albumCover} songTitle={songTitle} artist={artist} albumCover={albumCover} />
						))}
					</div>
				</section>

				<section>
					<h2 className="text-4xl font-semibold py-8">추천 아티스트</h2>
					<div className="flex space-x-10 overflow-scroll p-3 ml-3">
						{artistData?.map(({ img, artist }) => (
							<MediumCard key={img} img={img} artist={artist} />
						))}
					</div>
					<LargeCard
						img="https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2868&q=80"
						title="Project GitHub 확인하기"
						description="프로젝트에 대해 더 궁금하다면 구경해보세요."
						buttonText="이동하기"
						key="https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2868&q=80"
					/>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const songData = await scrapper();
	return {
		props: {
			songData,
			artistData: artistData,
		},
	};
}
