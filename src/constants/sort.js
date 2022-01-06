/**
 * Sorting we will be using
 */
const sort = {
  default: 'default',
  ascendingName: 'ascendingName',
  descendingName: 'descendingName',
  ascendingCountry: 'ascendingCountry',
  descendingCountry: 'descendingCountry',
}

const sortTypes = {
  ascendingName: {
     fn: (a, b) => a.name.first.localeCompare(b.name.first)
  },
  descendingName: {
     fn: (a, b) => b.name.first.localeCompare(a.name.first)
  },
  ascendingCountry: {
    fn: (a, b) => a.location.country.localeCompare(b.location.country)
  },
  descendingCountry: {
    fn: (a, b) => b.location.country.localeCompare(a.location.country)
  },
  default: {
     fn: (a, b) => (a.id - b.id)
  }
};

export {
  sort,
  sortTypes
}