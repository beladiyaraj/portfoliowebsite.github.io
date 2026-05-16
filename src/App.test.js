import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("gsap", () => ({
  __esModule: true,
  default: {
    registerPlugin: jest.fn(),
    set: jest.fn(),
    timeline: () => ({
      from: jest.fn().mockReturnThis(),
      to: jest.fn().mockReturnThis(),
      set: jest.fn().mockReturnThis(),
      call: jest.fn(function (callback) {
        callback();
        return this;
      }),
    }),
    context: (callback) => {
      callback();
      return { revert: jest.fn() };
    },
    from: jest.fn(),
    to: jest.fn(),
    utils: { toArray: () => [] },
    ticker: {
      add: jest.fn(),
      remove: jest.fn(),
      lagSmoothing: jest.fn(),
    },
  },
}));

jest.mock("gsap/ScrollTrigger", () => ({
  ScrollTrigger: {
    update: jest.fn(),
    refresh: jest.fn(),
    getAll: () => [],
  },
}));

jest.mock("@gsap/react", () => ({
  useGSAP: (callback) => callback(),
}));

jest.mock("lenis", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    destroy: jest.fn(),
    on: jest.fn(),
    raf: jest.fn(),
  })),
}));

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

jest.mock(
  "react-router-dom",
  () => ({
    Routes: ({ children }) => children,
    Route: ({ element }) => element,
  }),
  { virtual: true }
);

jest.mock("framer-motion", () => {
  const React = require("react");
  const tags = ["section", "div", "h1", "p", "span", "img", "a", "li"];
  const motion = tags.reduce((components, tag) => {
    components[tag] = React.forwardRef(({ children, ...props }, ref) => {
      const {
        animate,
        initial,
        transition,
        variants,
        whileHover,
        whileTap,
        ...rest
      } = props;

      return React.createElement(tag, { ...rest, ref }, children);
    });
    return components;
  }, {});

  return { motion, useInView: () => true };
});

test("renders portfolio home page", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /raj beladiya/i })).toBeInTheDocument();
});
