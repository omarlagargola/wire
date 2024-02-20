import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  test('should render', () => {
    const { container } = render(<App />)
    expect(container).toBeDefined()
  })
})
