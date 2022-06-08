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
        if (!empty($request->tag)) {
            logger(array_column($request->tag, 'id'));
            $article->tags()->sync(array_column($request->tag, 'id'));
        }
        return true;
    }

    public function index()
    {
        return response()->json(Article::get());
    }
}
