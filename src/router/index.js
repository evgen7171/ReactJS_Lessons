import {Component} from "react";
import {connect} from "react-redux";
import {authorize} from "../services/firebase";
import {Switch, Route, Redirect} from "react-router-dom";

export const PrivateRoute = ({...rest}) => <Route {...rest}/>
export const PublicRoute = ({...rest}) => <Route {...rest}/>

class AuthSwitch extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => authorize()
    componentDidUpdate = () => authorize()

    getComponentName = Component => Component.type.name;

    render() {
        return <Switch>
            {
                this.props.children.map(Component => {
                    if (!this.props.auth && this.getComponentName(Component) === "PrivateRoute") {
                        return null;
                    }
                    if (this.props.auth && this.getComponentName(Component) === "PublicRoute") {
                        return null;
                    }
                    return Component
                })
            }
            {
                !this.props.auth && <Redirect to="/"/>
            }
        </Switch>
    }
}

function mapStateToAuth(state) {
    return {
        auth: state.authReducer.auth
    }
}

export default connect(mapStateToAuth)(AuthSwitch)