import { WebSocketServer } from "ws";
import prisma from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
    prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
  socket.send("Hi there you are connected to the server")
});
