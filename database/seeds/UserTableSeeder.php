<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'root',
            'email' => 'root@gmail.com',
            'password' => bcrypt('123qwe'),
            'level' => '0',
            'birthday'=>'Null',
            'sex'=>'Nữ',            
        ]);
    }
}
