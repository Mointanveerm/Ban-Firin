import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_URL =
  "https://wa.me/923230007773?text=" +
  encodeURIComponent(
    "Assalamualaikum Ban Firin Bakers — I'd like to order Butter Biscuits (200g).",
  );

export const PHONE_DISPLAY = "0323-0007773";
export const PHONE_TEL = "tel:+923230007773";
