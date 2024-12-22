import { LitItemSkinProps } from './ListItem.skin.types';

type ValidTypes = com.utils.ValidTypes;

const ListItemSkin = <V extends ValidTypes>({ properties, actions, options }: LitItemSkinProps<V>) => {
  const { label, disabled } = properties;
  const { onClick } = actions ?? {};
  const { styling = {} } = options ?? {};
  const { className = '', styles = {} } = styling;

  return (
    <div>
      <button
        disabled={disabled}
        className={`bg-purple-400 disabled:bg-red-400 ${className}`}
        style={styles}
        onClick={(e) => onClick?.(e)}
      >
        {label}
      </button>
    </div>
  );
};

export default ListItemSkin;
