import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    organisation: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setForm({ ...form, name: value.replace(/[^A-Za-z ]/g, "") });
    } else if (name === "mobile") {
      setForm({ ...form, mobile: value.replace(/\D/g, "").slice(0, 10) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you! We have received your message.");
    setForm({ name: "", email: "", mobile: "", organisation: "", message: "" });
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section id="contact" className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Info */}
          <div>
            <h2 className="text-sm font-extrabold text-foundation-primary tracking-[0.2em] uppercase mb-4">Get Involved</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Let's Make a Difference Together
            </h3>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-medium">
              Whether you want to volunteer, partner with us, or simply learn more about our initiatives, we would love to hear from you. Drop us a message and our team will get back to you shortly.
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-foundation-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-slate-600 font-medium">info@shardawelfare.org</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-foundation-secondary transition-transform duration-300 group-hover:scale-110 group-hover:bg-pink-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-slate-600 font-medium">+91-88009 98844</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgb(0,0,0,0.06)] border border-slate-100">
            {status && (
              <div className="mb-8 p-4 rounded-2xl bg-green-50 text-green-700 text-sm font-bold border border-green-100 flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {status}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Full Name</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required 
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-2 focus:ring-foundation-primary focus:shadow-[0_8px_30px_rgb(37,99,235,0.12)] transition-all outline-none text-slate-900 font-medium placeholder-slate-400" 
                    placeholder="Enter Full Name" />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Phone Number</label>
                  <input type="text" id="mobile" name="mobile" value={form.mobile} onChange={handleChange} required 
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-2 focus:ring-foundation-primary focus:shadow-[0_8px_30px_rgb(37,99,235,0.12)] transition-all outline-none text-slate-900 font-medium placeholder-slate-400" 
                    placeholder="Enter Phone Number" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required 
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-2 focus:ring-foundation-primary focus:shadow-[0_8px_30px_rgb(37,99,235,0.12)] transition-all outline-none text-slate-900 font-medium placeholder-slate-400" 
                    placeholder="Enter Email Address" />
                </div>
                <div>
                  <label htmlFor="organisation" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Organisation (Optional)</label>
                  <input type="text" id="organisation" name="organisation" value={form.organisation} onChange={handleChange} 
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-2 focus:ring-foundation-primary focus:shadow-[0_8px_30px_rgb(37,99,235,0.12)] transition-all outline-none text-slate-900 font-medium placeholder-slate-400" 
                    placeholder="Enter Organisation" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 ml-1">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows="4" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-2 focus:ring-foundation-primary focus:shadow-[0_8px_30px_rgb(37,99,235,0.12)] transition-all outline-none text-slate-900 font-medium placeholder-slate-400 resize-none" 
                  placeholder="Enter Message"></textarea>
              </div>

              <button type="submit" className="w-full py-5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-[0_10px_20px_rgb(15,23,42,0.15)] hover:shadow-[0_15px_30px_rgb(15,23,42,0.25)] transition-all duration-300 transform hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
