import { Flex, Spacer, Box, Divider } from '@chakra-ui/react';
import MainNavigation from "@/components/Navigation/MainNavigation";
import SignInNav from "@/components/Navigation/SignInNav";
import Logo from '@/components/Logo';

export default function Dashboard() {
    return (
        <div>
            
            <div className='flex flex-row shadow-lg rounded w-screen h-full bg-slate-100'>  
                <div className="basis-1/4 w-1/4 h-screen bg-green-200 shadow-lg rounded p-3">
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
                    <Divider/>
                    <div class="flex font-sans p-2">
                            Notifications
                    </div>
                    <div class="flex font-sans p-2">
                            Settings
                    </div>
                    <div class="flex font-sans p-2">
                            Help
                    </div>
                </div>
                <div className="basis-3/4 w-3/4 h-52 bg-green-200 shadow-lg rounded">
                    <SignInNav />
                </div>
            </div>
        </div>
    )
  }