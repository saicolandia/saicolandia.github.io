import os
from dotenv import load_dotenv
from elevenlabs.client import ElevenLabs

# Load environment variables from .env file
load_dotenv()

api_key = os.getenv("ELEVENLABS_API_KEY")
if not api_key:
    print("Error: ELEVENLABS_API_KEY not found in environment.")
else:
    print(f"API Key loaded (first 4 chars): {api_key[:4]}****")

# Initialize client
client = ElevenLabs(
    api_key=api_key,
)

def check_account():
    try:
        user = client.user.get()
        print(f"Cuenta: {user.subscription.plan}")
        print(f"Caracteres usados: {user.subscription.character_count}")
        print(f"Límite de caracteres: {user.subscription.character_limit}")
    except Exception as e:
        print(f"Error al obtener info de cuenta: {e}")

def main():
    check_account()
    print("ElevenLabs project initialized.")
    
    text = "funciona esto?"
    voice_id = "21m00Tcm4TlvDq8ikWAM"
    
    print(f"Generating audio for: '{text}'")
    
    # Generate audio
    audio = client.text_to_speech.convert(
        text=text,
        voice_id=voice_id,
        model_id="eleven_multilingual_v2"
    )
    
    # Save to file
    with open("output.mp3", "wb") as f:
        for chunk in audio:
            if chunk:
                f.write(chunk)
                
    print("Audio saved to output.mp3")

if __name__ == "__main__":
    main()
