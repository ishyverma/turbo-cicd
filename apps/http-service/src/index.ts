import prisma from "@repo/db/client";
import express from "express";

const app = express();

app.use(express.json())

app.get("/", async (req, res) => {
    res.json({
        message: "Hi there"
    })
})

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const user = await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.json({
        message: "Signup successfull",
        id: user.id
    })
})

app.listen(3001)