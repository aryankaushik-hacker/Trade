# Cashfree Payment Gateway Setup

## Integration Details

**App ID**: `930604f995591f3d795c2e54a6406039`
**Secret Key**: `cfsk_ma_prod_5b76ec9e406b0b9f7cf1c639a1efff2f_d09d7839`
**Environment**: Production

## Installation Steps

1. **Install Dependencies**
```bash
# Run the installation script
install-cashfree.bat

# Or manually:
npm uninstall razorpay
npm install cashfree-pg@4.2.0
```

2. **Test Integration**
```bash
node test-cashfree.js
```

3. **Start Server**
```bash
npm start
```

## Features Implemented

✅ **Payment Session Creation** - Server-side order creation
✅ **Checkout Integration** - Frontend payment modal
✅ **Webhook Handling** - Automatic balance updates
✅ **Production Environment** - Live payment processing
✅ **Minimum Deposit** - ₹2,720 validation
✅ **Real Account Only** - Demo account protection

## API Endpoints

- `POST /create-payment-session` - Create payment order
- `GET /payment-success` - Payment success callback
- `POST /payment-webhook` - Payment status webhook

## Payment Flow

1. User clicks "Deposit via Cashfree"
2. Frontend calls `/create-payment-session`
3. Server creates Cashfree order
4. Frontend opens Cashfree checkout modal
5. User completes payment
6. Cashfree sends webhook to server
7. Server updates user balance
8. User receives balance update notification

## Security Features

- Production environment with live credentials
- Webhook verification for payment status
- Server-side balance updates only
- Demo account deposit protection
- Minimum deposit validation

## Testing

Use the test file to verify integration:
```bash
node test-cashfree.js
```

Expected output:
```
✅ Cashfree test successful!
Payment Session ID: session_xxx
Order ID: TEST_ORDER_xxx
```

## Troubleshooting

**Payment Session Creation Fails**:
- Check internet connection
- Verify credentials are correct
- Ensure Cashfree account is active

**Webhook Not Received**:
- Check server is accessible from internet
- Verify webhook URL in Cashfree dashboard
- Check server logs for webhook calls

**Balance Not Updated**:
- Check webhook is being received
- Verify user ID matching
- Check server logs for errors