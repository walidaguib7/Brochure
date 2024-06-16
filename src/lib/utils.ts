

import { useFilesStore } from "@/store/MessageStore"
import { type ClassValue, clsx } from "clsx"

import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const ImageUrl = "http://localhost:5171/MyImages/";



