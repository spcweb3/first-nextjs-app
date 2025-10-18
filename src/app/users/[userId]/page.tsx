import { notFound } from "next/navigation";

async function fetchUserData(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        return;
    }
    return response.json();
}

export default async function UserPage({ params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const userData = await fetchUserData(userId);
    if (!userData) {
        notFound();
    }
    return (
        <div>
            <h1>User Page</h1>
            <p>User ID: {userId}</p>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
            <p>Website: {userData.website}</p>
        </div>
    );
}
