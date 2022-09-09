export const getFolders = async () => {
   return JSON.parse(localStorage.getItem('folders')) || []
}

const generateRandomId = () => {
   return Math.floor(Math.random() * 100000).toString(16)
}

const saveInFolder = async (folders) => {
   localStorage.setItem('folders', JSON.stringify(folders))
}
export const saveFolder = async (folderName) => {
   const folders = await getFolders()

   const newFolder = {
      id: generateRandomId(),
      name: folderName,
      pins: []
   }

   folders.push(newFolder)

   await saveInFolder(folders)
}

export const savePinInFolder = async (folderId, pinId) => {
   const folders = await getFolders()

   const foldersIndex = folders.findIndex(folder => {
      return folder.id === folderId;
   });

   if(foldersIndex !== -1) {
      folders[foldersIndex].pins.push(pinId)
   }

   await saveInFolder(folders)

   return {...folders[foldersIndex]}
}