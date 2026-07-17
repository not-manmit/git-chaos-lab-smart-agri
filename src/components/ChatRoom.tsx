"use client";

import { useState } from "react";
import { chatChannels } from "@/services/mockDb";

export default function ChatRoom() {
  const [activeChannelId, setActiveChannelId] = useState(chatChannels[0]?.id ?? "");
  const activeChannel = chatChannels.find((channel) => channel.id === activeChannelId);

  return (
    <section className="rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 p-5 dark:border-slate-800">
        <h2 className="text-lg font-semibold">Farmer-to-Buyer Direct Chat Room</h2>
      </div>
      <div className="grid min-h-72 md:grid-cols-[260px_1fr]">
        <aside className="border-r border-slate-200 p-3 dark:border-slate-800">
          {chatChannels.map((channel) => (
            <button
              key={channel.id}
              type="button"
              onClick={() => setActiveChannelId(channel.id)}
              className="mb-2 w-full rounded-md p-3 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span className="font-medium">{channel.buyerName}</span>
              <span className="mt-1 text-xs text-slate-500">{channel.lastMessage}</span>
            </button>
          ))}
        </aside>
        <div className="flex flex-col justify-between p-5">
          <div>
            <p className="text-sm text-slate-500">Active channel</p>
            <h3 className="mt-1 text-xl font-semibold">{activeChannel?.buyerName}</h3>
            <p className="mt-4 rounded-md bg-slate-100 p-3 text-sm dark:bg-slate-800">
              {activeChannel?.lastMessage}
            </p>
          </div>
          <input
            placeholder="Type a buyer reply..."
            className="mt-6 rounded-md border border-slate-300 px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-950"
          />
        </div>
      </div>
    </section>
  );
}
