import express from "express";
import { getSimulatedLevelData } from "./levelsimulation/readlevel";
import * as pjsekaiengine from "pjsekaiengine";
import { getInfo, getLevelList, getLevels } from "./endpoint";

const port = 3000;

const sonolusServer = express().

use("/engine/playdata", (req, res) => {
    res.write(pjsekaiengine.enginePlayData.buffer);
    res.end();
}).

use("/engine/configuration", (req, res) => {
    res.write(pjsekaiengine.engineConfiguration.buffer);
    res.end();
}).

get("/sonolus/info/", async (req, res) => {
    const info = await getInfo(req.originalUrl, req.headers["Sonolus-Session-Id"] as string, req.headers["Sonolus-Session-Data"] as string);

    res
        .set("Sonolus-Version", info["Sonolus-Version"])
        .send(info.data);
}).

get("/sonolus/levels/list", async (req, res) => {
    const info = await getLevelList(req.originalUrl, req.headers["Sonolus-Session-Id"] as string, req.headers["Sonolus-Session-Data"] as string);

    res
        .set("Sonolus-Version", info["Sonolus-Version"])
        .send(info.data);
}).

get("/sonolus/levels/*/data", async (req, res) => {
    const url = req.originalUrl;

    res.write(await getSimulatedLevelData(
        url.slice(16, url.lastIndexOf("/data?")),
        url.slice(url.lastIndexOf("/data?") + 6)
    ));

    res.end();
}).

get("/sonolus/levels/*", async (req, res) => {
    const info = await getLevels(req.originalUrl, req.headers["Sonolus-Session-Id"] as string, req.headers["Sonolus-Session-Data"] as string);

    res
        .set("Sonolus-Version", info["Sonolus-Version"])
        .send(info.data);
}).

get("/sonolus/*", (req, res) => res.redirect(`http://servers.sonolus.com/pjsekai${req.originalUrl}`)).

listen(port, () => console.log("connected"));