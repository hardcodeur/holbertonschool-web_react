import PropTypes from 'prop-types';

CourseListRow.prototype = {
    isHeader: PropTypes.bool.isRequired,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string.isRequired,
}

const rowHeaderBg = { backgroundColor: '#f5f5f5ab'}
const rowBg =  { backgroundColor: '#deb5b545'}


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
                <tr style={rowHeaderBg}>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
                </>
            ) 
        }else{
            return (
                <>
                <tr style={rowHeaderBg}>
                    <th colSpan="2" >{textFirstCell}</th>
                </tr>
                </>
            ) 
        }
    }else{
        return (
            <>
            <tr style={rowBg}>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
            </>
        )  
    }
}

export default CourseListRow;