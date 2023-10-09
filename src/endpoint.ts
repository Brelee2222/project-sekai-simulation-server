import { EngineItem, LevelItem, ServerInfo } from "sonolus-core";
import * as pjsekaiengine from "pjsekaiengine";

export type GetSonolusInfo = (url : string, sessionId : string, sessionData : string) => Promise<{"Sonolus-Version" : string, "data" : any}>;

export const getSonolusInfo : GetSonolusInfo = async (url, sessionId, sessionData) => {
    const response = await requestSonolusInfo(url, sessionId, sessionData);
    return {
        "Sonolus-Version" : response.headers.get("Sonolus-Version") as string, 
        "data" : await response.json()
    };
}

export const getInfo : GetSonolusInfo = async (url, sessionId, sessionData) => {
    const info = await getSonolusInfo(url, sessionId, sessionData);

    processInfo(info.data);

    return info;
} 

export const getLevelList : GetSonolusInfo = async (url, sessionId, sessionData) => {
    const info = await getSonolusInfo(url, sessionId, sessionData);

    processLevelList(info.data.items);

    return info;
}

export const getLevels : GetSonolusInfo = async (url, sessionId, sessionData) => {
    const info = await getSonolusInfo(url, sessionId, sessionData);

    processLevelList(info.data.recommended);
    processLevel(info.data.item);

    return info;
}

function processInfo(info : ServerInfo) {
    processLevelList(info.levels.items);
}

function processLevelList(list : LevelItem[]) {
    for(let index = 0; index != list.length; index++) {
        processLevel(list[index]);
    }
}

function processLevel(level : LevelItem) {
    processEngine(level.engine);
}

function processEngine(engine : EngineItem) {
    engine.name = "Project SekAI engine replay";
    engine.author = "NonSpicyBurrito (edited by Brelee2222)";

    engine.playData = {
        url : "/engine/playdata",
        hash : pjsekaiengine.enginePlayData.hash,
        type : "EnginePlayData"
    }

    engine.configuration = {
        url : "/engine/configuration",
        hash : pjsekaiengine.engineConfiguration.hash,
        type : "EngineConfiguration"
    }
}

async function requestSonolusInfo(url : string, sessionId : string, sessionData : string) : Promise<Response> {
    return await fetch(`http://servers.sonolus.com/pjsekai${url}`,
        {
            "method" : "GET",
            "headers" : {
                "Sonolus-Session-Id" : sessionId,
                "Sonolus-Session-Data" : sessionData
            }
        }
    );
}