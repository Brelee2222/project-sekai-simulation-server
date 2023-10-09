import fs from "fs";
import * as sonolus from "sonolus-core";
import * as levelSimulation from "./levelSimulation";

async function getLevelData(name : string, version : string) : Promise<sonolus.LevelData> {
    const filePath = `./levels/${version}/${name}`;

    if(fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }

    const levelData : sonolus.LevelData = await sonolus.decompress(Buffer.from(await (
        await fetch(`http://servers.sonolus.com/pjsekai/sonolus/levels/${name}/data?${version}`)
    ).arrayBuffer()));

    if(!fs.existsSync(`./levels/${version}`))
        fs.mkdirSync(`./levels/${version}`);

    fs.writeFileSync(filePath, JSON.stringify(levelData));

    return levelData;
}

export async function getSimulatedLevelData(name : string, version : string) {
    const levelData = await getLevelData(name, version);

    levelSimulation.loadLevel(levelData);

    levelSimulation.auto();

    levelSimulation.replayLevel();

    return await sonolus.compress(levelData);
}

