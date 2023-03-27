@echo off



IF [%1] EQU [] (
	echo Feature adi giriniz
	EXIT /B 1
)


@rem Proje path inde calistirilcak. Parent folder of MyScripts
mkdir MyModules\%1

cd MyModules

mkdir %1\src
mkdir %1\src\components
mkdir %1\src\features
mkdir %1\src\infrastructure
mkdir %1\src\services
mkdir %1\src\utils



mkdir %1\functions

mkdir %1\assets
mkdir %1\assets\animations
mkdir %1\assets\icons
mkdir %1\assets\images
mkdir %1\assets\screenshots