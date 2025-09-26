import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-300 px-8 py-12 ">
        <Container>
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-2">
                CS — Ticket System
              </h3>
              <p className="text-sm">
                A Customer Support (CS) Ticket System is used to manage customer
                issues in an organized way. It creates a ticket for each problem
                with details like description, priority, and status. Support
                agents can track, assign, and resolve tickets step by step. This
                ensures no customer request is missed or forgotten. Overall, it
                improves service quality and customer satisfaction.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Company</h4>
              <ul className="space-y-1 text-sm">
                <li>About Us</li>
                <li>Our Mission</li>
                <li>Contact Saled</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Services</h4>
              <ul className="space-y-1 text-sm">
                <li>Education & Services</li>
                <li>Student Stories</li>
                <li>Download Apps</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Information</h4>
              <ul className="space-y-1 text-sm">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Join Us</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Social Links</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <i class="fa-brands fa-square-x-twitter"></i> @CS — Ticket
                  System
                </li>
                <li>
                  <i class="fa-brands fa-linkedin"></i> @CS — Ticket System
                </li>
                <li>
                  <i class="fa-brands fa-square-facebook"></i> @CS — Ticket
                  System
                </li>
                <li>
                  <i class="fa-solid fa-envelope"></i> support@cst.com
                </li>
              </ul>
            </div>
          </div>
          <div className="text-left md:text-center text-gray-500 text-sm mt-8">
            © 2025 CS— Ticket System.
            <br className="block md:hidden" /> All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
