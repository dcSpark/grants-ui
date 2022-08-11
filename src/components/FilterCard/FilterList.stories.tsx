import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilterList, { FilterListProps } from "./FilterList";
import LinkIcon from "../assets/LinkIcon";

export default {
  title: "Components/FilterList",
  component: FilterList,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["dcspark", "milkomeda", "flint"],
      },
    },
  },
} as ComponentMeta<typeof FilterList>;

const Template: ComponentStory<typeof FilterList> = (args: FilterListProps) => (
  <FilterList {...args} />
);

export const main = Template.bind({});
main.args = {
  options: [
    {
      label: "All",
      value: "all",
      icon: <LinkIcon />,
      aditionalText: "Proposal",
      tooltipInfo: "Heres about ..",
    },
    {
      label: "Catalyst",
      value: "catalyst",
      icon: <LinkIcon />,
      aditionalText: "10 Proposal",
      tooltipInfo: "Heres about ..",
    },
    {
      label: "Urbit",
      value: "urbit",
      icon: <LinkIcon />,
      aditionalText: "5 Proposal",
      tooltipInfo: "Heres about ..",
    },
    {
      label: "Algorand",
      value: "algorand",
      icon: <LinkIcon />,
      aditionalText: "11 Proposal",
      tooltipInfo: "Heres about ..",
    },
  ],
};
