<?php 
namespace App\Providers;
use Illuminate\Support\ServiceProvider;
class ModuleProvider extends ServiceProvider{
	public function boot(){
		$modules=config("module.modules");
		while (list(,$module) = each($modules)) {
            if(file_exists(app_path().'/modules/'.$module.'/route.php')) {
                include app_path().'/modules/'.$module.'/route.php';
            }
            if(is_dir(app_path().'/modules/'.$module.'/Views')) {
                $this->loadViewsFrom(app_path().'/modules/'.$module.'/Views', $module);
            }
        }
	}

	public function register(){}
}