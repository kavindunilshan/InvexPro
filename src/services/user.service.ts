import User, {IUser} from "../models/user";


class UserService {
    async createUser(data: Partial<IUser>) : Promise<IUser> {
        const user = new User(data);
        await user.save();
        return user;
    }

    async getAllUsers(): Promise<IUser[]> {
        return User.find().exec();
    }

    async getUserById(id: string): Promise<IUser | null> {
        return User.findById(id).exec();
    }

    async updateUser(id: string, data: Partial<IUser>): Promise<IUser | null> {
        return User.findByIdAndUpdate(id, data, {new: true}).exec();
    }

    async deleteUser(id: string): Promise<IUser | null> {
        return User.findByIdAndDelete(id).exec();
    }
}


export default new UserService();