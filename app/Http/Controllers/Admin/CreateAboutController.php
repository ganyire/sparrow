<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateAboutRequest;
use App\Models\About;
use App\Services\AboutService;
use App\Services\FileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CreateAboutController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CreateAboutRequest $request)
    {
        $data = $request->validated();

        $old = About::query()->first();
        if ($old) {
            AboutService::removeAbout($old);
        }

        DB::transaction(function () use ($request, $data) {
            $file = FileService::uploadFile($request, 'profile_url');
            About::query()->create([
                 ...$data,
                'profile_url'  => $file['url'],
                'profile_path' => $file['path'],
            ]);
        });

        return back();
    }
}
