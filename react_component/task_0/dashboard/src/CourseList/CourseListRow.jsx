import PropTypes from 'prop-types';

CourseListRow.prototype = {
    isHeader: PropTypes.bool.isRequired,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string.isRequired,
}



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
                <tr>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
                </>
            ) 
        }else{
            return (
                <>
                <tr>
                    <th colSpan="2" >{textFirstCell}</th>
                </tr>
                </>
            ) 
        }
    }else{
        return (
            <>
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
            </>
        )  
    }
}

export default CourseListRow;