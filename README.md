# Wire: Bower Clone

This project clones https://bower.io/search/

At the moment of implementation, the api was not returning values. In the task description it was specified that the candidate could use another API if desired. And that is what I did

The chosen api is: 'https://restcountries.com/v3.1/all'

This endpoint returns an array with 250 elements corresponding to each country/dependendy in the world. Each element returns useful country information like name, capital name, population, flags, and many others.

I render that information in the table on creation.

# How to run:

After cloning, execute `yarn` to install dependencies an then execute `yarn start` to start the development server
The url will appear in the console, it should be something like `http://localhost:5173/`

# Functionalities:

## Search: Using the search bar we can filter by country name
## Sort: Using the header buttons, it is possible to sort by country name, capital name or population
## Pagination: A maximum of 5 elements are visible, but with the pagination at the bottom, we can navigate to see more data

# How to test:

The command to run test is `yarn test`

The test framework used is `Vitest` https://vitest.dev/

Have fun with it ;)
