import React, { useEffect, useRef, useState } from 'react';
import './Careers.styles.css';
import { createWorkDocument } from '../../utils/firebase/firebase.utils';

const roles = [
    'Frontend Developer',
    'Backend Developer',
    'UI UX Designer',
    'Data Scientist',
    'ML Engineer',
    'Others'
];

const Careers = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [resume, setResume] = useState(null);
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleResumeChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 2 * 1024 * 1024) {
            alert('File size should not exceed 2MB.');
            setResume(null);
            fileInputRef.current.value = '';
        } else {
            setResume(file);
        }
    };

    const generateReferralCode = (name, email) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let referralCode = '';
        if (name.length > 0) {
            referralCode += name.charAt(0).toUpperCase();
        } else {
            referralCode += characters.charAt(Math.floor(Math.random() * 26));
        }
        if (email.length > 0) {
            referralCode += email.charAt(0).toUpperCase();
        } else {
            referralCode += characters.charAt(Math.floor(Math.random() * 26));
        }
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            referralCode += characters[randomIndex];
        }

        return referralCode;
    };

    const onSubmitHandler = async (e) => {
        setLoading(true);
        e.preventDefault();
        const formData = {
            name,
            email,
            linkedin,
            phone,
            role,
            referralCode,
        };
        try {
            await createWorkDocument(formData, resume);
            alert('Application submitted successfully');
            console.log('Application submitted successfully');
            setName('');
            setEmail('');
            setLinkedin('');
            setPhone('');
            setRole('');
            setResume(null);
            setReferralCode('');
            fileInputRef.current.value = '';
        } catch (error) {
            console.error('Error submitting application: ', error);
            alert(error.message);
        }
        setLoading(false);
    }

    return (
        <div className="career-page">
            <section className='career-section'>
                <form className="career-form" onSubmit={onSubmitHandler}>
                    <h1 className='career-form-header'>Apply for an Internship</h1>
                    <div className='form-container'>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="linkedin">LinkedIn</label>
                            <input
                                type="url"
                                id="linkedin"
                                value={linkedin}
                                onChange={(e) => setLinkedin(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="number"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <select
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select a role</option>
                                {roles.map((roleOption) => (
                                    <option key={roleOption} value={roleOption}>
                                        {roleOption}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Referal Code(optional)</label>
                            <input
                                type="text"
                                id="referralCode"
                                value={referralCode}
                                onChange={(e) => setReferralCode(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="resume">Upload Resume</label>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf"
                                id="resume"
                                onChange={handleResumeChange}
                                required
                            />
                        </div>
                    </div>
                    {
                        loading ? <p className='loading-message'>Sending....</p> :
                            <button type="submit" className="submit-btn">Submit</button>
                    }
                </form>
            </section>
        </div>
    );
};

export default Careers;
