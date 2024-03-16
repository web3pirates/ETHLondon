export async function handleSignInWithFarcaster(fid: number, username: string) {
  const url = "http://localhost:8000/farcaster-login";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        farcasterId: fid,
        farcasterHandle: username,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error HTTP! status: ${response.status}`);
    }

    const responseJson = await response.json();
    console.log("Response received:", responseJson);
  } catch (error) {
    console.error("Error while sending the request:", error);
  }
}
