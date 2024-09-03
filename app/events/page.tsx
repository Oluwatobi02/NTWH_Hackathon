import Image from 'next/image';

export default function Events() {
  return (
    <div className="bg-white text-gray-800 font-sans">

      <section className="h-[30vh] flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl font-bold">Upcoming Events</h1>
        <p className="mt-2 text-lg">Join us and be a part of something bigger.</p>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
            <h2 className="text-3xl font-semibold text-gray-900">Annual Alumni Reception</h2>
            <p className="mt-2 text-gray-700">October 10, 2024 | 6:00 PM - 9:00 PM | Morgan State University</p>
            <p className="mt-4 text-gray-600">Join us for our most anticipated event of the year as we connect with alumni and celebrate our legacy.</p>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">Register Now</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Image src="https://i.pinimg.com/236x/2c/42/3a/2c423ad52294c4425ca709443a54aceb.jpg" alt="Hackathon" width={500} height={300} className="rounded-lg" />
              <h3 className="text-2xl font-semibold text-gray-900 mt-4">Hackathon</h3>
              <p className="text-gray-700">Test your skills at our annual hackathon. Prizes for the most innovative solutions!</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">Details</button>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <Image src="https://i.pinimg.com/736x/f4/9e/c3/f49ec3797d046773ffaa182615f00720.jpg" alt="Workshop" width={500} height={300} className="rounded-lg" />
              <h3 className="text-2xl font-semibold text-gray-900 mt-4">CS Workshop</h3>
              <p className="text-gray-700">Learn and practice new skills in our hands-on workshops.</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">Details</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">Past Events</h2>
        <div className="flex justify-center">
          <Image src="https://i.pinimg.com/236x/34/ec/14/34ec14ccfb09cea00490c01f6a79638e.jpg" alt="Past Event" width={600} height={400} className="rounded-lg" />
        </div>
        <p className="text-center text-gray-700 mt-4">Our past events have been a huge success. Here's a glimpse of what we've done!</p>
      </section>

      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Stay Updated</h2>
        <p className="mt-2 text-gray-600">Sign up for our newsletter to get the latest updates on upcoming events.</p>
        <input type="email" placeholder="Your email" className="mt-4 px-4 py-2 rounded-full border-gray-300" />
        <button className="ml-2 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">Subscribe</button>
      </section>
    </div>
  );
}
