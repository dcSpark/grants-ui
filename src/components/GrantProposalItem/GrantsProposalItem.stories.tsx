import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import GrantProposalItem, { GrantProposalItemProps } from ".";
import { proposalData } from "../../data";

export default {
  title: "GrantsProposalItem",
  component: GrantProposalItem,
  argTypes: {
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
  ...proposalData,
  Status: "Completed",
  theme: "milkomeda",
};

export const dcsparkTheme = Template.bind({});
dcsparkTheme.args = {
  ...proposalData,
  theme: "dcspark",
  Status: "Ongoing",
};

export const flintTheme = Template.bind({});
flintTheme.args = {
  ...proposalData,
  theme: "flint",
  Status: "Canceled",
};
