const Get = async (uri, type = "array") => {
  try {
    const res = await fetch(uri, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.message);
    }
    return data?.data;
  } catch (error) {
    console.log(error?.message);
    return type === "array" ? [] : type === "object" ? {} : null;
  }
};

