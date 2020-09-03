import mongoose from 'mongoose';
import { v4 as uuidv4 } from "uuid";

export const USER_TYPES = {
  CONSUMER: "consumer",
  SUPPORT: "support",
};

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g,""),
    },
    firstName: String,
    lastName: String,
    type: String
  },
  {
    timestamps: true,
    collection: "users"
  }
);

userSchema.statics.createUser = async function (
	    firstName, 
    	lastName, 
    	type
) {
  try {
    const user = await this.create({ firstName, lastName, type });
    return user;
  } catch (error) {
    throw error;
  }
}

userSchema.statics.getUserById = async function (id){
  try {
    const user = await this.findOne({ _id: id }); //mongoose's findOne method
    if (!user) throw ({ error: 'No user with this id found' });
    return user;
  } catch (error) {
    throw error;
  }
}

userSchema.statics.getUsers = async function () {
  try {
    const users = await this.find();
    return users;
  } catch (error) {
    throw error;
  }
}

userSchema.statics.deleteUserById = async function (id) {
  try {
    const deleted = await this.remove({ _id : id});
    return deleted;
  } catch (error) {
    throw error;
  }
}

export default mongoose.model("User", userSchema);