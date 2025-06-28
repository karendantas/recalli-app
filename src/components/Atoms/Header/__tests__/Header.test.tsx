import { render } from "@testing-library/react-native";
import { Header } from "..";

describe("HeaderTests", () => {
  it("Show greetings", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Olá, Karen")).toBeTruthy();
    expect(getByText("Precisa lembrar de algo hoje?")).toBeTruthy();
  });

  it("Render fonts", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Olá, Karen")).toHaveStyle({
      fontFamily: "Sen_500Medium",
    });
  });
});
