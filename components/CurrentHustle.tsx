import React from 'react';

function CurrentHustle(props) {
  return (
    <div className="relative rounded-lg bg-gradient-to-br from-[#0a1023] via-[#10172a] to-[#1a1333] shadow-xl border border-[#0a1023] p-4 flex items-center gap-4 overflow-hidden">
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0a1023]/80 rounded-full blur-2xl opacity-90 pointer-events-none"></div>
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#0a1023]/80">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#3B82F6" opacity="0.28"/>
          <path d="M12 7v5l3 3" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <h2 className="text-xl font-extrabold mb-4 text-white tracking-tight flex items-center gap-2">
          <span className="inline-block">Current Hustle:</span>
        </h2>
        <ul className="list-none pl-0 text-base text-white/90 space-y-1.5">
          <li className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-blue-200 rounded-full"></span>
            <span className="font-semibold">Postgres Internals</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-purple-200 rounded-full"></span>
            <span className="font-semibold">Distributed databases: Cassandra</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-purple-200 rounded-full"></span>
            <span className="font-semibold">GoLang</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CurrentHustle;