import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Slideshow from './pages/Slideshow';
import Content from './pages/Content';
import InfoSection from './pages/InfoSection';
import Footer from './pages/Footer';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-200">
            <Header />
            <Navbar />
            <Slideshow />
            <Content />
            <InfoSection />
            <Footer />
        </div>
    );
};

export default App;