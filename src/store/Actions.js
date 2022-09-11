import * as types from "./Types";
import * as pinService from "../services/PinService"
const sleep = (time) => (           //função criada para ser possivel
   new Promise(Resolve => {         //ver o loading nos botões pois
      setTimeout(Resolve, time);    //como está tudo sendo salvo no
   })                               //localStorage, é tudo muito rapido
)                                   //e não é possível ver o loading nos botões

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
   await sleep(1000);

   const newFolder = await pinService.saveFolder(folderName)
   dispatch(saveFoldersSuccessAction(newFolder)) 
}

export const savePinInFoldersInitAction = () => ({
   type: types.savePinInFoldersInitType,
})

export const savePinInFoldersSuccessAction = () => ({
   type: types.savePinInFoldersSuccessType,
})

export const savePinInFolderAction = async (dispatch, pinId, folderId) => {
   dispatch(savePinInFoldersInitAction());
   await pinService.savePinInFolder(folderId, pinId)
}
