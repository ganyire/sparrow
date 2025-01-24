<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateAboutRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
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
        ];
    }
}
