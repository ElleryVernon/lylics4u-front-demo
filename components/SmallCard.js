import Image from "next/image";

function SmallCard({ songTitle, artist, albumCover }) {
	return (
		<div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 trannsition transform duration-200 ease-out">
			<div className="relative h-16 w-16">
				<Image src={albumCover} layout="fill" className="rounded-lg" />
			</div>

			<div>
				<h2 className="font-semibold">{songTitle}</h2>
				<h3 className="font-extralight text-gray-500">{artist}</h3>
			</div>
		</div>
	);
}

export default SmallCard;
