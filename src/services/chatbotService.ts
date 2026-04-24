import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getChatbotResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: `You are the TasteKart AI Assistant. TasteKart is a premium food delivery platform. 
        You help users find restaurants, choose dishes, and answer questions about their orders.
        Be helpful, vibrant, and professional. 
        If asked about the best restaurants, mention 'The Biryani House' or 'Starbucks' which are currently promoted.
        Keep your responses concise.`,
      }
    });

    // Manually add history for the specific prompt if needed, 
    // but the SDK's chat object also manages history if we call sendMessage.
    // For simplicity, we'll use a single turn or a managed session.
    
    const result = await chat.sendMessage({
        message: message,
    });

    return result.text;
  } catch (error) {
    console.error("Chatbot Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. How else can I help you today at TasteKart?";
  }
}
