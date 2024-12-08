'use client'

import {useSearchParams} from "next/navigation";

const InventoriesFilterText = () => {
    const searchParams = useSearchParams();
    const brand = searchParams.get("brand");
    const color = searchParams.get("color");
    const size = searchParams.get("size");

    if (!brand && !color && !size) {
        return null;
    }

    return (
        <div className="flex gap-2 items-center">
            Filter:
            {brand && <span>{brand};</span>  }
            {size && <span>{size};</span>}
            {color && <span>{color};</span>  }
        </div>
    )
};

export default InventoriesFilterText;