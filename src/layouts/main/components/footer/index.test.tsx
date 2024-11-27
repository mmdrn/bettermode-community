import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Component from "./index";

describe("Component: Main Layout Footer", () => {
  it("should render the footer text correctly", () => {
    render(<Component />);

    // Verify the footer text
    const footerText = screen.getByText(
      "© 2024 Bettermode Community Platform. All rights reserved."
    );
    expect(footerText).toBeInTheDocument();
  });

  it("should have the correct styles for dark and light themes", () => {
    // Render Footer with light theme
    render(<Component />);
    const footer = screen.getByText("© 2024 Bettermode Community Platform. All rights reserved.");

    // Verify light theme styles (text color)
    expect(footer).toHaveClass("text-zinc-400");

    // Simulate dark mode (if using context or a way to change theme)
    document.body.classList.add("dark");

    render(<Component />);

    // Verify dark theme styles (text color)
    expect(footer).toHaveClass("dark:text-white");
  });
});
