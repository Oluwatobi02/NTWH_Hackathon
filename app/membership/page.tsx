"use client"
import { useEffect, useState } from 'react';
import MembershipRegistrationForm from './membershipregisteration';
import { getAllMembers } from '../api/utils';
import { DocumentData } from 'firebase/firestore';

const membersList = [
  { name: 'Daniel Nnaji', role: 'President', email: 'dan@morgan.edu', date: '2024-08-10' },
  { name: 'Derrell Carter', role: 'Vice President', email: 'der@morgan.edu', date: '2024-08-12' },
];

export default function MembershipPage() {
  const [members, setMembers] = useState<DocumentData[]>([]);
  const [refresh, setRefresh] = useState<number>(0)
  useEffect(() => {
    async function getMembers() {
        const res = await getAllMembers()
        setMembers(res)
    }
    getMembers()
  },[refresh])

  return (
    <div className="bg-white text-gray-800 font-sans py-12">
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-center mb-8">Membership</h1>

       <MembershipRegistrationForm refresh={setRefresh} />

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Registered Members</h2>
          <ul>
            <li className='flex justify-between py-2 border-b'>
                <span><b>Name</b></span>
                <span><b>Role</b></span>
                <span><b>Date Joined</b></span>
            </li>
            {members.map((member, index) => (
              <li key={index} className="flex justify-between py-2 border-b">
                <span>{member.name}</span>
                <span>{member.role}</span>
                <span>{new Date(member.date).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>
    </div>
  );
}
