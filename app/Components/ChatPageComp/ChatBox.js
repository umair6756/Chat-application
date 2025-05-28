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
  // Messages array: each message has id, user, time, text, images, and whether it is own message
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: { name: 'Bonnie Green', image: '/images/person.jpg' },
      time: '11:46',
      message: 'This is the new office <3',
      images: ['/images/person.jpg', '/images/person.jpg', '/images/person.jpg', '/images/person.jpg'],
      isOwn: false,
    },
    {
      id: 2,
      user: { name: 'Bonnie Green', image: '/images/person.jpg' },
      time: '11:47',
      message: 'This is the new office <3',
      images: [],
      isOwn: false,
    },
    {
      id: 3,
      user: { name: 'You', image: '/avatar1.jpg' },
      time: 'Now',
      message: 'Hello, this is my message',
      images: [],
      isOwn: true,
    },
  ]);

  const [showSearch, setShowSearch] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState('');
  const [imageURL, setImageURL] = useState(''); // for adding image URLs

  // Add emoji to message input
  const onEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  // Handle send button
  const handleSend = () => {
    if (!message.trim() && !imageURL.trim()) return;

    const newMessage = {
      id: Date.now(),
      user: { name: 'You', image: '/avatar1.jpg' },
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      message: message.trim(),
      images: imageURL.trim() ? [imageURL.trim()] : [],
      isOwn: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage('');
    setImageURL('');
    setShowEmojiPicker(false);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-white via-[#f3f4f6] to-[#e5e7eb] text-black">
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
        {messages.map(({ id, user, time, message, images, isOwn }) => (
          <div
            key={id}
            className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[326px] ${
                isOwn
                  ? 'bg-white rounded-s-xl rounded-se-xl p-4 shadow'
                  : ''
              }`}
            >
              <MessageBox
                user={user}
                time={time}
                message={message}
                images={images}
                isOwn={isOwn}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="border-t px-5 py-4 bg-white shadow-inner relative">
        <div className="flex items-center gap-3 mb-2">
          <Smile
            className="w-6 h-6 text-gray-600 hover:text-indigo-600 cursor-pointer"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          />
          <Paperclip className="w-6 h-6 text-gray-600 hover:text-indigo-600 cursor-pointer" />
          <input
            type="text"
            placeholder="Add image URL (optional)"
            className="flex-1 border border-gray-300 px-4 py-2 rounded-full text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-200"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 border border-gray-300 px-4 py-2 rounded-full text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-200"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
          <button
            onClick={handleSend}
            className="bg-[#7A65FC] text-white p-2 rounded-full hover:bg-[#6750f5] transition-colors"
          >
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
