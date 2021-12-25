import Link from "next/link";
import { useRouter } from "next/router"
import Navbar from "../components/Navbar";
// Challenge PRODUCT_DATA filled by users
const Home = () => {
    const PRODUCT_DATA = {
        color: "red",
        value: 100
    }

    const router = useRouter();

    const productPage = () => {
        router.push({
            pathname: '/product/123',
            query: PRODUCT_DATA
        });
    }

    return (
        <div>
            <Navbar/>
            <h1>Hello World!</h1>
                <button onClick={productPage}>Products</button>
        </div>
    )
}

export default Home
