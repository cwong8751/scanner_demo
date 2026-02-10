import Image from "next/image";
import { getServerIp } from "@/lib/getServerIp";
import ServerQr from "./components/qrcode";

export default function Home() {
  const serverIp = getServerIp();
  const port = process.env.PORT || 3000;
  const serverUrl = `http://${serverIp}:${port}`;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold mb-8">scanner_demo</h1>
        
        <div className="w-full space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">This server's IP address is: </label>
            <b className="font-bold text-gray-700 text-lg">{serverIp}</b>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Barcode</label>
            <ServerQr value={serverUrl} />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Server Status</label>
            <input type="text" placeholder="Server status" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" disabled />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Incoming Messages</label>
            <textarea placeholder="Incoming messages" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 h-32 resize-none" disabled></textarea>
          </div>
        </div>
      </main>
    </div>
  );
}
