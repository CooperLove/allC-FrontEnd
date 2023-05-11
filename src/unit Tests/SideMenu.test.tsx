import { render, screen, fireEvent } from "@testing-library/react";
// import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu.tsx";
import "@testing-library/jest-dom";
import { NavigateFunction } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn().mockReturnValue(1),
}));

describe("SideMenu component", () => {
  beforeEach(() => {
    // useNavigate.mockReset();
  });

  it("renders without crashing", () => {
    render(<SideMenu />);
  });

  it("renders the logo", () => {
    render(<SideMenu />);
    expect(screen.getByText("all-C")).toBeInTheDocument();
  });

  it("navigates to the profile page when the notifications button is clicked", () => {
    const navigateMock: jest.Mock<NavigateFunction> = jest.fn();

    render(<SideMenu />);
    const notificationsButton = screen.getByRole("button", {
      name: "Notificações",
    });

    fireEvent.click(notificationsButton);
    expect(navigateMock).toHaveBeenCalledWith("/profile");
  });

  it("renders all the options", () => {
    render(<SideMenu />);
    expect(
      screen.getByRole("button", { name: "Página Inicial" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Notificações" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Mensagens" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Pesquisar" })
    ).toBeInTheDocument();
  });

  it("renders the settings button", () => {
    render(<SideMenu />);
    expect(
      screen.getByRole("button", { name: "Configurações" })
    ).toBeInTheDocument();
  });

  it("applies the correct styles", () => {
    render(<SideMenu />);
    expect(screen.getByText("all-C")).toHaveStyle("font-size: 2em;");
    expect(screen.getByRole("button", { name: "Página Inicial" })).toHaveStyle(
      "color: ButtonText;"
    );
  });
});
