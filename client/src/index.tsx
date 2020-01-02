import * as React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { gql } from "apollo-boost";
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from "apollo-upload-client"
import Router from "./Router";
import "./index.scss";

import {
	blue,
	green,
	lightGreen,
	indigo,
	grey,
	lightBlue,
	deepOrange
} from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		secondary: {
			main: grey[900],
			100: blue[100]
		},
		primary: {
			main: deepOrange[600]
		},
		third: {
			main: grey[900]
		}
	} as any,
	typography: {
		// Use the system font instead of the default Roboto font.
		fontFamily: ['"Lato"', "sans-serif"].join(",")
	}
});

const link = createUploadLink({ uri: "http://52.231.65.42/graphql" });
const client = new ApolloClient({
	cache: new InMemoryCache(),
	link
});

class App extends React.Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<ThemeProvider theme={theme}>
					<Router />
				</ThemeProvider>
			</ApolloProvider>
		);
	}
}

render(<App />, document.getElementById("app"));
