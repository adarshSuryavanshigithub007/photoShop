import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    mobilenumber: "",
    desiredDate: "",
    typeofPhotoshoot: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request sent successfully!");
    console.log(formData);

    const websiteUrl = window.location.origin; // Dynamically gets the current website URL
    
    const textMessage = `*NEW BOOKING INQUIRY*
---------------------------------------
Hello Mahale Photography,
You have received a new booking request.

*CLIENT DETAILS*
• *Name:* ${formData.fullname}
• *Phone:* ${formData.mobilenumber}

*BOOKING INFORMATION*
• *Shoot:* ${formData.typeofPhotoshoot}
• *Date:* ${formData.desiredDate}

*ADDITIONAL NOTES*
${formData.message || "No additional message provided."}
---------------------------------------
Please reply to this message to confirm.

🔗 View Portfolio: ${websiteUrl}`;

    window.open(
      `https://wa.me/8073980562?text=${encodeURIComponent(textMessage)}`,
    );
  };

  return (
    <section id="contact" className="py-24 bg-dark-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glassmorphism rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-10 md:p-16 bg-gradient-to-br from-dark-900 to-dark-800 border-r border-white/5 relative overflow-hidden">
              {/* Decorative bg */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>

              <h2 className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-3">
                Get In Touch
              </h2>
              <h3 className="font-serif text-4xl font-bold text-white mb-8">
                Ready to capture your moments?
              </h3>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold-500 text-xl mr-4 shrink-0 border border-white/10">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">
                      Studio Address
                    </h5>
                    <p className="text-gray-400">
                      123 Creative Avenue, Photography District,
                      <br />
                      Metro City, 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold-500 text-xl mr-4 shrink-0 border border-white/10">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">
                      Phone Number
                    </h5>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold-500 text-xl mr-4 shrink-0 border border-white/10">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">
                      Email Address
                    </h5>
                    <p className="text-gray-400">hello@neonstudio.com</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Booking Button */}
            </div>

            {/* Booking Form */}
            <div className="p-10 md:p-16">
              <h3 className="font-serif text-3xl font-bold text-white mb-2">
                Send Booking Request
              </h3>
              <p className="text-gray-400 mb-8">
                Fill out the simple form below and we will get back to you
                immediately.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.fullname}
                      name="fullname"
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-dark-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.mobilenumber}
                        name="mobilenumber"
                        onChange={handleChange}
                        placeholder="+1 (___) ___-____"
                        required
                        className="w-full bg-dark-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Desired Date
                      </label>
                      <input
                        type="date"
                        value={formData.desiredDate}
                        name="desiredDate"
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-900 border border-gray-700 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition pl-[10px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Type of Photoshoot
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.typeofPhotoshoot}
                        onChange={handleChange}
                        name="typeofPhotoshoot"
                        className="w-full bg-dark-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition appearance-none defaultValue=''"
                      >
                        <option value="" disabled>
                          Select service...
                        </option>
                        <option value="wedding">Wedding Photography</option>
                        <option value="pre-wedding">Pre-Wedding Shoot</option>
                        <option value="baby">Baby Photoshoot</option>
                        <option value="event">Event Photography</option>
                        <option value="portrait">Studio Portrait</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <i className="fa-solid fa-chevron-down text-sm"></i>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      name="message"
                      onChange={handleChange}
                      placeholder="Tell us more about your requirements..."
                      className="w-full bg-dark-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-500 text-dark-900 px-6 py-4 rounded-xl font-bold btn-hover text-lg shadow-lg shadow-gold-500/20 mt-2"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
