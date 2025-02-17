import { useState } from "react";
import { SiLinkedin, SiResend, SiPhonepe } from "react-icons/si";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6 md:p-12">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2 p-4 bg-pink-100 rounded-lg shadow w-full md:w-auto">
          <SiLinkedin className="text-blue-500" />
          <a href="https://linkedin.com/in/mcs0088" className="text-gray-700 hover:underline truncate">
            in/linkedin.com/mcs0088
          </a>
        </div>
        <div className="flex items-center space-x-2 p-4 bg-pink-100 rounded-lg shadow w-full md:w-auto">
          <SiResend className="text-blue-500" />
          <a href="https://t.me/mcs0088" className="text-gray-700 hover:underline truncate">
            t.me/mcs0088
          </a>
        </div>
        <div className="flex items-center space-x-2 p-4 bg-pink-100 rounded-lg shadow w-full md:w-auto">
          <SiPhonepe className="text-blue-500" />
          <span className="text-gray-700 truncate">+998 90 829 21 71</span>
        </div>
      </div>

      <form className="w-full max-w-lg space-y-4 bg-gray-100 p-6 rounded-lg shadow" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded h-32 focus:ring-2 focus:ring-blue-500"
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-all">
          Send Message
        </button>
      </form>
    </div>
  );
}
