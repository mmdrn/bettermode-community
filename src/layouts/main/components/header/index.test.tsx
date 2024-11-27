import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { useGlobalContext } from "../../../../contexts/global-context";
import Component from "./index";

// Mock global context
vi.mock("../../../../contexts/global-context", () => ({
  useGlobalContext: vi.fn(),
}));

describe("Component: Main Layout Header", () => {
  let mockSetTheme: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockSetTheme = vi.fn();

    // Mock global context values
    // @ts-ignore
    (useGlobalContext as vi.Mock).mockReturnValue({
      theme: "light",
      setTheme: mockSetTheme,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render logo, theme toggle, and menu items", () => {
    render(
      <Router>
        <Component />
      </Router>
    );

    // Logo
    expect(screen.getByAltText("Bettermode Community")).toBeInTheDocument();

    // Theme toggle button
    const themeToggleButton = screen.getAllByTestId("theme-toggle-button").length;
    expect(themeToggleButton).toBe(2);

    // Navigation links
    expect(screen.getAllByText("Home")).toHaveLength(2);
    expect(screen.getAllByText("Posts")).toHaveLength(2);
    expect(screen.getAllByText("Github")).toHaveLength(2);
    expect(screen.getAllByText("Signin")).toHaveLength(2);
  });

  it("should toggle theme on button click", () => {
    render(
      <Router>
        <Component />
      </Router>
    );

    const themeToggleButton = screen.getAllByTestId("theme-toggle-button")[0];

    // Simulate button click
    fireEvent.click(themeToggleButton);

    // Verify theme toggling
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("should toggle mobile menu visibility on button click", () => {
    render(
      <Router>
        <Component />
      </Router>
    );

    const menuToggleButton = screen.getByTestId("menu-toggle-button");

    // Initially, mobile menu is closed
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toHaveClass("-translate-x-72");

    // Open menu
    fireEvent.click(menuToggleButton);
    expect(mobileMenu).toHaveClass("translate-x-0");

    // Close menu
    fireEvent.click(menuToggleButton);
    expect(mobileMenu).toHaveClass("-translate-x-72");
  });

  it("should navigate correctly when clicking on links", () => {
    render(
      <Router>
        <Component />
      </Router>
    );

    const homeLink = screen.getAllByText("Home");
    for (const link of homeLink) {
      expect(link).toHaveAttribute("href", "/");
    }

    const postsLink = screen.getAllByText("Posts");
    for (const link of postsLink) {
      expect(link).toHaveAttribute("href", "/posts");
    }

    const githubLink = screen.getAllByText("Github");
    for (const link of githubLink) {
      expect(link).toHaveAttribute("href", "https://github.com/mmdrn/bettermode-community");
    }
  });
});
