async function makePostRequest() {
    const response = await fetch(`${process.env.NEXT_URL}/api/hello`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Pengcheng" }),
    });
    const data = await response.json();
    return { data };
}

export default async function Friends() {
    const { data } = await makePostRequest();
    return <p>Hey Friends, {data.message}</p>;
}
