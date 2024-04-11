import { create } from "zustand";

const useConversation = create((set) => ({
  conversations: [],
  setConversations: (conversations) => set({ conversations }),

  filteredConversations: [],
  setFilteredConversations: (filteredConversations) =>
    set({ filteredConversations }),

  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),

  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
