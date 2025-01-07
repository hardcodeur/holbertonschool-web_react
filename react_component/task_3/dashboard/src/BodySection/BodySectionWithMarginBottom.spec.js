import React from 'react';
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { render,screen } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";

test('Should contains a div with the class bodySectionWithMargin', () => {
    const props = {
        title : "bouh"
    }

    const { container } = render(<BodySectionWithMarginBottom {...props}></BodySectionWithMarginBottom>)
    expect(container.firstChild).toHaveClass('bodySectionWithMargin');
});

test('renders BodySection component', () => {
    const props = {
        title : "bouh!"
    }
    render(
        <BodySectionWithMarginBottom {...props}>
            <p>hello</p>
        </BodySectionWithMarginBottom>
    );
    const title = screen.getByText("bouh!");
    const paragraphe = screen.getByText("hello");

    expect(title).toBeInTheDocument();
    expect(paragraphe).toBeInTheDocument();
});