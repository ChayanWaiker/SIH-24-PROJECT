import GoogleGenerativeAI from "@google/generative-ai";
async function run() {
    const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI("AIzaSyD5mQv16IY4EOoVpVl9pkm_Vyzzn0Y3Z28");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  const prompt = "Write a story about a magic backpack.";
  
  const result = await model.generateContent(prompt);
  const response =await result.response;
  console.log(result.response.text());
  console.log(response);
  }
  run();