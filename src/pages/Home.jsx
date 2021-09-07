import React from 'react';
import Typing from 'react-typing-animation';
import './Home.scss';


const Home = () => {
	return (
		<div className="main-container">
			<section className="header">
				<div className="one">
					<h2>Hi, I am </h2>
					<Typing>
						<h3>Pradip Bhandari</h3>
						<Typing.Delay ms={1000} />
						<p>
							and a stardust.
							<br />
							Coming from a land of Buddha;
							<br />
							I long for opening my find, freeing it into to the world of
							fantasy.
							<br />
							How great it is to live in a fantasy.
						</p>
						<h1>WELCOME!!!</h1>
						<Typing.Reset count={1} delay={500} />
					</Typing>
				</div>
			</section>
		</div>
	);
};
export default Home;
