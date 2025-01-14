import clsx from "clsx";
import { useSearchParams } from "react-router-dom";
import Select, { components, OptionProps, SingleValue } from "react-select";
import { categories, Category } from "../data/categories";

type OptionType = Category;

const SelectCategories = () => {
    const [searchParams, setSearchParams] = useSearchParams();
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
            options={categories}
            classNames={{
                container: () => "w-full cursor-pointer",
                control: ({ isFocused }) =>
                    clsx(
                        "!rounded-full px-0.5 pl-1 h-3 !bg-white !border-[1px] !border-gray-200  hover:!border-primary !cursor-pointer",
                        isFocused &&
                            "!border-primary !shadow-primary-border !border-1 outline-none"
                    ),
                menu: () => "!rounded-1.5 overflow-hidden !border-[0]",
                menuList: () => "!p-0.25",
                option: ({ isSelected, isFocused }) =>
                    clsx(
                        "h-3 !font-medium !pl-1.5 leading-[2rem] !cursor-pointer !border-gray-100 border-transparent mb-0.25 last:mb-0  ",
                        !isSelected && "!text-gray-600",
                        isSelected &&
                            "!text-primary !bg-primary/20 rounded-full",
                        isFocused && "!border-y-primary",
                        isFocused && !isSelected && "!bg-transparent"
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
    const { label, icon: Icon } = data;
    const { Option } = components;

    return (
        <Option
            {...props}
            className={clsx(
                "h-3 !flex !items-center !gap-0.75",
                isSelected && "font-white !text-primary"
            )}>
            <Icon />
            <span>{label}</span>
        </Option>
    );
};

export default SelectCategories;
