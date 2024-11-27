import { render, screen } from "@testing-library/react";
import Component from "./index";

describe("Component: error", () => {
  it("renders with default styles and content", () => {
    render(<Component />);
    const errorMessage = screen.getByText("Something wrong happened.");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.parentElement).toHaveClass("col-span-4 flex justify-center");
  });

  it("renders the bug icon", () => {
    render(<Component />);
    const bugIcon = screen.getByTestId("bug-icon");
    expect(bugIcon).toBeInTheDocument();
  });

  it("applies custom className when provided", () => {
    render(<Component className="custom-class" />);
    const parentDiv = screen.getByText("Something wrong happened.").parentElement;
    expect(parentDiv).toHaveClass("custom-class");
  });
});
