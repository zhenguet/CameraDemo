const config = {
  screens: {
    Home: {
      path: 'Startup',
    },
    Profile: {
      path: 'Main/:id',
      parse: {
        id: id => `${id}`,
      },
    },
  },
}

const linking = {
  prefixes: ['demo://app'],
  config,
}

export default linking
