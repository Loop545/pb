import React from 'react';
import { connect } from 'react-redux';
import * as blogActions from '../../redux/actions/blogActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class BlogAll extends React.Component {
	componentDidMount() {
		if (this.props.blogs.length === 0) {
			this.props.actions.loadBlogs().catch((error) => {
				alert('Loading courses failed' + error);
			});
		}
	}

	render() {
		return (
			<>
				<h2>Read All</h2>
				{this.props.blogs.map((blog) => {
					<p key={blog.title.rendered}>{blog.content.rendered}</p>;
				})}
			</>
		);
	}
}

BlogAll.propTypes = {
	blogs: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
	return {
		blogs: state.blogs,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(blogActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogAll);
