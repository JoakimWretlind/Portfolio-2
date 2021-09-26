import { render, screen, fireEvent } from '@testing-library/react';
import ToTopBtn from '../ToTopBtn';

describe("Back to top-button", () => {
    it('should scroll to top on click', () => {
        render(<ToTopBtn />);
        const buttonElement = screen.getByTestId("topBtn");
        fireEvent.click(buttonElement);
    })
})