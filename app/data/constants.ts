//Support at least 10 items
export const layoutIdList = [
  { id: "home", bgColor: "bg-gray-200", primaryBgColor: "bg-gray-300" },
  { id: "about", bgColor: "bg-red-200", primaryBgColor: "bg-red-300" },
  { id: "random", bgColor: "bg-green-200", primaryBgColor: "bg-green-300" },
  {
    id: "password-generator",
    bgColor: "bg-blue-200",
    primaryBgColor: "bg-blue-300",
  },
  { id: "unknown_1", bgColor: "bg-gray-200", primaryBgColor: "bg-gray-300" },
  { id: "unknown_2", bgColor: "bg-gray-200", primaryBgColor: "bg-gray-300" },
  { id: "unknown_3", bgColor: "bg-gray-200", primaryBgColor: "bg-gray-300" },
  { id: "unknown_4", bgColor: "bg-gray-200", primaryBgColor: "bg-gray-300" },
  { id: "unknown_5", bgColor: "bg-gray-200", primaryBgColor: "bg-gray-300" },
  { id: "unknown_6", bgColor: "bg-gray-200", primaryBgColor: "bg-gray-300" },
  { id: "unknown_7", bgColor: "bg-gray-200", primaryBgColor: "bg-gray-300" },
  { id: "unknown_8", bgColor: "bg-gray-200", primaryBgColor: "bg-gray-300" },
  { id: "unknown_9", bgColor: "bg-gray-200", primaryBgColor: "bg-gray-300" },
] as const;

export type TLayoutId = (typeof layoutIdList)[number]["id"];

export type TRouteHandle = Partial<{
  layoutId: TLayoutId;
}>;
