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
export const allProjectAPI = async (searchKey,reqHeader) =>{
    return await commonAPI("GET",`${SERVERURL}/all-projects?search=${searchKey}`,"",reqHeader)
}

//Edit project
export const editProjectAPI = async(pid,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/project/${pid}/edit`,reqBody,reqHeader)
}

//remove project
export const removeProjectAPI = async(pid,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVERURL}/project/${pid}/remove`,{},reqHeader)
}

//edit user
export const editUserAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/user/edit`,reqBody,reqHeader)
}
