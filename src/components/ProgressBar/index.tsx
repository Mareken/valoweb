import React, { useMemo } from 'react';

interface ProgressBarProps {
  size?: number;
  progress?: number;
  trackWidth?: number;
  trackColor?: string;
  indicatorWidth?: number;
  indicatorColor?: string;
  indicatorCap?: 'round' | 'inherit' | 'butt' | 'square';
  label?: string;
  labelColor?: string;
  spinnerMode?: boolean;
  spinnerSpeed?: number;
}

import * as S from './styles';

function ProgressBar({
  size = 60,
  progress = 0,
  trackWidth = 5,
  trackColor = `#5A2628`,
  indicatorWidth = 5,
  indicatorColor = `#FF4A4D`,
  indicatorCap = 'round',
  label = `l`,
  labelColor = `#333`,
  spinnerMode = false,
  spinnerSpeed = 1
}: ProgressBarProps) {
  const center = useMemo(() => size / 2, [size]);
  const radius = useMemo(
    () => center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    [center, trackWidth, indicatorWidth]
  );
  const dashArray = useMemo(() => 2 * Math.PI * radius, [radius]);
  const dashOffset = useMemo(
    () => dashArray * ((100 - progress) / 100),
    [dashArray, progress]
  );
  const animationDuration = useMemo(() => spinnerSpeed * 1000, [spinnerSpeed]);

  const hideLabel = useMemo(
    () => (size < 100 || !label.length || spinnerMode ? true : false),
    [size, spinnerMode]
  );

  return (
    <>
      <S.Wrapper size={size}>
        <S.Svg size={size}>
          <S.CircleTrack
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={trackColor}
            strokeWidth={trackWidth}
          />
          <S.CircleIndicator
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={indicatorColor}
            strokeWidth={indicatorWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap={indicatorCap}
            isSpinner={spinnerMode}
            animationDuration={`${animationDuration}s`}
          />
        </S.Svg>

        {!hideLabel && (
          <S.LabelContainer labelColor={labelColor}>
            <S.LabelLoading>{label}</S.LabelLoading>

            {!spinnerMode && (
              <S.LabelProgress>
                {`${progress > 100 ? 100 : progress}%`}
              </S.LabelProgress>
            )}
          </S.LabelContainer>
        )}
      </S.Wrapper>
    </>
  );
}

export default ProgressBar;
