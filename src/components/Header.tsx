import { useDrawer } from "./Drawer";
import CartDrawer from "./Drawers/CartDrawer";
import Navbar from "./Navbar";

const Header = () => {
    const { isOpen, onClose, onOpen } = useDrawer(false);

    return (
        <>
            <Navbar onOpen={onOpen} />
            <CartDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </>
    );
};

export default Header;
