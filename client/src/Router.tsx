import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import Review from "~/pages/Review";
import UserMyPage from "~/pages/Users/_id";
import ContentPage from '~/pages/Contents/_id';
import ContentsPage from "~/pages/Contents";
import Admin from '~/pages/admin'
import Login from '~/pages/Login'
import Signup from '~/pages/Signup'

export default class Router extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" >
						<Login loginType="LOGIN" />
					</Route>
					<Route path="/signup">
						<Login loginType="SIGNUP" />
					</Route>
					<Route path="/review" component={Review} />
					<Route path="/users/:id" component={UserMyPage} />
					<Route exact path="/contents" component={ContentsPage} />
					<Route path="/contents/:id" component={ContentPage} />
					<Route path="/admin" component={Admin} />
				</Switch>

			</BrowserRouter>
		);
	}
}
