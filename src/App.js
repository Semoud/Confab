import Brands from './components/Brands';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Preview from './components/Preview';
import Testimonials from './components/Testimonials';
import Upcoming from './components/Upcoming';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<Brands />
			<Preview />
			<Testimonials />
			<Upcoming />
		</div>
	);
}

export default App;
