import { render, screen, fireEvent } from "@testing-library/react";
import { AVAILABLE_REACTIONS } from "../../api/post/reaction/constants";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import Component from "./index";

describe("Component: reactions", () => {
  const clickReaction = vi.fn();
  const currentReactions = [AVAILABLE_REACTIONS[0], AVAILABLE_REACTIONS[1]];

  it("renders the heart icon when there are no reactions", () => {
    render(
      <BrowserRouter>
        <Component clickReaction={clickReaction} currentReactions={[]} />
      </BrowserRouter>
    );

    const heartIcon = screen.getByRole("button").querySelector("svg");
    expect(heartIcon).toBeInTheDocument();
  });

  it("renders the available reactions when the button is clicked", () => {
    render(
      <BrowserRouter>
        {/* @ts-ignore */}
        <Component clickReaction={clickReaction} currentReactions={currentReactions} />
      </BrowserRouter>
    );

    // Open the reactions popup
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Check if the available reactions (emojis) are rendered
    AVAILABLE_REACTIONS.forEach((reaction) => {
      expect(screen.getByTestId(`${reaction.emoji}-button`)).toBeInTheDocument();
    });
  });

  it("calls clickReaction when a reaction is selected", () => {
    render(
      <BrowserRouter>
        {/* @ts-ignore */}
        <Component clickReaction={clickReaction} currentReactions={currentReactions} />
      </BrowserRouter>
    );

    // Open the reactions popup
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Click on a reaction
    const reactionButton = screen.getByText(AVAILABLE_REACTIONS[0].emoji);
    fireEvent.click(reactionButton);

    // Check if clickReaction is called with the correct reaction key
    expect(clickReaction).toHaveBeenCalledWith({ reaction: AVAILABLE_REACTIONS[0].key });
  });

  it("renders current reactions correctly", () => {
    const currentReactions = [AVAILABLE_REACTIONS[0], AVAILABLE_REACTIONS[1]].map(
      (reaction, i) => ({
        reaction: reaction.key,
        reacted: !i,
        count: 0,
      })
    );

    render(
      <BrowserRouter>
        <Component clickReaction={clickReaction} currentReactions={currentReactions} />
      </BrowserRouter>
    );

    // Check if the current reactions are rendered
    currentReactions.forEach((reaction) => {
      expect(screen.getByTestId(`${reaction.reaction}-current`)).toBeInTheDocument();
    });
  });

  it("toggles the reactions popup visibility when the button is clicked", () => {
    render(
      <BrowserRouter>
        {/* @ts-ignore */}
        <Component clickReaction={clickReaction} currentReactions={currentReactions} />
      </BrowserRouter>
    );

    const button = screen.getByRole("button");

    // Check initial state (popup should not be visible)
    expect(screen.queryByText(AVAILABLE_REACTIONS[0].emoji)).not.toBeInTheDocument();

    // Click to open reactions popup
    fireEvent.click(button);
    expect(screen.getByText(AVAILABLE_REACTIONS[0].emoji)).toBeInTheDocument();

    // Click again to close reactions popup
    fireEvent.click(button);
    expect(screen.queryByText(AVAILABLE_REACTIONS[0].emoji)).not.toBeInTheDocument();
  });
});
