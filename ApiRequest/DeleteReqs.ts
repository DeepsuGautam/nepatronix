"use server"

const url = process.env.NEXT_APP_BACKEND

export const DelData=async(type:string, id:string)=>{
    try{
        const res = await fetch(`${url}/api/v1/${type}/${id}`,{
            cache:"no-store",
            method:"DELETE"
        });
        if(res.ok){
           return true;
        }else{
            throw new Error("Failed To Delete")
        }
    }catch(err:any){
        return false;
    }
}