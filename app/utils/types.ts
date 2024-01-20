export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export type LayoutId =
  | "home"
  | "about"
  | "random"
  | "password-generator"
  | "count-down"
  | "magic-wheel"
  | "404"
  | "left"
  | "right"
  | "lastBlock";

export type Tag = "random" | "number" | "alphabet" | "password" | "kahoot";

export type CustomRouteHandle = Partial<{
  layoutId: LayoutId;
  breadcrumb: () => JSX.Element;
}>;

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
    bg: string;
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

export type BlockProps = {
  layoutId: LayoutId;
  bgColor: string;
};
