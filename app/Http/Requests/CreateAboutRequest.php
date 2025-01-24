<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\File;

class CreateAboutRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'founder'             => ['required', 'max:255'],
            'years_of_experience' => ['required', 'integer'],
            'phone'               => 'required|max:255',
            'brief'               => ['required', 'max:500'],
            'profile_url'         => ['sometimes', 'nullable', File::image()->max(1024)],
        ];
    }
}
