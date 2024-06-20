import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";
import "../../index.css";

import { Component } from "react";
import { withRouter } from "storybook-addon-react-router-v6";

const meta: Meta<Component> = {
  title: "NavBar",
  component: NavBar,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Nav: Story = {};
