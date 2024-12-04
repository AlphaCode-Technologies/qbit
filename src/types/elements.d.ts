declare namespace AlphaElements {
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

  type ComponentProperties = {
    name?: string;
    value?: any;
    disabled?: boolean;
    Renderer?: FC<RadioProps>;
    tabIndex?: number;
    horizontal?: boolean;
  };

  type RadioGroupProperties = {
    keyExtractor?: (val: RadioProperties) => string;
  } & Required<Pick<ComponentProperties, 'name'>> &
    Omit<ComponentProperties, 'name'>;

  type RadioProperties = {
    label?: string;
    selected?: boolean;
  } & Required<Pick<ComponentProperties, 'value'>> &
    Omit<ComponentProperties, 'name' | 'value' | 'horizontal'>;

  type RadioGroupActions = {
    onChange?: (val: any) => void;
  };

  type RadioGroupProps = {
    properties: RadioGroupProperties;
    actions: RadioGroupActions;
  } & PropsWithChildren;

  type RadioProps = {
    properties: RadioProperties;
    actions?: RadioGroupActions;
  };
}
