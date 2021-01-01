import {Component} from "react";
import {connect} from "react-redux";
import {mapDispatchToMenu, mapStateToMenu} from "./utils";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {Link} from "react-router-dom";
import {logOut} from "../../../../services/firebase";

class ProfileMenu extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div id="profile" className="d-flex header-profile" onClick={this.props.showMenu}>
            <div>user</div>
            <div className="ml-2 header-profile-icon">lk</div>
            {
                this.props.menuVisible &&
                <div className="drop-menu">
                    <Link to="/user" className="drop-menu-item">
                        <span>Профиль этого пользователя</span>
                    </Link>
                    <Link to="/user" className="drop-menu-item" onClick={logOut}>
                        <span>Выйти</span>
                    </Link>
                </div>
            }
        </div>
    }
}

export default connect(mapStateToMenu, mapDispatchToMenu)(ProfileMenu)