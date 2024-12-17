/**
 * Author: Dulan Sudasinghe
 * Date: 15.12.2024
 */
declare namespace AlphaElements {
  // #region COMMON ELEMENT

  type Action = {
    [key: string]: function;
  };

  type Property = {
    [key: string]: any;
  };

  type Manifest = {
    name: string;
    actions: Action[];
    properties: Property[];
  };

  type ComponentProperties<T = any> = {
    id?: string;
    name?: string;
    value?: any;
    disabled?: boolean;
    Renderer?: FC<T>;
    tabIndex?: number;
    horizontal?: boolean;
    testId?: string;
  };

  type Size = 'sm' | 'md' | 'lg' | 'xl';

  // #endregion

  // #region RADIO ELEMENT

  // Extends the base properties to define specific properties for a RadioGroup component.
  type RadioGroupProperties = {
    keyExtractor?: (val: RadioProperties) => string;
  } & Required<Pick<ComponentProperties, 'name' | 'Renderer'>> & // Requires the `name` property from ComponentProperties.
    Omit<ComponentProperties, 'name'>; // Excludes the `name` property from the rest of ComponentProperties.

  // Defines properties specific to individual Radio buttons.
  type RadioProperties = {
    label?: string;
    selected?: boolean;
  } & Required<Pick<ComponentProperties, 'value'>> & // Requires the `value` property from ComponentProperties.
    Omit<ComponentProperties, 'name' | 'value' | 'horizontal'>; // Excludes `name`, `value`, and `horizontal` from the rest of ComponentProperties.

  type RadioGroupActions = {
    onChange?: (val: any) => void;
  };

  type RadioGroupProps = {
    properties: RadioGroupProperties;
    actions: RadioGroupActions;
  } & PropsWithChildren; // Allows the RadioGroup to have nested child components.

  type RadioProps = {
    properties: RadioProperties;
    actions?: RadioGroupActions;
  };

  // #endregion

  // #region AVATAR ELEMENT

  // Extends the base properties to define specific properties for Avatar component.
  type AvatarProperties = {} & Required<Pick<ComponentProperties, 'value' | 'Renderer'>> & // Requires the `value` and `Renderer` property from ComponentProperties.
    Omit<ComponentProperties, 'value' | 'name' | 'horizontal'>; // Excludes the `value`, `name` and `horizontal` property from the rest of ComponentProperties.

  type AvatarActions = {
    onClick?: () => void;
  };

  type AvatarProps = {
    properties: AvatarProperties;
    actions?: AvatarActions;
  };
  // #endregion

  // region CHECKBOX ELEMENT
  type CheckBoxAction = {
    onChange: (value: boolean) => void;
  };

  type CheckboxProperties = {
    size?: Size;
  } & Required<Pick<ComponentProperties, 'value' | 'name'>> &
    Omit<ComponentProperties, 'name' | 'value'>;

  type CheckboxProps = {
    properties: CheckboxProperties;
    actions?: CheckBoxAction;
  };
  // #endregion

  // #region LOADER ELEMENT

  // Defines properties specific to Loaders.
  type LoaderProperties = {
    isLoading: boolean;
  } & Required<Pick<ComponentProperties, 'Renderer'>> &
    Omit<ComponentProperties, 'name' | 'value' | 'disabled' | 'tabIndex' | 'horizontal'>;

  type LoaderProps = {
    properties: LoaderProperties;
  };
}
