import { useState } from "react";
import ReCaptcha from "react-google-recaptcha";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState("");

  // const handleCaptchaChange = (token) => {
  //   setCaptchaToken(token);
  // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    // You can add the code to send the form data to a backend or email here.
    // You can also add a success message to notify the user that their message was sent successfully.
  };

  return (
    <>
    <section className="bg-white">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-lg mx-auto lg:max-w-none">
          {/* <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </form> */}
          <div className="mt-8">
            <p className="text-base leading-6 text-gray-500">
              {/* Or contact me through my email:{" "} */}
              <a href="mailto:your-email@domain.com" className="text-indigo-600 hover:text-indigo-500">
                cadenforrest@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )}
