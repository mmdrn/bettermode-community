import { render, screen } from "@testing-library/react";
import Loading from "./index";

describe("Loading Component", () => {
  it("renders with default styles and content", () => {
    render(<Loading />);
    expect(screen.getByText("Loading data...")).toBeInTheDocument();
    expect(screen.getByText("Loading data...").parentElement).toHaveClass(
      "col-span-4 flex justify-center"
    );
    expect(screen.getByTestId("loader-icon")).toHaveClass("animate-spin");
  });

  it("applies custom className when provided", () => {
    render(<Loading className="custom-class" />);
    const parentDiv = screen.getByText("Loading data...").parentElement;
    expect(parentDiv).toHaveClass("custom-class");
  });
});
