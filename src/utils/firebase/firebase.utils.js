import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzIjdXR4C9EPnT4NMg8j97lALoJE_iygI",
    authDomain: "horizonview-c37bd.firebaseapp.com",
    projectId: "horizonview-c37bd",
    storageBucket: "horizonview-c37bd.appspot.com",
    messagingSenderId: "73422689460",
    appId: "1:73422689460:web:85566c9f0454157394b3e1",
    measurementId: "G-E86S4Q9WJ7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage();
export const db = getFirestore(app);

export const createWorkDocument = async (formData, resume) => {
    try {
        const resumeUrl = await uploadResumeToStorage(resume);
        await addDoc(collection(db, 'jobApplications'), {
            name: formData.name,
            email: formData.email,
            linkedin: formData.linkedin,
            phone: formData.phone,
            role: formData.role,
            referralCode: formData.referralCode,
            resumeUrl: resumeUrl,
            appliedAt: new Date().toISOString()
        });
        console.log('Application submitted successfully!');
    } catch (e) {
        console.error('Error submitting application: ', e);
        throw new Error('Error submitting application');
    }
};


const uploadResumeToStorage = async (resumeFile) => {
    const storageRef = ref(storage, `resumes/${resumeFile.name}`);
    await uploadBytes(storageRef, resumeFile);
    return getDownloadURL(storageRef);
};