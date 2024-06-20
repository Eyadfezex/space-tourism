import type { Preview } from "@storybook/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for providing routing context

import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

import "../src/index.css";
import { ReactElement } from "react";

const customViewports = {
  mobile_m: {
    name: "Mobile M",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
};
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: "iphone14promax",
    },
  },
};

export default preview;
