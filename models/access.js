const mongoose  = require("mongoose");
const Schema    = mongoose.Schema;
const accessSchema = new Schema({
    content: {
        type: Object,
        required: [true],
        default: []
    },
    added: {
        type: Object,
        default: new Date(),
        required: [true, "Error adding datetime!"]
    }
});

const Access = module.exports = mongoose.model("access", accessSchema);
