import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Header from '../components/Header'

describe('Header', () => {
  test('should render', () => {
    const { container } = render(<Header />)
    expect(container).toBeDefined()
  })
})
