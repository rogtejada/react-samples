import * as Linking from 'expo-linking';

const linking = {
    prefixes: [Linking.createURL("/")],
    config: {
      screens: {
        Login: "login",
      },
    },
  };
  
  export default linking;
  