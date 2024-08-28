
export async function getListData<T>(url: string): Promise<T[]> {
    // Do authorization
    // Get user
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error("Failed somwewhere");
    }
  
    const data = await response.json();
    return data as T[];
  }
  
export async function getDetailData<T>(url: string): Promise<T> {
    // Do authorization
    // Get user
    const response = await fetch(url);

    if (!response.ok) {
    throw new Error("Failed somwewhere");
    }

    const data = await response.json();
    return data as T
}
  
 
export async function postData<T>(url: string, data: any): Promise<T>{
    const response = await fetch(url,{
        method: "Post",
        body: JSON.stringify(data)
    })
    if (!response.ok) {
        throw new Error("Failed creating data");
    }

    const newData = await response.json();
    return newData as T
}

export async function putData<T>(url: string, data: any): Promise<T>{
    const response = await fetch(url,{
        method: "PUT",
        body: JSON.stringify(data)
    })
    if (!response.ok) {
        throw new Error("Failed updating data");
    }

    const updatedData = await response.json();
    return updatedData as T
}

export async function deleteData(url: string): Promise<void>{
    const response = await fetch(url,{
        method: "DELETE"
    })
    if (response.status !== 204) {
        throw new Error("Failed deleting data");
    }
    
    return
}