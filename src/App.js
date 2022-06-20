import Brands from './components/Brands';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Preview from './components/Preview';
import QuickLinks from './components/QuickLinks';
import Testimonials from './components/Testimonials';
import Upcoming from './components/Upcoming';

function App() {
	return (
		// TODO: CHECK ALL FONT COLOURS ARE CORRECT
		// TODO: CHANGE ALL HIGHLIGHT TEXT TO LINKS ADD COLOUR TO <A/> TAG
		// TODO: REMOVE ALL ICONS IN ASSETS FOLDER REPLACED WITH HEROICONS
		// TODO: REPLACE ALL BUTTONS WITH A BUTTON COMPONENT
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
		</div>
	);
}

export default App;
