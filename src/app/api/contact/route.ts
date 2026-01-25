import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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

    // Configure Gmail SMTP
    const emailEnabled = process.env.EMAIL_ENABLED === 'true'
    const smtpServer = process.env.SMTP_SERVER
    const smtpPort = process.env.SMTP_PORT
    const senderEmail = process.env.SENDER_EMAIL
    const senderPassword = process.env.SENDER_PASSWORD
    const recipientEmail = process.env.RECIPIENT_EMAIL
    
    if (!emailEnabled || !senderEmail || !senderPassword || !recipientEmail) {
      console.error('Email credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpServer,
      port: parseInt(smtpPort || '587'),
      secure: false,
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    })

    // Construct email content
    const emailBody = `
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
    await transporter.sendMail({
      from: senderEmail,
      to: recipientEmail,
      subject: `New Project Inquiry: ${project}`,
      text: emailBody,
      replyTo: email,
    })

    // Send confirmation to prospect
    await transporter.sendMail({
      from: senderEmail,
      to: email,
      subject: 'Thanks for reaching out - thewoob',
      text: `Hi ${name},

Thanks for reaching out about "${project}". I received your inquiry and will get back to you within 24-48 hours.

In the meantime, feel free to check out LeadLoom (https://leadloom.thewoob.com) to see an example of my work.

Best,
Gavin
thewoob.com`,
    })

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
