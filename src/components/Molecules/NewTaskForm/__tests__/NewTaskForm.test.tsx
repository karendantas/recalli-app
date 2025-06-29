import { fireEvent, render } from "@testing-library/react-native";
import { NewTaskForm } from "..";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);
describe("NewTaskForm", () => {
  it("Render forms with new task input", () => {
    const { getByText } = render(<NewTaskForm />);

    expect(getByText("O que preciso fazer?")).toBeTruthy();
  });

  it("Render forms with date task input", () => {
    const { getByText } = render(<NewTaskForm />);

    expect(getByText("Para quando?")).toBeTruthy();
  });
  it("Render the calendar", () => {
    const { getByTestId } = render(<NewTaskForm />);

    expect(getByTestId("calendar")).toBeTruthy();
  });

  it("Render forms with time task input", () => {
    const { getByText } = render(<NewTaskForm />);

    expect(getByText("Que horas?")).toBeTruthy();
  });

  it("Calls on press when form is submitted", () => {
    const onPressFn = jest.fn();
    const { getByTestId } = render(<NewTaskForm />);

    fireEvent.press(getByTestId("Button"));
    expect(onPressFn).toBeTruthy();
  });
});
