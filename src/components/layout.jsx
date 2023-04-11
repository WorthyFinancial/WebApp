import { Divider, Avatar } from '@chakra-ui/react';
import SignInNav from "@/components/Navigation/SignInNav";
import Logo from '@/components/Logo';
    
export default function Layout() {
        return (
            <div>
                <div className='flex flex-row flex-wrap shadow-lg rounded w-screen h-full'>  
                    <div className="basis-1/5 w-1/5 h-screen bg-green-200 shadow-lg rounded p-3">
                        <div class="flex font-sans p-2 bg-green-400">
                                Dashboard
                        </div>
                        <div class="flex font-sans p-2">
                                Work Systems
                        </div>
                        <div class="flex font-sans p-2">
                                Goals
                        </div>
                        <div class="flex font-sans p-2">
                                Chat
                        </div>
                        
                        <Divider colorScheme={"blackAlpha"}/>

                        <div class="flex font-sans p-2">
                                Notifications
                        </div>
                        <div class="flex font-sans p-2">
                                Settings
                        </div>
                        <div class="flex font-sans p-2">
                                Help
                        </div>
                        <div class="flex font-sans p-2 object-none object-bottom">
                            <a>My Profile</a>
                        </div>
                    </div>
                    <div className="basis-4/5 w-4/5 h-1/5 bg-green-200 shadow-lg rounded">
                        <SignInNav className="float-right"/>
                        <div>
                            <div class="flex items-center m-5">
                            <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                <div className='flex flex-col'>
                                    <strong className='pl-2 text-2xl'>Andrew Alfred</strong>
                                    <span className='p-2 text-xl'>Technical advisor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        )
      }