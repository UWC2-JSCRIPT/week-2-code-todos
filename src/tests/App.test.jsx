import { describe, expect, it } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Todo List App Tests", () => {
  it("should render component", () => {
    render(<App />);
    const heading = screen.getByText("Todos For Today");
    expect(heading).toBeInTheDocument();
  });

  it("should render the correct amount of todos", () => {
    render(<App />);
    const todos = screen.getAllByRole("listitem");
    expect(todos).toHaveLength(5);
  });

  it("should add a todo", async () => {
    render(<App />);
    const inputBox = screen.getByRole("textbox");
    const submitBtn = screen.getByRole("button", { name: "Add Todo" });
    const todos = screen.getAllByRole("listitem");
    expect(todos).toHaveLength(5);

    await userEvent.type(inputBox, "Go Dawgs!");
    await userEvent.click(submitBtn);

    const todosAfter = screen.getAllByRole("listitem");
    expect(todosAfter).toHaveLength(6);

    // const submitBtn2 = screen.getByRole('button', {name: 'Addjkjhj Todo'});
    // screen.debug()
  });
});
