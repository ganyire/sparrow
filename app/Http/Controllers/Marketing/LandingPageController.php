<?php
namespace App\Http\Controllers\Marketing;

use App\Http\Controllers\Controller;
use App\Models\About;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $about = About::query()->first();
        return inertia("Marketing/Landing/index", [
            'about' => $about,
        ]);
    }
}
