import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
	return (
		<section className="relative py-16">
			<div className="relative h-96 min-w-[300px]">
				<Image src="/project.jpg" layout="fill" objectFit="cover" className="rounded-2xl" />
			</div>
			<div className="absolute top-32 left-12">
				<h3 className="text-4xl mb-3 w-64">{title}</h3>
				<p>{description}</p>
				<br />
				<a
					href="https://github.com/freejin23/lyrics4u"
					target="_blank"
					rel="noopener noreferrer"
					className="btn btn-dark"
				>
					이동하기
				</a>
			</div>
		</section>
	);
}

export default LargeCard;
