import { Player } from '@remotion/player';
import { useState } from 'react';
import './App.css';
import Media from './media/Media';
import VideoComposition from './remotion/VideoComposition';

function App() {
  const [frames, setFrames] = useState<string[]>([]);

  const handleFiles = (files: FileList) => {
    const filesMapped = Array.from(files).map((file, index) => {
      const blob = file.slice(0, file.size, 'image/png');
      const newFile = new File([blob], 'frame' + index + '.png', { type: 'image/png' });
      return URL.createObjectURL(newFile);
    });

    setFrames(filesMapped);
  };

  console.log('frames', frames);
  return (
    <>
      <Media handleFiles={handleFiles} />
      {frames.length > 0 && (
        <Player
          component={VideoComposition}
          inputProps={{
            frames
          }}
          durationInFrames={46}
          fps={30}
          compositionWidth={1280}
          compositionHeight={1280}
          controls
          loop
          style={{
            width: 1280,
            height: 720
          }}
        />
      )}
    </>
  );
}

export default App;
