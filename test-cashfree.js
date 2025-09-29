// Test Cashfree Integration
const { Cashfree } = require('cashfree-pg');

// Configure Cashfree
Cashfree.XClientId = '930604f995591f3d795c2e54a6406039';
Cashfree.XClientSecret = 'cfsk_ma_prod_5b76ec9e406b0b9f7cf1c639a1efff2f_d09d7839';
Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;

async function testPayment() {
    try {
        const request = {
            order_amount: 2720,
            order_currency: 'INR',
            order_id: 'TEST_ORDER_' + Date.now(),
            customer_details: {
                customer_id: 'test_user_123',
                customer_phone: '9999999999',
                customer_email: 'test@trustx.com'
            }
        };
        
        const response = await Cashfree.PGCreateOrder('2023-08-01', request);
        console.log('✅ Cashfree test successful!');
        console.log('Payment Session ID:', response.data.payment_session_id);
        console.log('Order ID:', response.data.order_id);
        
    } catch (error) {
        console.error('❌ Cashfree test failed:', error.message);
    }
}

testPayment();