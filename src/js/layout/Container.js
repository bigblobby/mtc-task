import React from 'react';
import {composeClassNames} from "../utilities/classnames";

class Container extends React.Component {
    static defaultProps = {
        mw: 1100
    }
    constructor(props) {
        super(props);

        this.state = {
            classNames: ''
        }
    }

    componentDidMount() {
        this.convertProps(this.props);
    }

    convertProps = (props) => {
        const classNames = composeClassNames(
            props.mw && `max-width-${props.mw}`
        );

        this.setState({classNames});
    }

    render() {
        const classNames = composeClassNames('container', 'container-fluid', this.state.classNames, this.props.classNames);

        return (
            <div className={classNames}>
                {this.props.children}
            </div>
        );
    }
}

export default Container;

