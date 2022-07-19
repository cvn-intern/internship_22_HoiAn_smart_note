<?php

namespace App\Util;

class StringValidation
{
    static public function deleteSpace(string $str)
    {
        $str = trim($str);
        $str = preg_replace('/\s+/', ' ', $str);
        return $str;
    }
}
