import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProposalCard, { ProposalCardProps } from "./ProposalCard";
import { proposalData } from "../../data";

export default {
  title: "Components/GrantsProposalItem",
  component: ProposalCard,
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
} as ComponentMeta<typeof ProposalCard>;

const Template: ComponentStory<typeof ProposalCard> = (
  args: ProposalCardProps,
) => <ProposalCard {...args} />;

export const main = Template.bind({});
main.args = {
  theme: "milkomeda",
  ...proposalData,
};

export const Milkomeda = Template.bind({});
Milkomeda.args = {
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
