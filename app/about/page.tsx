"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter()
  return (
    <div className="bg-white text-gray-800 font-sans">
      

      <section className="h-screen flex flex-col justify-center items-center bg-gray-100 px-6 md:px-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
          About SACS
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600 max-w-3xl">
          Discover our history, mission, and the people behind the Society for the Advancement of Computer Science.
        </p>
      </section>


      <section className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-12">
          Our Mission
        </h2>
        <div className="max-w-5xl mx-auto text-center text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The Society for the Advancement of Computer Science (SACS) is committed to promoting computer science education, fostering a sense of community among students, and providing opportunities for professional development. Since our founding in 1964, we have strived to create a supportive environment for all those interested in the field of computer science.
          </p>
          <p className="mt-4">
            Through events, workshops, and community outreach, we aim to inspire the next generation of computer scientists and help our members achieve their full potential.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-12">
          Our History
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 p-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              SACS was founded in 1964 by a group of passionate students who saw the potential of computer science to change the world. Over the decades, we have grown into a thriving community that has produced countless successful professionals, entrepreneurs, and academics.
            </p>
            <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
              Our history is rich with achievements, from pioneering early programming clubs to hosting national conferences. We are proud of our legacy and continue to build on it with each new generation of members.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <Image
              src="https://i.pinimg.com/564x/60/79/d6/6079d6434b921f9d8d3c646c31d1c1f3.jpg" 
              alt="SACS History"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-12">
          Meet the Team
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <Image
              src="https://i.pinimg.com/236x/88/b0/e4/88b0e41a33b16b67796f813657708343.jpg" 
              alt="Daniel Nnaji"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Daniel Nnaji</h3>
            <p className="text-gray-700">President</p>
          </div>
          <div>
            <Image
              src="https://i.pinimg.com/236x/a8/ca/35/a8ca35cd952830f4683dd2da34faa956.jpg" 
              alt="Derrell Carter"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Derrell Carter</h3>
            <p className="text-gray-700">Vice President</p>
          </div>
          <div>
            <Image
              src="https://i.pinimg.com/236x/f0/4b/c7/f04bc7f4b16a2fc94078139ad03e6f88.jpg"
              alt="Schuyler Clark"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">Schuyler Clark</h3>
            <p className="text-gray-700">Webmaster</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gray-100 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">
          Join Us
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Be a part of a community that’s shaping the future of technology. Whether you’re a student, a professional, or just someone with a passion for computer science, SACS welcomes you.
        </p>
        <button onClick={() => router.push('/membership')} className="px-6 py-3 bg-black text-white rounded-full text-lg hover:bg-gray-800 transition duration-300">
          Become a Member
        </button>
      </section>
    </div>
  );
}
