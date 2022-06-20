import Brands from './components/Brands';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Preview from './components/Preview';
import QuickLinks from './components/QuickLinks';
import Testimonials from './components/Testimonials';
import Upcoming from './components/Upcoming';

function App() {
	return (
		// FIXME: CHECK ALL FONT COLOURS ARE CORRECT
		// FIXME: CHANGE ALL HIGHLIGHT TEXT TO LINKS ADD COLOUR TO <A/> TAG
		<div className='App'>
			<Navbar />
			<Hero />
			<Brands />
			<Preview />
			<Testimonials />
			<Upcoming />
			<Features />
			<QuickLinks />
		</div>
	);
}

export default App;
