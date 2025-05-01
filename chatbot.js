function toggleChat() {
  const container = document.getElementById('chat-container');
  container.style.display = container.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  if (!message) return;

  addMessage('user', message);
  input.value = '';

  setTimeout(() => {
      const reply = getSmartAIResponse(message);
      addMessage('bot', reply);
  }, 500);
}

function addMessage(sender, text) {
  const chatBox = document.getElementById('chat-box');
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getSmartAIResponse(input) {
  const userInput = input.toLowerCase();
  const responses = [
      { keywords: ["hello", "hi", "hey"], reply: "Hello there! Welcome to Travelindepth 👋 What can I do for you today?" },
      { keywords: ["how are you"], reply: "I'm just a bunch of code, but I'm always here to help!" },
      { keywords: ["recommend", "where", "suggest", "some other places"], reply: "Looking for a trip? I would suggest Shimla or Nainital if you are a lover of nature and peace!" },
      { keywords: ["no", "some other places"], reply: "Sure! You can explore Jaipur, Goa, Delhi, Kerala and many more." },
      { keywords: ["delhi", "some other places"], reply: "You have reached us, Our site will guide you step by step, Just Click... on the Delhi button." },
      { keywords: ["assam", "some other places"], reply: "You have reached us, Our site will guide you step by step, Just Click... on the Assam button." },
      { keywords: ["jaipur", "some other places"], reply: "You have reached us, Our site will guide you step by step, Just Click... on the Jaipur button." },
      { keywords: ["kerala", "some other places"], reply: "You have reached us, Our site will guide you step by step, Just Click... on the Kerala button." },
      { keywords: ["help", "how to"], reply: "Sure! Ask me anything about this website or places to visit." }, 
      { keywords: ["time"], reply: `The current time is ${new Date().toLocaleTimeString()}.` }, 
      { keywords: ["thank you", "thanks"], reply: "You're welcome! 😊 Happy to help." }, 
      { keywords: ["hello", "hi", "hey"], reply: "Hello there! Welcome to Travelindepth 👋 What can I do for you today?" }, 
      { keywords: ["mumbai", "bombay", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Mumbai button." },
{ keywords: ["goa", "beaches", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Goa button." },
{ keywords: ["udaipur", "lake city", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Udaipur." },
{ keywords: ["manali", "hill station", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Manali." },
{ keywords: ["leh", "ladakh", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Leh." },
{ keywords: ["sikkim", "north east", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Sikkim." },
{ keywords: ["rishikesh", "yoga", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Rishikesh." },
{ keywords: ["varanasi", "ghats", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Varanasi." },
{ keywords: ["andaman", "islands", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Andaman." },
{ keywords: ["rann of kutch", "gujarat", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Rann of Kutch." },
{ keywords: ["darjeeling", "tea gardens", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Darjeeling." },
{ keywords: ["chennai", "madras", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Chennai." },
{ keywords: ["kolkata", "calcutta", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Kolkata." },
{ keywords: ["bengaluru", "bangalore", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Bengaluru." },
{ keywords: ["jaipur", "rajasthan", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Jaipur." },
{ keywords: ["kashmir", "srinagar", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Kashmir." },
{ keywords: ["tamil nadu", "coimbatore", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Tamil Nadu." },
{ keywords: ["pune", "maharashtra", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Pune." },
{ keywords: ["hyderabad", "telangana", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Hyderabad." },
{ keywords: ["delhi", "ncr", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Delhi NCR." },
{ keywords: ["coorg", "coffee plantation", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Coorg." },
{ keywords: ["shimla", "hill station", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Shimla." },
{ keywords: ["nainital", "lake city", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Nainital." },
{ keywords: ["agra", "taj mahal", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Agra." },
{ keywords: ["khajuraho", "temples", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Khajuraho." },
{ keywords: ["bikaner", "rajasthan", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Bikaner." },
{ keywords: ["madhya pradesh", "kanha", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Madhya Pradesh." },
{ keywords: ["udaipur", "lake palace", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Udaipur." },
{ keywords: ["pushkar", "rajasthan", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Pushkar." },
{ keywords: ["kullu", "manali", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Kullu." },
{ keywords: ["amritsar", "golden temple", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Amritsar." },
{ keywords: ["bengal", "kolkata", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Bengal." },
{ keywords: ["kanchipuram", "temples", "some other places"], reply: "You have reached us! Our site will guide you step by step. Just click on the Kanchipuram." },
{ keywords: ["travel tips", "how to travel", "travel advice"], reply: "Here are a few travel tips: Always carry your ID, stay hydrated, and pack light!." },
{ keywords: ["local food", "food", "cuisine", "what to eat"], reply: "Each place has its own signature dishes. For example, in Kerala, try the famous Sadya, while in Delhi, don't miss the Paranthas!" },
{ keywords: ["safe to travel", "is it safe", "safety", "dangerous places"], reply: "It’s always best to check travel advisories and ensure you are aware of any local guidelines or safety tips before traveling." },
{ keywords: ["visa", "documents", "travel documents"], reply: "Visa requirements vary by country. Please check the specific requirements for your destination on official websites or with your local embassy." },
{ keywords: ["nearby places", "nearby attractions", "nearby destinations"], reply: "Depending on your current location, nearby places include spots like Agra, Lucknow, Prayagraj or Ayodhya. Let me know where you are, and I’ll suggest nearby attractions!" },
{ keywords: ["funny", "tell me a joke", "joke","make me laugh"], reply: "Why did the computer go to the family dinner?Because it wanted to byte into the conversation! 😄💻🍽 😄" },
{keywords:  ["key features", "features"], reply:"Eco-friendly travel recommendation, multi language support, Cultural guide chatbot, Maps and Location"},
{ keywords: ["future goals", "plans", ], reply: "AR view of Locations" },
{ keywords: ["eco", "sustainable", "responsible tourism", "eco-tourism", "sustainability"], reply: "Welcome to our eco-friendly travel platform! We are dedicated to promoting sustainable and responsible tourism. Our goal is to offer travelers eco-conscious destinations and experiences that help preserve nature, and reduce the environmental impact of tourism." },
{ keywords: ["solution"], reply: "our website helps travelers make eco-friendly choices and respect local cultures — globally accessible in multiple languages" }


  ];

  for (const response of responses) {
      for (const keyword of response.keywords) {
          if (userInput.includes(keyword)) {
              return response.reply;
          }
      }
  }

  return "I'm still learning! Try asking about travel tips or site navigation.";
}