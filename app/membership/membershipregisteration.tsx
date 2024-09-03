"use client"
import { useState } from "react";
import { onSubmit } from "../api/utils";

interface MembershipRegistrationFormProps {
    refresh: (value: number) => void;
}
export default function MembershipRegistrationForm({refresh} : MembershipRegistrationFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [success, setSuccess] = useState<boolean | null>();
  const [error, setError] = useState<boolean | null>();
  const [classification, setClassification] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && classification) {
      const value = await onSubmit({ name, email, classification, bio });
      setName("");
      setClassification("");
      setEmail("")
      setBio("")
      if (value){
        setSuccess(true)
        setTimeout(() => setSuccess(false),4000)
        refresh(Date.now())
      }
      else {
        setError(true)
        setTimeout(()=> setError(false),4000)
      }
    }
  };
if (success) return (
        <div className="mt-4 p-3 bg-green-100 text-green-700 border border-green-400 rounded">
          Successfully registered for the meeting!
        </div>  
)
if (error) return (
    <div className="mt-4 p-3 bg-red-100 text-red-700 border border-red-400 rounded">
    Registration failed. Please try again.
  </div>
)
  return (
   <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Register for the Meeting</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="classification" className="block text-gray-700 font-medium mb-2">
          Classification
        </label>
        <select
          id="classification"
          value={classification}
          onChange={(e) => setClassification(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="" disabled>Select your classification</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
          <option value="Graduate">Graduate</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="bio" className="block text-gray-700 font-medium mb-2">
          Tell us something about you!
        </label>
        <input
          type="text"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Register
      </button>
    </form>
  );
}
