import Image from "next/image";
import Link from "next/link";

function MediumCard({ img, artist }) {
	return (
		<Link href={`https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=${artist}+노래`} passHref>
			<a
				target="_blank"
				rel="noopener noreferrer"
				className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out"
			>
				<div className="relative h-80 w-80">
					<Image src={img} layout="fill" className="rounded-xl" key={img} />
				</div>
				<h3 className="text-2xl mt-3">{artist}</h3>
			</a>
		</Link>
	);
}

export default MediumCard;
