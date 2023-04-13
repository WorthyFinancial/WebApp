import { useRouter } from 'next/router';
import Link from 'next/link';
import { Divider, Avatar } from '@chakra-ui/react';
import clsx from 'clsx';
import SignInNav from "@/components/Navigation/SignInNav";


export default function Layout({ children }) {
    const router = useRouter();
    const pathname = router.pathname;
    return (
        <div className='grid grid-cols-5'>
            <header className='col-span-5 flex justify-between items-center bg-green-200 shadow-lg p-6'>
                <div className='flex items-center gap-2'>
                    <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast'/>
                    <div>
                        <p className='text-2xl font-bold'>Andrew Alfred</p>
                        <p className='text-xl'>Technical advisor</p>
                    </div>
                </div>
                <SignInNav />
            </header>

            <nav className='col-span-1 bg-green-200 p-6 text-lg min-h-screen'>
                <ul>
                    <ActiveLink pathname={pathname} href="/">Dashboard</ActiveLink>
                    <ActiveLink pathname={pathname} href="/work-systems">Work Systems</ActiveLink>
                    <ActiveLink pathname={pathname} href='/goals'>Goals</ActiveLink>
                    <ActiveLink pathname={pathname} href="/expense">Expense</ActiveLink>
                    <ActiveLink pathname={pathname} href='/chat'>Chat</ActiveLink>
                    <Divider colorScheme='blackAlpha' />
                    <ActiveLink pathname={pathname} href="/notifications">Notifications</ActiveLink>
                    <ActiveLink pathname={pathname} href="/settings">Settings</ActiveLink>
                    <ActiveLink pathname={pathname} href="/help">Help</ActiveLink>
                    <ActiveLink pathname={pathname} href="/profile">Profile</ActiveLink>
                </ul>

            </nav>

            <main className='col-span-4 p-6'>
                {children}
            </main>
        </div>
    )
}

const ActiveLink = ({ href, pathname, children }) => {
    const isActive = pathname == href;
    return (<li className={clsx('px-2 py-1 my-1', isActive && 'bg-green-400 rounded-md')}><Link href={href}>{children}</Link></li>)
}
