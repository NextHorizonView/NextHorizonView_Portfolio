import React, { useRef, useState } from 'react';
import './Careers.styles.css';
import Logo from '../../assets/logo.png';
import { createWorkDocument } from '../../utils/firebase/firebase.utils';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser'; // Import EmailJS
const serviceid = import.meta.env.VITE_SERVICE_KEY;
const templateid = import.meta.env.VITE_TEMPLATE_KEY;
const userid = import.meta.env.VITE_PUBLIC_KEY;

const roles = [
    'Frontend Developer',
    'Backend Developer',
    'UI UX Designer',
    'Data Scientist',
    'ML Engineer',
];
// function validateEnvVariables() {
//     const variables = { serviceid, templateid, userid };
//     let allValid = true;

//     // Loop through variables and log if any are missing/empty
//     for (const [key, value] of Object.entries(variables)) {
//         if (!value) {
//             console.error(`Error: ${key} is missing or empty.`);
//             allValid = false;
//         }
//     }

//     if (allValid) {
//         console.log('All environment variables are correctly set:', variables);
//     }
// }
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
    const formRef = useRef(); // Create a reference to the form
    // validateEnvVariables();
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
        if (e.target.value !== 'Other') setCustomRole('');
    };

    const sendEmail = async () => {
        try {
            await emailjs.sendForm(
                serviceid, // Replace with your EmailJS service ID
                templateid, // Replace with your template ID
                formRef.current,
                userid // Replace with your EmailJS user ID
            );
            alert('Application details submitted successfully!');
        } catch (error) {
            alert('Failed to send email: ' + error.message);
        }
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = {
            name,
            email,
            linkedin,
            phone,
            role: role === 'Other' ? customRole : role,
            referralCode,
        };

        try {
            await createWorkDocument(formData, resume); // Save the data to Firestore
            await sendEmail(); // Send the form data via EmailJS
            alert('Application submitted successfully');
            // Clear the form
            setName(''); setEmail(''); setLinkedin(''); setPhone('');
            setRole(''); setResume(null); setReferralCode(''); setCustomRole('');
            fileInputRef.current.value = '';
        } catch (error) {
            alert(error.message);
        }
        setLoading(false);
    };

    return (
        <div className="career-page">
            <section className="career-section">
                <Link to='/' className='nav-logo'>
                    <img className='nav-logo' src={Logo} alt='company-logo' />
                </Link>
                <form ref={formRef} className="career-form" onSubmit={onSubmitHandler}>
                    <h1 className="career-form-header">Apply for an Internship</h1>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input name="from_name" className="inputtxt" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="linkedin">LinkedIn</label>
                            <input name="linkedin" className="inputtxt" type="url" id="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input name="email" className="inputtxt" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="referralCode">Referral Code (Optional)</label>
                            <input name="referral_code" className="inputtxt" type="text" id="referralCode" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input name="phone" className="inputtxt" type="number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="resume">Resume</label>
                            <input className="inputtxt" ref={fileInputRef} type="file" accept=".pdf" id="resume" onChange={handleResumeChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <select name="role" className="inputtxt" id="role" value={role} onChange={handleRoleChange} required>
                                <option value="" disabled>Select a role</option>
                                {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                                <option value="Other">Other</option>
                            </select>
                            {role === 'Other' && (
                                <input className="inputtxt other-role-input" type="text" value={customRole} onChange={(e) => setCustomRole(e.target.value)} placeholder="Enter role" required />
                            )}
                        </div>
                    </div>
                    {loading ? (
                        <p className="loading-message">Submitting...</p>
                    ) : (
                        <div className="submit-btn-container">
                            <button type="submit" className="submit-btn">Submit</button>
                        </div>
                    )}
                </form>
            </section>
        </div>
    );
};

export default Careers;
