import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import GrantNewsItem from "./GrantNewsItem";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "GrantNewsItem",
  component: GrantNewsItem,
} as ComponentMeta<typeof GrantNewsItem>;

export const Main: ComponentStory<typeof GrantNewsItem> = () => (
  <GrantNewsItem />
);
