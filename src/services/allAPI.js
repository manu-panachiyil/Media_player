


//api to upload video
import { commonAPI } from "./commonAPI"
import { serverUrl } from "./serverUrl"


//api to upload
export const uploadAllVideo =  async(reqBody) => {
   return await commonAPI('POST',`${serverUrl}/videos`,reqBody)
}


//api to get all video
export const getAllVideos = async() => {
   return await commonAPI('GET',`${serverUrl}/videos`,"")
}


//api to delete a video
export const deleteVideo = async(id) => {
   return await commonAPI('DELETE',`${serverUrl}/videos/${id}`,{})
}


//add watch history
export const addToHistory = async(videoDetails) => {
   return await commonAPI('POST',`${serverUrl}/history`,videoDetails)
}


//to get watch history
export const viewHistory = async() => {
   return await commonAPI('GET',`${serverUrl}/history`,'')
}


//to delete watch history
export const deleteWatchHistory = async(id) => {
   return await commonAPI('DELETE',`${serverUrl}/history/${id}`,{})
}

//api to add category
export const addCategory = async (addDetails) => {
   return await commonAPI('POST',`${serverUrl}/category`,addDetails)
}


//api to get all category
export const getAllcategory = async() => {
   return await commonAPI('GET',`${serverUrl}/category`,'')
}

//api yo get a video
export const getAVideo = async(id) => {
   return await commonAPI('GET',`${serverUrl}/videos/${id}`,'')
}

//api to update category

export const updateCategory = async(id,body) =>{
   return await commonAPI('PUT',`${serverUrl}/category/${id}`,body)
}