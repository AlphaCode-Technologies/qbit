import { BaseComponent } from '@components/containers';
import { useBindSkin } from './TextInput.hook';
import { TextInputProps } from './properties';
import { com } from 'src/types/common';

/**
 * Simple TextInput component.
 * @param props
 * @returns
 */
const TextInput: com.qbit.Shell<TextInputProps> = (props: com.qbit.ShellProps<TextInputProps>) => {
  const bindHandlers = useBindSkin(props);

  return <BaseComponent {...bindHandlers} />;
};

export default TextInput;
