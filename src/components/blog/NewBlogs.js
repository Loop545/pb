import React from 'react';
import { connect } from 'react-redux';
import * as blogActions from '../../redux/actions/blogActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import BlogList from './BlogList';

class NewBlogs extends React.Component {
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
				<h2>Blogs</h2>
				<BlogList blogs={this.props.blogs} />
				{/* {this.props.blogs.map((blog) => (
					<div key={blog.title.rendered}>{blog.title.rendered}</div>
				))} */}
			</>
		);
	}
}

NewBlogs.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NewBlogs);
