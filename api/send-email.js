export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    // Send email using Resend (you'll need to install and configure this)
    // For now, we'll use a fetch to Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL || 'chrissanchez89@gmail.com';

    if (!resendApiKey) {
      // If no API key configured, log the message and return success
      // This allows testing without email service configured
      console.log('Contact form submission:', { name, email, subject, message });
      return res.status(200).json({
        success: true,
        message: 'Message logged (email service not configured)'
      });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev', // On free tier, you can only use onboarding@resend.dev as the from address
        to: toEmail,
        subject: `Contact Form: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        reply_to: email
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
