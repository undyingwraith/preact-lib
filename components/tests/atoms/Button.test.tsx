import { act, fireEvent, render } from '@testing-library/react';
import { Button } from "../../src";
import { vi } from 'vitest';

describe('Button', () => {
	it('handles click', () => {
		const onClick = vi.fn()
		const { getByTestId } = render(<Button
			text="test"
			onClick={onClick}
		/>);
		
		const button = getByTestId('button');

		act(() => {
			fireEvent.click(button);
		});
		
		expect(onClick).toHaveBeenCalledTimes(1);
	})
})