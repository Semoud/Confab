import Brands from './components/Brands';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Preview from './components/Preview';
import Testimonials from './components/Testimonials';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<Brands />
			<Preview />
			<Testimonials />
		</div>
	);
}

export default App;
