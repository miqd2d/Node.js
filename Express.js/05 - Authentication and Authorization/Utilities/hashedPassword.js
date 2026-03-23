const bcrypt = require("bcrypt");

const generateHashedPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword;
}

const checkPassword = async(originalPassword, hashedPassword) => {
    return bcrypt.compare(originalPassword, hashedPassword);
}

module.exports = {generateHashedPassword, checkPassword};