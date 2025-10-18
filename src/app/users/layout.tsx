import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Users",
    description: "A lot of keywords about users",
    keywords: ["users", "user list", "user data"],
};

export default function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <p style={{ color: "red" }}>User Page Header</p>
            {children}
        </div>
    );
}
