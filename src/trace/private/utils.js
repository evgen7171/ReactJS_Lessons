export function mapRequestToProps(location) {
    const args = location.search;
    if (!args) {
        return {
            empty: true
        }
    }

    const matches = args.matchAll(/peer=(\d+)_(\d+)/g);
    if (!matches) {
        return null;
    }
    const array = [...matches][0]
    return {
        peers: [
            +array[1],
            +array[2]
        ],
        peersString:
            array[1] + '_' + array[2]
    }
}