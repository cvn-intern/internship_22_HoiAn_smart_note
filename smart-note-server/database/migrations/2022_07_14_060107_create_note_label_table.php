<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Create note_label table if not exists
        if (!Schema::hasTable('note_labels')) {
            Schema::create('note_labels', function (Blueprint $table) {
                $table->id('id');
                $table->timestamps();
                // Define foreign keys
                $table->foreignId('note_id')->nullable()->constrained('notes', 'id')->onDelete('set null');
                $table->foreignId('label_id')->nullable()->constrained('labels', 'id')->onDelete('set null');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('note_label');
    }
};
