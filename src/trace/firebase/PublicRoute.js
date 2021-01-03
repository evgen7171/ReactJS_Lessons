import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {mapStateToAuth} from "../../router/utils";

class PublicRoute extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('public')
        const Component = this.props.component;
        return (
            <Route
                {...this.props.rest}
                render={(props) =>
                    this.auth === false ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/chat"/>
                    )
                }
            />
        );
    }
}

export default connect(mapStateToAuth)(PublicRoute)