import Header from './pages/Header'
import Navbar from './pages/Navbar'
import Slideshow from './pages/Slideshow'
import Content from './pages/Content'
import InfoSection from './pages/InfoSection'

const App = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <Navbar />
            <Slideshow/>
            <Content/>
            <InfoSection/>
        </div>
    );
};

export default App;
