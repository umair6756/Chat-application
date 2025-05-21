'use client'
import { useState } from 'react';
import {
  Search,
  Phone,
  Video,
  MoreVertical,
  Smile,
  Paperclip,
  Send,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import MessageBox from './MessageBox';

const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });

export default function ChatBox() {
  const [showSearch, setShowSearch] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState('');

  const onEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="w-[100%] h-screen flex flex-col bg-gradient-to-br from-white via-[#f3f4f6] to-[#e5e7eb] text-black">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b shadow-sm bg-white">
        <div className="flex items-center gap-3">
          <img
            src="/avatar1.jpg"
            className="w-10 h-10 rounded-full border"
            alt="Doris Brown"
          />
          <span className="font-semibold text-gray-800 text-lg">Doris Brown</span>
          <span className="text-green-500 text-sm ml-1 animate-pulse">●</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative transition-all duration-300">
            <Search
              className="w-5 h-5 cursor-pointer text-gray-700 hover:text-indigo-600"
              onClick={() => setShowSearch(!showSearch)}
            />
            {showSearch && (
              <input
                type="text"
                className="absolute top-8 -right-4 w-[180px] border border-gray-300 bg-white shadow-lg text-sm px-3 py-2 rounded-md transition-all duration-300"
                placeholder="Search messages..."
              />
            )}
          </div>
          <Phone className="w-5 h-5 text-gray-700 hover:text-indigo-600 cursor-pointer" />
          <Video className="w-5 h-5 text-gray-700 hover:text-indigo-600 cursor-pointer" />
          <MoreVertical className="w-5 h-5 text-gray-700 hover:text-indigo-600 cursor-pointer" />
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 bg-[#f9fafb]">
        {/* Image bubble */}
        <div className="flex flex-col items-start gap-1">
           <MessageBox/>
        </div>

        {/* Typing */}
        <div className="flex flex-col items-start">
          <div className="bg-[#7A65FC] text-white px-4 py-2 rounded-xl max-w-fit shadow animate-pulse">
            typing <span className="inline-block animate-bounce">•••</span>
          </div>
        </div>

        {/* File message */}
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-3 p-4 border rounded-xl shadow bg-white">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6.5L14 4.5z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-sm">admin_v1.0.zip</div>
              <div className="text-xs text-gray-500">12.5 MB</div>
            </div>
            <button className="text-blue-600 text-sm hover:underline">⬇</button>
          </div>
          <span className="text-xs text-gray-400 mt-1">01:30</span>
        </div>
      </div>

      {/* Input Bar */}
      <div className="border-t px-5 py-4 bg-white shadow-inner relative">
        <div className="flex items-center gap-3">
          <Smile
            className="w-6 h-6 text-gray-600 hover:text-indigo-600 cursor-pointer"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          />
          <Paperclip className="w-6 h-6 text-gray-600 hover:text-indigo-600 cursor-pointer" />
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 border border-gray-300 px-4 py-2 rounded-full text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-200"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="bg-[#7A65FC] text-white p-2 rounded-full hover:bg-[#6750f5] transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>

        {/* Emoji Picker */}
        {showEmojiPicker && (
          <div className="absolute bottom-20 left-6 z-50 animate-slide-up">
            <div className="shadow-xl rounded-lg overflow-hidden">
              <EmojiPicker onEmojiClick={onEmojiClick} theme="light" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
