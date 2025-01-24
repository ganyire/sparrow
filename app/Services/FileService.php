<?php
namespace App\Services;

use App\Enums\FoldersEnum;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileService
{

    /**
     * Upload file and return file url, null otherwise
     * ------------
     */
    public static function uploadFile(Request $request, string $inputName)
    {
        $fileMeta = [
            'path' => '',
            'url'  => '',
        ];
        if ($request->hasFile($inputName) && $request->file($inputName)->isValid()) {
            $filePath         = $request->file($inputName)->store(FoldersEnum::Uploads->value);
            $url              = Storage::url($filePath);
            $fileMeta['url']  = $url;
            $fileMeta['path'] = $filePath;
        }
        return $fileMeta;
    }
}
