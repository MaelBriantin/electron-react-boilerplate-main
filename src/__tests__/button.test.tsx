import { render, getByTestId } from '@testing-library/react';
import Button from '../renderer/components/Buttons/Button';

describe('Button component', () => {
  it('should display successfully', () => {
    const button = render(<Button text="Congratulations!!! " icon="book" />);
    console.log(button.debug());
    expect(button).toBeTruthy();
  });
});
