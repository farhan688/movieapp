import './styles/App.css';
import MovieContainer from './assets/MovieContainer';
import Footer from './assets/Footer';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Movie Search</h1>
      </header>
      <MovieContainer />
      <Footer />
    </div>
  );
};

export default App;