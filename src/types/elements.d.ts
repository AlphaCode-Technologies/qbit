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
    name?: string;
    value?: any;
    disabled?: boolean;
    Renderer?: FC<T>;
    tabIndex?: number;
    horizontal?: boolean;
    testId?: string;
  };

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
}
