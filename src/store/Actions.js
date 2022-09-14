import * as types from "./Types";
import * as pinService from "../services/PinService"

export const openModalSavePinAction = (pinId) => ({
   type: types.openModalSavePinType,
   payload: pinId
})

export const openModalCreateFolderAction = () => ({
   type: types.openModalCreateFolderType
})

export const closeModalAction = () => ({
   type: types.closeModaltype
})

export const fetchFoldersInitAction = () => ({
   type: types.fetchFoldersInitType
})

export const fetchFoldersSuccessAction = (folders) => ({
   type: types.fetchFoldersSuccessType,
   payload: folders
})

export const fetchFoldersAction = async (dispatch) => {
   dispatch(fetchFoldersInitAction())
   const folders = await pinService.getFolders()
   dispatch(fetchFoldersSuccessAction(folders))
}

export const saveFoldersInitAction = () => ({
   type: types.saveFoldersInitType
})

export const saveFoldersSuccessAction = (folder) => ({
   type: types.saveFoldersSuccessType,
   payload: folder
})

export const saveFoldersAction = async (dispatch, folderName) => {
   dispatch(saveFoldersInitAction())
   //esse setTimeout serve para ser posivel ver o loading do botão
   setTimeout(async () => {                                                         
      const newFolder = await pinService.saveFolder(folderName) 
   dispatch(saveFoldersSuccessAction(newFolder))                
   }, 1000)
}

export const savePinInFoldersInitAction = () => ({
   type: types.savePinInFoldersInitType,
})

export const savePinInFoldersSuccessAction = (folders) => ({
   type: types.savePinInFoldersSuccessType,
   payload: folders
})

export const savePinInFolderAction = async (dispatch, pinId, folderId) => {
   dispatch(savePinInFoldersInitAction());
   setTimeout( async () => {
      await pinService.savePinInFolder(folderId, pinId);
      const folders = await pinService.getFolders();
      dispatch(savePinInFoldersSuccessAction(folders))
   }, 1000)
}

export const fetchPinsInitAction = () => ({
   type: types.fetchPinsInitType
})

export const fetchPinsSuccessAction = (pinsData) => ({
   type: types.fetchPinsSuccessType,
   payload: pinsData
})

export const fetchPinsAction = async (dispatch) => {
   dispatch(fetchPinsInitAction())
   const pinsData = await pinService.getPins()
   dispatch(fetchPinsSuccessAction(pinsData))
}