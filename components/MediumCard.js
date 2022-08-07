import Image from "next/image";

function MediumCard({ img, artist }) {
	return (
		<div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
			<div className="relative h-80 w-80">
				<Image src={img} layout="fill" className="rounded-xl" key={img} />
			</div>
			<h3 className="text-2xl mt-3">{artist}</h3>
		</div>
	);
}

export default MediumCard;
