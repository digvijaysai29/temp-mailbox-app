// src/components/MailboxForm.tsx

"use client";  // Add this line

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const MailboxForm = () => {
    // State to store the mailbox input
    const [mailbox, setMailbox] = useState('');

    // Effect to run GSAP animation when the component mounts
    useEffect(() => {
        gsap.fromTo(
            ".mailbox-form",
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1 }
        );
    }, []);

    // Handler for form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (mailbox.trim() === '') {
            alert('Please enter a mailbox name or email!');
            return;
        }

        // Perform your form submission logic here
        console.log(`Submitted mailbox: ${mailbox}`);

        // Reset the form after submission
        setMailbox('');

        // Optional: Trigger a success animation
        gsap.to(".submit-btn", { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 });
    };

    return (
        <form className="mailbox-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="mailbox">Mailbox:</label>
                <input
                    type="text"
                    id="mailbox"
                    value={mailbox}
                    onChange={(e) => setMailbox(e.target.value)}
                    placeholder="Enter mailbox name or email"
                    required
                />
            </div>
            <button type="submit" className="submit-btn">
                Submit
            </button>
        </form>
    );
};

export default MailboxForm;
