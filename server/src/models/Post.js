// CREATING A MODEL
const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    createdAt: Number,
    updatedAt: Number,
},
{
    timestamps: {
        currentTime: () => Math.floor(Date.now() / 1000)
    }
});


const PostEntry = mongoose.model('PostEntry', postSchema);
module.exports = PostEntry