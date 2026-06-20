import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProjectList from '../components/ProjectList'

const mockProjects = [
    { id: 1, name: 'Airbnb', description: 'Room booking', link: 'https://airbnb.com', image: '' },
    { id: 2, name: 'Dropbox', description: 'Cloud storage', link: 'https://dropbox.com', image: '' },
]

describe('ProjectList', () => {
    it('renders all projects', () => {
        render(<ProjectList projects={mockProjects} />)
        expect(screen.getByText('Airbnb')).toBeInTheDocument()
        expect(screen.getByText('Dropbox')).toBeInTheDocument()
    })

    it('renders the search input', () => {
        render(<ProjectList projects={mockProjects} />)
        expect(screen.getByPlaceholderText('Search Projects')).toBeInTheDocument()
    })

    it('filters projects based on the search input', async () => {
        render(<ProjectList projects={mockProjects} />)
        await userEvent.type(screen.getByPlaceholderText('Search Projects'), 'Air')
        expect(screen.getByText('Airbnb')).toBeInTheDocument()
        expect(screen.queryByText('Dropbox')).not.toBeInTheDocument()
    })

    it('shows no projects when search matches nothing', async () => {
        render(<ProjectList projects={mockProjects} />)
        await userEvent.type(screen.getByPlaceholderText('Search Projects'), 'zzz')
        expect(screen.queryByText('Airbnb')).not.toBeInTheDocument()
        expect(screen.queryByText('Dropbox')).not.toBeInTheDocument()
    })
})
