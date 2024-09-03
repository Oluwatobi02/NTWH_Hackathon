"use client"
import { useRouter } from "next/navigation";
import Carousel from "./components/carousel";

const img = 'https://i.pinimg.com/564x/60/79/d6/6079d6434b921f9d8d3c646c31d1c1f3.jpg'

export default function Home() {
  const router = useRouter()
  return (
    <div className="bg-white text-gray-800 font-sans">
            <section className="h-screen flex flex-col justify-center items-center bg-gray-100 px-6 md:px-12 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                    Advancing Computer Science, Together.
                </h1>
                <p className="mt-4 text-lg md:text-2xl text-gray-600 max-w-3xl">
                    Join a community of passionate learners, innovators, and leaders in technology at SACS.
                </p>
                <button onClick={() => router.push('/membership')} className="mt-8 px-6 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition duration-300">
                    Join Us
                </button>
            </section>

            <section className="py-20 px-6 md:px-12 bg-white">
                <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-12">
                    About SACS
                </h2>
                <div className="max-w-5xl mx-auto text-center text-lg md:text-xl text-gray-700 leading-relaxed">
                    <p>
                        The Society for the Advancement of Computer Science (SACS) was founded in 1964 with the goal of promoting computer science and fostering a sense of community among students. As a student affiliate of the ACM, we continue to uphold these values by organizing events, offering tutoring services, and engaging in community outreach.
                    </p>
                    <p className="mt-4">
                        Whether you’re a seasoned developer or just starting out, SACS is the place for you to grow, learn, and connect with others who share your passion.
                    </p>
                </div>
            </section>
            <section className="py-20 px-6 md:px-12 bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-12">
          SACS In Action
        </h2>
      <Carousel />
      </section>
            <section className="py-20 px-6 md:px-12 bg-gray-100">
                <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-12">
                    Featured Events
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-12 md:space-y-0">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-1/3">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Annual Alumni Reception
                        </h3>
                        <p className="text-gray-700">
                            Connect with SACS alumni at our most popular event, held during Homecoming. Celebrate our legacy and forge new connections.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-1/3">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Hackathon
                        </h3>
                        <p className="text-gray-700">
                            Test your coding skills and collaborate with peers in our annual hackathon. Prizes for the most innovative solutions!
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full md:w-1/3">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            CS Workshops
                        </h3>
                        <p className="text-gray-700">
                            Attend our workshops to learn new technologies, improve your coding skills, and get hands-on experience in various CS topics.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-12 bg-white">
                <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-12">
                    What Our Members Say
                </h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="text-center">
                        <p className="text-gray-700 italic">
                            "SACS has been an amazing experience. I’ve gained so much knowledge and made lifelong friends."
                        </p>
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">
                            Daniel Nnaji, President
                        </h3>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-700 italic">
                            "The events and workshops are top-notch. They’ve really helped me develop my skills."
                        </p>
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">
                            Derrell Carter, Vice President
                        </h3>
                    </div>
                </div>
            </section>
            <section className="py-20 px-6 md:px-12 bg-gray-100 text-center">
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">
                    Ready to Make an Impact?
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                    Join SACS today and be part of a community that’s shaping the future of technology.
                </p>
                <button onClick={() => router.push('/membership')} className="px-6 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition duration-300">
                    Become a Member
                </button>
            </section>
        </div>
  );
}


