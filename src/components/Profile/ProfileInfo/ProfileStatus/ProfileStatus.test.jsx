import { render, screen, cleanup, fireEvent, getByTestId } from "@testing-library/react";
import { ProfileStatus } from './ProfileStatus';
// Importing the jest testing library
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
 
// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})
 
describe("ProfileStatus Component", () => {
    render(<ProfileStatus status='Hello'/>);
    const span = screen.getByTestId("span");
    // Test 1
    test("Status Rendering", () => {
        expect(span).toBeInTheDocument();
    })
    // Test 2
    test("status Text", () => {
        expect(span).toHaveTextContent("Hello");
    })
    // Test 3
    test("after creation input to be null", () => {
        expect(() => {
          const input = screen.getByTestId("input")
        }).toThrowError();
    })
    // Test 4
    test("span on doubleclick displayed edit mode", () => {
      render(<ProfileStatus status='Hello'/>);
      userEvent.dblClick(screen.getByTestId("span"));
      expect(screen.getByTestId("input")).toBeInTheDocument();
  }) 
})