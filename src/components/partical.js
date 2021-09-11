import React, { Component } from 'react';
import Particles from 'react-particles-js';

class Partical extends Component {
	render() {
		return (
			<Particles
				params={{
					particles: {
						color: {
							value: '#ffffff',
						},
						number: {
							value: 300,
							density: {
								enable: true,
								value_area: 3000,
							},
						},
						line_linked: {
							enable: true,
							opacity: 0.2,
						},
						move: {
							direction: 'none',
							enable: true,
							speed: 3,
						},
						size: {
							value: 2,
						},
						opacity: {
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 0.05,
							},
						},
					},
					fullScreen: {
						enable: true,
						zIndex: 1,
					},
					interactivity: {
						detect_on: 'canvas',
						events: {
							onhover: { enable: true, mode: 'repulse' },
							onclick: { enable: true, mode: 'push' },
							resize: true,
						},
						modes: {
							grab: { distance: 400, line_linked: { opacity: 1 } },
							bubble: {
								distance: 400,
								size: 40,
								duration: 2,
								opacity: 8,
								speed: 3,
							},
							repulse: { distance: 200, duration: 0.4 },
							push: { particles_nb: 4 },
							remove: { particles_nb: 2 },
						},
					},
					retina_detect: true,
				}}
			/>
		);
	}
}
export default Partical;
