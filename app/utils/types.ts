export type CustomRouteHandle = Partial<{
  layoutId: PageId;
  breadcrumb: () => JSX.Element;
}>;

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export type GroupId =
  | "home" //(1)
  | "blog" //(2)
  | "date-time" //(3)
  | "dev-utils" //(4)
  | "domains" //(5)
  | "kahoot" //(6)
  | "languages" //(7)
  | "maths" //(8)
  | "random" //(9)
  | "url-shortener" //(10)
  | "others"; //(11)

export type PageId =
  | GroupId
  /******************************************************************
   * (1) home / System pages
   ******************************************************************/
  | "404"
  | "about"
  | "dashboard"
  | "empty"
  | "last"
  | "left"
  | "right"
  | "settings"
  /******************************************************************
   * (2) blog
   ******************************************************************/
  | "blog-post"
  /******************************************************************
   * (3) date-time
   ******************************************************************/
  | "date-time-analog-clock"
  | "date-time-calculator"
  | "date-time-calendar"
  | "date-time-count-down"
  | "date-time-digital-clock"
  /******************************************************************
   * (4) dev-utils
   ******************************************************************/
  | "dev-utils-base64"
  | "dev-utils-curl-converter"
  | "dev-utils-hash-generator"
  | "dev-utils-lorem-ipsum-generator"
  | "dev-utils-markdown-editor"
  | "dev-utils-sql-formatter"
  | "dev-utils-string-converter"
  /******************************************************************
   * (5) domains
   ******************************************************************/
  | "domains-builder"
  | "domains-extensions"
  | "domains-whois"
  /******************************************************************
   * (6) kahoot
   ******************************************************************/
  | "kahoot-quiz"
  /******************************************************************
   * (7) languages
   ******************************************************************/
  | "100-popular-chinese-words"
  | "chinese-characters"
  | "vietnamese-reading-for-kids"
  /******************************************************************
   * (8) maths
   ******************************************************************/
  | "maths-empty-1"
  | "maths-empty-2"
  | "maths-empty-3"
  | "maths-empty-4"
  /******************************************************************
   * (9) random
   ******************************************************************/
  | "random-by-groups"
  | "random-lottery"
  | "random-magic-wheel"
  | "random-number"
  | "random-password"
  | "random-username"
  /******************************************************************
   * (10) url-shortener
   ******************************************************************/
  | "url-shortener-empty-1"
  /******************************************************************
   * (11) others
   ******************************************************************/
  | "others-running-text";

export type Block = {
  /**
   * layout animation based on id
   */
  id: PageId;
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
  group: GroupId[];
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
