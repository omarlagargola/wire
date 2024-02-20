import './Main.scss'
import { useState, useEffect } from 'react'
import Footer from './Footer'
import { type Country, getCountries } from '../service/countryService'

function Main() {

  const NO_CAPITAL = 'no capital'
  const ITEMS_PAGE = 5
  const [page, setPage] = useState<number>(0)
  const [countries, setCountries] = useState<Country[]>([])
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const [ascending, setAscending] = useState<number>(1)
  const [apiError, setApiError] = useState<boolean>(false)

  function filterCountries(value: string) {
    const lowerCaseValue = value.toLowerCase()
    setFilteredCountries(countries.filter(country => {
      return country.name.common.toLowerCase().includes(lowerCaseValue)
    }))
  }

  function orderCountries(field: string) {
    setFilteredCountries([...filteredCountries].sort((a, b) => {
      let order:number
      let aCapital:string, bCapital: string
      setAscending(ascending * -1)
      switch (field) {
        case 'name':
          order = a.name.common < b.name.common ? -1 : 1
          return order * ascending
        case 'capital':
          aCapital = a.capital ? a.capital[0] : NO_CAPITAL
          bCapital = b.capital ? b.capital[0] : NO_CAPITAL
          order = aCapital < bCapital ? -1 : 1
          return order * ascending
        case 'population':
          order = a.population - b.population
          return order * ascending
        default:
          return 1
      }
    }))
  }

  function navigate(index: number) {
    if (index >= 0 && index <= ((filteredCountries.length / ITEMS_PAGE))) {
      setPage(index)
    }
  }

  useEffect(() => {
    (async () => {
      const countriesResponse = await getCountries()
      setCountries(countriesResponse)
      setFilteredCountries(countriesResponse)
    })().catch(() => {
      setApiError(true)
    })
  }, [])

  return (
    <div className='main'>
      <div id='search' className='search-header'>
        <input
          name='search-bar'
          onChange={ (e) => filterCountries(e.target.value)}
          autoComplete='off'
          type='search'
          aria-label='form-control'
          className='form-control'
          placeholder='Search by country name...'
        />
      </div>
      <section className='search-results'>
        <div className='container'>
          { apiError ? 'There was an error, try to refresh' :
            <table className='table table-hover search-results'>
              <thead>
                <tr>
                  <th><button aria-label='Sort by country' onClick={() => orderCountries('name')}>Country</button></th>
                  <th><button aria-label='Sort by capital' onClick={() => orderCountries('capital')}>Capital</button></th>
                  <th><button aria-label='Sort by population' onClick={() => orderCountries('population')}>Population</button></th>
                  <th>Flag</th>
                </tr>
              </thead>
              <tbody>
                {filteredCountries.map((country, index) => (
                  <tr
                    key={country.name.common}
                    className={ (index >= page * ITEMS_PAGE) && (index < (page+1) * ITEMS_PAGE) ? '' : 'row-hidden' }
                  >
                    <td>{country.name.common}</td>
                    <td>{country.capital ? country.capital[0] : NO_CAPITAL}</td>
                    <td>{country.population}</td>
                    <td><img src={country.flags.png} alt={country.flags.alt} loading='lazy'/></td>
                  </tr>
                ))}
                <tr>
                  <td><button aria-label='First page' onClick={()=> navigate(0)}>First</button></td>
                  <td><button aria-label='Previous page' onClick={()=> navigate(page - 1)}>Prev</button></td>
                  <td><button aria-label='Next page' onClick={()=> navigate(page + 1)}>Next</button></td>
                  <td><button aria-label='Last page' onClick={()=> navigate((filteredCountries.length / ITEMS_PAGE) - 1)}>Last</button></td>
                </tr>
              </tbody>
            </table>
          }
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Main
