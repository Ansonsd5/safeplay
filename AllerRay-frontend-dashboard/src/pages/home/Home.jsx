import Dashboard from '../dashboard/Dashboard';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <section id='hero' className='hero'>
                <h1>Welcome to AllerRay</h1>
                <p>Sunshine, Safety, and Smiles! Keeping Kids Healthy Outdoors</p>
                <Link to="/skincancer" className='crazy-button'>
                    Learn More About UV Safety
                </Link>
            </section>
            <Dashboard />
        </>
    );
}

export default Home;