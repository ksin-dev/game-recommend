import * as React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import ApolloClient, { gql } from 'apollo-boost';
import Router from './Router';
import './index.scss';

import { blue, green, lightGreen, indigo, grey, lightBlue, deepOrange } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900],
      100: blue[100]
    },
    primary: {
      main: deepOrange[600]
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

const client = new ApolloClient({
  uri: "http://192.168.35.215:3000/graphql"
})

class App extends React.Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

render(<App />, document.getElementById('app'));