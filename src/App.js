import Brands from './components/Brands';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Preview from './components/Preview';
import QuickLinks from './components/QuickLinks';
import Testimonials from './components/Testimonials';
import Upcoming from './components/Upcoming';

function App() {
	return (
		// TODO: CHANGE NEWSLETTER INPUT AUTOFILL BG COLOUR
		<div className='App'>
			<Navbar />
			<Hero />
			<Brands />
			<Preview />
			<Testimonials />
			<Upcoming />
			<Features />
			<QuickLinks />
			<Newsletter />
			<Footer />
		</div>
	);
}

export default App;
