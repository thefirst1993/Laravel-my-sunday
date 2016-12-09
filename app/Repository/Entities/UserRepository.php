<?php 
namespace App\Repository\Entities;

use App\Repository\Eloquents\Repository;
use App\Models\User;
class UserRepository extends Repository
{
 	function model(){
 		return User::class;		
 	}
}