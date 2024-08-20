import { HfInference } from "@huggingface/inference";
import {config} from 'dotenv'
import { translateToSpanish } from "./translateService.js";
import { getReviewSummary } from "../helpers/getInfoHelper.js";

config()

export const getSummaryAI = async(brandName) => {

    const SUMMARY_IA_MODEL = "facebook/bart-large-cnn";

    const input = await getReviewSummary(brandName)
    const inputBest = input['bestText']
    const inputWorst = input['worstText']

    const hf = new HfInference(process.env.TOKEN)

    const summaryBest = await hf.summarization({
        model: SUMMARY_IA_MODEL,
        inputs: inputBest,
        parameters: {
        max_length: 1000
        }
    })

    const summaryWorst = await hf.summarization({
        model: SUMMARY_IA_MODEL,
        inputs: inputWorst,
        parameters: {
        max_length: 1000
        }
    })
    
    return {
        "summaryBest" : await translateToSpanish(summaryBest.summary_text),
        "summaryWorst" : await translateToSpanish(summaryWorst.summary_text),
        "rating" : input.rating
    }
}