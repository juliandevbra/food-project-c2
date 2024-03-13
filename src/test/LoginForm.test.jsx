import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import LoginForm from "../Components/LoginForm";

describe('Render elements form LoginForm', () => {
    test('Should render title', () => {
        render(<LoginForm/>)
        const title = screen.getByText(/debe ingresar al sitio/i)
        expect(title).toBeDefined()
    })
    test('Should render first input', () => {
        render(<LoginForm/>)
        const input = screen.getByRole('email')
        expect(input).toBeDefined()
    })
    test('Should change second input', () => {
        render(<LoginForm/>)
        const pass = screen.getByTestId('password')
        fireEvent.change(pass, {target: {value: 'contraseña123'}})
        expect(pass.value).toBe('contraseña123')
    })
    test('Should call function from button', () => {
        const handleClick = vi.fn()
        render(<LoginForm handleClick={handleClick}/>)
        const button = screen.getByText('Enviar')
        fireEvent.click(button)
        expect(handleClick).toBeCalledTimes(1)
    })
})