import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function CreateAbout() {
    const { data, setData, post, processing, errors, reset } = useForm({
        founder: '',
        phone: '',
        brief: '',
        years_of_experience: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
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
                        <div className="max-w-[500px] p-6 text-gray-900">
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
                                            autoComplete="founder"
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.founder}
                                        />
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
