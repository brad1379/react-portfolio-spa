import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProjectForm from '../components/ProjectsForm'

describe('ProjectForm', () => {
    it('shows "Show Form" button initially', () => {
        render(<ProjectForm addNewProject={() => {}} />)
        expect(screen.getByRole('button', { name: 'Show Form' })).toBeInTheDocument()
    })

    it('does not show the form initially', () => {
        render(<ProjectForm addNewProject={() => {}} />)
        expect(screen.queryByRole('heading', { name: 'Add Project' })).not.toBeInTheDocument()
    })

    it('shows the form when the toggle button is clicked', async () => {
        render(<ProjectForm addNewProject={() => {}} />)
        await userEvent.click(screen.getByRole('button', { name: 'Show Form' }))
        expect(screen.getByRole('heading', { name: 'Add Project' })).toBeInTheDocument()
    })

    it('changes the button label to "Hide Form" when the form is visible', async () => {
        render(<ProjectForm addNewProject={() => {}} />)
        await userEvent.click(screen.getByRole('button', { name: 'Show Form' }))
        expect(screen.getByRole('button', { name: 'Hide Form' })).toBeInTheDocument()
    })

    it('hides the form when the toggle button is clicked again', async () => {
        render(<ProjectForm addNewProject={() => {}} />)
        await userEvent.click(screen.getByRole('button', { name: 'Show Form' }))
        await userEvent.click(screen.getByRole('button', { name: 'Hide Form' }))
        expect(screen.queryByRole('heading', { name: 'Add Project' })).not.toBeInTheDocument()
    })

    it('calls addNewProject with the correct form data on submit', async () => {
        const addNewProject = vi.fn()
        render(<ProjectForm addNewProject={addNewProject} />)

        await userEvent.click(screen.getByRole('button', { name: 'Show Form' }))
        await userEvent.type(screen.getByLabelText('Title'), 'My Project')
        await userEvent.type(screen.getByLabelText('Description'), 'My description')
        await userEvent.click(screen.getByRole('button', { name: 'Add' }))

        expect(addNewProject).toHaveBeenCalledWith(expect.objectContaining({
            name: 'My Project',
            description: 'My description',
        }))
    })

    it('hides the form after submission', async () => {
        render(<ProjectForm addNewProject={() => {}} />)
        await userEvent.click(screen.getByRole('button', { name: 'Show Form' }))
        await userEvent.click(screen.getByRole('button', { name: 'Add' }))
        expect(screen.queryByRole('heading', { name: 'Add Project' })).not.toBeInTheDocument()
    })
})
