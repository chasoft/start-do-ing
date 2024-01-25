/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ABOUT } from "~/routes/about/metadata";
import { HOME } from "~/routes/_index/metadata";
import type { Block, Breakpoint, GroupId } from "~/utils";
import { BLOG } from "~/routes/blog._index/metadata";
import { URL_SHORTENER } from "~/routes/url-shortener._index/metadata";
import { OTHERS } from "~/routes/others._index/metadata";
import { DATE_TIME } from "~/routes/date-time._index/metadata";
import { DEV_UTILS } from "~/routes/dev-utils._index/metadata";
import { DOMAINS } from "~/routes/domains._index/metadata";
import { KAHOOT } from "~/routes/kahoot._index/metadata";
import { LANGUAGES } from "~/routes/languages._index/metadata";
import { MATHS } from "~/routes/maths._index/metadata";
import { RANDOM } from "~/routes/random._index/metadata";
import { DATE_TIME_ANALOG_CLOCK } from "~/routes/date-time.analog-clock/metadata";
import { DATE_TIME_CALCULATOR } from "~/routes/date-time.calculator/metadata";
import { DATE_TIME_CALENDAR } from "~/routes/date-time.calendar/metadata";
import { DATE_TIME_COUNT_DOWN } from "~/routes/date-time.count-down/metadata";
import { DATE_TIME_DIGITAL_CLOCK } from "~/routes/date-time.digital-clock/metadata";
import { DEV_UTILS_BASE64 } from "~/routes/dev-utils.base64/metadata";
import { DEV_UTILS_CURL_CONVERTER } from "~/routes/dev-utils.curl-converter/metadata";
import { DEV_UTILS_HASH_GENERATOR } from "~/routes/dev-utils.hash-generator/metadata";
import { DEV_UTILS_LOREM_IPSUM_GENERATOR } from "~/routes/dev-utils.lorem-ipsum-generator/metadata";
import { DEV_UTILS_MARKDOWN_EDITOR } from "~/routes/dev-utils.markdown-editor/metadata";
import { DEV_UTILS_SQL_FORMATTER } from "~/routes/dev-utils.sql-formatter/metadata";
import { DEV_UTILS_STRING_CONVERTER } from "~/routes/dev-utils.string-converter/metadata";
import { DOMAINS_BUILDER } from "~/routes/domains.builder/metadata";
import { DOMAINS_EXTENSIONS } from "~/routes/domains.extensions/metadata";
import { DOMAINS_WHOIS } from "~/routes/domains.whois/metadata";
import { KAHOOT_QUIZ } from "~/routes/kahoot.quiz/metadata";
import { MATHS_EMPTY_1 } from "~/routes/maths.empty-1/metadata";
import { MATHS_EMPTY_2 } from "~/routes/maths.empty-2/metadata";
import { MATHS_EMPTY_3 } from "~/routes/maths.empty-3/metadata";
import { MATHS_EMPTY_4 } from "~/routes/maths.empty-4/metadata";
import { RANDOM_BY_GROUPS } from "~/routes/random.by-groups/metadata";
import { RANDOM_LOTTERY } from "~/routes/random.lottery/metadata";
import { RANDOM_MAGIC_WHEEL } from "~/routes/random.magic-wheel/metadata";
import { RANDOM_NUMBER } from "~/routes/random.number/metadata";
import { RANDOM_PASSWORD } from "~/routes/random.password/metadata";
import { RANDOM_USERNAME } from "~/routes/random.username/metadata";
import { OTHERS_RUNNING_TEXT } from "~/routes/others.running-text/metadata";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const SITE = {
  title: "Start-Do-Ing",
  description:
    "Welcome to Startdo.ing! Where you can find useful and interesting resources to help you get started.",
  url: "https://startdo.ing",
};

export const breakpoints: Breakpoint[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
];

export const blocks: Record<GroupId, Block[]> = {
  home: [
    HOME,
    ABOUT,
    BLOG,
    DATE_TIME,
    DEV_UTILS,
    DOMAINS,
    KAHOOT,
    LANGUAGES,
    MATHS,
    RANDOM,
    URL_SHORTENER,
    OTHERS,
  ], //(1)
  blog: [BLOG], //(2)
  "date-time": [
    DATE_TIME,
    DATE_TIME_ANALOG_CLOCK,
    DATE_TIME_CALCULATOR,
    DATE_TIME_CALENDAR,
    DATE_TIME_COUNT_DOWN,
    DATE_TIME_DIGITAL_CLOCK,
  ], //(3)
  "dev-utils": [
    DEV_UTILS,
    DEV_UTILS_BASE64,
    DEV_UTILS_CURL_CONVERTER,
    DEV_UTILS_HASH_GENERATOR,
    DEV_UTILS_LOREM_IPSUM_GENERATOR,
    DEV_UTILS_MARKDOWN_EDITOR,
    DEV_UTILS_SQL_FORMATTER,
    DEV_UTILS_STRING_CONVERTER,
  ], //(4)
  domains: [DOMAINS, DOMAINS_BUILDER, DOMAINS_EXTENSIONS, DOMAINS_WHOIS], //(5)
  kahoot: [KAHOOT, KAHOOT_QUIZ], //(6)
  languages: [LANGUAGES], //(7)
  maths: [MATHS, MATHS_EMPTY_1, MATHS_EMPTY_2, MATHS_EMPTY_3, MATHS_EMPTY_4], //(8)
  random: [
    RANDOM,
    RANDOM_BY_GROUPS,
    RANDOM_LOTTERY,
    RANDOM_MAGIC_WHEEL,
    RANDOM_NUMBER,
    RANDOM_PASSWORD,
    RANDOM_USERNAME,
  ], //(9)
  "url-shortener": [URL_SHORTENER], //(10)
  others: [OTHERS, OTHERS_RUNNING_TEXT], //(11)
};

export const DEFAULT_BLOCK: Block = HOME;
