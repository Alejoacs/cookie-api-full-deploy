import User from "../models/User.js";

const validateRegister = async (username, email, password) => {
    if (username.length < 8 || username.length > 20) {
        throw new Error("Username must be between 8 and 20 characters long");
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        throw new Error("Email is not valid");
    }

    if (password.length < 8 || password.length > 16) {
        throw new Error("Password must be between 8 and 16 characters long");
    }

    const userExists = await User.findOne({ username });
    if (userExists) {
        throw new Error("Username is already in use");
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
        throw new Error("Email is already in use");
    }
};

const validateLogin = async (emailOrUsername, password) => {
    const userFound = await User.findOne({ $or: [{ email: emailOrUsername }, { username: emailOrUsername }] }).populate("role");

    if (!userFound) {
        throw new Error("User not found");
    }

    const matchPassword = await User.comparePassword(password, userFound.password);

    if (!matchPassword) {
        throw new Error("Invalid password");
    }
};

export { validateRegister, validateLogin }
