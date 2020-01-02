import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Review from "~/pages/Review";
import UserMyPage from "~/pages/Users/_id";
import ContentPage from '~/pages/Contents/_id';
import Admin from '~/pages/admin'
import Sample from "~/pages/sample"

export default class Router extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/review" component={Review} />
					<Route path="/users/:id" component={UserMyPage} />
					<Route path="/content/:id" component={ContentPage} />
					<Route path="/admin" component={Admin} />
					<Route path="/sample" component={Sample} />
				</Switch>
			</BrowserRouter>
		);
	}
}
