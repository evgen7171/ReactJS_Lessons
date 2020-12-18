import React from "react";
import {getMyInfo} from "../components/utils";

export const Profile = ({history}) => {
    const user = getMyInfo();
    const keys = Object.keys(user);
    return <div className="form-control form-group bg-white messages-field border-primary">
        <table className="col-4 table table-bordered">
            <tbody>
            {keys.map(key => <tr key={key}>
                <td>{key}</td>
                <td>{user[key]}</td>
            </tr>)}
            </tbody>
        </table>
    </div>
}