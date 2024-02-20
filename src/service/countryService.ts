export interface Country {
  name: {
    common: string
  }
  population: number
  capital: string[]
  flags: {
    png: string
    alt: string
  }
}

async function getCountries(): Promise<Country[]> {
  const data = await fetch('https://restcountries.com/v3.1/all')
  return data.json()
}

export { getCountries }
