/**
 * Author: Dulan Sudasinghe
 * Date: 15.12.2024
 *
 * This is the common namespace that contains all the common types and interfaces that are shared across the application.
 */
declare namespace com {
  /**
   * Define all typescript utilities here.
   */
  declare namespace utils {
    type ValidateProps<T> = {
      [key in keyof T]: T[key];
    };

    type Version = {
      version: string;
      name: string;
      description: string;
      date: string;
    };
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
    type MouseActions = Partial<com.evt.MouseEvents>;
    type KeyboardActions = Partial<com.evt.KeyboardEvents>;
    type UiActions = Partial<com.evt.UiEvents>;
    type MediaActions = Partial<com.evt.MediaEvents>;
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
    type SkinProps<P, A> = {
      properties: com.utils.ValidateProps<P>;
      actions?: Partial<com.utils.ValidateProps<A>>;
      options?: Partial<
        com.utils.ValidateProps<{
          a11y?: com.opt.A11yProps;
          styles?: com.opt.StyleProps;
        }>
      >;
    };

    type Skin<P, A> = React.FC<SkinProps<P, A>>;

    type BaseShellProps<P, A> = {
      properties: com.utils.ValidateProps<P> & {
        renderer: Skin<P, A>;
      };
    };

    type ShellProps<P, A> = SkinProps<P, A> & BaseShellProps<P, A>;
    type Shell<P, A> = React.FC<ShellProps<P, A>> & PropsWithChildren;

    type AsyncShellProps<P, A> = ShellProps<P, A> & {
      properties: com.utils.ValidateProps<P> & {
        isLoading?: boolean;
        skeleton: React.FC;
      };
    };

    type AsyncShell<P, A> = React.FC<AsyncShellProps<P, A>>;
  }
}
