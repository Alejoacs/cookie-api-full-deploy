import { createTransport } from 'nodemailer';

const sendSignInEmail = async (email, username) => {
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: 'cokieenterprise@gmail.com',
            pass: 'fkrm zozi qlau ppzv',
        },
    });

    const mailOptions = {
        from: `"Admin of Cookie" <cokieenterprise@gmail.com>`,
        to: email,
        subject: 'Sign-In Alert: Your Cookie Account',
        html: `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
                <img src="https://res.cloudinary.com/dbcunosvg/image/upload/v1721662182/cokieEnterprice/emails/veqdyrtrglkf7vvizaf0.png" alt="Cookie Logo" style="max-width: 100px; margin-bottom: 20px; display: block; margin-left: auto; margin-right: auto;">
                <h2 style="color: #DD2525; font-size: 24px; margin-bottom: 20px; text-align: center;">Hello, ${username}</h2>
                <div style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;  max-width: 100%; word-break: break-word;">
                    <p style="margin: 0;">We noticed a new sign-in to your Cookie account. If this was you, no further action is needed.</p>
                </div>
                <div style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;  max-width: 100%; word-break: break-word;">
                    <p style="margin: 0;">If you did not sign in, please <a href="https://www.cokie.com/reset-password" style="color: #1a73e8; text-decoration: none;">reset your password</a> immediately to secure your account.</p>
                </div>
                <div style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;  max-width: 100%; word-break: break-word;">
                    <p style="margin: 0;">For your security, we recommend keeping your password confidential and not sharing it with anyone.</p>
                </div>
                <div style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;  max-width: 100%; word-break: break-word;">
                    <p style="margin: 0;">Best regards,</p>
                    <p style="margin: 0;">Admin of Cookie</p>
                </div>
                <hr style="border: 0; border-top: 1px solid #e0e0e0; margin-top: 20px; margin-bottom: 20px;">
                <div style="font-size: 14px; line-height: 1.5; color: #888;  max-width: 100%; word-break: break-word;">
                    <p style="margin: 0;">If you have any questions or need further assistance, please visit our <a href="https://www.cokie.com/support" style="color: #1a73e8; text-decoration: none;">support center</a>.</p>
                </div>
            </div>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

export default sendSignInEmail;