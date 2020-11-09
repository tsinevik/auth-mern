import mongoose from "mongoose";

const MONGOURI = "mongodb+srv://roman:321543@auth-mern.egt6t.mongodb.net/auth-mern?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export default InitiateMongoServer;