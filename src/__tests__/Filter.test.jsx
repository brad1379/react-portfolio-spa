import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Filter from '../components/Filter'

describe('Filter', () => {
    it('renders a search input with placeholder text', () => {
        render(<Filter search="" handleSearch={() => {}} />)
        expect(screen.getByPlaceholderText('Search Projects')).toBeInTheDocument()
    })

    it('displays the current search value', () => {
        render(<Filter search="react" handleSearch={() => {}} />)
        expect(screen.getByDisplayValue('react')).toBeInTheDocument()
    })

    it('calls handleSearch when the input changes', async () => {
        const handleSearch = vi.fn()
        render(<Filter search="" handleSearch={handleSearch} />)
        await userEvent.type(screen.getByPlaceholderText('Search Projects'), 'a')
        expect(handleSearch).toHaveBeenCalled()
    })
})
