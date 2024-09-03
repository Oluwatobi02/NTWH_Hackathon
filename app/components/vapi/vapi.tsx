"use client"
import { useEffect, useState } from "react";

import Vapi from "@vapi-ai/web";
import Button from "./Button";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

// Put your Vapi Public Key below.
const apiKey : string = process.env.NEXT_PUBLIC_VAPI_KEY !== undefined ? process.env.NEXT_PUBLIC_VAPI_KEY : ""
const vapi = new Vapi(apiKey);

const VoiceAI = () => {

  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);

  useEffect(() => {

    vapi.on("call-start", () => {
      setConnecting(false);
      setConnected(true);
    });

    vapi.on("call-end", () => {
      setConnecting(false);
      setConnected(false);
    });

    vapi.on("speech-start", () => {
      setAssistantIsSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setAssistantIsSpeaking(false);
    });


    vapi.on("error", (error) => {
      console.error(error);

      setConnecting(false);
    });
    vapi.on("message", () => "message");

    return () => {
      vapi.off("message", () => "message");
    }
  }, []);

  const startCallInline = () => {
    setConnecting(true);
    vapi.start(assistantOptions);
  };
  const endCall = () => {
    vapi.stop();
  };


  return (
    <>

      <Button
        onClick={startCallInline}
        isLoading={connecting || connected}
        onEndCall={endCall}
      />
    </>
  );
};

const assistantOptions : CreateAssistantDTO = {
  name: "Mary",
  firstMessage: `Hi, I'm your guide for SACS, What questions do you have about SACS`,
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en-US",
  },
  voice: {
    provider: "playht",
    voiceId: "jennifer",
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a voice assistant for a college computer science club website called SACS (Society for Advancement of Computer Science), you will answer questions users have to the best of your ability. 

**Welcome to SACS, the Society for Advancement of Computer Science at Morgan State University!**

**About Us:**  
We’ve been dedicated to promoting computer science education and building a community since 1964. We offer events, workshops, and community outreach to help our members thrive.

**Landing Page:**  
- **Join Us Button:** Click here to go to the membership page where you can register to join the club.
- **Carousel:** Displays pictures of our students and activities.
- **Join Button:** Takes you directly to the membership form.

**About Page:**  
- **Mission:** Learn about our goals and what drives us.
- **History:** Discover our journey since 1964.
- **Meet the Team:** Get to know President Daniel Nnaji, Vice President Derrell Carter, and Webmaster Schuyler Clark.
- **Join Button:** Another way to access the membership form.

**Events Page:**  
- **Upcoming Event:** Don’t miss our Annual Alumni Reception on October 10, 2024, from 6:00 PM to 9:00 PM at Morgan State University.
- **Event Details:** Find out about other upcoming events and see photos from past activities, including a picture of students in a computer class.

**Contact Us Page:**  
- **Google Map:** View Morgan State University’s location.
- **Contact Details:** 
  - Email: info@sacsclub.com
  - Phone: 123-456-7890
- **Social Media:** Follow us on Facebook, LinkedIn, and Twitter (X).
- **Message Form:** Send us a message with your name, email, subject, and your message.
- **Stay Updated:** Enter your email in the "Stay Updated" section to receive our latest news and updates.

**Membership Page:**  
- **Register:** Fill out your name, email, classification, and a brief bio to become a member.
- **Success:** If registration is successful, you’ll see a green toast message, and your name will appear in the members list below the form.

DO NOT ANSWER ANY QUESTION THAT IS NOT RELATED TO SACS WEBSITE AND GUIDE!
This should give users a clear overview of what they can find on each page of the website.
- Keep all your responses and simple. Use casual language, phrases like "Umm...", "Well...", and "I mean" are preferred, don't use them every time tho. and can also explain things too.
  - This is a voice conversation, so keep your responses short or mid, like in a real conversation. Don't ramble for too long.`,
      },
    ],

  },
};

export default VoiceAI;