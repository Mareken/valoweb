import React, { useMemo } from 'react';

import lolClientPng from 'assets/image/png/lol-client-img.png';
import lolClientWebp from 'assets/image/webp/lol-client-img.webp';
import wrClientPng from 'assets/image/png/wild-rift-client-img.png';
import wrClientWebp from 'assets/image/webp/wild-rift-client-img.webp';
import lorClientPng from 'assets/image/png/lor-client-img.png';
import lorClientWebp from 'assets/image/webp/lor-client-img.webp';
import tftClientPng from 'assets/image/png/tft-client-img.png';
import tftClientWebp from 'assets/image/webp/tft-client-img.webp';
import valClientPng from 'assets/image/png/valorant-client-img.png';
import valClientWebp from 'assets/image/webp/valorant-client-img.webp';

import {ReactComponent as LolClientIcon} from 'assets/icons/lol-icon.svg';
import {ReactComponent as WrClientIcon} from 'assets/icons/wild-rift-icon.svg';
import {ReactComponent as LorClientIcon} from 'assets/icons/lor-icon.svg';
import {ReactComponent as TftClientIcon} from 'assets/icons/tft-icon.svg';
import {ReactComponent as ValClientIcon} from 'assets/icons/valorant-icon.svg';

interface IGameTile {
  game?: string;
	video?: string;
}

import * as S from './styles';

function GameTile({ game = 'lol', video = null }: IGameTile) {
  const gameThumb = useMemo(() => {
    switch (game) {
			case 'lol':
        return {
					src: lolClientWebp,
					fallback: lolClientPng,
				};
      case 'wr':
        return {
					src: wrClientWebp,
					fallback: wrClientPng,
				};
      case 'lor':
        return {
					src: lorClientWebp,
					fallback: lorClientPng,
				};
      case 'tft':
        return {
					src: tftClientWebp,
					fallback: tftClientPng,
				};
      case 'val':
        return {
					src: valClientWebp,
					fallback: valClientPng,
				};
      default:
				return {
					src: 'https://i.imgur.com/1q7Q5yL.png',
					fallback: 'https://i.imgur.com/1q7Q5yL.png',
				};
    }
  }, [game]);

	const gameTitle = useMemo(() => {
		switch (game) {
			case 'lol':
        return 'League of Legends';
      case 'wr':
        return 'Wild Rift';
      case 'lor':
        return 'Legends of Runeterra';
      case 'tft':
        return 'Teamfight Tactics';
      case 'val':
        return 'VALORANT';
      default:
        return 'No game found'
		}
	}, [game]);

	const gameIcon = useMemo(() => {
		switch (game) {
			case 'lol':
        return <LolClientIcon />;
      case 'wr':
        return <WrClientIcon />;
      case 'lor':
        return <LorClientIcon />;
      case 'tft':
        return <TftClientIcon />;
      case 'val':
        return <ValClientIcon />;
      default:
        return 'No game found'
		}
	}, [game]);

	return (
		<S.GameTile>
			<S.GameThumb>
				<S.GameThumbInner src={gameThumb.src} fallback={gameThumb.fallback} />
				{video && <S.GameThumbVideo src={video} />}
			</S.GameThumb>
			<S.GameTitle>
				{gameIcon}{gameTitle}
			</S.GameTitle>
		</S.GameTile>
	)
}

export default GameTile;
