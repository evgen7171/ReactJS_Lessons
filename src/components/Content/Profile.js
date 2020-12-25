import React from 'react'
import {withRightBar} from "./withRightBar";
import {getUserByID} from "../../data/utils";
import {MY_ID} from "../../constants";

function Profile() {
    const user = getUserByID(MY_ID)
    if (!user) {
        return null;
    }
    return <table className="table table-bordered col-4">
        <tbody>
        {
            Object.keys(user).map(key => {
                return <tr key={key}>
                    <td>{key}</td>
                    <td>{user[key]}</td>
                </tr>
            })
        }
        </tbody>
    </table>
}

export default withRightBar(Profile)