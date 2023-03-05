import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-biru w-full
      px-32 py-10 font-Inter text-white"
    >
      <div className="text-white w-full h-9 mt-10">Logo</div>
      <div className="grid grid-cols-2">
        <div className="pr-32">
          <p className="text-lg">About Company</p>
          <p>This Company is HubSpot Theme Based On Engagement Design Framework, designed & developed by Openthrive.</p>
        </div>
        <div>
          <ul className="flex gap-6 flex-wrap justify-end">
            <li>Contact</li>
            <li>Career</li>
            <li>Privacy Police</li>
            <li>Terms Of Services</li>
            <li>GDPR</li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Capabilities</li>
            <li>Resources</li>
            <li>Partnership</li>
            <li>Integration</li>
          </ul>
        </div>
      </div>
      <hr className="mt-20" />
      <div className="grid grid-cols-2 w-full text-sm mt-9">
        <div className="pr-28">
          <p>B2B website and engagement design solution that transform marketing and sales performance like never before.</p>
        </div>
        <p className="text-right">© 2015-2022 Company. All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
