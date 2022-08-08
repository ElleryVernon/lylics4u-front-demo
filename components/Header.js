import styled from "styled-components";
import { Search, Menu, User } from "react-feather";
import { useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
	const headerRef = useRef(null);
	const navRef = useRef(null);
	const formRef = useRef(null);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 10) {
				headerRef.current.classList.add("scrolled");
				formRef.current.style.transform = "translate(-66%, 0.125rem) scale(0.83)";
				formRef.current.style.width = navRef.current.offsetWidth + "px";
			} else {
				headerRef.current.classList.remove("scrolled");
				formRef.current.style.transform = "translate(-50%, 150%)";
				formRef.current.style.width = "60vw";
			}
		};
		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<HeaderSection ref={headerRef}>
			<div className="headerInner">
				<Link href="/">
					<div className="logo cursor-pointer">
						<span>lylics4u</span>
					</div>
				</Link>
				<nav ref={navRef}>
					<Link href="#" className="active">
						노래로 검색하기
					</Link>
					<a href="#">이미지로 검색하기</a>
				</nav>

				<form ref={formRef} className="search">
					<input type="text" placeholder="어떤 노래를 좋아하세요?" />
					<button aria-label="search places">
						<Search />
						<span>검색</span>
					</button>
				</form>

				<div className="profile">
					<div className="user">
						<Menu className="menu" />
						<User className="userIcon" />
					</div>
				</div>
			</div>
		</HeaderSection>
	);
}

const HeaderSection = styled.header`
	position: fixed;
	top: 0;
	color: var(--light);
	padding: 1.5rem var(--sidePadding);
	width: 100%;
	z-index: 10;
	transition: background 0.2s;
	.user,
	.profile,
	.logo,
	.headerInner,
	nav {
		display: flex;
		align-items: center;
	}
	.headerInner {
		max-width: var(--containerWidth);
		margin: 0 auto;
	}
	& > div {
		flex: 0 0 20%;
	}
	nav {
		flex: 1;
		justify-content: center;
		transition: all 0.2s;
		a + a {
			margin-left: 1.5rem;
		}
		a {
			position: relative;
		}
		a::before {
			position: absolute;
			content: "";
			width: 1.5rem;
			height: 2px;
			border-radius: 2px;
			background: var(--light);
			bottom: -0.5rem;
			left: calc(50% - 0.75rem);
			transform: scaleX(0);
			transform-origin: center;
			transition: transform 0.2s;
		}
		a:hover::before,
		a.active::before {
			transform: scaleX(1);
		}
	}
	.logo {
		span {
			font-weight: 600;
			font-size: 1.6rem;
			margin-left: 0.5rem;
		}
	}
	.profile {
		justify-content: flex-end;
		white-space: nowrap;
		a {
			margin-right: 1.5rem;
		}
		.userIcon {
			background: var(--dark);
			border-radius: 99px;
			height: 1.5rem;
			width: 1.5rem;
			color: var(--light);
		}
		.user {
			background: var(--light);
			border-radius: 99px;
			padding: 0.25rem 0.25rem 0.25rem 0.5rem;
		}
		.menu {
			color: var(--dark);
			margin-right: 0.5rem;
		}
	}
	form {
		position: absolute;
		transform: translate(-50%, 150%);
		left: 50%;
		background: var(--light);
		padding: 0.5rem;
		border-radius: 99px;
		display: flex;
		align-items: center;
		max-width: 600px;
		margin: 1.5rem;
		width: 60vw;
		box-shadow: 0 1rem 3rem -1rem var(--dark);
		transition: all 0.2s;
		transform-origin: center;
		& * {
			transition: all 0.2s;
		}
		input {
			background: none;
			border: none;
			font-size: 1.15rem;
			flex: 1;
			padding: 0 1.5rem;
			color: var(--dark);
			outline: none;
			&::placeholder {
				color: var(--dark);
				opacity: 0.6;
			}
		}
		button {
			background: var(--orange);
			color: var(--light);
			border: none;
			padding: 0.5rem calc(1.75rem / 2);
			height: 3rem;
			max-width: 300px;
			display: flex;
			align-items: center;
			border-radius: 99px;
			font-weight: 700;
			font-size: 1rem;
			overflow: hidden;
		}
		button svg {
			height: 1.25rem;
			margin-right: 0.75rem;
			flex: 0 0 1.25rem;
		}
	}
	@media (max-width: 36rem) {
		.profile,
		.logo,
		nav,
		form button span {
			display: none;
		}
		form {
			position: relative;
			transform: none !important;
			width: 100% !important;
			left: unset;
			margin: 0;
			input {
				padding: 0 1rem;
				font-size: 1rem;
			}
			button {
				width: 2.5rem;
				height: 2.5rem;
				padding: 0 0.6rem;
			}
			button svg {
				height: 1rem;
				width: 1rem;
			}
		}
	}
	@media (min-width: 36rem) and (max-width: 58rem) {
		nav {
			display: none;
		}
		.profile {
			margin-left: auto;
		}
	}
	&.scrolled {
		background: var(--light);
		color: var(--orange);
		border-bottom: 2px solid var(--gray);
		nav {
			opacity: 0;
			pointer-events: none;
		}
		.logo svg {
			color: var(--orange);
		}
		form {
			box-shadow: 0 0 0 2px #0002;
			transform: translate(0) scale(0.83);
			button {
				max-width: 3rem;
			}
			button span {
				opacity: 0;
			}
		}
		@media (max-width: 36rem) {
			padding-top: 1rem;
			padding-bottom: 1rem;
			form {
				padding: 0;
				box-shadow: none;
				background: var(--gray);
			}
		}
		@media (min-width: 36rem) and (max-width: 58rem) {
			.profile {
				opacity: 0;
				pointer-events: none;
			}
			form {
				left: auto;
				right: 0;
				transform: translate(0) scale(0.83) !important;
				width: 50% !important;
			}
		}
	}
`;
