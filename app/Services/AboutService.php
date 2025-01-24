<?php
namespace App\Services;

use App\Enums\FoldersEnum;
use App\Models\About;
use Illuminate\Support\Facades\Storage;

class AboutService
{
    /**
     * Remove "about" record
     * ------------
     */
    public static function removeAbout(About $about)
    {

        Storage::deleteDirectory(FoldersEnum::Uploads->value);

        if ($about->profile_url) {
            $path = $about->profile_path;
            Storage::delete($path);
        }
        return $about->delete();
    }
}
