import { log } from '@utils/helpers';
import { ListSkinProps } from './List.skin.types';

type ValidTypes = com.utils.ValidTypes;

const ListSkin = <V extends ValidTypes>({ properties, options, children }: ListSkinProps<V>) => {
  const { testId, name } = properties;
  const { styling = {} } = options ?? {};
  const { styles = {}, className = '' } = styling;

  log('@list skin rendering');
  return (
    <ol data-testid={testId} data-name={name} style={styles} className={className}>
      {(children as React.ReactElement[])?.map((child) => {
        const {
          properties: { value },
        } = child.props;
        log('@list-item skin rendering', child);
        return <li key={`simple-list-item-${value}`}>{child}</li>;
      })}
    </ol>
  );
};

export default ListSkin;
