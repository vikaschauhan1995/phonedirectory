import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/scss/App.scss';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* Header */}
        <Header />
        {/* Body */}
        <Body />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
