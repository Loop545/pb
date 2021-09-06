import React from 'react';
import { connect } from 'react-redux';
import * as poemActions from '../../redux/actions/poemActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import PoemList from './PoemList';

class NewPoems extends React.Component {
	componentDidMount() {
		if (this.props.poems.length === 0) {
			this.props.actions.loadPoems().catch((error) => {
				alert('Loading courses failed' + error);
			});
		}
	}

	render() {
		return (
			<>
				<h2>Poems</h2>
				<PoemList poems={this.props.poems} />
				{/* {this.props.poems.map((blog) => (
					<div key={blog.title.rendered}>{blog.title.rendered}</div>
				))} */}
			</>
		);
	}
}

NewPoems.propTypes = {
	poems: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		poems: state.poems,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(poemActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPoems);
