import { Schema, model, version } from "mongoose";

const userSchema = new Schema({
    _id: { type: String, required: true },
    firstname: { type: String },
    lastname: { type: String },
    age: { type: String },
    email: { type: String, required: true },
    occupation: { type: String },
    password: { type: String, required: true },
    isOnline: { type: Boolean, default: false }
}, {
    versionKey: false,
    _id: false
});

export default model('User', userSchema)
