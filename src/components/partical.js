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
							opacity: 0.02,
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
						events: {
							onclick: {
								enable: true,
								mode: 'push',
							},
							onHover: {
								enable: true,
								mode: 'connect',
							},
						},
						modes: {
							push: {
								particles_nb: 1,
							},
						},
					},
					retina_detect: true,
				}}
			/>
		);
	}
}
export default Partical;
