# Tally Integration Guide

## Setup Instructions

### 1. Create Account and Login
- Go to [Tally.so](https://tally.so) and sign up for an account or log in
- Use your business email for account creation

### 2. Create Your Form
- Click "New form" button in the dashboard
- Select "Start from scratch" or choose a template that matches your needs
- Give your form a descriptive name (e.g., "Startup Resources Contact Form")

### 3. Build Your Form
- Add relevant fields:
  - Name (First/Last or Full Name)
  - Email address
  - Company/Organization
  - Job Title
  - Message/Inquiry
  - Any specific questions about recruitment needs
- Consider adding a dropdown for "How did you hear about us?"
- Add required field indicators where necessary

### 4. Customize Form Appearance
- Click "Design" tab
- Change colors to match website (primary color: check your theme)
- Adjust typography settings if needed
- Enable dark mode compatibility if your website supports it

### 5. Configure Form Settings
- Click "Settings" tab
- Under "General":
  - Set appropriate redirect after submission (thank you page)
  - Enable email notifications to receive alerts
- Under "Privacy":
  - Add appropriate data privacy notices
  - Link to your privacy policy
- Under "Share":
  - Get your form ID (it will look like: `3nbXXX`)

### 6. Embed Form in Website
- Locate the `client/src/components/ContactSection.tsx` file in your codebase
- Replace `YOUR_FORM_ID` with your actual Tally form ID in this line:
```tsx
data-tally-src="https://tally.so/embed/YOUR_FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
```

### 7. Test Form Submission
- Visit your website's contact page
- Submit a test entry
- Verify you receive the notification
- Check data in Tally dashboard

## Optional: Footer Form Integration

If you also want to connect the email subscription form in the footer:

### 1. Create a Simple Lead Capture Form in Tally
- Create a new form with just Email and optional Newsletter checkbox

### 2. Connect Using Tally API
- Get your Tally API key from account settings
- Update the `handleFormSubmit` function in `client/src/components/Footer.tsx` to:
```tsx
const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  try {
    const response = await fetch('https://api.tally.so/submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_TALLY_API_KEY`
      },
      body: JSON.stringify({
        formId: 'YOUR_FORM_ID',
        fields: {
          email: email,
          subscribed: subscribed
        }
      })
    })
    if (response.ok) {
      // Reset form or show success message
      setEmail('')
      setSubscribed(false)
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
```

## Additional Features to Consider

### Webhooks
- In Tally settings, set up a webhook to your backend if you need server-side processing
- Configure under "Integrations" > "Webhooks"

### Zapier/Make Integration
- Consider connecting Tally to your CRM, email marketing tool, or other systems
- Use Tally's native integrations or Zapier/Make for custom workflows

### Form Analytics
- Enable form analytics in Tally settings to track completion rates
- Add UTM parameters to your form URL to track marketing campaign effectiveness

## Resources
- [Tally Documentation](https://help.tally.so/)
- [Tally API Reference](https://tally.so/help/api)
