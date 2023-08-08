import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Login from "./components/Login";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test("Heading is there", () => {
  render(<App />);
  const Heading = screen.getByTitle("heading");
  expect(Heading).toBeInTheDocument();
});
test("Input Box", () => {
  render(<App />);
  const InputBox = screen.getByTestId("input-element");
  expect(InputBox).toBeInTheDocument();
});
// test("Input Type Button Element", () => {
//   render(<App />);
//   const Button = screen.getAllByRole("button");
//   expect(Button).toBeInTheDocument();
// });
test("List", () => {
  render(<App />);
  const List = screen.getByTestId("ul-element");
  expect(List).toBeInTheDocument();
});
// test("ListItem", () => {
//   render(<App />);
//   const ListItem = screen.getByTestId("listitem");
//   expect(ListItem).toBeInTheDocument();
// });

// login  componets using jest
test("Login heading", () => {
  render(<Login />);
  const LoginHeading = screen.getByTitle("Login");
  expect(LoginHeading).toBeInTheDocument();
});
test("username input render", () => {
  render(<Login />);
  const InputUser = screen.getByPlaceholderText(/Username/i);
  expect(InputUser).toBeInTheDocument();
});
test("password input render", () => {
  render(<Login />);
  const PassInputUser = screen.getByPlaceholderText(/Password/i);
  expect(PassInputUser).toBeInTheDocument();
});
test("button input render", () => {
  render(<Login />);
  const ButtonIn = screen.getByRole("button");
  expect(ButtonIn).toBeInTheDocument();
});
test("input user changed", () => {
  render(<Login />);
  const inputElChanged = screen.getByPlaceholderText(/Username/i);
  const val = "username";
  fireEvent.change(inputElChanged, { target: { value: val } });
  expect(inputElChanged.value).toBe(val);
});
test("input pass changed", () => {
  render(<Login />);
  const inputPassChanged = screen.getByPlaceholderText(/Password/i);
  const val = "password";
  fireEvent.change(inputPassChanged, { target: { value: val } });
  expect(inputPassChanged.value).toBe(val);
});
