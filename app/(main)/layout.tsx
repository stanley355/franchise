import Header from "@/app/(main)/_header";
import SessionExpiredDialog from "@/components/custom-ui/SessionExpiredDialog";

type TMainLayout = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: TMainLayout) => {
    return (
        <div>
                <Header />
                {children}
                <SessionExpiredDialog />
        </div>
    );
};

export default MainLayout;