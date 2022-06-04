<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function store(Request $request)
    {
        $article = new Article;
        $article = $article->fill($request->only(['title', 'url']));
        $article->save();
        return true;
    }

    public function index()
    {
        return response()->json(Article::get());
    }
}
