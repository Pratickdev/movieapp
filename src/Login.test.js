import { render, screen } from "@testing-library/react"
import Login from "./Login"

test("username input should be renderd",()=>{
    render(<Login/>);
    const userInputEmail =screen.getByPlaceholderText(/email/i)
    expect(userInputEmail).toBeInTheDocument;
})
test("password input should be renderd",()=>{
    render(<Login/>);
    const userInputPass =screen.getByPlaceholderText(/Password/i)
    expect(userInputPass).toBeInTheDocument;
})
test("button input should be renderd",()=>{
    render(<Login/>);
    const buttonInput=screen.getByRole("button");
    expect(buttonInput).toBeInTheDocument;
})