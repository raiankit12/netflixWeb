const { GoogleGenerativeAI } = require("@google/generative-ai");
const { API_OPENAI_KEY } = require("./constants");

const genAI = new GoogleGenerativeAI(API_OPENAI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });