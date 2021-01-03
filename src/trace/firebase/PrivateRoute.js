import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {mapStateToAuth} from "../../router/utils";

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('private')
        const Component = this.props.component;
        return (
            <Route
                {...this.props.rest}
                render={(props) =>
                    this.props.auth === true ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{pathname: "/login", state: {from: props.location}}}
                        />
                    )
                }
            />
        );
    }
}

export default connect(mapStateToAuth)(PrivateRoute)