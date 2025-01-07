import React from 'react';
import BodySection from "./BodySection";
import { render,screen } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";

test('Should pass any number of children without knows then beforehand', () => {
    const props = {
        title : "bouh"
    }
    render(
    <>
    <BodySection {...props} >
        <p>Bouh 1</p>
        <p>Bouh 2</p>
        <p>Bouh 3</p>
    </BodySection>
    </>
    )
    const title = screen.getByRole('heading', { name: /bouh/i })
    expect(title).toBeInTheDocument();
    
    const elt1 = screen.getByText('Bouh 1');
    const elt2 = screen.getByText('Bouh 2');
    expect(elt1).toBeInTheDocument();
    expect(elt2).toBeInTheDocument();


});