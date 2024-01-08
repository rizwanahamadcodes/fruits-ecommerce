import { IoMailUnreadOutline } from "react-icons/io5";
import Button from "./Button";
import { Input } from "../pages/Checkout";

const SignUpForNewsLetter = () => {
    return (
        <div className="flex flex-col gap-1 justify-between bg-primary-600 rounded-2 lg:rounded-full p-1 lg:flex-row">
            <div className="flex items-center gap-1">
                <IoMailUnreadOutline className="text-gray-100 text-2" />
                <h4 className="text-gray-100">Sign up for our newsletter</h4>
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="flex gap-1 grow justify-end">
                <Input
                    type="text"
                    rounded="rounded-full"
                    placeholder="Your email"
                    className="min-w-0"
                />
                <Button type="submit">Subscribe</Button>
            </form>
        </div>
    );
};

export default SignUpForNewsLetter;
