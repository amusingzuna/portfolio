import { Route, Routes, useLocation } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Navigation from './Navigation';

import Landing from './Landing';
import Projects from './Projects';
import Contacts from './Contacts';
import ErrorPage from './Error';

import './App.scss';

const App = () => {
    const location = useLocation();

    return <>
        <Navigation />

        <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames={"fade"} timeout={500}>
                <Routes location={location}>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    </>
};

export default App;
