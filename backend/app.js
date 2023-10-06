import OpenAI from "openai";
import express from "express";
import cors from "cors";

const port = 4000
const app = express()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());
app.use(cors());

app.post('/', async (req, res, next) => {
    try {
        let gpt_prompt = "In one short paragraph or less, answer the following question "
        if      (req.body.position == "for") {
            gpt_prompt += "as if you support the affirmative side"
        }
        else if (req.body.position == "against") {
            gpt_prompt += "as if you support the negative side"
        }
        else if (req.body.position == "neutral") {
            gpt_prompt += "taking a neutral position"
        }
        else {
            res.status = 400
            res.json({"error": "position should be for, against, or neutral"})
            return
        }
        gpt_prompt += ":\n" + req.body.question

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: gpt_prompt }],
            // model: "gpt-3.5-turbo",
            model: "gpt-4",
        });

        const content = chatCompletion.choices[0].message.content;
        res.json({"response": content});
    }
    catch (error) {
        console.log(error)
        next(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

