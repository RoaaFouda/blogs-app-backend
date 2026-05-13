import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({ 
    username:{
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }

}, {timestamps: true})


//TODO: toJSON to never return password or __v 
userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        return ret;
    }
});

//TODO: Method to hash passwords
userSchema.statics.hashPassword = function(password){
    return bcrypt.hash(password, 10);
}
//TODO: Method to compare passwords
userSchema.methods.comparePasswords = async function(password){
    return await bcrypt.compare(password, this.password);
}


const User = mongoose.model('User', userSchema)
export default User;
