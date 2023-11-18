import clsx from "clsx";
import { useSearchParams } from "react-router-dom";
import Select, { OptionProps, SingleValue, components } from "react-select";
import { categories } from "../data/categories";

type OptionType = {
    id: number;
    value: string;
    label: string;
    imageUrl: string;
};

const SelectCategories = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);
    const handleCategorySelect = (e: SingleValue<OptionType>) => {
        if (e) {
            setSearchParams((prev) => {
                prev.set("selectedCategory", e.id.toString());
                return prev;
            });
        }
    };

    return (
        <Select
            value={categories.find(
                (category) =>
                    category.id ===
                    parseInt(searchParams.get("selectedCategory") || "0")
            )}
            onChange={(e) => handleCategorySelect(e as SingleValue<OptionType>)}
            placeholder="Select Category"
            className="mb-2"
            options={categories}
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
