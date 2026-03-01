@echo off
echo Creating directories...
if not exist "app\wordpress" mkdir "app\wordpress"
if not exist "app\industrial-design" mkdir "app\industrial-design"
if not exist "app\api" mkdir "app\api"
if not exist "app\api\contact" mkdir "app\api\contact"

echo Copying files...
copy "wordpress-page.tsx" "app\wordpress\page.tsx"
copy "industrial-design-page.tsx" "app\industrial-design\page.tsx"
copy "api-contact-route.ts" "app\api\contact\route.ts"

echo Done! Run: npm install
echo Then run: npm run dev
pause
