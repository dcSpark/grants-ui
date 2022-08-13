import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TabGroup, { TabGroupProps } from "./TabGroup";

export default {
  title: "Components/TabGroup",
  component: TabGroup,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["dcspark", "milkomeda", "flint"],
      },
    },
  },
} as ComponentMeta<typeof TabGroup>;

const options = [
  { name: "Tab Group 1", component: "Welcome 1" },
  { name: "Tab Group 2", component: "Welcome 2" },
];

const Template: ComponentStory<typeof TabGroup> = (args: TabGroupProps) => (
  <TabGroup {...args} />
);

export const main = Template.bind({});
main.args = {
  options,
};
