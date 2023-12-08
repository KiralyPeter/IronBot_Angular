import express from "express";
import cors from "cors";
import { sample_robots, sample_tags } from "./data";

const app = express();

// in development frontend: localhots:4200 
// in development backend: localhost:500
// in development we cannot accept two different address
// this is why we need "cors" for development time..

app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.get("/api/robots", (req, res)=>{
    res.send(sample_robots);
})

app.get("/api/robots/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const robots = sample_robots
        .filter(robot => robot.name.toLowerCase()
        .includes(searchTerm.toLowerCase()));
        res.send(robots);
})

app.get("/api/robots/tags", (req, res) => {
    res.send(sample_tags);
})

app.get("/api/robots/tag/:tagName", (req, res) =>{
    const tagName = req.params.tagName;
    const robots = sample_robots
        .filter(robot => robot.tags?.includes(tagName));
        res.send(robots);
})

app.get("/api/robots/:robotId", (req, res) => {
    const robotId = req.params.robotId;
    const robot = sample_robots.find(robot => robot.id == robotId);
    res.send(robot);
})

const port = 5000;

app.listen(port, ()=>{
    console.log("Website served on http://localhost:" + port);
})