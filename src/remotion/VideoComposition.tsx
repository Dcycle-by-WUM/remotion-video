import { Img, useCurrentFrame } from 'remotion';

type Props = {
  frames: string[];
};
const VideoComposition = ({ frames }: Props) => {
  const frame = useCurrentFrame();

  return <Img src={frames[frame]} />;
};

export default VideoComposition;
