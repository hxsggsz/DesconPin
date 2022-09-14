const generateRandomId = () => {
   return `${(Math.floor(Math.random() * 100000)).toString(16)}`
}

const saveInFolder = async (folders) => {
   localStorage.setItem('folders', JSON.stringify(folders))
}

export const getFolders = async () => {
   return JSON.parse(localStorage.getItem('folders')) || []
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

   return newFolder
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



export const getPins = async () => [
   {
      id: '1',
      name: 'Gatinhos fofos',
      image:'https://i.pinimg.com/736x/0b/55/ea/0b55ea5022ef11af54506dc02bfe8fb0.jpg',
      total: 0
   },
   {
      id: '2',
      name: 'Gatinhos fofos',
      image:'https://i.pinimg.com/564x/51/1f/59/511f59107f4f41761992c496b41206d0.jpg',
      total: 0
   },
   {
      id: '3',
      name: 'Gatinhos fofos',
      image:'https://i.pinimg.com/564x/4d/60/24/4d602414f75868fc67f912d432dc4b63.jpg',
      total: 0
   },
   {
      id: '4',
      name: 'Gatinhos fofos',
      image:'https://i.pinimg.com/564x/c8/11/49/c81149635f28f9e5980cdab97a1aa4c5.jpg',
      total: 0
   },
]