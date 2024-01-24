export type CustomRouteHandle = Partial<{
  layoutId: LayoutId;
  breadcrumb: () => JSX.Element;
}>;

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export type LayoutId =
  /******************************************************************
   *
   *   System layout
   *
   ******************************************************************/
  | "home"
  | "about"
  | "dashboard"
  | "settings"
  | "last"
  | "empty"
  | "404"
  /******************************************************************
   *
   *   Featured layout
   *
   ******************************************************************/
  | "left"
  | "right"
  /******************************************************************
   *
   *   Functional layout
   *
   ******************************************************************/
  | "random"
  | "password-generator"
  | "count-down"
  | "magic-wheel";

/******************************************************************
 *
 *   Tags to manage/group functional layouts
 *
 ******************************************************************/
export type Tag = "random" | "number" | "alphabet" | "password" | "kahoot";

export type Block = {
  /**
   * layout animation based on id
   */
  id: LayoutId;
  /**
   * introduction information of the block
   */
  icon: string;
  title: string;
  description: string;
  to: string;
  /**
   * organizing blocks by tags and/or favorite
   */
  tags: Tag[];
  favorite: boolean;
  /**
   * decoration color of the block
   */
  color: {
    text: string;
    primaryBg: string;
  };
  /**
   * versioning is required to keep track of the changes made to the block
   */
  versioning: {
    releaseDate: Date;
    major: number;
    minor: number;
  };
};
