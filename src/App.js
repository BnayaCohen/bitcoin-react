import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import './assets/scss/global.scss'
import { AppHeader } from './cmps/AppHeader';
import { SignupPage } from './pages/SignupPage';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { ContactDetailsPage } from './pages/ContactDetailsPage';
import { ContactEdit } from './pages/ContactEdit';
import { StatisticPage } from './pages/StatisticPage';

const PrivateRoute = ({children}) => {
    const isAdmin = true
    // return isAdmin ? <Route path={props.path} component={props.component} /> : <Redirect to='/' />
    return isAdmin ? children : <Navigate to='/' />
}

function App() {
    return (
        <Router>
            <div className="main-app">
                <AppHeader />

                <main className='container'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/signup' element={<SignupPage />} />
                        <Route path='/contact/edit/:id' element={<ContactEdit />} />
                        <Route path='/contact/edit/' element={<ContactEdit />} />
                        <Route path='/contact/:id' element={
                        <PrivateRoute>
                            <ContactDetailsPage />
                        </PrivateRoute>
                        } />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='/statistics' element={<StatisticPage />} />
                    </Routes>
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

export default App