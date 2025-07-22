import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/kamera'); // ⬅️ Ganti ke halaman kamera
    }, 100); // Delay kecil agar Root Layout sempat mount

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
