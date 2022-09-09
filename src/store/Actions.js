import * as types from "./Types";
import * as pinService from "../services/PinService"

export const openModalSavePinAction = () => ({
   type: types.openModalSavePinType
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