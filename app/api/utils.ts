import { collection, doc, DocumentData, getDocs, query, setDoc } from "firebase/firestore"
import { db } from "./firebase"
import { readSync } from "fs"

export async function onSubmit({name, email, classification, bio} : onSubmitTypes) {
    const members = await getAllMembers()
    const isMember = members.some((member : DocumentData) => member.email === email)
    if (isMember) {
        return false
    }
    const docRef = doc(db, 'users', email)
    const res = await setDoc(docRef, {
        name,
        email,
        classification,
        bio,
        role: 'student',
        date: Date.now()
    })
    return true
    
}

export async function getAllMembers() {
    const output : DocumentData[] = []
    const q = query(collection(db, 'users'))
    const res = await getDocs(q)
    res.forEach((doc) => output.push(doc.data()))
    return output
}