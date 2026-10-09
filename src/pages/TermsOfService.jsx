import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-10 md:p-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 text-center">Terms of Service</h1>
        <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed">
          <p className="mb-6 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Agreement to Terms</h2>
          <p className="mb-6">
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Sharda Welfare Foundation ("Company", “we”, “us”, or “our”), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Intellectual Property Rights</h2>
          <p className="mb-6">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. User Representations</h2>
          <p className="mb-6">
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Prohibited Activities</h2>
          <p className="mb-6">
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Contact Us</h2>
          <p className="mb-6">
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:<br/><br/>
            <strong>Sharda Welfare Foundation</strong><br/>
            Plot no 32, 34, Knowledge Park III,<br/>
            Greater Noida, Uttar Pradesh 201310<br/>
            Email: info@shardawelfare.org
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
