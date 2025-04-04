import { FileUploadProps } from '@components/inputs/file/file-upload/properties';
import { com } from 'src/types/common';

const FileUploadSkin: com.qbit.Skin<FileUploadProps> = (props: com.qbit.SkinProps<FileUploadProps>) => {
  const { files, handleFileChange, removeFile, errorMessage, testId, disabled, maxFiles } = props;

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
              fill="#D92D20"
            />
            <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#FDFDFD" />
            <path
              d="M11.7491 32V25.4545H14.3315C14.8279 25.4545 15.2508 25.5494 15.6003 25.739C15.9497 25.9265 16.216 26.1875 16.3993 26.522C16.5847 26.8544 16.6773 27.2379 16.6773 27.6726C16.6773 28.1072 16.5836 28.4908 16.3961 28.8232C16.2086 29.1555 15.9369 29.4144 15.5811 29.5998C15.2274 29.7852 14.7991 29.8778 14.2963 29.8778H12.6503V28.7688H14.0726C14.3389 28.7688 14.5584 28.723 14.731 28.6314C14.9057 28.5376 15.0356 28.4087 15.1209 28.2447C15.2082 28.0785 15.2519 27.8878 15.2519 27.6726C15.2519 27.4553 15.2082 27.2656 15.1209 27.1037C15.0356 26.9396 14.9057 26.8129 14.731 26.7234C14.5562 26.6317 14.3347 26.5859 14.0662 26.5859H13.1329V32H11.7491ZM19.8965 32H17.5762V25.4545H19.9157C20.5741 25.4545 21.1408 25.5856 21.616 25.8477C22.0911 26.1076 22.4565 26.4815 22.7122 26.9695C22.97 27.4574 23.0989 28.0412 23.0989 28.7209C23.0989 29.4027 22.97 29.9886 22.7122 30.4787C22.4565 30.9687 22.089 31.3448 21.6096 31.6069C21.1323 31.869 20.5613 32 19.8965 32ZM18.9601 30.8143H19.839C20.2481 30.8143 20.5922 30.7418 20.8713 30.5969C21.1526 30.4499 21.3635 30.223 21.5041 29.9162C21.6469 29.6072 21.7183 29.2088 21.7183 28.7209C21.7183 28.2372 21.6469 27.842 21.5041 27.5352C21.3635 27.2283 21.1536 27.0025 20.8745 26.8576C20.5954 26.7127 20.2513 26.6403 19.8422 26.6403H18.9601V30.8143ZM24.1241 32V25.4545H28.4579V26.5955H25.5079V28.1552H28.1702V29.2962H25.5079V32H24.1241Z"
              fill="#FDFDFD"
            />
          </svg>
        );
      case 'mp3':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" fill="white" />
            <circle cx="18" cy="20" r="15" fill="none" stroke="black" stroke-width="2" />
            <polygon points="10,10 30,20 10,30" fill="black" />
          </svg>
        );
      case 'mp4':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" fill="#ADD8E6" />
            <rect x="5" y="8" width="30" height="25" fill="none" stroke="black" stroke-width="2" />
            <polygon points="12,12 30,22 12,30" fill="black" />
          </svg>
        );
      case 'doc':
      case 'docx':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
              fill="#155EEF"
            />
            <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#FDFDFD" />
            <text x="10" y="28" font-family="Arial" font-size="10" font-weight="bold" fill="white">
              DOC
            </text>
          </svg>
        );
      case 'xls':
      case 'xlsx':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
              fill="#28A745"
            />
            <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#FDFDFD" />
            <text x="10" y="28" font-family="Arial" font-size="10" font-weight="bold" fill="white">
              xlsx
            </text>
          </svg>
        );
      case 'ppt':
      case 'pptx':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z"
              fill="#D32F2F"
            />
            <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="#FDFDFD" />
            <text x="10" y="28" font-family="Arial" font-size="10" font-weight="bold" fill="white">
              pptx
            </text>
          </svg>
        );
      case 'zip':
      case 'rar':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
            <rect x="8" y="12" width="48" height="40" rx="2" fill="#f0f0f0" stroke="#555" stroke-width="1" />
            <rect x="18" y="20" width="8" height="12" fill="#3a6ea5" stroke="#2a4e7a" stroke-width="1" />
            <rect x="28" y="20" width="8" height="12" fill="#3a6ea5" stroke="#2a4e7a" stroke-width="1" />
            <rect x="38" y="20" width="8" height="12" fill="#3a6ea5" stroke="#2a4e7a" stroke-width="1" />
            <path d="M56 12v8h-8z" fill="#ddd" stroke="#555" stroke-width="1" />
            <text x="32" y="48" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#333">
              .rar
            </text>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 20 20" fill="none">
            <path
              d="M11.6666 1.89118V5.33329C11.6666 5.8 11.6666 6.03336 11.7575 6.21162C11.8374 6.36842 11.9649 6.4959 12.1217 6.5758C12.2999 6.66663 12.5333 6.66663 13 6.66663H16.4421M16.6666 8.32348V14.3333C16.6666 15.7334 16.6666 16.4335 16.3942 16.9683C16.1545 17.4387 15.772 17.8211 15.3016 18.0608C14.7668 18.3333 14.0668 18.3333 12.6666 18.3333H7.33331C5.93318 18.3333 5.23312 18.3333 4.69834 18.0608C4.22793 17.8211 3.84548 17.4387 3.6058 16.9683C3.33331 16.4335 3.33331 15.7334 3.33331 14.3333V5.66663C3.33331 4.26649 3.33331 3.56643 3.6058 3.03165C3.84548 2.56124 4.22793 2.17879 4.69834 1.93911C5.23312 1.66663 5.93318 1.66663 7.33331 1.66663H10.0098C10.6213 1.66663 10.927 1.66663 11.2147 1.7357C11.4698 1.79694 11.7137 1.89795 11.9374 2.03503C12.1897 2.18963 12.4058 2.40582 12.8382 2.8382L15.4951 5.49505C15.9275 5.92743 16.1436 6.14362 16.2982 6.39591C16.4353 6.61959 16.5363 6.86346 16.5976 7.11855C16.6666 7.40627 16.6666 7.712 16.6666 8.32348Z"
              stroke="#A4A7AE"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
    }
  };

  return (
    <div
      className={`p-5 border border-gray-300 rounded-lg shadow-md ${disabled ? 'cursor-not-allowed bg-gray-200' : 'cursor-pointer bg-white'}`}
      data-testid={testId}
      aria-disabled={disabled}
    >
      <div className="flex flex-col items-center">
        <label
          className={`w-full flex flex-col items-center p-6 border-2 border-dashed rounded-lg ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <input
            role="button"
            disabled={disabled}
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
          <span className="text-lg font-semibold text-gray-700">Click to upload</span>
          <span className="text-sm text-gray-500">or drag and drop</span>
          <span className="text-xs text-gray-400">
            {files?.length}/{maxFiles}
          </span>
        </label>

        {errorMessage && <p className="mt-2 text-sm text-red-500">{errorMessage}</p>}

        <div className="mt-4 grid grid-cols-3 gap-3">
          {files?.map((file, index) => (
            <div key={index} className="relative border rounded-lg p-2">
              {file.type.startsWith('image') ? (
                <img src={URL.createObjectURL(file)} alt={file.name} className="w-20 h-20 object-cover rounded-lg" />
              ) : (
                <div className="flex flex-col items-center">
                  <span className="text-3xl">{getFileIcon(file.name)}</span>
                  <p className="text-xs text-gray-700 text-center truncate w-full">{file.name}</p>
                  <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                </div>
              )}
              <button
                onClick={() => removeFile?.(index)}
                className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full"
                data-testid="remove-file-button"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileUploadSkin;
