import Image from "next/image";

function SmallCard({ songTitle, artist, albumCover, url }) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center p-2 mt-5 mr-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
		>
			<div className="relative h-16 w-16">
				<Image src={albumCover} layout="fill" className="rounded-lg" />
			</div>

			<div>
				<h2 className="font-semibold">{songTitle}</h2>
				<h3 className="font-extralight text-gray-500">{artist}</h3>
			</div>
		</a>
	);
}

export default SmallCard;
