import { cleanup, act, renderHook } from "@testing-library/react-hooks";
import useReactions from "./useReactions";

describe("Hook: useReactions", () => {
  afterEach(cleanup);

  const mockReactions = [
    { reaction: "like", reacted: false },
    { reaction: "love", reacted: true },
  ];

  test("should initialize with default states and refs", () => {
    const { result } = renderHook(() => useReactions());

    expect(result.current.variables.showReactions).toBe(false);
    expect(result.current.variables.activeReaction).toBe(null);
    expect(result.current.variables.buttonRef.current).toBe(null);
    expect(result.current.variables.reactionsRef.current).toBe(null);
  });

  test("should correctly determine activeReaction", () => {
    // @ts-expect-error - Mocking mockReactions
    const { result } = renderHook(() => useReactions(mockReactions));

    expect(result.current.variables.activeReaction).toBe("love");
  });

  test("should toggle showReactions state", () => {
    const { result } = renderHook(() => useReactions());

    act(() => {
      result.current.setters.setShowReactions(true);
    });
    expect(result.current.variables.showReactions).toBe(true);

    act(() => {
      result.current.setters.setShowReactions(false);
    });
    expect(result.current.variables.showReactions).toBe(false);
  });

  test("should close reactions popup when clicking outside", () => {
    const { result } = renderHook(() => useReactions());
    const button = document.createElement("button");
    const popup = document.createElement("div");
    const outsideElement = document.createElement("div");

    // @ts-expect-error - Mocking refs
    result.current.variables.buttonRef.current = button;
    // @ts-expect-error - Mocking refs
    result.current.variables.reactionsRef.current = popup;

    act(() => {
      result.current.setters.setShowReactions(true);
    });

    // Simulate a click outside
    document.body.appendChild(outsideElement);
    outsideElement.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    expect(result.current.variables.showReactions).toBe(false);
  });

  test("should not close reactions popup when clicking inside", () => {
    const { result } = renderHook(() => useReactions());
    const button = document.createElement("button");
    const popup = document.createElement("div");

    // @ts-expect-error - Mocking refs
    result.current.variables.buttonRef.current = button;
    // @ts-expect-error - Mocking refs
    result.current.variables.reactionsRef.current = popup;

    act(() => {
      result.current.setters.setShowReactions(true);
    });

    // Simulate a click inside the popup
    popup.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    expect(result.current.variables.showReactions).toBe(true);
  });
});
