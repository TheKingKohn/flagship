# Contact Form Setup (Resend)

## Why Resend?
- Works perfectly with Cloudflare Pages (edge runtime compatible)
- No SMTP/Node.js dependencies needed
- Free tier: 3,000 emails/month
- Simple API, reliable delivery

---

## 1. Create Resend Account
1. Go to https://resend.com/signup
2. Sign up with your email
3. Verify your email address

## 2. Get API Key
1. In Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Name it "thewoob-contact-form"
4. Set permissions to **Sending access**
5. Copy the API key (starts with `re_`)

## 3. Configure Domain (Optional but Recommended)
### Option A: Use your own domain (professional)
1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `thewoob.com`)
4. Add the DNS records shown to your domain provider
5. Wait for verification (usually 5-10 minutes)
6. Use `onboarding@thewoob.com` or `contact@thewoob.com` as FROM_EMAIL

### Option B: Use Resend's test domain (quick start)
- Use `onboarding@resend.dev` as FROM_EMAIL
- Only sends to verified email addresses
- Good for testing, but use your domain for production

## 4. Set Environment Variables

### Local Development (.env.local)
Create `.env.local` in project root:
```env
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=your-email@gmail.com
```

### Cloudflare Pages (Production)
1. Go to your Cloudflare Pages project
2. Navigate to **Settings → Environment variables**
3. Add these variables for **Production**:
   - `RESEND_API_KEY` = your Resend API key
   - `FROM_EMAIL` = `onboarding@resend.dev` (or your verified domain email)
   - `TO_EMAIL` = your email where you want to receive inquiries

4. **Important:** Click **Save** after adding each variable

## 5. Test Locally
```bash
npm run dev
```
- Visit http://localhost:3000/contact
- Fill out and submit the form
- Check your email (TO_EMAIL) for the notification
- Check the test submitter's email for confirmation

## 6. Deploy to Cloudflare
```bash
git add .
git commit -m "Switch to Resend for contact form"
git push
```

Cloudflare will automatically deploy. The form will now work on production!

---

## What Happens When Someone Submits:
1. **You receive** a styled notification email with all their details (reply-to set to their email)
2. **They receive** a confirmation email thanking them for reaching out
3. Form shows success message in the UI

---

## Troubleshooting

### "Email service not configured" error
- Check that `RESEND_API_KEY` and `TO_EMAIL` are set in Cloudflare environment variables
- Redeploy after adding environment variables

### Emails not sending in production
- Verify domain in Resend dashboard
- Check Cloudflare build logs for errors
- Make sure environment variables are saved in Production (not just Preview)

### Using test domain (onboarding@resend.dev)
- Can only send to email addresses you've verified in Resend
- Go to Resend → Domains → resend.dev → Add verified email
- For production, use your own domain

---

## Cost
- **Free tier:** 3,000 emails/month (100/day)
- **Paid plan:** $20/month for 50,000 emails
- Should be more than enough for a portfolio contact form!

