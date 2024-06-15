import commonAPI from './commonAPI';
import SERVERURL from './serverurl';

export const registerAPI = async (reqBody) =>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI = async (reqBody) =>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

export const addProjectAPI = async (reqBody,reqHeader) =>{
    //project/add
    return await commonAPI("POST",`${SERVERURL}/project/add`,reqBody,reqHeader)
}

//Home Project
export const homeProjectAPI = async () =>{
    return await commonAPI("GET",`${SERVERURL}/get-home-projects`,"")
}

//User Project
export const userProjectAPI = async (reqHeader) =>{   
    return await commonAPI("GET",`${SERVERURL}/user-projects`,"",reqHeader)
}

//All Project
export const allProjectAPI = async (reqHeader) =>{
    return await commonAPI("GET",`${SERVERURL}/all-projects`,"",reqHeader)
}