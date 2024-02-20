import { beforeEach, beforeAll, afterEach, afterAll, describe, expect, test } from 'vitest'
import { render, screen, fireEvent, RenderResult } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'
import MainSection from '../components/MainSection'
import mockCountries from './mockCountries'

describe('Main section', () => {
  let renderResult:RenderResult
  const resHandler = [
    http.get('https://restcountries.com/v3.1/all', () => {
      return HttpResponse.json(mockCountries)
    })
  ]
  const server = setupServer(...resHandler)
  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' })
  })

  beforeEach(() => {
    renderResult = render(<MainSection />)
  })

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  test('should render', () => {
    expect(renderResult.container).toBeDefined()
  })

  test('should render table', async() => {
    const table = renderResult.container.querySelector('.search-results')
    const firstCountryName = await screen.findByText(mockCountries[0].name.common)
    expect(firstCountryName).toBeDefined()
    expect(table).toBeDefined()
  })

  test('should order table', async() => {
    let firstCountryName = await screen.findByText(mockCountries[0].name.common)
    let firstCountry = renderResult.container.querySelectorAll('tr td')[0]
    expect(firstCountryName.innerHTML).toEqual(firstCountry.innerHTML)
    const orderCountryButton = renderResult.container.querySelectorAll('button[aria-label="Sort by country"]')[0]
    fireEvent.click(orderCountryButton)
    firstCountryName = await screen.findByText('Albania')
    firstCountry = renderResult.container.querySelectorAll('tr td')[0]
    expect(firstCountryName.innerHTML).toEqual(firstCountry.innerHTML)
    // I could test to sort by capital or population, but IMHO it is redundant
  })

  test('should filter table', async() => {
    let firstCountryName = await screen.findByText(mockCountries[0].name.common)
    expect(firstCountryName.innerHTML).toEqual('Cyprus')
    let rowNumber = renderResult.container.querySelectorAll('tr:not(.row-hidden)')
    expect(rowNumber.length).toEqual(7)
    const input = screen.getByLabelText('form-control')
    fireEvent.change(input, {target: { value: 'Croatia' }})
    firstCountryName = await screen.findByText('Croatia')
    expect(firstCountryName.innerHTML).toEqual('Croatia')
    rowNumber = renderResult.container.querySelectorAll('tr:not(.row-hidden)')
    expect(rowNumber.length).toEqual(3)
  })

  test('should navigate table', async() => {
    let firstCountryName = await screen.findByText(mockCountries[0].name.common)
    expect(firstCountryName.innerHTML).toEqual('Cyprus')
    const nextPageButton = renderResult.container.querySelectorAll('button[aria-label="Next page"]')[0]
    fireEvent.click(nextPageButton)
    firstCountryName = await screen.findByText(mockCountries[4].name.common)
    expect(firstCountryName.innerHTML).toEqual('Zambia')
  })
})
