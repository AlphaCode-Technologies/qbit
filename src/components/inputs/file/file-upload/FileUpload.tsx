import { BaseComponent } from '@components/containers';
import { FileUploadProps } from './properties';
import useBindFileUpload from './FileUpload.hook';
import { com } from 'src/types/common';

/**
 * FileUpload component.
 * @param props
 * @returns JSX.Element
 */
const FileUpload: com.qbit.Shell<FileUploadProps> = (props: com.qbit.ShellProps<FileUploadProps>) => {
  const { ...rest } = props;
  const { files, handleFileChange, errorMessage, removeFile, maxFiles } = useBindFileUpload(rest);

  return (
    <BaseComponent
      {...props}
      files={files}
      handleFileChange={handleFileChange}
      errorMessage={errorMessage}
      removeFile={removeFile}
      maxFiles={maxFiles}
    />
  );
};

export default FileUpload;
