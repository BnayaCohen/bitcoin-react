import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './assets/scss/global.scss'
import { AppHeader } from './cmps/AppHeader';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { ContactDetailsPage } from './pages/ContactDetailsPage';
import { ContactEdit } from './pages/ContactEdit';
import { StatisticPage } from './pages/StatisticPage';

const PrivateRoute = (props) => {
    const isAdmin = true
    // return isAdmin ? <Route path={props.path} component={props.component} /> : <Redirect to='/' />
    return isAdmin ? <Route {...props} /> : <Redirect to='/' />
}

function App() {
    return (
        <Router>
            <div className="main-app">
                <AppHeader />

                <main className='container'>
                    <Switch>
                        <Route path='/contact/edit/:id?' component={ContactEdit} />
                        <PrivateRoute path='/contact/:id' component={ContactDetailsPage} />
                        <Route path='/contact' component={ContactPage} />
                        <Route path='/statistics' component={StatisticPage} />
                        <Route path='/' component={HomePage} />
                    </Switch>
                </main>

                <footer>
                    <section className='container'>
                        coffeeRights 2022 &copy;
                    </section>
                </footer>
            </div>
        </Router>
    )
}

export default App;
