import {LuNotepadText} from "react-icons/lu";

const BillsNotFound= () => {
    return (
        <div className="w-full h-full min-h-96 flex flex-col items-center justify-center gap-2">
            <LuNotepadText className="text-5xl"/>
            <div>Bills not found</div>
        </div>
    )
};

export default  BillsNotFound;
