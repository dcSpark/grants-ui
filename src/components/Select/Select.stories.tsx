import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select, { Option, SelectProps } from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["dcspark", "milkomeda", "flint"],
      },
    },
  },
} as ComponentMeta<typeof Select>;

const options = [
  { label: "All", value: "all" },
  { label: "Catalyst", value: "catalyst" },
  { label: "Urbit", value: "urbit" },
  { label: "Algorand", value: "algorand" },
];

const Template: ComponentStory<typeof Select> = (args: SelectProps) => {
  const [selected, setSelected] = React.useState<Option>(options[0]);
  return <Select {...args} value={selected} onChange={setSelected} />;
};

export const main = Template.bind({});
main.args = {
  options,
};
