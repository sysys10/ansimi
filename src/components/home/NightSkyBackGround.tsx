import React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  Rect,
  Path,
  Circle,
  G,
  Filter,
  FeGaussianBlur,
} from 'react-native-svg';

export const NightSkyBackground = () => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 360 800">
      <Defs>
        <LinearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#161616" />
          <Stop offset="40%" stopColor="#1C1B24" />
          <Stop offset="80%" stopColor="#272442" />
          <Stop offset="100%" stopColor="#302B5E" />
        </LinearGradient>

        <RadialGradient
          id="starGlow"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%">
          <Stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <Stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </RadialGradient>

        <Filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <FeGaussianBlur in="SourceGraphic" stdDeviation="1" />
        </Filter>
      </Defs>

      {/* 배경 */}
      <Rect width="360" height="800" fill="url(#skyGradient)" />

      {/* 은하수 느낌의 그라데이션 */}
      <Path
        d="M0 200 Q180 300 360 150 Q180 400 0 300"
        fill="#302B5E"
        opacity="0.1"
      />

      {/* 별들 */}
      <G opacity="0.6">
        <Circle cx="50" cy="150" r="1" fill="white" />
        <Circle cx="120" cy="80" r="1.2" fill="white" />
        <Circle cx="200" cy="120" r="1" fill="white" />
        <Circle cx="280" cy="90" r="1.4" fill="white" />
        <Circle cx="330" cy="180" r="1" fill="white" />
        <Circle cx="90" cy="220" r="1.3" fill="white" />
        <Circle cx="160" cy="200" r="1" fill="white" />
        <Circle cx="240" cy="230" r="1.2" fill="white" />
        <Circle cx="310" cy="250" r="1" fill="white" />
        <Circle cx="40" cy="300" r="1.1" fill="white" />
        <Circle cx="140" cy="280" r="1" fill="white" />
      </G>

      {/* 빛나는 큰 별들 */}
      <G opacity="0.8">
        <Circle cx="80" cy="100" r="1.5" fill="white" filter="url(#glow)" />
        <Circle cx="250" cy="180" r="1.5" fill="white" filter="url(#glow)" />
        <Circle cx="180" cy="250" r="1.5" fill="white" filter="url(#glow)" />
      </G>
    </Svg>
  );
};
