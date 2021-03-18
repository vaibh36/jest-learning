import React from 'react';
import {connect} from 'react-redux';

class Input extends React.Component {

    render() {

        const contents = this.props.success ? null : 
        (
            <form>
                <input data-test="input-box" />
                <button data-test="submit-button">submit</button>
            </form>
        )


        return (
            <div data-test="component-input">
                {contents}
            </div>
        )
    }

}

const mapStateToProps = ({success})=>{
    return {
        success
    }
}

export default connect(mapStateToProps)(Input);