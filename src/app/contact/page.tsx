export default async function Contact() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    return <p>Contact Page</p>;
}
