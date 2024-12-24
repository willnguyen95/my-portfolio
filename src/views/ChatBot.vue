<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- Chat Header -->
    <div class="bg-blue-500 text-white text-center py-4 shadow-md">
      <h1 class="text-xl font-bold">Ask Me Anything</h1>
      <p class="text-sm">Learn more about me through this chatbot!</p>
    </div>

    <!-- Chat Messages -->
    <div
      ref="chatContainer"
      class="flex flex-col flex-grow overflow-y-auto p-4 space-y-4"
    >
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="[
          message.type === 'user' ? 'self-end' : 'self-start',
          'max-w-[70%] rounded-lg p-3 shadow-md',
          message.type === 'user'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800',
        ]"
      >
        {{ message.text }}
      </div>
    </div>

    <!-- Chat Input -->
    <div class="bg-gray-200 py-3 px-4">
      <form @submit.prevent="sendMessage" class="flex items-center">
        <input
          v-model="input"
          type="text"
          placeholder="Type your question..."
          class="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";

export default {
  setup() {
    const input = ref("");
    const messages = ref([
      {
        type: "bot",
        text: "Hi! I’m your personal chatbot. Ask me anything about myself.",
      },
    ]);

    const chatContainer = ref(null);

    const sendMessage = () => {
      if (!input.value.trim()) return;

      // Add the user's message
      messages.value.push({ type: "user", text: input.value });

      // Clear the input field
      const userInput = input.value;
      input.value = "";

      // Simulate bot response
      setTimeout(() => {
        const response = getBotResponse(userInput);
        messages.value.push({ type: "bot", text: response });
        scrollToBottom();
      }, 500);
    };

    const getBotResponse = (question) => {
      // Simple Q&A logic
      const faqs = {
        "what is your name?": "I’m your portfolio chatbot!",
        "tell me about your skills":
          "I specialize in Data Analysis, Vue.js, and Tailwind CSS.",
        "what are your hobbies?":
          "I enjoy coding, learning new technologies, and sharing knowledge.",
        "how can I contact you?":
          "You can find me on GitHub or reach out via my social media links.",
      };

      const lowercasedQuestion = question.toLowerCase();
      return faqs[lowercasedQuestion] || "Sorry, I don't have an answer for that yet.";
    };

    const scrollToBottom = () => {
      nextTick(() => {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
      });
    };

    onMounted(() => {
      scrollToBottom();
    });

    return { input, messages, sendMessage, chatContainer };
  },
};
</script>
