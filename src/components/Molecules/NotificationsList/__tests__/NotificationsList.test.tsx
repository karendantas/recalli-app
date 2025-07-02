import { render } from "@testing-library/react-native";
import { FlatList, Text } from "react-native";

const data = [
  {
    id: "1",
    title: "notificacao1",
  },
  {
    id: "2",
    title: "notificacao2",
  },
];
describe("notificationsList", () => {
  it("Should render the flastlist with data", () => {
    const { getByText } = render(
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    );

    expect(getByText("notificacao1")).toBeTruthy();
    expect(getByText("notificacao2")).toBeTruthy();
  });
});
