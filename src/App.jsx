import Header from './pages/Header'
import Navbar from './pages/Navbar'
import Slideshow from './pages/Slideshow'


const App = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <Navbar />
            <Slideshow/>
        </div>
    );
};

export default App;
