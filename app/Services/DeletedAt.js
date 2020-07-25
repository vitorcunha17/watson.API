"use strict";

const Moment = require("moment");

class DeletedAt {
  static async deleted(object) {
    if (object.deleted_at === null) {
      object.deleted_at = Moment().format("YYYY-MM-DD HH:mm:ss");
    } else {
      object.deleted_at = null;
    }

    await object.save();
    return object;
  }
}

module.exports = DeletedAt;
