import { BaseComponent } from '@components/containers';
import { com } from 'src/types/common';
import { useBindSkin } from './TextInput.hook';
import { TextInputProps } from './properties';

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
