import { describe, it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import { Header } from "./Header"
import { companyTitle } from "../utils/utility";

vi.mock('../utils/utility', () => ({
  companyTitle:'5150'
}))

describe('Header test', () => {
  it('should render component', () => {
  

    render(<Header />)
    const numberThing =  screen.getByText(`value: ${companyTitle}`)
    expect(numberThing).toBeInTheDocument()
    screen.debug()
  })
})