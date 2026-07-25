import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string) {
  if (!name) return "";

  const parts = name.trim().split(" ").filter(Boolean);

  if (parts.length === 1) {
    const letter = parts[0][0].toUpperCase();
    return letter + letter;
  }

  const first = parts[0][0].toUpperCase();
  const last = parts[parts.length - 1][0].toUpperCase();

  return first + last;
}


export function formatName(name: string) {
  if (!name) return "";

  const parts = name.trim().split(" ").filter(Boolean);

  // Se só tiver um nome
  if (parts.length === 1) {
    return capitalize(parts[0]);
  }

  const firstName = capitalize(parts[0]);
  const lastInitial = parts[parts.length - 1][0].toUpperCase();

  return `${firstName} ${lastInitial}.`;
}

// Função auxiliar para capitalizar
function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}