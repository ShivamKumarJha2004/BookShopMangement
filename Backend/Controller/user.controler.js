
import usercoll from "../model/user.model.js";
import dcrypt from "bcryptjs"
export const signup = async(req, res) => {
    try {
        const { Fullname, Email, Password } = req.body;
        const user = await usercoll.findOne({ Email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await dcrypt.hash(Password, 10);
        const createdUser = new usercoll({
            Fullname: Fullname,
            Email: Email,
            Password: hashPassword,
        });
        await createdUser.save();
       return res.status(201).json({
            message: "User createdd successfully",
            user: {
                _id: createdUser._id,
                Fullname: createdUser.Fullname,
                Email: createdUser.Email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

 
 export const login = async(req, res) => {
    try {
        const { Email, Password } = req.body;
        const user = await usercoll.findOne({ Email });
        const isMatch = await dcrypt.compare(Password, user.Password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successfully",
                user: {
                    _id: user._id,
                    Fullname: user.Fullname,
                    Email: user.Email,
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};