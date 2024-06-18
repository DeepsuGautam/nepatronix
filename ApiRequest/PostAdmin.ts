"use server";

const url = process.env.NEXT_APP_BACKEND;

const postAdminData = async (formData: any, type: string) => {
  try {
    const res = await fetch(`${url}/api/v1/${type}`, {
      cache: "no-store",
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Response Error!");
    return true;
  } catch (e: any) {
    console.log(e.message);
    return false;
  }
};

const putAdmin = async (formData: any, type: string, id:string) => {
  try {
    const res = await fetch(`${url}/api/v1/${type}/${id}`, {
      cache: "no-store",
      method: "PUT",
      body: formData,
    });

    if (!res.ok) throw new Error("Response Error!");
    return true;
  } catch (e: any) {
    console.log(e.message);
    return false;
  }
};

export { postAdminData, putAdmin };
