
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import GMap from '../api/map';

export default function ContactUs() {
  return (
    <div className="bg-white text-gray-800 font-sans">

      <section className="h-[30vh] flex flex-col justify-center items-center bg-gradient-to-r from-gray-200 to-gray-400 text-center text-gray-900">
        <h1 className="text-5xl font-bold">Get in Touch</h1>
        <p className="mt-2 text-lg">We’d love to hear from you.</p>
      </section>

      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">Our Location</h2>
            <p className="mt-4 text-lg text-gray-700">1700 East Cold Spring Lane<br />Baltimore, Maryland, 21251</p>
            <div className="mt-6">
              <div className="h-64 rounded-lg shadow-lg">

              <GMap />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">Contact Details</h2>
            <p className="mt-4 text-lg text-gray-700">
              <strong>Email:</strong> <a href="mailto:info@sacsclub.com" className="text-blue-500 hover:underline">info@sacsclub.com</a>
            </p>
            <p className="mt-2 text-lg text-gray-700">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <div className="mt-6">
              <h2 className="text-3xl font-semibold text-gray-900">Follow Us</h2>
              <div className="flex mt-4 space-x-4">
                <a href="https://www.facebook.com/groups/299771466894026/" className="text-gray-600 hover:text-gray-900"><FaFacebook size={28} /></a>
                <a href="https://www.linkedin.com/" className="text-gray-600 hover:text-gray-900"><FaLinkedin size={28} /></a>
                <a href="https://twitter.com/" className="text-gray-600 hover:text-gray-900"><FaTwitter size={28} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">Send Us a Message</h2>
        <div className="max-w-4xl mx-auto">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-2 px-4 py-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-2 px-4 py-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" name="subject" className="mt-2 px-4 py-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" className="mt-2 px-4 py-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-12 bg-white text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Stay Updated</h2>
        <p className="mt-2 text-gray-600">Sign up for our newsletter to get the latest updates.</p>
        <input type="email" placeholder="Your email" className="mt-4 px-4 py-2 rounded-full border-gray-300" />
        <button className="ml-2 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">Subscribe</button>
      </section>

    </div>
  );
}
