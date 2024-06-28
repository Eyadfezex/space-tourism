import type { Meta, StoryObj } from "@storybook/react";
import { Component } from "react";
import { withRouter } from "storybook-addon-react-router-v6";
import SideBar from "./SideBar";

const meta: Meta<Component> = {
  title: "Side-bar",
  component: SideBar,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Side_bar: Story = {};
