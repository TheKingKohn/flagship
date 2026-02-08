import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, project, budget, timeline, currentSite, referral, notes } = body

    // Validate required fields
    if (!name || !email || !project) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Configure Resend
    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev'
    const toEmail = process.env.TO_EMAIL
    
    if (!resendApiKey || !toEmail) {
      console.error('Email service not configured. Missing RESEND_API_KEY or TO_EMAIL')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(resendApiKey)

    // Construct email content
    const htmlEmailBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; border: 1px solid #333; border-radius: 12px; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); padding: 40px 40px 30px; border-bottom: 1px solid #333;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                New Project Inquiry
              </h1>
              <p style="margin: 8px 0 0; color: #999; font-size: 14px;">
                from thewoob.com
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Contact Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 20px; background-color: #141414; border: 1px solid #2a2a2a; border-radius: 8px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Name</td>
                        <td style="padding: 8px 0; color: #ffffff; font-size: 16px; font-weight: 600; text-align: right;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                        <td style="padding: 8px 0; text-align: right;">
                          <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none; font-size: 16px;">${email}</a>
                        </td>
                      </tr>
                      ${company ? `
                      <tr>
                        <td style="padding: 8px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Company</td>
                        <td style="padding: 8px 0; color: #ffffff; font-size: 16px; text-align: right;">${company}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Project Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 20px; background-color: #141414; border: 1px solid #2a2a2a; border-radius: 8px;">
                    <p style="margin: 0 0 16px; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Project Interest</p>
                    <p style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">${project}</p>
                  </td>
                </tr>
              </table>

              <!-- Additional Info Grid -->
              ${budget || timeline || currentSite ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  ${budget ? `
                  <td width="48%" style="padding: 16px; background-color: #141414; border: 1px solid #2a2a2a; border-radius: 8px; vertical-align: top;">
                    <p style="margin: 0 0 8px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Budget</p>
                    <p style="margin: 0; color: #10b981; font-size: 16px; font-weight: 600;">${budget}</p>
                  </td>
                  ` : ''}
                  ${budget && timeline ? `<td width="4%"></td>` : ''}
                  ${timeline ? `
                  <td width="48%" style="padding: 16px; background-color: #141414; border: 1px solid #2a2a2a; border-radius: 8px; vertical-align: top;">
                    <p style="margin: 0 0 8px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Timeline</p>
                    <p style="margin: 0; color: #f59e0b; font-size: 16px; font-weight: 600;">${timeline}</p>
                  </td>
                  ` : ''}
                </tr>
                ${currentSite ? `
                <tr>
                  <td colspan="3" style="padding-top: 12px;">
                    <div style="padding: 16px; background-color: #141414; border: 1px solid #2a2a2a; border-radius: 8px;">
                      <p style="margin: 0 0 8px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Current Website</p>
                      <a href="${currentSite}" style="color: #60a5fa; text-decoration: none; font-size: 14px;">${currentSite}</a>
                    </div>
                  </td>
                </tr>
                ` : ''}
              </table>
              ` : ''}

              <!-- Notes -->
              ${notes ? `
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 20px; background-color: #141414; border: 1px solid #2a2a2a; border-radius: 8px;">
                    <p style="margin: 0 0 12px; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Notes</p>
                    <p style="margin: 0; color: #d1d5db; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${notes}</p>
                  </td>
                </tr>
              </table>
              ` : ''}

              ${referral ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 20px;">
                <tr>
                  <td style="padding: 12px 20px; background-color: #1a1a1a; border: 1px solid #2a2a2a; border-radius: 8px; text-align: center;">
                    <p style="margin: 0; color: #999; font-size: 13px;">Referral: <span style="color: #ffffff; font-weight: 500;">${referral}</span></p>
                  </td>
                </tr>
              </table>
              ` : ''}

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #0f0f0f; border-top: 1px solid #333; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                Reply directly to <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim()

    const plainTextEmailBody = `
New Project Inquiry from thewoob.com

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
Project Interest: ${project}
${budget ? `Budget Range: ${budget}` : ''}
${timeline ? `Timeline: ${timeline}` : ''}
${currentSite ? `Current Website: ${currentSite}` : ''}
${referral ? `How They Found Us: ${referral}` : ''}

Notes:
${notes || 'No additional notes provided.'}
    `.trim()

    // Send notification to yourself
    console.log('Sending notification email to:', toEmail)
    try {
      const notificationResult = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `New Project Inquiry: ${project}`,
        html: htmlEmailBody,
        reply_to: email,
      })
      console.log('✓ Notification email sent successfully:', notificationResult.data?.id)
    } catch (error) {
      console.error('✗ Failed to send notification email:', error)
      throw error
    }

    // Send confirmation to prospect
    console.log('Sending confirmation email to:', email)
    try {
      const confirmationResult = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'Thanks for reaching out - thewoob',
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; border: 1px solid #333; border-radius: 12px; overflow: hidden;">
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; color: #ffffff; font-size: 24px; font-weight: 700;">Thanks for reaching out, ${name}!</h2>
              <p style="margin: 0 0 16px; color: #d1d5db; font-size: 16px; line-height: 1.6;">
                I received your inquiry about <strong style="color: #ffffff;">${project}</strong> and will get back to you within 24-48 hours.
              </p>
              <p style="margin: 0 0 24px; color: #d1d5db; font-size: 16px; line-height: 1.6;">
                In the meantime, feel free to check out <a href="https://leadloom.thewoob.com" style="color: #60a5fa; text-decoration: none;">LeadLoom</a> to see an example of my work.
              </p>
              <p style="margin: 0; color: #999; font-size: 14px;">
                Best,<br>
                <strong style="color: #ffffff;">Gavin</strong><br>
                <a href="https://thewoob.com" style="color: #60a5fa; text-decoration: none;">thewoob.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `,
      })
      console.log('✓ Confirmation email sent successfully:', confirmationResult.data?.id)
    } catch (error) {
      console.error('✗ Failed to send confirmation email:', error)
      // Don't throw here - notification email is more important
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
