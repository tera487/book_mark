<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function index()
    {
        return Tag::get(['name', 'id']);
    }

    public function store(Request $request)
    {
        $article = new Tag();
        $article = $article->fill($request->only(['name']));
        $article->save();
    }
}
