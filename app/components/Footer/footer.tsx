"use client"
import { AspectRatio } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerImg = 'https://www.shutterstock.com/image-photo/african-american-coder-using-computer-600nw-2178995535.jpg';

export default function Footer() {
    const router = useRouter()
    return (
        <footer className="bg-gray-900 text-white py-8 mt-auto">
            <div className="container mx-auto px-4">

                <div className="flex justify-center">
                    <AspectRatio ratio={16 / 9} className="max-w-xs">
                        <Image
                            width={100}
                            height={100}
                            src={footerImg}
                            alt="SACS Footer Image"
                            className="rounded-lg"
                        />
                    </AspectRatio>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="mt-2 space-y-2">
                            <li onClick={() => router.push("/")} className="hover:text-gray-400 cursor-pointer">Home</li>
                            <li onClick={() => router.push("/about")} className="hover:text-gray-400 cursor-pointer">About Us</li>
                            <li onClick={() => router.push("/events")} className="hover:text-gray-400 cursor-pointer">Events</li>
                            <li onClick={() => router.push("/membership")} className="hover:text-gray-400 cursor-pointer">Membership</li>
                            <li onClick={() => router.push("/contact")} className="hover:text-gray-400 cursor-pointer">Contact Us</li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <p className="mt-2 text-gray-400">SACSMSU1@Gmail.com</p>
                        <p className="text-gray-400">Morgan State University</p>
                    </div>


                    <div className="mt-4 md:mt-0 flex space-x-4">
                        <div
                            onClick={() => router.push("https://www.facebook.com/groups/299771466894026/")}
                            className="hover:text-gray-400 cursor-pointer"
                        >
                            <FaFacebook size={20} />
                        </div>
                        <div
                            onClick={() => router.push("https://www.linkedin.com/")}
                            className="hover:text-gray-400 cursor-pointer"
                        >
                            <FaLinkedin size={20} />
                        </div>
                        <div
                            onClick={() => router.push("https://twitter.com/")}
                            className="hover:text-gray-400 cursor-pointer"
                        >
                            <FaTwitter size={20} />
                        </div>
                    </div>
                </div>


                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">© 2024 SACS - Society for the Advancement of Computer Science. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
