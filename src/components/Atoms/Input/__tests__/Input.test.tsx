import { fireEvent, render } from "@testing-library/react-native";
import { Input } from "..";

jest.mock("@expo/vector-icons", () => ({
  AntDesign: "",
}));
describe("Input", () => {
  it("Render the input ", () => {
    const { getByTestId } = render(
      <Input placeholder="ex: Tomar remedio..." iconName="form" />
    );

    expect(getByTestId("input").props.placeholder).toBe("ex: Tomar remedio...");
    expect(getByTestId("icon").props.name).toBe("form");
  });

  it("Changes onChangeText", () => {
    const onChangeTextFn = jest.fn();
    const { getByTestId } = render(
      <Input
        placeholder="ex: Tomar remedio..."
        iconName="form"
        onChangeText={onChangeTextFn}
      />
    );

    fireEvent.changeText(getByTestId("input"), "Nova tarefa");
    expect(onChangeTextFn).toHaveBeenCalledWith("Nova tarefa");
  });
});
