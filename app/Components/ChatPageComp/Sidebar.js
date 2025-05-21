"use client";
import React from "react";
import { Search } from "lucide-react";

const contacts = [
  { name: "Alice", online: true },
  { name: "Adeel", online: false },
  { name: "Brian", online: true },
  { name: "Bella", online: true },
  { name: "Charlie", online: false },
  { name: "Doris", online: true },
  { name: "Emily", online: false },
  { name: "Steve", online: true },
];

const recentChats = [
  { name: "Patrick Hendricks", msg: "hey! there I'm available", time: "02:50 PM", online: true },
  { name: "Mark Messer", msg: "Images", time: "10:30 AM", unread: 2 },
  { name: "General", msg: "This theme is Awesome!", time: "2:06 min" },
  { name: "Doris Brown", msg: "typing . . .", time: "10:05 PM", typing: true, online: true },
];

const groupedContacts = contacts.reduce((acc, contact) => {
  const firstLetter = contact.name[0].toUpperCase();
  if (!acc[firstLetter]) acc[firstLetter] = [];
  acc[firstLetter].push(contact);
  return acc;
}, {});

export default function Sidebar() {
  return (
    <div className="w-[30%] h-screen fixed left-0 top-0 bg-white shadow-lg p-4 font-sans flex flex-col z-10 border-r border-gray-200">
      
      {/* Header + Search */}
      <div className="flex-none">
        <h2 className="text-xl font-semibold mb-4">Chats</h2>

        <div className="flex items-center space-x-2 mb-4 bg-gray-100 py-3 px-3 rounded-lg">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search messages or users"
            className="bg-transparent outline-none flex-1 text-sm"
          />
        </div>

        <h3 className="text-sm font-medium text-gray-500 mb-2">Recent</h3>
        <div className="space-y-6 mb-4">
          {recentChats.map((chat, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gray-300 text-[#3e76c1] flex items-center justify-center text-lg font-semibold">
                  {chat.name.charAt(0)}
                </div>
                {chat.online && (
                  <span className="absolute right-0 bottom-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-sm font-semibold text-gray-800 truncate w-40">{chat.name}</p>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className={`text-xs ${chat.typing ? "text-blue-500 italic" : "text-gray-600"}`}>{chat.msg}</p>
                  {chat.unread && (
                    <span className="bg-pink-200 text-pink-700 text-xs px-2 py-0.5 rounded-full">
                      {chat.unread.toString().padStart(2, "0")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-medium text-gray-500 mb-2">All Contacts</h3>
      </div>

      {/* Scrollable Contact Section */}
      <div className="flex-1 overflow-hidden group relative">
        <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-transparent group-hover:scrollbar-thumb-gray-400 transition-all duration-300 space-y-8">
          {Object.keys(groupedContacts).sort().map((letter) => (
            <div key={letter}>
              <h4 className="text-md text-[#3e76c1] font-semibold mb-1 px-1">{letter}</h4>
              <div className="space-y-3">
                {groupedContacts[letter].map((contact, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 px-2 py-2 hover:bg-gray-100 rounded-lg transition-all"
                  >
                    <div className="relative">
                      <div className="w-9 h-9 rounded-full bg-gray-300 text-gray-800 flex items-center justify-center text-sm font-semibold">
                        {contact.name.charAt(0)}
                      </div>
                      {contact.online && (
                        <span className="absolute right-0 bottom-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-800">{contact.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
