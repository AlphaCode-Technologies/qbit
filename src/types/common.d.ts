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
    type ValidateProps<T extends object> = {
      [key in keyof T]: T[key];
    };

    type Version = {
      version: string;
      name: string;
      description: string;
      date: string;
    };

    type ValidTypes =
      | string
      | number
      | boolean
      | object
      | null
      | undefined
      | Array<string | number | boolean | object | symbol>;
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

  /**
   * Define all component options here.
   */
  declare namespace opt {
    type A11yProps = {
      role?: string;
      title?: string;
      tabIndex?: number;
      'aria-label'?: string;
    };

    type StyleProps = {
      className?: string;
      styles?: React.CSSProperties;
    };
  }

  /**
   * Define all your common element types here.
   */
  declare namespace elem {
    type Properties<P> = Partial<com.utils.ValidateProps<P>>;
    type Actions<A> = Partial<com.utils.ValidateProps<A>>;
    type Options<O> = Partial<com.utils.ValidateProps<O>>;
    type Renderers<R> = com.utils.ValidateProps<R>;

    /** Base skin props which will be injected directly to the
     * skin component.
     */
    type SkinProps<P, A, O = object> = React.PropsWithChildren<{
      properties: Properties<
        {
          // Write all default component properties here
          id?: string;
          name?: string;
          disabled?: boolean;
          testId?: string;
        } & P
      >;
      actions?: Actions<A>;
      options?: Options<
        {
          // Default options
          a11y?: com.opt.A11yProps;
          styling?: com.opt.StyleProps;
          keyExtractor?: <V = any>(value: V) => string;
        } & O
      >;
    }>;

    /**
     * Skin type component or the renderer component.
     */
    type Skin<P, A> = React.FC<SkinProps<P, A>>;

    /**
     * Properties of the Shell component.
     */
    type ShellProps<P, A> = SkinProps<P, A> & {
      renderers: Renderers<{
        renderer: Skin<P, A>;
        subRenderer?: Skin<P, A>;
        skeletonRenderer?: Skin<P, A>;
      }>;
    };

    /**
     * Parent component or
     */
    type Shell<P, A> = React.FC<ShellProps<P, A>>;

    /**
     * If the component contains child components
     * Define the SubShell with
     */
    type SubShellProps<P, A> = SkinProps<P, A> & {
      renderers?: Renderers<{
        renderer?: Skin<P, A>;
      }>;
    };

    type SubShell<P, A> = React.FC<SubShellProps<P, A>>;
  }
}
