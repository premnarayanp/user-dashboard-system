import mongoose from "mongoose";
const LetterSchema = new mongoose.Schema({
    letterName: {
        type: String,
        required: true,
    },
    letterURL: {
        type: String,
        required: true,
    },

    letterThumbName: {
        type: String,
    },

    letterThumbURL: {
        type: String,
        required: true,
    },

    title: {
        type: String,
    },

    letterType: {
        type: String,
    },

    description: {
        type: String,
    },

    issueDate: {
        type: String,
    },
    acceptDate: {
        type: String,
    },
    joiningDate: {
        type: String,
    },
    roll: {
        type: String,
    },
    package: {
        type: String
    },
    location: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
});

const Letter = mongoose.model('Letter', LetterSchema);
export default Letter;