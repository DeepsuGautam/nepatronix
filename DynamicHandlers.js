export async function fetchData(id, url) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/v1/${url}/${id}`,
      {
        next: { revalidate: 21600 }, // Cache and revalidate every 24 hours
      }
    );

    if (!res.ok) throw new Error("Failed to fetch data");

    const response = await res.json();

    return {
      ok: true,
      data: response?.data || null,
    };
  } catch (err) {
    console.error("Fetch Error:", err.message);
    return { ok: false, data: null };
  }
}

export async function genMeta(id, url) {
  const res = await fetchData(id, url);
  if (!res.ok || !res?.data) {
    // Fallback for errors or missing data
    return {
      title: "Neelcloud | 404 Not Found",
      description: "Neelcloud | Page not found or unavailable.",
      openGraph: {
        title: "Neelcloud | 404 Not Found",
        description: "Neelcloud | Page not found or unavailable.",
        type: "website",
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/${url}/${id}`,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_DOMAIN}/default-image.jpg`, // Default fallback image
            width: 1200,
            height: 630,
            alt: "404 Not Found",
          },
        ],
      },
    };
  }

  const data = res?.data;

  return {
    title: data?.title || "Neelcloud",
    description: data?.description || "Explore designs on Neelcloud.",
    openGraph: {
      title: data?.title || "Neelcloud",
      description: data?.description || "Explore designs on Neelcloud.",
      type: "website",
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/${url}/${id}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SERVER}${
            data?.cover || "/default-image.jpg"
          }`, // Use cover or fallback
          width: 1200,
          height: 630,
          alt: data?.title || "Neelcloud Design",
        },
      ],
    },
  };
}
