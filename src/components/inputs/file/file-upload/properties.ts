import { com } from 'src/types/common';

export type FileUploadProps = com.qbit.BaseProps &
  com.act.UiActions &
  com.act.MouseActions & {
    maxSize?: number;
    allowedTypes?: string[];
    maxFiles?: number;
    onChange: (files: File[]) => void;
    testId?: string;
    disabled?: boolean;
    files?: File[];
    handleFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    removeFile?: (index: number) => void;
    errorMessage?: string;
  };
