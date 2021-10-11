import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import User from "./pages/User";
import PrivateRoute from "./components/PrivateRoute";


function App() {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <PrivateRoute path='/admin' permission='admin'>
                    <Admin />
                </PrivateRoute>
                <PrivateRoute path='/user' permission='user'>
                    <User />
                </PrivateRoute>
                {/* default route */}
                <Route path='*'>
                    <Redirect to='/login' />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;