import { AbsoluteFill, useVideoConfig } from 'remotion';

export const MyVideo = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#4A1010', color: 'white', fontSize: 80, fontFamily: 'sans-serif' }}>
      Livestream Coffee
    </AbsoluteFill>
  );
};
