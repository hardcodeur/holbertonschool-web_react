import CourseListRow from './CourseListRow.jsx';
import WithLogging from "../HOC/WithLogging.jsx"
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
// import './CourseList.css'

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
    table: {
        borderCollapse: 'collapse',
        border: '2px solid rgb(161, 161, 161)',
      },
      th: {
        borderCollapse: 'collapse',
        border: '2px solid rgb(161, 161, 161)',
      },
      tr: {
        borderCollapse: 'collapse',
        border: '2px solid rgb(161, 161, 161)',
      },
      td: {
        borderCollapse: 'collapse',
        border: '2px solid rgb(161, 161, 161)',
      },
      courseList: {
        width: '100%',
      },
})

function CourseList({ courses = [] }) {

    if(courses.length > 0){
        return(
            <table id="CourseList" className={css(styles.courseList)}>
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
            <table id="CourseList" className={css(styles.courseList)}>
                <thead>
                    <CourseListRow  isHeader={true} textFirstCell="No course available yet" />
                </thead>
            </table>
        );
    }
    
}

const LoggedCourseList = WithLogging(CourseList)

export default LoggedCourseList;