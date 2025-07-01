import { fireEvent, render } from "@testing-library/react-native";
import { Button } from "..";

jest.mock("@expo/vector-icons", () => ({
  AntDesign: "",
}));
describe("Button", () => {
  it("Render the button with title and icon", () => {
    const { getByText, getByTestId } = render(
      <Button title="Criar" iconName="plus" />
    );

    expect(getByText("Criar")).toBeTruthy();
    expect(getByTestId("icon")).toBeTruthy();
  });

  it("Render the button with custom width", () => {
    const { getByTestId } = render(
      <Button title="Criar" iconName="plus" width={36} />
    );

    expect(getByTestId("Button")).toHaveStyle({ width: 36 });
  });

  it("Call on press function", () => {
    const onPressfn = jest.fn();
    const { getByTestId } = render(
      <Button title="Criar" onPress={onPressfn} />
    );

    fireEvent.press(getByTestId("Button"));

    expect(onPressfn).toHaveBeenCalled();
  });
});
