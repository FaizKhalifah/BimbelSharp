import userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class UserService{
    constructor(){
        this.repository = userRepository();
    }

    async register(userData){
        if(!userData.name || !userData.email || userData.password){
            throw new Error("Username, email, and password are required");
        }

        const hashedPassword = await bcrypt.hash(userData.password,10);
        userData.password = hashedPassword;
        const User = await this.repository.createUser(userData);
        const token = jwt.sign(
            {
                id:User.id,
                username:User.name
            },
            'your_jwt_secret',
            { expiresIn: '1h' }
        )
        return {user:User, token}
    }

    async login(userInput){
        const user = await this.repository.findByName(userInput.name);
        if (!user) {
            throw new Error("User not found");
        }
        const isPasswordValid = await bcrypt.compare(userInput.password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }
        const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
            return { user, token };
        }
}

export default UserService;