import styled from 'styled-components';
import ImgWithFallback from '../../../../components/ImgWithFallback';

export const GameThumb = styled.div`
  border-radius: 10px;
  position: relative;
  border: 3px solid #1C1C1C;
	box-shadow: 0 0 0 4px rgba(255, 255, 255, .5);
	display: flex;
	transition: all .3s cubic-bezier(0.68, -0.55, 0.265, 1.3);
	will-change: transform;
`;

export const GameTile = styled.div`
  cursor: pointer;

	&:hover {
		> ${GameThumb} {
			transform: scale(1.05);
		}
	}
`;

export const GameThumbInner = styled(ImgWithFallback)`
  width: 100%;
	height: 100%;
	aspect-ratio: 2 / 1;
  border-radius: 8px;
`;

export const GameThumbVideo = styled.video`
  width: 100%;
	aspect-ratio: 2 / 1;
`;

export const GameTitle = styled.div`
  color: white;
  font-weight: 500;
	margin-top: 10px;
	font-size: 1rem;
	letter-spacing: 0.02rem;
	display: flex;
	align-items: center;
	gap: 12px;

	> svg {
		width: 1.75rem;
	}
`;