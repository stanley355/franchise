import {AiTwotoneQuestionCircle} from "react-icons/ai";

const ErrorPage = () => {
    return (
        <div className="w-full h-full min-h-96 flex flex-col items-center justify-center gap-2">
            <AiTwotoneQuestionCircle className="text-5xl" />
            <div>Unknown error occurred, please refresh or try again</div>
        </div>
    )
};

export default ErrorPage