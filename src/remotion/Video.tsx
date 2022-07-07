import React from 'react';
import { Composition } from 'remotion';
import VideoComposition from './VideoComposition';
export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition id='my-comp' component={VideoComposition} durationInFrames={46} fps={60} width={1280} height={1280} />
    </>
  );
};
