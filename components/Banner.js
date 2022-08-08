import styled from "styled-components";
import Image from "next/image";

export default function Banner() {
	return (
		<BannerSection className="banner">
			<div className="bannerInner">
				<span>
					<h1>좋아하는 노래</h1>
					<h1>좋아하는 가사</h1>
					<h1>우리가 찾아드릴게요.</h1>
					<a href="#" className="btn btn-light">
						추천해주세요
					</a>
				</span>
			</div>
		</BannerSection>
	);
}

const BannerSection = styled.section`
	background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem), url(banner-second.jpg);
	background-position: center, bottom left;
	background-size: cover, cover;
	height: fit-content;
	color: var(--light);
	padding: 15rem var(--sidePadding) 6rem;
	.bannerInner {
		display: flex;
		max-width: var(--containerWidth);
		margin: 0 auto;
	}
	span {
		max-width: var(--maxWidth);
	}
	h1 {
		font-weight: 900;
		font-size: clamp(2rem, 5.5vw, 3rem);
		line-height: 1.2;
		margin-bottom: 1.5rem;
	}
	@media (max-width: 36rem) {
		background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent), url(banner.jpg);
		background-position: center, bottom left;
		background-size: cover, cover;
		align-items: flex-start;
		padding-top: 7.5rem;
		height: 75vh;
		max-height: 720px;
	}
`;
