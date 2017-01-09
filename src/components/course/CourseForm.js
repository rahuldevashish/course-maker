import React from 'react';
import TextInput from '../common/TextInput';

const CourseForm = ({course, onSave, onChange, loading, errors}) => {
	return (
		<form>
			<h1>Manage Course</h1>
			<TextInput 
				name="title"
				label="Title"
				value={course.title}
				onChange={onChange}
				error={errors.title}/>
			<TextInput 
				name="author"
				label="Author"
				value={course.author}
				onChange={onChange}
				error={errors.author}/>
			<TextInput 
				name="category"
				label="Category"
				value={course.category}
				onChange={onChange}
				error={errors.category}/>
			<TextInput 
				name="course"
				label="Course"
				value={course.url}
				onChange={onChange}
				placeholder="example: www.learnwebdevelopment.com"
				error={errors.url}/>
			<input 
				type="submit"
				disabled={loading}
				value={loading ? "Saving..." : "Saved"}
				className="btn btn-primary"
				onClick={onSave} />
		</form>
	);
};

CourseForm.propTypes = {
	course: React.PropTypes.object.isRequired,
	onSave: React.PropTypes.func.isRequired,
	onChange: React.PropTypes.func.isRequired,
	loading: React.PropTypes.bool,
	errors: React.PropTypes.object
};

export default CourseForm;