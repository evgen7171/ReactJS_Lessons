import {getActiveUserID, getUserNameByID} from "../../../data/utils";

export const getChatTitleByPeers = (userIDs) => {
    if (!userIDs) {
        return null
    }
    const userID = getUserIDByPeersIDs(userIDs);
    return getUserNameByID(userID);
}

export const getUserIDByPeersIDs = (userIDs) => {
    const activeUserID = getActiveUserID();
    if (userIDs.length === 2) {
        return userIDs.find(userID => userID !== activeUserID);
    }
    return null;
}

export const getChatLink = (userIDs) => {
    if (userIDs.length === 2) {
        return `/im?peer=` + userIDs.join('_');
    }
    return null;
}