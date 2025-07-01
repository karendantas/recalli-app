import { render } from "@testing-library/react-native";
import { AntDesign } from "@expo/vector-icons";
import { TaskComponent } from "..";

const DefaultProps = {
  title: "Tomar remedio",
  date: "20-03-2025",
  time: "13:30",
};
describe("TaskComponent", () => {
  it("Render the title", () => {
    const { getByText } = render(<TaskComponent {...DefaultProps} />);

    expect(getByText("Tomar remedio")).toBeTruthy();
  });
  it("Render the date", () => {
    const { getByText } = render(<TaskComponent {...DefaultProps} />);

    expect(getByText("20-03-2025")).toBeTruthy();
  });
  it("Render the time", () => {
    const { getByText } = render(<TaskComponent {...DefaultProps} />);

    expect(getByText("13:30")).toBeTruthy();
  });

  it("Render calendar and cloack icons", () => {
    const { UNSAFE_getAllByType } = render(<TaskComponent {...DefaultProps} />);

    const icons = UNSAFE_getAllByType(AntDesign);

    const calendarIcon = icons.find((icon) => icon.props.name === "calendar");
    const clockcircleoIcon = icons.find(
      (icon) => icon.props.name === "clockcircleo"
    );

    expect(calendarIcon).toBeTruthy();
    expect(clockcircleoIcon).toBeTruthy();
  });
});
