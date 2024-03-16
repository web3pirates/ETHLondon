import connectDB from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //await connectDB();

  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
      <meta property="fc:frame" content="vNext">
      <meta property="og:image" content="https://framenchips.s3.eu-west-1.amazonaws.com/Leaderboard+APE.jpg">
      <meta property="fc:frame:image" content="https://framenchips.s3.eu-west-1.amazonaws.com/Leaderboard+APE.jpg">
      <meta property="fc:frame:image:aspect_ratio" content="1.91:1">
      <meta property="fc:frame:state" content="%7B%22counter%22%3A1%7D">
      <meta property="fc:frame:button:1" content="Complete task link">
      <meta property="fc:frame:button:1:action" content="link">
      <meta property="fc:frame:button:1:target" content="https://uniswap.org">
      <meta property="fc:frame:button:2" content="Verify">
      <meta property="fc:frame:button:2:action" content="post_redirect">
      <meta property="fc:frame:button:3" content="Link to project website">
      </head>
    </html>
`);
}
