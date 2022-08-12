import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilterList, { FilterListProps, FilterOption } from "./FilterList";
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

const options = [
  {
    label: "All",
    value: "all",
    aditionalText: "Proposal",
  },
  {
    label: "Catalyst",
    value: "catalyst",
    icon: <LinkIcon />,
    aditionalText: "10 Proposal",
    tooltipInfo:
      "Your project is created, but it is empty for now. We will upload the files to translate in the next steps.",
  },
  {
    label: "Urbit",
    value: "urbit",
    icon: <LinkIcon />,
    aditionalText: "5 Proposal",
    tooltipInfo:
      "Your project is created, but it is empty for now. We will upload the files to translate in the next steps.",
  },
  {
    label: "Algorand",
    value: "algorand",
    icon: <LinkIcon />,
    aditionalText: "11 Proposal",
    tooltipInfo:
      "Your project is created, but it is empty for now. We will upload the files to translate in the next steps.",
  },
];

const Template: ComponentStory<typeof FilterList> = (args: FilterListProps) => {
  const [selected, setSelected] = React.useState<FilterOption>(options[0]);
  return <FilterList {...args} value={selected} onChange={setSelected} />;
};

export const main = Template.bind({});
main.args = {
  options,
};
