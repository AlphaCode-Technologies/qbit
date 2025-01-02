// DEV NOTE:  Ensure there are no import statement in this file
/**
 * @Author Dulan Sudasinghe
 * @created Date: 15.12.2024
 *
 * @description This is the common namespace that contains all the common types and interfaces that are shared across the application.
 */
declare namespace com {
  /**
   * Define all typescript utilities here.
   */
  declare namespace utils {
    type Property<T extends object> = {
      [key in keyof T]: T[key];
    };

    type Version = {
      version: string;
      name: string;
      description: string;
      date: string;
    };

    type ValidTypes = string | number | boolean | object | null | undefined | Array<string | number | boolean | object>;
  }

  /**
   * Define all your common events here
   */
  declare namespace evt {
    type MouseEvents = {
      onClick: React.MouseEventHandler;
      onMouseDown: React.MouseEventHandler;
      onMouseUp: React.MouseEventHandler;
      onMouseEnter: React.MouseEventHandler;
      onMouseLeave: React.MouseEventHandler;
    };

    type KeyboardEvents = {
      onKeyDown: React.KeyboardEventHandler;
      onKeyPress: React.KeyboardEventHandler;
      onKeyUp: React.KeyboardEventHandler;
    };

    type UiEvents = {
      onChange: React.ChangeEventHandler;
      onFocus: React.FocusEventHandler;
      onBlur: React.FocusEventHandler;
    };

    type FormEvents = {
      onSubmit: React.FormEventHandler;
      onReset: React.FormEventHandler;
    };
  }

  /**
   * Define all your user interface actions here.
   * Use partials as these should be optional.
   */
  declare namespace act {
    type MouseActions = Action<Partial<com.evt.MouseEvents>>;
    type KeyboardActions = Action<Partial<com.evt.KeyboardEvents>>;
    type UiActions = Action<Partial<com.evt.UiEvents>>;
    type MediaActions = Action<Partial<com.evt.MediaEvents>>;
  }

  // /**
  //  * Define all component options here.
  //  */
  // declare namespace opt {
  //   type A11yProps = {
  //     role?: string;
  //     title?: string;
  //     tabIndex?: number;
  //     'aria-label'?: string;
  //   };

  //   type StyleProps = {
  //     className?: string;
  //     styles?: React.CSSProperties;
  //   };
  // }

  /**
   * Type definitions for all common/generic element development.
   */
  declare namespace elem {
    type KeyExtractor<V extends com.utils.ValidTypes = string> = (value: V, i: number) => string;
    /**
     * Basic properties to be adhered by the component. These properties
     * should be common for all components.
     */
    type BaseProps = com.utils.Property<{
      value?: any;
      name?: string;
      disabled?: boolean;
      keyExtractor?: KeyExtractor;
    }>;

    type DefaultBaseProps = com.utils.Property<{
      value?: any;
    }>;

    /**
     * Definition of `Skin properties`.
     */
    type SkinProps<P extends BaseProps> = React.PropsWithChildren<P>;
    /**
     * Definition of skin  component. All skins should implement this
     */
    type Skin<P extends BaseProps> = React.ComponentType<SkinProps<P>>;

    /**
     * All components gets a renderer and a child renderer.
     * The *`renderer`* is by default the __`Skin`__ component. If a child renderer
     * is specified that means the component will contain child elements where
     * the default child renderer is specified in the ComponentProps. Unless otherwise
     * the *`renderer`* attribute is specified in the __`Child`__ component.
     */
    type RenderProps<P extends BaseProps, C extends BaseProps = any> = com.utils.Property<{
      renderer?: Skin<P>;
      childRenderer?: Skin<C>;
    }>;

    /**
     * The component properties that are common for all components.
     * This is the main component that should be used by all components.
     */
    type ComponentProps<P extends BaseProps, C extends BaseProps = any> = SkinProps<P> &
      com.utils.Property<{
        renderers?: RenderProps<P, C>;
      }>;

    /**
     * All components should use thisComponent type
     */
    type Component<P extends BaseProps, C extends BaseProps = any> = React.ComponentType<ComponentProps<P, C>>;
  }
}
