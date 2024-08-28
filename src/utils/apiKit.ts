
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
  
 
//TODO: create postData function taking url, and data as any returning T

//TODO: create putData fucntion taking url, and data as any returning T

//TODO: create deleteData function taking url and returning nothing