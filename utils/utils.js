exports.todayAsDDMMYYYY = (epoch_timestamp) => {
    if (epoch_timestamp !== undefined) {
        let date = new Date(epoch_timestamp * 1000);
        return ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear();
    }
    let now = new Date();
    return ("0" + now.getUTCDate()).slice(-2) + "-" + ("0" + (now.getUTCMonth() + 1)).slice(-2) + "-" + now.getUTCFullYear();
}