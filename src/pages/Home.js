import { Link } from "react-router-dom";

export default function HomePage(){
    return (
        <>
            <h1>My home page</h1>
            <p>Go to <Link to="/products">the list of Products</Link></p>
        </>);
}