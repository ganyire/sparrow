import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { About } from '@/types/resources';
import { Transition } from '@headlessui/react';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

type Payload = {
    founder: string;
    phone: string;
    brief: string;
    years_of_experience: string | number;
    profile_url: File | null;
};

type CreateAboutProps = {
    about: About;
};
export default function CreateAbout(props: CreateAboutProps) {
    const { about } = props;

    const {
        data,
        setData,
        post,
        processing,
        errors,
        progress,
        recentlySuccessful,
    } = useForm<Payload>({
        founder: about?.founder || '',
        phone: about?.phone || '',
        brief: about?.brief || '',
        years_of_experience: about?.years_of_experience || '',
        profile_url: null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('about.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    About
                </h2>
            }
        >
            <Head title="About" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="max-w-[500px] p-8 text-gray-900">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Add information about the company
                                </h2>

                                <form
                                    onSubmit={submit}
                                    className="mt-6 space-y-6"
                                >
                                    <div>
                                        <InputLabel
                                            htmlFor="founder"
                                            value="Who is the company's founder"
                                        />

                                        <TextInput
                                            id="name"
                                            className="mt-1 block w-full"
                                            value={data.founder}
                                            onChange={(e) =>
                                                setData(
                                                    'founder',
                                                    e.target.value,
                                                )
                                            }
                                            required
                                            isFocused
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.founder}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="phone"
                                            value="Contact number"
                                        />

                                        <TextInput
                                            id="phone"
                                            className="mt-1 block w-full"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData('phone', e.target.value)
                                            }
                                            required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.phone}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="years_of_experience"
                                            value="Years of experience (*)"
                                        />

                                        <TextInput
                                            id="years_of_experience"
                                            className="mt-1 block w-full"
                                            value={data.years_of_experience}
                                            type="number"
                                            min={1}
                                            onChange={(e) =>
                                                setData(
                                                    'years_of_experience',
                                                    e.target.value,
                                                )
                                            }
                                            required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.years_of_experience}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="brief"
                                            value="Write a small brief about the company (max 500 words) (*)"
                                        />

                                        <textarea
                                            id="brief"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            value={data.brief}
                                            onChange={(e) =>
                                                setData('brief', e.target.value)
                                            }
                                            rows={4}
                                            required
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.brief}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="profile_url"
                                            value="Upload founder's profile picture"
                                        />

                                        <TextInput
                                            id="profile_url"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            // value={data.profile_url}
                                            type="file"
                                            onChange={(e) =>
                                                e.target.files &&
                                                e.target.files[0] &&
                                                setData(
                                                    'profile_url',
                                                    e.target.files[0],
                                                )
                                            }
                                        />

                                        {progress && (
                                            <progress
                                                value={progress.percentage}
                                                max="100"
                                            >
                                                {progress.percentage}%
                                            </progress>
                                        )}

                                        <InputError
                                            className="mt-2"
                                            message={errors.profile_url}
                                        />
                                    </div>

                                    <div className="mt-4 flex items-center gap-4">
                                        <PrimaryButton disabled={processing}>
                                            Save
                                        </PrimaryButton>

                                        <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out"
                                            enterFrom="opacity-0"
                                            leave="transition ease-in-out"
                                            leaveTo="opacity-0"
                                        >
                                            <p className="text-sm text-gray-600">
                                                Saved.
                                            </p>
                                        </Transition>
                                    </div>
                                </form>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
