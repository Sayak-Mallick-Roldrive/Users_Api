import express from "express";
import bodyParser  from "body-parser";
import usersRoutes from "./routes/users.js";
import cors from "cors";
const app = express();
const PORT = 5100;

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req,res) => {res.send('Hello World')});

app.use('/users', usersRoutes);


app.listen(PORT, () => {
    console.log(`The Server is running on http://localhost:${PORT}`);
});
