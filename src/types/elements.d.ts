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

  type ComponentProperties = {
    id?: string;
    name?: string;
    value?: any;
    disabled?: boolean;
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
  } & Required<ComponentProperties, 'name'> & // Requires the `name` property from ComponentProperties.
    Omit<ComponentProperties, 'name'>; // Excludes the `name` property from the rest of ComponentProperties.

  // Defines properties specific to individual Radio buttons.
  type RadioProperties = {
    label?: string;
    selected?: boolean;
  } & Required<ComponentProperties, 'value'> & // Requires the `value` property from ComponentProperties.
    Omit<ComponentProperties, 'name' | 'value' | 'horizontal'>; // Excludes `name`, `value`, and `horizontal` from the rest of ComponentProperties.

  type RadioGroupActions = Partial<com.evt.UiEvents>;

  // #endregion

  // #region SELECT ELEMENT
  type SelectProperties = {
    label?: string;
    optionContainerClassName?: string;
    optionRenderer?: FC<OptionProps>;
    keyExtractor?: (val: SelectOptionProps) => string;
  } & Required<ComponentProperties, 'value'> &
    Omit<ComponentProperties, 'value' | 'horizontal'>;

  type SelectActions = {
    triggerScrollEnd?: () => void;
  } & Partial<com.evt.UiEvents>;

  type SelectOptionProps = {
    selected?: boolean;
  } & Required<ComponentProperties, 'value'> &
    Omit<ComponentProperties, 'name' | 'value' | 'horizontal'>;

  // #endregion

  // #region SELECT ELEMENT
  type SelectProperties = {
    label?: string;
    optionContainerClassName?: string;
    optionRenderer?: FC<OptionProps>;
    keyExtractor?: (val: OptionProperties) => string;
  } & Required<Pick<ComponentProperties, 'value'>> &
    Omit<ComponentProperties, 'value' | 'horizontal'>;

  type SelectActions = {
    onSelect?: (val: any) => void;
    triggerScrollEnd?: () => void;
  };

  type SelectProps = {
    properties: SelectProperties;
    actions: SelectActions;
  } & PropsWithChildren;

  type OptionProperties = {
    selected?: boolean;
  } & Required<Pick<ComponentProperties, 'value'>> &
    Omit<ComponentProperties, 'name' | 'value' | 'horizontal'>;

  type OptionProps = {
    properties: OptionProperties;
    actions?: SelectActions;
  };
  // #endregion

  // #region BUTTON ELEMENT

  // Defines properties specific to Button Loading.
  type ButtonLoadingProperties = {
    isLoading?: boolean;
  } & Omit<ComponentProperties, 'name' | 'tabIndex' | 'horizontal'>;

  // Defines properties specific to Buttons.
  type ButtonProperties = {
    loaderProps?: ButtonLoadingProperties;
  } & Required<ComponentProperties, 'value'> & // Requires the `value` property from ComponentProperties.
    Omit<ComponentProperties, 'value' | 'name' | 'horizontal'>; // Excludes `value`, `name` and `horizontal` from the rest of ComponentProperties.

  type ButtonActions = Partial<com.evt.MouseEvents>;

  // #endregion

  // #region AVATAR ELEMENT

  // Extends the base properties to define specific properties for Avatar component.
  type AvatarProperties = {} & Required<ComponentProperties, 'value'> & // Requires the `value` property from ComponentProperties.
    Omit<ComponentProperties, 'value' | 'name' | 'horizontal'>; // Excludes the `value`, `name` and `horizontal` property from the rest of ComponentProperties.

  type AvatarActions = Partial<com.evt.MouseEvents>;

  // #endregion

  // region CHECKBOX ELEMENT
  type CheckBoxAction = Partial<com.evt.UiEvents>;

  type CheckboxProperties = {
    size?: Size;
  } & Required<ComponentProperties, 'value' | 'name'> &
    Omit<ComponentProperties, 'name' | 'value'>;

  // #endregion

  // #region LOADER ELEMENT

  // Defines properties specific to Loaders.
  type LoaderProperties = {
    isLoading: boolean;
  } & Omit<ComponentProperties, 'name' | 'value' | 'disabled' | 'tabIndex' | 'horizontal'>;

  // #endregion
  type LoaderProps = {
    properties: LoaderProperties;
  };

  // #region BADGES ELEMENT
  type BadgesAction = {
    onClick?: (value: boolean) => void;
    onClose?: (id: string) => void;
  };

  type BadgesProperties = {
    label: string;
    showCloseButton?: boolean;
    size?: Size;
    count?: number;
    checked?: boolean;
    imageSrc?: string;
  } & Pick<ComponentProperties, 'id' | 'disabled' | 'testId', 'renderer'>;

  type BadgesProps = {
    properties: BadgesProperties;
    actions: BadgesAction;
  };
  // #endregion

  // #BREADCRUMBS region
  type BreadcrumbProperties = {
    name: string;
    path: string;
    active: boolean;
    size?: Size;
    index?: number;
    total?: number;
  } & Pick<ComponentProperties, 'id' | 'renderer' | 'disabled' | 'testId'>;

  type BreadcrumbAction = {
    onClick?: (id: string) => void;
  };

  type BreadcrumbProps = {
    properties: BreadcrumbProperties[];
    actions?: BreadcrumbAction;
  } & PropsWithChildren;
  // #endregion

  // region ACCORDION ELEMENT
  type AccordionActions = {
    onToggle: (isOpen: boolean) => void;
  };

  type AccordionProperties = {
    id?: string;
    title: string;
    content: ReactNode;
    isOpen: boolean;
  } & Pick<ComponentProperties, 'id' | 'disabled' | 'testId', 'renderer'>;

  type AccordionProps = {
    properties: AccordionProperties;
    actions: AccordionActions;
  };
  // endregion
}
