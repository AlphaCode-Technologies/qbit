import { SkinProps } from './List.skin.types';

const ListSkin = <V extends object>({ properties, actions, options, children }: SkinProps<V>) => {
  const { id, name } = properties;
  const { styling = {} } = options ?? {};
  const { styles = {} } = styling;
  const { onClick } = actions ?? {};
  return (
    <ol id={id} data-name={name} style={styles}>
      {(children as React.ReactElement[])?.map((child, i) => {
        return (
          <li key={`simple-list-item-${i}`} onClick={onClick}>
            {child}
          </li>
        );
      })}
    </ol>
  );
};

export default ListSkin;
