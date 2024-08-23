import React, { useEffect, useRef, useState } from 'react';
import './Careers.styles.css';
import { createWorkDocument } from '../../utils/firebase/firebase.utils';

const roles = [
    'Frontend Developer',
    'Backend Developer',
    'UI UX Designer',
    'Data Scientist',
    'ML Engineer',
];

const Careers = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [resume, setResume] = useState(null);
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [customRole, setCustomRole] = useState('');
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

    const handleRoleChange = (e) => {
        setRole(e.target.value);
        if (e.target.value !== 'Other') {
            setCustomRole(''); // Reset custom role when selecting a predefined role
        }
    };

    const onSubmitHandler = async (e) => {
        setLoading(true);
        e.preventDefault();
        const formData = {
            name,
            email,
            linkedin,
            phone,
            role: role === 'Other' ? customRole : role,
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
            setCustomRole('')
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
                        <div className="form-group dropdown">
                            <label htmlFor="role">Role</label>
                            <select
                                id="role"
                                value={role}
                                onChange={handleRoleChange}
                                required
                            >
                                <option value="" disabled>Select a role</option>
                                {roles.map((roleOption) => (
                                    <option key={roleOption} value={roleOption}>
                                        {roleOption}
                                    </option>
                                ))}
                                <option value="Other">Other</option>
                            </select>

                            {role === 'Other' && (
                                <input
                                    type="text"
                                    value={customRole}
                                    onChange={(e) => setCustomRole(e.target.value)}
                                    placeholder="Enter role"
                                    required
                                    className='other-role-input'
                                />
                            )}
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
