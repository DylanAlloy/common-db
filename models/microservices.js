const mongoose  = require("mongoose");
const Schema    = mongoose.Schema;
const serviceSchema = new Schema({
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

const Service = module.exports = mongoose.model("services", accessSchema);
