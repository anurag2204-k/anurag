# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Select "Gmail" 
   - Click "Connect Account" and authorize EmailJS
   - Or manually configure with your Gmail credentials

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this professional template:

### Template Name: `portfolio_contact`

### Template Content:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
        .highlight { background: #e3f2fd; padding: 15px; border-left: 4px solid #2196f3; margin: 20px 0; }
        .contact-info { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>💌 New Portfolio Contact Message</h1>
            <p>Someone wants to connect with you!</p>
        </div>
        
        <div class="content">
            <h2>📝 Message Details</h2>
            
            <div class="contact-info">
                <p><strong>👤 Name:</strong> {{from_name}}</p>
                <p><strong>📧 Email:</strong> {{from_email}}</p>
                <p><strong>📋 Subject:</strong> {{subject}}</p>
            </div>
            
            <div class="highlight">
                <h3>💬 Message:</h3>
                <p>{{message}}</p>
            </div>
            
            <div style="margin-top: 30px;">
                <h3>🚀 Quick Actions:</h3>
                <p>
                    <a href="mailto:{{from_email}}?subject=Re: {{subject}}" 
                       style="background: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 5px;">
                        📧 Reply to {{from_name}}
                    </a>
                </p>
            </div>
        </div>
        
        <div class="footer">
            <p>This message was sent through your portfolio contact form</p>
            <p>Timestamp: {{current_date}}</p>
        </div>
    </div>
</body>
</html> 
```

### Template Variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{current_date}}` - Current date (auto-filled by EmailJS)

## Step 4: Get Your Keys

1. **Service ID**: Go to "Email Services" and copy your service ID
2. **Template ID**: Go to "Email Templates" and copy your template ID  
3. **Public Key**: Go to "Account" → "General" and copy your Public Key

## Step 5: Update Your Code

Replace these placeholders in your Contact.jsx file:

```javascript
// Replace these with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY");      // Your Public Key
'YOUR_SERVICE_ID',                    // Your Service ID  
'YOUR_TEMPLATE_ID',                   // Your Template ID
```

## Step 6: Test Your Setup

1. Save your changes
2. Run your development server
3. Go to your contact form
4. Send a test message
5. Check your email for the formatted message

## Free Tier Limits

- ✅ 200 emails per month
- ✅ Unlimited templates
- ✅ Basic email tracking
- ✅ 2 email services

## Pro Tips

1. **Custom Domain**: Use a custom domain for more professional emails
2. **Auto-Reply**: Set up an auto-reply template for better user experience
3. **Spam Protection**: Enable reCAPTCHA in EmailJS settings
4. **Analytics**: Track email delivery rates in your dashboard

## Troubleshooting

### Common Issues:
1. **"Service not found"**: Double-check your Service ID
2. **"Template not found"**: Verify your Template ID
3. **"Unauthorized"**: Make sure your Public Key is correct
4. **Emails not sending**: Check your email service connection

### Debug Steps:
1. Open browser console to see error messages
2. Test with EmailJS test feature in dashboard
3. Check EmailJS dashboard for failed emails
4. Verify your email service is properly connected

## Security Notes

- ✅ Public Key is safe to expose in frontend code
- ✅ EmailJS handles all authentication securely
- ✅ No need for backend server
- ✅ CORS is handled automatically

Your contact form is now ready to receive professional emails! 🎉
