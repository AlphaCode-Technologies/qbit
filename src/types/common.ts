/* eslint-disable @typescript-eslint/no-namespace */
// DEV NOTE: Ensure there are no import statements in this file
/**
 * @Author Dulan Sudasinghe
 * @created Date: 15.12.2024
 *
 * @description This file contains common types and interfaces shared across the application.
 */

export const __com_runtime__ = {}; // Prevents empty `{}` issue in the build

export namespace com {
  export namespace utils {
    export type Property<T extends object> = { [key in keyof T]: T[key] };

    /**
     * @deprecated Use Property instead
     */
    export type ValidateProps<T> = { [key in keyof T]: T[key] };

    export type Version = {
      version: string;
      name: string;
      description: string;
      date: string;
    };

    export type ValidTypes =
      | string
      | number
      | boolean
      | object
      | null
      | undefined
      | Array<string | number | boolean | object>;
  }

  export namespace evt {
    export type MouseEvents = {
      onClick: React.MouseEventHandler;
      onMouseDown: React.MouseEventHandler;
      onMouseUp: React.MouseEventHandler;
      onMouseEnter: React.MouseEventHandler;
      onMouseLeave: React.MouseEventHandler;
    };

    export type KeyboardEvents = {
      onKeyDown: React.KeyboardEventHandler;
      onKeyPress: React.KeyboardEventHandler;
      onKeyUp: React.KeyboardEventHandler;
    };

    export type UiEvents = {
      onChange: React.ChangeEventHandler;
      onFocus: React.FocusEventHandler;
      onBlur: React.FocusEventHandler;
    };

    export type FormEvents = {
      onSubmit: React.FormEventHandler;
      onReset: React.FormEventHandler;
    };
  }

  export namespace act {
    export type MouseActions = Partial<evt.MouseEvents>;
    export type KeyboardActions = Partial<evt.KeyboardEvents>;
    export type UiActions = Partial<evt.UiEvents>;
  }

  export namespace qbit {
    export type KeyExtractor<V extends utils.ValidTypes = string> = (value: V, i: number) => string;

    export type BaseProps = utils.Property<{
      value?: any;
      name?: string;
      disabled?: boolean;
      keyExtractor?: KeyExtractor;
    }> &
      opt.StyleProps &
      opt.A11yProps;

    export type DefaultBaseProps = utils.Property<{ value?: any }>;

    export type SkinProps<P extends BaseProps> = React.PropsWithChildren<P>;
    export type Skin<P extends BaseProps> = React.ComponentType<SkinProps<P>>;

    export type RenderProps<P extends BaseProps, C extends BaseProps = any> = utils.Property<{
      renderer?: Skin<P>;
      childRenderer?: Skin<C>;
    }>;

    export type ShellProps<P extends BaseProps, C extends BaseProps = any> = SkinProps<P> &
      utils.Property<{
        renderers?: RenderProps<P, C>;
      }>;

    export type Shell<P extends BaseProps, C extends BaseProps = any> = React.ComponentType<ShellProps<P, C>>;
  }

  export namespace opt {
    export type A11yProps = {
      role?: string;
      title?: string;
      tabIndex?: number;
      'aria-label'?: string;
    };

    export type StyleProps = {
      className?: string;
      style?: React.CSSProperties;
    };
  }

  export namespace elem {
    export type SkinProps<P, A> = {
      properties: utils.ValidateProps<P>;
      actions?: Partial<utils.ValidateProps<A>>;
      options?: Partial<utils.ValidateProps<{ a11y?: opt.A11yProps; styles?: opt.StyleProps }>>;
    };

    export type Skin<P, A> = React.FC<SkinProps<P, A>>;

    export type BaseShellProps<P, A> = {
      properties: utils.ValidateProps<P> & { renderer: Skin<P, A> };
    };

    export type ShellProps<P, A> = SkinProps<P, A> & BaseShellProps<P, A>;
    export type Shell<P, A> = React.FC<ShellProps<P, A>> & React.PropsWithChildren;

    export type AsyncShellProps<P, A> = ShellProps<P, A> & {
      properties: utils.ValidateProps<P> & { isLoading?: boolean; skeleton: React.FC };
    };

    export type AsyncShell<P, A> = React.FC<AsyncShellProps<P, A>>;
  }
}
