import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

CourseListRow.prototype = {
    isHeader: PropTypes.bool.isRequired,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#deb5b545',
    },
    rowStyle: {
        backgroundColor: '#f5f5f5ab',
    },
    th: {
        border: '2px solid #ddd',
        padding: '10px',
    },
    td: {
        border: '2px solid #ddd',
        padding: '10px',
    },
});


function CourseListRow({
    isHeader = false,
    textFirstCell = '',
    textSecondCell = null
}) 
{
    if (isHeader) {
        if(textSecondCell){
            return (
                <>
                <tr className={css(styles.headerStyle)}>
                    <th className={css(styles.th)}>{textFirstCell}</th>
                    <th className={css(styles.th)}>{textSecondCell}</th>
                </tr>
                </>
            ) 
        }else{
            return (
                <>
                <tr className={css(styles.headerStyle)}>
                    <th colSpan="2" className={css(styles.th)}>{textFirstCell}</th>
                </tr>
                </>
            ) 
        }
    }else{
        return (
            <>
            <tr className={css(styles.rowStyle)}>
                <td className={css(styles.td)}>{textFirstCell}</td>
                <td className={css(styles.td)}>{textSecondCell}</td>
            </tr>
            </>
        )  
    }
}

export default CourseListRow;