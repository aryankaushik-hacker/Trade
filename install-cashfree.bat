@echo off
echo Installing Cashfree Payment Gateway...
npm uninstall razorpay
npm install cashfree-pg@4.2.0
echo Cashfree installation completed!
pause