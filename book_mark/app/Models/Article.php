<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Article extends Model
{
    use HasFactory;
    protected $fillable = ['url', 'title'];

    protected $appends = [
        'less_title', 'less_url'
    ];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function getLessTitleAttribute()
    {
        return $this->adjustStringLength($this->title);
    }

    public function getLessUrlAttribute()
    {
        return $this->adjustStringLength($this->url);
    }

    private function adjustStringLength($stringToAjust)
    {
        return Str::length($stringToAjust) >= 15 ? Str::limit($stringToAjust, 35) : $stringToAjust;
    }
}
