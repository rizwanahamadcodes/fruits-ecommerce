import Drawer, { useDrawer } from "./Drawer";
import Navbar from "./Navbar";

const Header = () => {
    const { isOpen, onClose, onOpen } = useDrawer(true);

    return (
        <>
            <Navbar onOpen={onOpen} />
            <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                Hello
            </Drawer>
        </>
    );
};

export default Header;
