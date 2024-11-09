import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const sendMailToSubscriber = (userdata) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.PASS_KEY,
        },
    });

    async function main() {
        await transporter.sendMail({
            from: {
                name: "FitFlex",
                address: process.env.EMAIL_ID,
            },
            to: userdata.email,
            subject: "Welcome to FitFlex! 💪 You've successfully subscribed",
            text: "Thank you for subscribing to FitFlex! Get ready to transform your fitness journey!",
            html: `
                <div style="background-color: #fff5e0; color: #333; padding: 20px; font-family: Arial, sans-serif;">
                    <div style="max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                        <h2 style="text-align: center; color: #ff6600;">Welcome to FitFlex, ${userdata.name}!</h2>
                        <p style="font-size: 16px; line-height: 1.6; color: #555;">
                            Hi ${userdata.name},
                        </p>
                        <p style="font-size: 16px; line-height: 1.6; color: #555;">
                            Congratulations on subscribing to FitFlex! You’re now part of a community dedicated to helping you achieve your fitness goals—whether it's weight loss, muscle gain, or overall fitness. Our daily workout plans will guide you through each day, step by step!
                        </p>
                        <p style="font-size: 16px; line-height: 1.6; color: #555;">
                            Your fitness journey starts here, and we're excited to support you every step of the way. Track your progress, stay consistent, and transform your life with FitFlex.
                        </p>
                        <p style="font-size: 16px; line-height: 1.6; color: #555;">
                            Stay motivated, and don’t forget to check in daily for your new workout plan! Let's get stronger together.
                        </p>
                        <p style="font-size: 16px; line-height: 1.6; color: #555;">
                            Best Regards, <br/>
                            The FitFlex Team
                        </p>
                    </div>
                </div>
            `,
        });
    }

    main().catch(console.error);
};

export { sendMailToSubscriber };
