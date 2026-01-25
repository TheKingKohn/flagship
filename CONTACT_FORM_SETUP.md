# Contact Form Setup (Gmail)

## 1. Generate Gmail App Password
1. Go to https://myaccount.google.com/apppasswords
2. Sign in with your Gmail account
3. Create a new app password (name it "thewoob contact form")
4. Copy the 16-character password (it looks like: xxxx xxxx xxxx xxxx)

## 2. Set Environment Variables
Create `.env.local` file in the project root:
```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

## 3. Install Nodemailer
```bash
npm install nodemailer
```

## 4. Configure for Cloudflare Pages
In your Cloudflare Pages project settings:
- Go to Settings → Environment variables
- Add: `GMAIL_USER` with your Gmail address
- Add: `GMAIL_APP_PASSWORD` with your app password

## 5. Test Locally
```bash
npm run dev
```
Visit http://localhost:3000/contact and submit the form

## 6. Deploy
```bash
git add .
git commit -m "Add Gmail contact form"
git push
```

The form will:
- Send you a notification email with the inquiry (with reply-to set to prospect's email)
- Send the prospect a confirmation email
- Show success/error states in the UI

**Note:** Gmail free accounts have a limit of ~500 emails/day.
