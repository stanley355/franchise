import Header from "@/app/(main)/_header";
import SessionExpiredDialog from "@/components/custom-ui/SessionExpiredDialog";
import {Providers} from "@/components/custom-ui/Providers";

type TMainLayout = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: TMainLayout) => {
    return (
        <div>
            <Providers>

                <Header />
                {children}
                <SessionExpiredDialog />
            </Providers>
        </div>
    );
};

export default MainLayout;