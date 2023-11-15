import { useDispatch } from "react-redux";
import Select, { OptionProps, SingleValue, components } from "react-select";
import { categories } from "../data/categories";
import { updateSelectedCategory } from "../store/slices/productsSlice";
import cn from "../utils/cn";

type OptionType = {
    id: number;
    value: string;
    label: string;
    imageUrl: string;
};

const options = categories;
const SelectCategories = () => {
    const dispatch = useDispatch();

    const handleCategorySelect = (e: SingleValue<OptionType>) => {
        if (e) {
            dispatch(updateSelectedCategory(e.id));
        }
    };

    return (
        <Select
            onChange={(e) => handleCategorySelect(e as SingleValue<OptionType>)}
            placeholder="Select Category"
            className="mb-2"
            options={options}
            classNames={{
                container: () => cn("max-w-lg"),
                control: ({ isFocused }) =>
                    cn(
                        "!rounded-full px-0.5 h-3 bg-white !border-none shadow-soft",
                        isFocused &&
                            "!border-primary !shadow-primary-border !border-1 outline-none"
                    ),
                menu: () => "!rounded-1.5 overflow-hidden",
                menuList: () => "!py-0",
                option: ({ isSelected, isFocused }) =>
                    cn(
                        "h-3 !pl-1 leading-[2rem] !cursor-pointer hover:bg-primary/30 !rounded-full",
                        isSelected &&
                            "!bg-gradient-to-r from-primary to-primary-400 text-white",
                        isFocused && "!bg-primary/20"
                    ),
                dropdownIndicator: ({ isFocused }) =>
                    cn("!transition-all", isFocused && "rotate-180"),
            }}
            components={{ Option: OptionWithIcon }}
        />
    );
};

const OptionWithIcon = (props: OptionProps<OptionType>) => {
    const { data, isSelected } = props;
    const { label } = data;
    const { Option } = components;

    return (
        <Option {...props} className={cn("h-3", isSelected && "font-white")}>
            <span>{label}</span>
        </Option>
    );
};

export default SelectCategories;
