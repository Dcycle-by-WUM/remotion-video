import { ChangeEvent } from 'react';

type Props = {
  handleFiles: (files: FileList) => void;
};
function Media({ handleFiles }: Props) {
  const onChangeFiles = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length > 0) {
      const files = target.files;
      handleFiles(files);
    }
  };

  return (
    <form className='uploader' encType='multipart/form-data'>
      <input type='file' id='file' multiple onChange={onChangeFiles} />
    </form>
  );
}

export default Media;
