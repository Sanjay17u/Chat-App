/* eslint-disable no-unused-vars */
import React from "react";

const ChatBubble = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl bg-gray-900 px-4 py-3 text-white shadow-lg dark:bg-gray-800 mt-5">
              <p className="text-sm font-medium">
                Hey there! How can I help you today?
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl bg-gray-100 px-4 py-3 text-gray-900 shadow-lg dark:bg-gray-950 dark:text-gray-50 mt-5">
              <p className="text-sm font-medium">
                I&apos;m looking to create a beautiful chat UI for my app. Can
                you help me with that?
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl bg-gray-900 px-4 py-3 text-white shadow-lg dark:bg-gray-800">
              <p className="text-sm font-medium">
                Absolutely! I&apos;d be happy to help you create an elegant chat
                bubble UI. What kind of design did you have in mind?
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl bg-gray-100 px-4 py-3 text-gray-900 shadow-lg dark:bg-gray-950 dark:text-gray-50">
              <p className="text-sm font-medium">
                I&apos;m looking for something with a soft, rounded shape and a
                subtle drop shadow. The text inside should be clean and
                readable.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl bg-gray-900 px-4 py-3 text-white shadow-lg dark:bg-gray-800">
              <p className="text-sm font-medium">
                Got it, that sounds like a great design. Let me put together a
                sample for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBubble;
