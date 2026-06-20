import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
    it('renders the page heading', () => {
        render(<App />)
        expect(screen.getByText('Personal Project Showcase App')).toBeInTheDocument()
    })

    it('renders the show form toggle button', () => {
        render(<App />)
        expect(screen.getByRole('button', { name: 'Show Form' })).toBeInTheDocument()
    })

    it('renders the project search input', () => {
        render(<App />)
        expect(screen.getByPlaceholderText('Search Projects')).toBeInTheDocument()
    })
})
