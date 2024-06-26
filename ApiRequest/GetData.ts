"use server";

const url = process.env.NEXT_APP_BACKEND;

const getLists = async (type: string, page: number, elems: any) => {
  try {
    const res: any = await fetch(`${url}/api/v1/${type}`, {
      cache: "no-store",
      headers: {
        page: JSON.stringify(page),
        elems: JSON.stringify(elems),
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    return;
  }
};

const getSole = async (type: string, id: string) => {
  try {
    const res: any = await fetch(`${url}/api/v1/${type}/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return;
  }
};

export { getLists, getSole };
