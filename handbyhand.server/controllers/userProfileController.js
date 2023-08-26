const Users = require('../models/Users');

module.exports = {

    getUser: async (req, res) => {
        
        const userId = req.user.userId;
        console.log(userId);
        const author = await Users.findOne({ _id: userId });
        console.log(author);

        if (!author) 
        {
            console.log("Token and author not found in DB!");
            return res.status(409).send("Token and author not found in DB!");
        }

        return res.status(200).json(author); 
    },
};