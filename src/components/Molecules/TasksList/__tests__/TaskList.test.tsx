import { render } from "@testing-library/react-native";
import { SectionList, Text } from "react-native";

const mockSections = [
  {
    title: "Tarefas a fazer",
    data: ["teste1", "teste2"],
  },
  {
    title: "Tarefas concluídas",
    data: ["teste3", "teste4"],
  },
];

describe("TasksList", () => {
  it("renders the section list", () => {
    const { getByText } = render(
      <SectionList
        sections={mockSections}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
        renderItem={({ item }) => <Text testID="list-item">{item}</Text>}
      />
    );

    expect(getByText("Tarefas a fazer")).toBeTruthy();
    expect(getByText("Tarefas concluídas")).toBeTruthy();

    expect(getByText("teste3")).toBeTruthy();
  });
});
