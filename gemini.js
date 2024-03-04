const express=require("express")
const app=express()

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyBpU4f0dKDa-atilPSQREOoIcr8Xs1J5cg');


async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = "can you provide todays days"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();

console.log("okkkkkkkkkkkkkkkkkk");

app.get("/",(req,res)=>{
    res.send("GET PAGE")
  })

  app.listen(800,()=>{
    console.log("listening")
})