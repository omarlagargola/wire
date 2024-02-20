import { beforeEach, describe, expect, test } from 'vitest'
import { render, fireEvent, RenderResult } from '@testing-library/react'
import Sidebar from '../components/Sidebar'

describe('Sidebar', () => {
  let renderResult:RenderResult
  beforeEach(() => {
    renderResult = render(<Sidebar />)
  })
  test('should render', () => {
    expect(renderResult.container).toBeDefined()
  })
  test('should expand menu', () => {
    const menuButton = renderResult.container.getElementsByClassName('menu-btn')[0]
    fireEvent.click(menuButton)
    expect(renderResult.container.getElementsByClassName('extended').length).toBe(1)
  })
})
