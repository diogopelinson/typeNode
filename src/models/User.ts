import mongoose, {Schema, Document, Model} from "mongoose";

//Interfaces definem estruturas dos dados
export interface IUser extends Document{
    name: string;
    email: string;
    passwordHash: string;
    createAt: Date;
    UpdateAt: Date;
}

const UserSchema: Schema<IUser> = new Schema<IUser>(
    {
        name: { type: String, required: true},
        email: { type: String, required: true, unique: true, lowercase: true, inde: true},
        passwordHash: { type: String, required: true },
    },
    { timestamps: true }
);

export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export default User;