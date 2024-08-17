import { TIMEOUT_SECS } from "./config";

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

export const getJson = async function(url){
    try{
        const response = await Promise.race([timeout(TIMEOUT_SECS),fetch(`${url}`)]);
        const responseData = await response.json();
        if(!response.ok) throw new Error(responseData.message);
        return responseData;
    }catch(err){
        throw err
    }
    
}

export const sendJson = async function(url,uploadData){
    try{
        const fetchPro = fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uploadData)
        })

        const response = await Promise.race([timeout(TIMEOUT_SECS),fetchPro]);
        const responseData = await response.json();
        if(!response.ok) throw new Error(responseData.message);
        return responseData;
    }catch(err){
        throw err
    }
    
}