import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Rating } from './index';

jest.mock('../atoms/icon', () => ({
    Icon: ({ name }: { name: string }) => <span data-testid="icon" data-name={name} />,
}));

const getIconNames = () => screen.getAllByTestId('icon').map((el) => el.getAttribute('data-name'));

describe('Rating', () => {
    it('renders 5 stars', () => {
        render(<Rating />);
        expect(screen.getAllByTestId('icon')).toHaveLength(5);
    });

    it('all stars are outlined with no value', () => {
        render(<Rating />);
        expect(getIconNames()).toEqual([
            'star-outline',
            'star-outline',
            'star-outline',
            'star-outline',
            'star-outline',
        ]);
    });

    it('fills stars up to the value prop', () => {
        render(<Rating value={3} />);
        expect(getIconNames()).toEqual([
            'star-filled',
            'star-filled',
            'star-filled',
            'star-outline',
            'star-outline',
        ]);
    });

    it('fills stars up to clicked star and calls onChange', () => {
        const onChange = jest.fn();
        render(<Rating onChange={onChange} />);

        userEvent.click(screen.getAllByTestId('icon')[2]); // 3rd star

        expect(onChange).toHaveBeenCalledWith(3);
        expect(getIconNames()).toEqual([
            'star-filled',
            'star-filled',
            'star-filled',
            'star-outline',
            'star-outline',
        ]);
    });

    it('shows filled preview up to hovered star', () => {
        render(<Rating />);

        userEvent.hover(screen.getAllByTestId('icon')[3]); // hover 4th star

        expect(getIconNames()).toEqual([
            'star-filled',
            'star-filled',
            'star-filled',
            'star-filled',
            'star-outline',
        ]);
    });

    it('reverts to selected rating after mouse leave', () => {
        render(<Rating value={2} />);
        const icons = screen.getAllByTestId('icon');

        userEvent.hover(icons[4]); // hover 5th
        userEvent.unhover(icons[4]);

        expect(getIconNames()).toEqual([
            'star-filled',
            'star-filled',
            'star-outline',
            'star-outline',
            'star-outline',
        ]);
    });

    it('calls onChange with the correct star index on click', () => {
        const onChange = jest.fn();
        render(<Rating onChange={onChange} />);

        userEvent.click(screen.getAllByTestId('icon')[0]); // 1st star
        expect(onChange).toHaveBeenCalledWith(1);

        userEvent.click(screen.getAllByTestId('icon')[4]); // 5th star
        expect(onChange).toHaveBeenCalledWith(5);
    });
});
