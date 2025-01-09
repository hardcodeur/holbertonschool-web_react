import BodySection from "./BodySection"
import PropTypes from 'prop-types';
import "./BodySectionWithMarginBottom.css"

BodySectionWithMarginBottom.PropTypes={
    title: PropTypes.string.isRequired,
    children : PropTypes.node
}

BodySectionWithMarginBottom.defaultProps = {
    children: null,
};

function BodySectionWithMarginBottom({title,children}) {
    return (
        <>
        <div className="bodySectionWithMargin">
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
        </>
    )
}

export default BodySectionWithMarginBottom
