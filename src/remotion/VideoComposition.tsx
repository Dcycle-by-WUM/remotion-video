import { Img, useCurrentFrame } from 'remotion';

type Props = {
  frames: string[];
};
const VideoComposition = ({ frames }: Props) => {
  const frame = useCurrentFrame();
  if (frame < frames.length) {
    return <Img src={frames[frame]} />;
  } else {
    return <h1 style={{ color: 'black', textAlign: 'center' }}>HOOOLA SOY UN H1 HTML en el frame {frame}</h1>;
  }
};

export default VideoComposition;
