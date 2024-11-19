// src/components/MailboxForm.tsx

import { useState } from 'react';

const MailboxForm = () => {
    const [mailbox, setMailbox] = useState('');

    const handleCreateMailbox = async () => {
        const response = await fetch('/api/mailboxes', {
            method: 'POST',
        });
        const data = await response.json();
        setMailbox(data.mailbox);
    };

    return (
        <div className="flex flex-col items-center">
            <button onClick={handleCreateMailbox} className="btn bg-blue-500 text-white px-4 py-2 rounded">
                Create Temporary Mailbox
            </button>
            {mailbox && <p className="text-green-500 mt-4">Your temporary mailbox is: {mailbox}</p>}
        </div>
    );
};

export default MailboxForm;
import { useEffect } from 'react';
import { gsap } from 'gsap';

const MailboxForm = () => {
    useEffect(() => {
        gsap.from(".btn", { duration: 1, opacity: 0, y: -50 });
    }, []);

    // Rest of the component...
};
