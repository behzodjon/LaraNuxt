<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);
        if (!Auth::attempt($request->only('email', 'password'))) {
            throw ValidationException::withMessages([
                'auth' => 'No user found with this data!'
            ]);
        }
        $user = auth()->user();

        $token = $user->createToken('Laravel Password GRAND client');
        return response()->json([
            'token' => $token->accessToken
        ]);
    }

    public function user(Request $request)
    {
        return response([
            'user' => $request->user()
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response([
            'success' => true
        ]);
    }
}
