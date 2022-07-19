<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Note extends Model
{
    use HasFactory, SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'note_title',
        'note_content',
        'attachment',
        'user_id',
        'category_id',
    ];

    // 
    protected $hidden = [
        'is_deleted',
        'deleletd_at',
        'updated_at'
    ];

}
