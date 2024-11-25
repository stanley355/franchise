import ChangePasswordForm from "@/app/(main)/accounts/change-password/_components/ChangePasswordForm";
import ChangePasswordDialog from "@/app/(main)/accounts/change-password/_components/ChangePasswordDialog";

const ChangePasswordPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-lg font-bold mb-4">CHANGE PASSWORD</h1>
            <ChangePasswordForm />
            <ChangePasswordDialog />
        </div>
    )
};

export default ChangePasswordPage;