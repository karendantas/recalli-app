import { render } from "@testing-library/react-native";
import { TabBarNotificationIcon } from "..";

describe("TabNotificationIcon", () => {
  it("Should render the TabBar Notification icon when showBadge is true", () => {
    const { getByTestId } = render(
      <TabBarNotificationIcon color="#ffff" name="bells" showBadge />
    );
    expect(getByTestId("notification-active")).toHaveStyle({
      position: "absolute",
    });
  });
  it("Should not render the TabBar Notification icon when showBadge is false", () => {
    const { queryByTestId } = render(
      <TabBarNotificationIcon color="#ffff" name="bells" showBadge={false} />
    );
    expect(queryByTestId("notification-active")).toBeNull();
  });
});
