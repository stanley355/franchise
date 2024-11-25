import Header from "@/app/(main)/_header";
import SessionExpiredDialog from "@/components/custom-ui/SessionExpiredDialog";

type TMainLayout = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: TMainLayout) => {
    return (
        <div className="bg-foreground p-4 h-screen overflow-hidden">
            <div className="bg-background rounded-md h-full">
                <Header />
                {children}
                <SessionExpiredDialog />
            </div>
        </div>
    );
};

export default MainLayout;