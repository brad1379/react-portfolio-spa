import { render, screen } from '@testing-library/react'
import ProjectCard from '../components/ProjectCard'

const mockProject = {
    name: "Test Project",
    description: "A test description",
    link: "https://example.com",
    image: "https://example.com/image.png"
}

describe('ProjectCard', () => {
    it('renders the project name', () => {
        render(<ProjectCard {...mockProject} />)
        expect(screen.getByText('Test Project')).toBeInTheDocument()
    })

    it('renders the project description', () => {
        render(<ProjectCard {...mockProject} />)
        expect(screen.getByText('A test description')).toBeInTheDocument()
    })

    it('renders a link with the correct href', () => {
        render(<ProjectCard {...mockProject} />)
        expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com')
    })

    it('renders an image with the correct src and alt text', () => {
        render(<ProjectCard {...mockProject} />)
        const img = screen.getByRole('img')
        expect(img).toHaveAttribute('src', 'https://example.com/image.png')
        expect(img).toHaveAttribute('alt', 'Test Project')
    })
})
