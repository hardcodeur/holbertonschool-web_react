import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import '../CourseList/CourseList.css'

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
};

function CourseList({ courses = [] }) {

    if(courses.length > 0){
        return(
            <table id="CourseList">
                <thead>
                    <CourseListRow  isHeader={true} textFirstCell="Available courses" />
                    <CourseListRow  isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
                </thead>
                <tbody>
                    {
                        courses.map(course => (
                            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit}/>
                        ))
                    }
                </tbody>
            </table>
        )
    }
    else{
        return(
            <table id="CourseList">
                <thead>
                    <CourseListRow  isHeader={true} textFirstCell="No course available yet" />
                </thead>
            </table>
        );
    }
    
}

export default CourseList;