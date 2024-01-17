export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export type LayoutId =
  | "home"
  | "about"
  | "random"
  | "password-generator"
  | "countdown"
  | "magic-wheel"
  | "404"
  | "left"
  | "right"
  | "lastBlock";

export type CustomRouteHandle = Partial<{
  layoutId: LayoutId;
}>;

export type Block = {
  id: LayoutId;
  description: string;
  color: {
    text: string;
    bg: string;
    primaryBg: string;
  };
};

export type BlockProps = {
  layoutId: LayoutId;
  bgColor: string;
};
