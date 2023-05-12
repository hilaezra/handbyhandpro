const Users = require('../models/Users');
const bcrypt = require('bcrypt');

const handleNewUser = async(req, res) => {
    const { firstname, lastname, email, facebookuser, username, password } = req.body;
    if(!firstname || !lastname || !email || !facebookuser || !username || !password) 
        return res.status(400).json({'message' : 'Missing registration details'});

    const duplicate = await Users.findone({email: email}).exec();
    if(duplicate) return res.sendStatus(409); //conflict       

    try{

        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);
        //create and srore the new user
        const result = await Users.create({
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "facebookuser": facebookuser,
            "username": username,
            "password": hashedPwd
        });

        console.log(result);
        res.status(201).json({'success' : 'New user created!' });

    } catch(err)
    {
        res.status(500).json({'message' : err.message });
    }
}