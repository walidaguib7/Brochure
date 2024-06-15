"use client";


import { create } from 'zustand';

type MessageProps = {
    message: string;
    setMessage: (value: string) => void;
    GetMessage: () => string;
}


export const useFilesStore = create<MessageProps>()((set, get) => ({
    message: "",
    setMessage: (message) => set({ message }),
    GetMessage: () => get().message
}));