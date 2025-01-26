import BodySection from "./BodySection"
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

BodySectionWithMarginBottom.propTypes={
    title: PropTypes.string.isRequired,
    children : PropTypes.node
}

BodySectionWithMarginBottom.defaultProps = {
    children: null,
};

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: "40px"
    },
  });

function BodySectionWithMarginBottom({title,children}) {
    return (
        <>
        <div className={css(styles.bodySectionWithMargin)}>
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
        </>
    )
}

export default BodySectionWithMarginBottom
