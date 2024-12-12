import commonAPI from "./commonAPI";
import server_url from "./serviceUrl";

//api call for add video details,

 export const addVideoAPI=async(video)=>{

  return await commonAPI("POST",`${server_url}/allVideos`,video)
}

//api call for get videos

 export const getVideoAPI=async()=>{
 return await commonAPI("GET",`${server_url}/allVideos`,"")
}

//api call for delete videocard

export const deleteVideoAPI = async (videoId) => {
  return await commonAPI("DELETE", `${server_url}/allVideos/${videoId}`,{})
}

//api call for adding data in watch history

export const saveWatchHistory = async (videoDetails) => {
  return await commonAPI("POST", `${server_url}/watchHistory/`,videoDetails)
}

//api call for get watchHistory

export const getHistoryAPI = async () => {
  return await commonAPI("GET", `${server_url}/watchHistory`, "")
}

//API call for delete video card

export const deleteHistoryAPI = async (videoId) => {
  return await commonAPI("DELETE", `${server_url}/watchHistory/${videoId}`, {})
}

//api call for add category
export const addCategoryAPI = async (categoryDetails) => {
  return await commonAPI("POST", `${server_url}/category/`, categoryDetails)
}

//api call for get all category

export const getCategoryAPI = async () => {
  return await commonAPI("GET", `${server_url}/category`, "")
}

//api for delete category

export const deleteCategoryAPI = async (categoryId) => {
  return await commonAPI("DELETE", `${server_url}/category/${categoryId}`, {})
}

//api call for drag category

export const getSingleVideoAPI = async (videoId) => {
  return await commonAPI("GET", `${server_url}/allVideos/${videoId}`, "")
}

//api call for update api

export const updateCategoryAPI = async (categoryId,categoryDetails) => {
  return await commonAPI("PUT", `${server_url}/category/${categoryId}`,categoryDetails)
}

//api call for getting single category
export const getSingleCategoryAPI = async (categoryId) => {
  return await commonAPI("GET", `${server_url}/category/${categoryId}`, "")
}
