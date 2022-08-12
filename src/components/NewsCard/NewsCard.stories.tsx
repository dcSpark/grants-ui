import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NewsCard, { NewsCardProps } from "./NewsCard";
import newImgExample from "../../assets/news-example.png";

export default {
  title: "Components/NewsCard",
  component: NewsCard,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["dcspark", "milkomeda", "flint"],
      },
    },
  },
} as ComponentMeta<typeof NewsCard>;

const Template: ComponentStory<typeof NewsCard> = (args: NewsCardProps) => {
  return <NewsCard {...args} />;
};

export const main = Template.bind({});
main.args = {
  title:
    "Milkomeda Hackathon: A global invitation to build the next generation of DAOs for Cardano",
  description:
    "As a Project Catalyst initiative, the Milkomeda Foundation is thrilled to announce the opening of applications for its first hackathon for the",
  imgUrl: newImgExample,
  date: "Jun 10",
  url: "https://medium.com/@milkomedafoundation/milkomeda-c1-bridge-explorer-is-live-cfb8b5e8fd5d",
};
