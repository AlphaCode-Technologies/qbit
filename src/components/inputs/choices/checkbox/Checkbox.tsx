import { FC, PropsWithChildren } from 'react';
import { Default } from './skins';

type CheckboxProps = {} & PropsWithChildren;

const Checkbox: FC<CheckboxProps> = ({ children }) => {
  return <>{children ?? <Default />}</>;
};

export default Checkbox;
