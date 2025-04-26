import Header from './pages/Header'
import Navbar from './pages/Navbar'
import Slideshow from './pages/Slideshow'
import Content from './pages/Content'

const App = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <Navbar />
            <Slideshow/>
            <Content/>
        </div>
    );
};

export default App;
