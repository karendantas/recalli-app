import { fireEvent, render } from "@testing-library/react-native";
import { AntDesign } from "@expo/vector-icons";
import { TaskComponent } from "..";
import { debug } from "@testing-library/react-native/build/helpers/debug";

const DefaultProps = {
  id: "1",
  title: "Tomar remedio",
  startsAt: "20/03/2025",
  endsAt: "21/03/2025",
  time: "13:30",
  onDelete: jest.fn(),
  completeTask: jest.fn(),
};
describe("TaskComponent", () => {
  it("Render the title", () => {
    const { getByText } = render(<TaskComponent {...DefaultProps} />);

    expect(getByText("Tomar remedio")).toBeTruthy();
  });
  it("Render the date", () => {
    const { getByText } = render(<TaskComponent {...DefaultProps} />);

    expect(getByText("20/03/2025")).toBeTruthy();
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

  // it("Should change the icon when task isCompleted", () => {
  //   const { UNSAFE_getAllByType } = render(
  //     <TaskComponent {...DefaultProps} isCompleted={false} />
  //   );

  //   const icons = UNSAFE_getAllByType(AntDesign);
  //   const checkTaskItem = icons.find(
  //     (icon) => icon.props.name === "checkcircle"
  //   );
  //   expect(checkTaskItem).toBeTruthy();

  //   fireEvent.press(DefaultProps.completeTask);

  //   render(<TaskComponent {...DefaultProps} isCompleted={true} />);
  //   const iconsUpdated = UNSAFE_getAllByType(AntDesign);
  //   const checkedTaskItem = iconsUpdated.find(
  //     (icon) => icon.props.name === "checkcircleo"
  //   );
  //   expect(checkedTaskItem).toBeTruthy();
  // });
});
