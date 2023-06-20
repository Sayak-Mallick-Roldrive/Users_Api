import express from "express";
const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post( '/', (req, res) => {
    console.log(req.body);
    const user = req.body;
    users.push(user);
    res.send(`User with the name ${user.firstName} ${user.lastName} added to the database`);
} );

export default router;
