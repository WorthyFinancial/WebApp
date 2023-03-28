import Layout from "@/components/layout"
import React from "react"
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

export default function TestLayout() {
    return (
        <div>
            <Layout />
             <div className="flex flex-nowrap shadow-lg rounded bg-red-100 p-5 absolute basis-4/5 w-4/5 h-4/5 bottom-0 right-0">
                <h1 className="text-3xl">Notifications</h1>
                <div>
                    <Input className="w-1/3"
                        placeholder="From Date"
                        size="md"
                        type="datetime-local"
                        />
                    <Input
                        placeholder="To Date"
                        size="md"
                        type="datetime-local"
                        />
                    <Select 
                        placeholder='Notification Type'>
                        <option>Deposit</option>
                        <option>Bill Paid</option>
                        <option>Milestone</option>
                        </Select>
                </div>
            </div>
        </div>
    )
}