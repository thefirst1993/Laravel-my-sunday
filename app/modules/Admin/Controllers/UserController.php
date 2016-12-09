<?php 
namespace Modules\Admin\Controllers;

use App\Http\Controllers\AdminController;
use App\Repository\Entities\UserRepository;
use Modules\Requests\AdminLoginRequest;

class UserController extends AdminController
{
    protected $model;

    public function __construct(UserRepository $model)
    {
        $this->model=$model;
    }

    function login(){
    	dd($this->model->all());
    }
    function access(AdminLoginRequest $request){
    	
    }
}
