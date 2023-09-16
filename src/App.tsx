import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Index from './pages/layouts/Index';
import MoviesPage from './pages/MoviesPage';
import TvsPage from './pages/TvsPage';
import DetailMoviePage from './pages/DetailMoviePage';
import DetailTvPage from './pages/DetailTvPage';
import SearchResultsPage from './pages/SearchResultsPage';
import DetailPersonPage from './pages/DetailPersonPage';
import PersonsPage from './pages/PersonsPage';
import { ErrorBoundary } from 'react-error-boundary';
import NotFound from './pages/Error/NotFound';

function App() {
    
    return (
        <ErrorBoundary fallback={<p>something error..</p>} onError={(err, info) => { console.log('err', err); console.log('info', info) }}>            
            <HashRouter>
                <Routes>         
                    <Route path='/' element={<Index />} >
                        <Route index element={<MoviesPage />} />                  {/* 기본 홈페이지 = 영화 페이지*/}
                        <Route path='/movie/detail/:id' element={<DetailMoviePage />} />

                        <Route path='/tv'>
                            <Route index element={<TvsPage /> } />
                            <Route path='/tv/detail/:id' element={<DetailTvPage />} />
                        </Route>
                
                        <Route path='/person'>
                            <Route index element={<PersonsPage />} />
                            <Route path='/person/detail/:id' element={<DetailPersonPage />} />
                        </Route>
                    
                        <Route path='/search/result/:select' element={<SearchResultsPage />} />   
                    </Route>           
                    <Route path="/*" element={<NotFound />} />                     
                </Routes>
            </HashRouter>               
        </ErrorBoundary>       
    );
}

export default App;
