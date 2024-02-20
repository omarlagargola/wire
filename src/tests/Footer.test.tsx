import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Footer from '../components/Footer'

describe('Test', () => {
  test('should render', () => {
    const { container } = render(<Footer />)
    expect(container).toBeDefined()
  })
})
