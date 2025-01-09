import React from 'react';
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { render,screen } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";

test('Should contains a div with the class bodySectionWithMargin', () => {
    const props = {
        title : "test"
    }

    const { container } = render(<BodySectionWithMarginBottom {...props}></BodySectionWithMarginBottom>)
    expect(container.firstChild).toHaveClass('bodySectionWithMargin');
});

test('renders BodySection component', () => {
    const props = {
        title : "test"
    }
    render(
        <BodySectionWithMarginBottom {...props}>
            <p>test 1</p>
        </BodySectionWithMarginBottom>
    );
    const title = screen.getByRole('heading', { name: /test/i });
    const paragraphe = screen.getByText("test 1");

    expect(title).toBeInTheDocument();
    expect(paragraphe).toBeInTheDocument();
});