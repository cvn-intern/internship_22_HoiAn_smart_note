<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class NoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    { 
        // Get random user_id 
        $userId = User::all('id')->shuffle()->first();
        // Get random category_id from the random user
        $categoryId = Category::all(['id', 'user_id'])->where('user_id', '=', intval($userId->id))->shuffle()->first();

        return [
            'note_title' => fake()->city(),
            'note_content' => fake()->realText(),
            'is_deleted' => 0,
            'attachment' => fake()->imageUrl(360, 360, 'animals', true, 'dogs', true),
            'user_id' => $userId->id,
            'category_id' => isset($categoryId->id) ?  $categoryId->id : 1,
        ];
    }
}
