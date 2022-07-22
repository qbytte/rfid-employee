const functions = require("firebase-functions");
const moment = require("moment");

exports.onLogCreate = functions.database
  .ref("/logs/{logId}")
  .onCreate((snapshot, context) => {
    const logId = context.params.logId;
    console.log(logId);

    const logData = snapshot.val();
    const start = moment(logData.start, "HH:mm:ss");
    const finish = moment(logData.finish, "HH:mm:ss");

    const duration = moment.duration(finish.diff(start));

    const hrs = parseInt(duration.asHours());
    const min = parseInt(duration.asMinutes()) % 60;
    const sec = parseInt(duration.asSeconds()) % 60;

    return snapshot.ref.update({
      hrsWorked: moment(`${hrs}:${min}:${sec}`, "HH:mm:ss").format("HH:mm:ss"),
    });
  });