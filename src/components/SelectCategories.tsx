import Select, { OptionProps, components } from "react-select";
import { categories } from "../data/categories";
import cn from "../utils/cn";

type OptionType = {
    value: string;
    label: string;
    imageUrl: string;
};

const options = categories;
const SelectCategories = () => {
    return (
        <Select
            placeholder="Select Category"
            className="mb-2"
            options={options}
            classNames={{
                container: () => cn("max-w-lg mx-auto"),
                control: ({ isFocused }) =>
                    cn(
                        "!rounded-full px-0.5 h-3 bg-white",
                        isFocused &&
                            "!border-primary !shadow-primary-border !border-1 outline-none"
                    ),
                menu: () => "!rounded-1.5 overflow-hidden",
                menuList: () => "!py-0",
                option: ({ isSelected, isFocused }) =>
                    cn(
                        "h-3 flex leading-[2rem] !cursor-pointer hover:bg-primary/30",
                        isSelected &&
                            "!bg-gradient-to-r from-primary to-primary-400 text-white",
                        isFocused && "!bg-primary/10"
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
    const { label, imageUrl } = data;
    const { Option } = components;

    return (
        <Option
            {...props}
            className={cn("h-3 !flex gap-1", isSelected && "font-white")}>
            <img
                src={imageUrl}
                alt=""
                className="h-2 w-2 object-contain bg-white p-0.25 rounded-full"
            />
            <span>{label}</span>
        </Option>
    );
};

export default SelectCategories;
