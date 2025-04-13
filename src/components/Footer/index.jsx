import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Ziola Research
          </h2>
          <ul className="space-y-3 text-sm md:text-base text-slate-300 font-mono">
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://ziolaresearch.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300"
              >
                www.ziolaresearch.com
              </a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@ziolaresearch.com"
                className="hover:text-cyan-300"
              >
                info@ziolaresearch.com
              </a>
            </li>
            <li>
              <strong>Address:</strong>
              <br />
              No.950, 1st Floor, 23rd Cross Road,
              <br />
              MCECHS Layout, 80 Feet Double Road,
              <br />
              Dr. Shivarama Karanth Nagar,
              <br />
              Bangalore, Karnataka, 560077
            </li>
          </ul>
        </div>

        {/* Google Map */}
        <div className="rounded-xl overflow-hidden shadow-lg h-64">
          <iframe
            title="Ziola Research Location"
            src="https://maps.google.com/maps?q=13.0627347,77.6309398&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-slate-700 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Ziola Research Labs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
