import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// export model user with UserSchema
export default mongoose.model("user", UserSchema);
