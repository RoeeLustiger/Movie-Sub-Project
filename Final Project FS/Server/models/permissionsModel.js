const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema(
  {
    id: { type: Number },
    permission: { type: String }
  },
  { collection: 'permissions' }
);

module.exports = mongoose.model("permissions", permissionSchema);
