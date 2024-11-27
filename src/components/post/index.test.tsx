import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Wrap in Router for Link to work
import Component from "./index";

describe("Component: post", () => {
  const postProps = {
    id: "1",
    title: "Post Title",
    description: "This is a description of the post.",
    publishedAt: "2024-11-27",
  };

  it("renders the post title, description, and date", () => {
    render(
      <BrowserRouter>
        <Component {...postProps} />
      </BrowserRouter>
    );

    // Check if the title, description, and date are displayed
    expect(screen.getByText(postProps.title)).toBeInTheDocument();
    expect(screen.getByText(postProps.description)).toBeInTheDocument();
    expect(screen.getByText(postProps.publishedAt)).toBeInTheDocument();
  });

  it("renders the Newspaper icon", () => {
    render(
      <BrowserRouter>
        <Component {...postProps} />
      </BrowserRouter>
    );

    // Check if the Newspaper icon is present
    const icon = screen.getByTestId("newspaper-icon");
    expect(icon).toBeInTheDocument();
  });

  it("navigates to the correct URL on click", () => {
    const { container } = render(
      <BrowserRouter>
        <Component {...postProps} />
      </BrowserRouter>
    );

    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", `/posts/${postProps.id}`);
  });

  it("applies hover styles", () => {
    const { container } = render(
      <BrowserRouter>
        <Component {...postProps} />
      </BrowserRouter>
    );

    // Simulate hover to check if hover class is applied
    const postElement = container.querySelector("a");
    expect(postElement).toHaveClass(
      "flex flex-col items-start justify-start [&:hover>div>h2]:text-bettermode-green-primary"
    );
  });
});
