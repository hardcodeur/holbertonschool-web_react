import React from 'react';
import BodySection from "./BodySection";
import { render,screen } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";

test('Should pass any number of children without knows then beforehand', () => {
    const props = {
        title : "test"
    }
    render(
    <>
    <BodySection {...props} >
        <p>test 1</p>
        <p>test 2</p>
    </BodySection>
    </>
    )
    const title = screen.getByRole('heading', { name: /test/i })
    expect(title).toBeInTheDocument();
    
    const elt1 = screen.getByText('test 1');
    const elt2 = screen.getByText('test 2');
    expect(elt1).toBeInTheDocument();
    expect(elt2).toBeInTheDocument();


});