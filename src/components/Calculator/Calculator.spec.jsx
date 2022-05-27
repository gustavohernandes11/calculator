import { screen, render } from '@testing-library/react'
import React from 'react'
import Calculator from './index';

describe("Testing the calculator component calculator", () => {
    render(<Calculator/>)
    it('should render each button', ()=> {
        const buttons = ['AC', 'Del', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
        
        buttons.map((e) => {
            let button = screen.getByText(e)
            expect(button).toBeInTheDocument()
        })
    })
})