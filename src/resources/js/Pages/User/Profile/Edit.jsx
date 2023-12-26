import { useEffect } from 'react';
import UserLayout from '@/Layouts/UserLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
    lang,
    timezone
}) {
    const { t } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    return (
        <UserLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">プロフィール</h2>}
            timezone={timezone}
            lang={lang}
        >
            <Head title={t('Profile')} />

            <div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
