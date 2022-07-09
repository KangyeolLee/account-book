import { registerAs } from '@nestjs/config';

export default registerAs('email', () => {
  return {
    service: process.env.EMAIL_SERVICE,
    smtp_host: process.env.EMAIL_SMTP_HOST,
    port: +process.env.EMAIL_SMTP_HOST_PORT,
    auth: {
      user: process.env.EMAIL_AUTH_USER,
      pass: process.env.EMAIL_AUTH_PASSWORD,
    },
    baseUrl: process.env.EMAIL_BASE_URL,
  };
});
