const Mail = use("Mail");
const Env = use("Env");

class MailService {
  static async sendMail(data, email, subject, template) {
    try {
      const from = Env.get("MAIL_USERNAME");
      try {
        await Mail.send(template, { data }, (message) => {
          message.to(email).from(from).subject(subject);
        });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      return error;
    }
  }
}

module.exports = MailService;
