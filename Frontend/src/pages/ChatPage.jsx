// import React, { useEffect, useRef } from 'react';
// import { useSocket } from '../hooks/useSocket';
// import ChatMessage from '../components/ChatMessage';
// import ChatInput from '../components/ChatInput';
// import TypingIndicator from '../components/TypingIndicator';
// import WelcomeMessage from '../components/WelcomeMessage';
// import config from '../config/config';

// const ChatPage = () => {
//   const { isConnected, messages, isTyping, sendMessage } = useSocket(config.BACKEND_URL);
//   const messagesEndRef = useRef(null);
//   const chatContainerRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   return (
//     <div className="flex-1 flex flex-col overflow-hidden">
//       <div 
//         ref={chatContainerRef}
//         className="flex-1 overflow-y-auto px-4 py-6"
//         style={{ scrollbarWidth: 'thin', scrollbarColor: '#CBD5E0 transparent' }}
//       >
//         <div className="max-w-4xl mx-auto">
//           {messages.length === 0 ? (
//             <WelcomeMessage />
//           ) : (
//             <>
//               {messages.map((message) => (
//                 <ChatMessage
//                   key={message.id}
//                   message={message.text}
//                   isUser={message.isUser}
//                   timestamp={message.timestamp}
//                 />
//               ))}
              
//               {isTyping && <TypingIndicator />}
//             </>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       {/* Chat Input */}
//       <ChatInput 
//         onSendMessage={sendMessage}
//         disabled={!isConnected}
//       />

//       {/* Connection Warning */}
//       {!isConnected && (
//         <div className="bg-red-500 text-white text-center py-2 text-sm">
//           Connection lost. Please check if your server is running on port 3007.
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatPage;


import React, { useEffect, useRef } from 'react';
import { useSocket } from '../hooks/useSocket';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import TypingIndicator from '../components/TypingIndicator';
import WelcomeMessage from '../components/WelcomeMessage';
import config from '../config/config';

const ChatPage = () => {
  const { isConnected, messages, isTyping, sendMessage } = useSocket(config.BACKEND_URL);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-4 py-6"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#a78bfa transparent', // violet scroll thumb
        }}
      >
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 ? (
            <WelcomeMessage />
          ) : (
            <>
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />
              ))}

              {isTyping && <TypingIndicator />}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
        <ChatInput onSendMessage={sendMessage} disabled={!isConnected} />
      </div>

      {/* Connection Warning */}
      {!isConnected && (
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-center py-2 text-sm shadow-md">
          ⚠️ Connection lost. Please check if your server is running on port 3007.
        </div>
      )}
    </div>
  );
};

export default ChatPage;
