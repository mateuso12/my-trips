import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Jaguariúna',
      slug: 'Jaguariúna',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Ubatuba',
      slug: 'Ubatuba',
      location: {
        latitude: 135,
        longitude: -846
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/jaguariúna/i)).toBeInTheDocument()
    expect(screen.getByTitle(/ubatuba/i)).toBeInTheDocument()
  })
})
