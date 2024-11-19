// src/app/page.tsx

import MailboxForm from '@/components/MailboxForm';

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Temporary Mailbox Generator</h1>
            <MailboxForm />
        </main>
    );
}
