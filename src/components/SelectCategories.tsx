import clsx from "clsx";
import { useDispatch } from "react-redux";
import Select, { OptionProps, SingleValue, components } from "react-select";
import { categories } from "../data/categories";
import { updateSelectedCategory } from "../store/slices/productsSlice";

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
                container: () => "max-w-lg cursor-pointer",
                control: ({ isFocused }) =>
                    clsx(
                        "!rounded-full px-0.5 h-3 bg-white shadow-soft !cursor-pointer",
                        !isFocused &&
                            "!border-transparent border-gray-200 hover:border-primary",
                        isFocused &&
                            "!border-primary !shadow-primary-border !border-1 outline-none"
                    ),
                menu: () => "!rounded-1.5 overflow-hidden !border-[0]",
                menuList: () => "!py-0",
                option: ({ isSelected, isFocused }) =>
                    clsx(
                        "h-3 !pl-1 leading-[2rem] !cursor-pointer hover:bg-primary/30 !rounded-full !border-[0]",
                        isSelected && "!bg-primary/50",
                        isFocused && "!bg-primary/20"
                    ),
                dropdownIndicator: ({ isFocused }) =>
                    clsx("!transition-all", isFocused && "rotate-180"),
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
        <Option {...props} className={clsx("h-3", isSelected && "font-white")}>
            <span>{label}</span>
        </Option>
    );
};

export default SelectCategories;
