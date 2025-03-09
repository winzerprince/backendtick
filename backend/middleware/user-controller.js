const User = require('../models/User.js');

const createUser = async (req, res) => {
    try {
        const { name, email, phoneNumber, password, qrCode } = req.body;
        const newUser = await User.create({ name, email, phoneNumber, password, qrCode });
        res.status(201).json(newUser);
    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to create user' });

    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: 'User not found in Database' });
        res.status(200).json(user);
    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to get user' });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);


    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to get users' });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phoneNumber, password, qrCode } = req.body;
        let user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: 'User not found in database' });
        await User.update({ name, email, phoneNumber, password, qrCode }, { where: { userID: id } });
        user = await User.findByPk(id);
        res.status(200).json(user);
    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to update user' });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: 'User not fould in database' });
        await user.destroy;
        console.log('User deleted Successfully');
        res.status(200).json({ message: 'User deleted' })
    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to delete user' });

    }
}

const deleteUsers = async (req, res) => {
    try {
        const result = await User.destroy({ where: {}, truncate: true });
        res.status(200).json({ message: 'Users deleted' }, result);


    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to delete users' })
    }
}
module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    deleteUsers,
}
