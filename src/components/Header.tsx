import BrandLogo from "./BrandLogo";
import Button from "./Button";
import CloseButton from "./CloseButton";
import Drawer, {
    DrawerBody,
    DrawerFoot,
    DrawerHead,
    useDrawer,
} from "./Drawer";
import Navbar from "./Navbar";

const Header = () => {
    const { isOpen, onClose, onOpen } = useDrawer(false);

    return (
        <>
            <Navbar onOpen={onOpen} />
            <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                <DrawerHead className="pl-1 h-navHeight pr-[7vw] flex justify-between items-center">
                    <BrandLogo />
                    <CloseButton onClick={onClose} />
                </DrawerHead>
                <DrawerBody></DrawerBody>
                <DrawerFoot className="flex flex-col p-1 gap-1">
                    <Button variant="outline">View Cart</Button>
                    <Button>Checkout</Button>
                </DrawerFoot>
            </Drawer>
        </>
    );
};

export default Header;
