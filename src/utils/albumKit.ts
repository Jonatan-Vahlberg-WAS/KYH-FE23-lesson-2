


import { deleteData, getDetailData, getListData, postData, putData } from "./apiKit";

async function getAlbums() {
    try {
      const albums = await getListData<Album>(
        "https://jsonplaceholder.typicode.com/albums"
      );
      return albums;
    } catch (error) {
      console.log("ERROR: fetching albums");
    }
  }

async function getAlbum(id: number) {
  try {
    const album = getDetailData<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
    return album
  } catch (error) {
    console.log("ERROR: fetching album");
  }
}



async function postAlbum(data: AlbumData) {
    try {
        const newAlbum = await postData<Album>(`https://jsonplaceholder.typicode.com/albums/`, data)
        return newAlbum
    } catch (error) {
        console.log("ERROR: creating album")
    }
}

async function putAlbum(data: Album) {
    try {
        const updatedAlbum = await putData<Album>(`https://jsonplaceholder.typicode.com/albums/${data.id}`, data)
        return updatedAlbum
    } catch (error) {
        console.log("ERROR: updating album")
    }
}

async function deleteAlbum(id: number) {
    try {
        const newAlbum = await deleteData(`https://jsonplaceholder.typicode.com/albums/${id}`)
        return newAlbum
    } catch (error) {
        console.log("ERROR: deleting album")
    }
}