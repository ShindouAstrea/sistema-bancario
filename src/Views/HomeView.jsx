import React from 'react';
import { Link } from 'react-router-dom';
export default function HomeView() {

	return (
		<div className="mt-4">
			<h1>Bienvenido</h1>
			<button className='button'><Link className="links" to="/Menu">Menu</Link></button>
		</div>

	);
}