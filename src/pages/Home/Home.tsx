import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import HeroSection from "./HeroSection";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products);
    const cartItems = useSelector((state: RootState) => state.cart);
    const {
        products: productsList,
        searchKeyword,
        selectedCategory,
    } = products;

    const filteredProductsList = productsList
        .filter((singleProduct) => {
            if (selectedCategory === 0) {
                return true;
            }

            return singleProduct.categoryId === selectedCategory;
        })
        .filter((singleProduct) => {
            if (searchKeyword.length === 0) {
                return true;
            }

            return singleProduct.name.includes(searchKeyword);
        });

    return (
        <>
            <HeroSection />
        </>
    );
};

export default Home;
