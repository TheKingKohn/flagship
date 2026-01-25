import subprocess
import sys
import os
from datetime import datetime

def log(message):
    timestamp = datetime.now().strftime("%H:%M:%S")
    print(f"[{timestamp}] {message}")

def main():
    # Check if node_modules exists
    if not os.path.exists("node_modules"):
        log("Dependencies not found. Installing...")
        install = subprocess.run("npm install", shell=True)
        if install.returncode != 0:
            log("Failed to install dependencies")
            sys.exit(1)
        log("Dependencies installed successfully\n")
    
    log("Starting Flagship development server...")
    
    try:
        process = subprocess.Popen(
            "npm run dev",
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            bufsize=1,
            shell=True
        )
        
        log("Server process started. Watching for logs...\n")
        
        for line in process.stdout:
            print(line, end='')
            
    except KeyboardInterrupt:
        log("\nShutting down server...")
        process.terminate()
        process.wait()
        log("Server stopped.")
    except Exception as e:
        log(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
