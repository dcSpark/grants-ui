import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GrantProposalItem, {
  GrantProposalItemProps,
} from "./GrantsProposalItem";
import { proposalData } from "../../data";

export default {
  title: "Components/GrantsProposalItem",
  component: GrantProposalItem,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["dcspark", "milkomeda", "flint"],
      },
    },
    Status: {
      control: {
        type: "select",
        options: ["Completed", "Ongoing", "Canceled", "Default"],
      },
    },
  },
} as ComponentMeta<typeof GrantProposalItem>;

const Template: ComponentStory<typeof GrantProposalItem> = (
  args: GrantProposalItemProps,
) => <GrantProposalItem {...args} />;

export const milkomedaTheme = Template.bind({});
milkomedaTheme.args = {
  theme: "milkomeda",
  ...proposalData,
  Status: "Completed",
};

export const dcsparkTheme = Template.bind({});
dcsparkTheme.args = {
  theme: "dcspark",
  ...proposalData,
  Status: "Ongoing",
};

export const flintTheme = Template.bind({});
flintTheme.args = {
  theme: "flint",
  ...proposalData,
  Status: "Canceled",
};
