from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Cybersecurity Awareness Website Backend Running!"

@app.route("/contact", methods=["POST"])
def contact():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")
    # Simulate storing or processing the contact form
    print(f"Received message from {name} ({email}): {message}")
    return jsonify({"status": "success", "message": "Thank you for your message!"})

if __name__ == "__main__":
    app.run(debug=True)