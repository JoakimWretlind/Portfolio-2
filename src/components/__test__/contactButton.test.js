import { render, screen, fireEvent } from '@testing-library/react';
import ContactButton from '../ContactButton';

/** Integrationtest */
describe("ContactButton", () => {
    it('should scroll to contact on click', () => {
        render(<ContactButton />);
        const buttonElement = screen.getByRole("button", { name: /contact/i });
        fireEvent.click(buttonElement);
    })
})
