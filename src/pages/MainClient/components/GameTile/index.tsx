import React, { useCallback, useMemo, useRef, useState } from 'react';

import lolClientPng from 'assets/image/png/lol-client-img.png';
import lorClientPng from 'assets/image/png/lor-client-img.png';
import tftClientPng from 'assets/image/png/tft-client-img.png';
import valClientPng from 'assets/image/png/val-client-img.png';
import wrClientPng from 'assets/image/png/wr-client-img.png';
import lolClientWebp from 'assets/image/webp/lol-client-img.webp';
import lorClientWebp from 'assets/image/webp/lor-client-img.webp';
import tftClientWebp from 'assets/image/webp/tft-client-img.webp';
import valClientWebp from 'assets/image/webp/val-client-img.webp';
import wrClientWebp from 'assets/image/webp/wr-client-img.webp';

import lolClientVideo from 'assets/video/lol-client-video.webm';
import tftClientVideo from 'assets/video/tft-client-video.webm';
import valClientVideo from 'assets/video/val-client-video.mp4';

import { ReactComponent as LolClientIcon } from 'assets/icons/lol-icon.svg';
import { ReactComponent as LorClientIcon } from 'assets/icons/lor-icon.svg';
import { ReactComponent as TftClientIcon } from 'assets/icons/tft-icon.svg';
import { ReactComponent as ValClientIcon } from 'assets/icons/valorant-icon.svg';
import { ReactComponent as WrClientIcon } from 'assets/icons/wild-rift-icon.svg';

interface IGameTile {
  game?: string;
  video?: string;
  showGameStatus?: boolean;
  useVideo?: boolean;
  [x: string]: any;
}

import * as S from './styles';

function GameTile({
  game = 'lol',
  showGameStatus = false,
  useVideo = false,
  ...props
}: IGameTile) {
  const videoRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const gameThumb = useMemo(() => {
    switch (game) {
      case 'lol':
        return {
          src: lolClientWebp,
          fallback: lolClientPng
        };
      case 'wr':
        return {
          src: wrClientWebp,
          fallback: wrClientPng
        };
      case 'lor':
        return {
          src: lorClientWebp,
          fallback: lorClientPng
        };
      case 'tft':
        return {
          src: tftClientWebp,
          fallback: tftClientPng
        };
      case 'val':
        return {
          src: valClientWebp,
          fallback: valClientPng
        };
      default:
        return {
          src: 'https://i.imgur.com/1q7Q5yL.png',
          fallback: 'https://i.imgur.com/1q7Q5yL.png'
        };
    }
  }, [game]);

  const gameTitle = useMemo(() => {
    switch (game) {
      case 'lol':
        return 'League of Legends';
      case 'wr':
        return 'League of Legends: Wild Rift';
      case 'lor':
        return 'Legends of Runeterra';
      case 'tft':
        return 'Teamfight Tactics';
      case 'val':
        return 'VALORANT';
      default:
        return 'No game found';
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
        return 'No game found';
    }
  }, [game]);

  const gameStatus = useMemo(() => {
    switch (game) {
      case 'lol':
      case 'tft':
      case 'val':
        return 'Instalado';
      default:
        return null;
    }
  }, [game]);

  const gameStatusBg = useMemo(() => {
    switch (game) {
      case 'lol':
        return 'linear-gradient(90deg, #2B8EC3 0%, #0EBFDF 100%)';
      case 'tft':
        return 'linear-gradient(90deg, #FF8326 0%, #FFB226 100%)';
      case 'val':
        return 'linear-gradient(90deg, #FF3945 0%, #FF7663 100%)';
      default:
        return null;
    }
  }, []);

  const gameVideo = useMemo(() => {
    switch (game) {
      case 'lol':
        return lolClientVideo;
      case 'tft':
        return tftClientVideo;
      case 'val':
        return valClientVideo;
      default:
        return null;
    }
  }, [game]);

  const playVideo = useCallback(() => {
    setVideoPlaying(true);
    videoRef.current.play();
  }, []);

  const pauseVideo = useCallback(() => {
    setVideoPlaying(false);
  }, []);

  return (
    <S.GameTile
      onMouseEnter={useVideo ? playVideo : null}
      onMouseLeave={useVideo ? pauseVideo : null}
      {...props}
    >
      <S.GameThumb gameName={game}>
        <S.GameThumbInner
          src={gameThumb.src}
          fallback={gameThumb.fallback}
          hide={videoPlaying ? 0 : 1}
        />
        {gameVideo && useVideo && (
          <S.GameThumbVideo
            src={gameVideo}
            ref={videoRef}
            show={videoPlaying ? 1 : 0}
            onEnded={pauseVideo}
          />
        )}
        {gameStatus && showGameStatus && (
          <S.GameStatus background={gameStatusBg}>{gameStatus}</S.GameStatus>
        )}
      </S.GameThumb>
      <S.GameTitle>
        {gameIcon}
        {gameTitle}
      </S.GameTitle>
    </S.GameTile>
  );
}

export default GameTile;
