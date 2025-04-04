import { useState } from 'react';
import { FileUploadProps } from './properties';
import { com } from 'src/types/common';

const useBindFileUpload = (props: com.qbit.ShellProps<FileUploadProps>) => {
  const { maxSize = 1024, allowedTypes, maxFiles = 1, onChange } = props;

  const [files, setFiles] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);

    if (maxFiles && selectedFiles.length + files.length > maxFiles) {
      setErrorMessage(`You can upload up to ${maxFiles} files.`);
      return;
    }

    const validatedFiles = selectedFiles.filter((file) => {
      if (allowedTypes && allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
        setErrorMessage('Invalid file type.');
        return false;
      }
      if (file.size > maxSize * 1024) {
        setErrorMessage(`File size exceeds ${maxSize}KB.`);
        return false;
      }
      return true;
    });

    if (validatedFiles.length > 0) {
      const newFiles = [...files, ...validatedFiles];
      setFiles(newFiles);
      setErrorMessage('');
      onChange(newFiles);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((_, i) => i !== index);
      onChange(updatedFiles);
      return updatedFiles;
    });
  };

  return { files, handleFileChange, removeFile, errorMessage, maxFiles };
};

export default useBindFileUpload;
