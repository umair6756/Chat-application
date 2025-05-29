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

import Image from 'next/image';

import { motion } from "framer-motion";

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
  const [previewImage, setPreviewImage] = useState(null); // For image preview modal
const [caption, setCaption] = useState('');             // For image caption


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
      <div className="flex items-center justify-between p-5 border-b border-gray-200 shadow-sm bg-white">
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
              className={'max-w-[326px] '}
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
      <div className="border-t border-gray-300 p-5 bg-white shadow-inner relative">
        <div className="flex items-center gap-3 mb-2">
          <Smile
            className="w-6 h-6 text-gray-600 hover:text-indigo-600 cursor-pointer"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          />


 <Paperclip
    className="w-6 h-6 text-gray-600 hover:text-indigo-600 cursor-pointer"
    onClick={() => document.getElementById('imageInput').click()}
  />
  <input
    id="imageInput"
    type="file"
    accept="image/*"
    className="hidden"
    onChange={(e) => {
      const file = e.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setPreviewImage(imageUrl);
      }
    }}
  />
          
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

        <div className="flex items-center gap-3">

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





 {previewImage && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-[95%] max-w-[500px] h-[500px] bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200 flex flex-col"
    >
    {/* Center Box */}
    
      
      {/* Image Preview */}
      <div className="flex-1 relative h-[75%] bg-gray-100">
        <img
          src={previewImage}
          alt="Preview"
          className="object-contain w-full h-full"
        />
      </div>

      {/* Caption Input */}
      <div className="flex items-center gap-2 px-4 py-3 border-t bg-white">
        <input
          type="text"
          placeholder="Add a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center px-4 py-3 border-t bg-gray-50">
        <button
          className="text-sm text-gray-600 hover:text-red-500 font-medium"
          onClick={() => {
            setPreviewImage(null);
            setCaption('');
          }}
        >
          Cancel
        </button>
        <button
          className="bg-[#7A65FC] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#5f4de6] transition-all duration-200"
          onClick={() => {
            const newMessage = {
              id: Date.now(),
              user: { name: 'You', image: '/avatar1.jpg' },
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              images: [previewImage],
              message: caption.trim(),
              
              isOwn: true,
            };
            setMessages((prev) => [...prev, newMessage]);
            setPreviewImage(null);
            setCaption('');
          }}
        >
          Send
        </button>
      </div>

    </motion.div>
  </div>
)}





    </div>
  );
}
