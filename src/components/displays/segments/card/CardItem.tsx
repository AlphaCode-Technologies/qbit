import { BaseComponent } from '@components/containers';
import { CardItemProps } from './properties';
import { com } from 'src/types/common';

/**
 * Simple Card-Item component.
 * @param props
 * @returns
 */
const CardItem: com.qbit.Shell<CardItemProps> = (props) => {
  return <BaseComponent {...props} />;
};

export default CardItem;
