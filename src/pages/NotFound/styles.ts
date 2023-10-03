import { motion } from "framer-motion";
import { rgba } from "polished";
import styled from "styled-components";

export const Container = styled.div`
	overflow: hidden;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: white;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background: ${rgba('#0F1923', .6)};
		z-index: 1;
 	}
`;

export const BgVideo = styled(motion.video)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	position: absolute;
	z-index: -1;
`;

export const Title = styled(motion.h6)`
	font-size: 6rem;
	font-family: 'Tungsten', sans-serif;
	font-weight: 600;
	margin-bottom: 40px;
	width: 90%;
	max-width: 900px;
	position: relative;
	z-index: 5;
`;

export const ButtonWrapper = styled(motion.div)`
	position: relative;
	padding: 8px;

	&::before,
	&::after {
		content: '';
		position: absolute;
		border: 1px solid white;
		width: 99%;
		height: 43%;
	}

	&::before {
		top: 0;
		left: 0;
		border-bottom: 0;
	}

	&::after {
		bottom: 0;
		left: 0;
		border-top: 0;
	}
`;

export const Button = styled.button`
	background: #E60062;
	position: relative;
	color: white;
	font-size: 1rem;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	isolation: isolate;
	position: relative;
	z-index: 5;
	cursor: pointer;
	padding: 16px 48px;
	text-align: center;
	overflow: hidden;

	&:hover {
		&::before {
			transform: skew(-15deg) translateX(-10px);
		}

		&::after {
			background: white;
		}
	}

	&::before {
		content: '';
		background: #0F1923;
		position: absolute;
		width: calc(100% + 20px);
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
		transform: skew(-15deg) translateX(calc(-100% - 10px));
		transition: all .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		width: 4px;
		aspect-ratio: 1 / 1;
		background: #0F1923;
		transition: all .3s ease;
	}
`;