import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./Loading";
import "../../index.css";

import { Component } from "react";
import { withRouter } from "storybook-addon-react-router-v6";

const meta: Meta<Component> = {
  title: "Loading page",
  component: Loading,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Load: Story = {};
