const mongoose  = require("mongoose");
const Schema    = mongoose.Schema;
const changeSchema = new Schema({
    service: {
        type: String,
        required: [true],
        default: []
    },
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

const Change = module.exports = mongoose.model("changes", changeSchema);
