from flask import Flask, request, jsonify 
from flask_cors import CORS 
import os
import re
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure the Gemini API with your API key
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# Define the prompt template for diet recommendations
prompt_template_resto = (
    "Diet Recommendation System:\n"
    "I want you to recommend 6 restaurants names, 6 breakfast names, 5 dinner names, and 6 workout names, "
    "based on the following criteria:\n"
    "Person age: {age}\n"
    "Person gender: {gender}\n"
    "Person weight: {weight}\n"
    "Person height: {height}\n"
    "Person veg_or_nonveg: {veg_or_nonveg}\n"
    "Person generic disease: {disease}\n"
    "Person region: {region}\n"
    "Person allergics: {allergics}\n"
    "Person foodtype: {foodtype}."
)

# Load the Gemini Pro model
model = genai.GenerativeModel("gemini-pro")
chat = model.start_chat(history=[])

@app.route('/')
def index():
    return jsonify({"message": "Welcome to the Diet Recommendation API!"})

@app.route('/recommend', methods=['POST'])
def recommend():
    if request.method == "POST":
        data = request.json  # Get JSON data from the request

        print(data)

        age = data['age']
        gender = data['gender']
        weight = data['weight']
        height = data['height']
        veg_or_nonveg = data['veg_or_nonveg']
        disease = data['disease']
        region = data['region']
        allergics = data['allergics']
        foodtype = data['foodtype']

        # Prepare the prompt with user inputs
        input_data = {
            'age': age,
            'gender': gender,
            'weight': weight,
            'height': height,
            'veg_or_nonveg': veg_or_nonveg,
            'disease': disease,
            'region': region,
            'allergics': allergics,
            'foodtype': foodtype
        }
        
        # Create the prompt by formatting the template with input data
        prompt = prompt_template_resto.format(**input_data)
        
        # Send the prompt to the Gemini API and get the response
        response = chat.send_message(prompt, stream=True)

        # Capture the full response text
        response_text = ""
        for chunk in response:
            response_text += chunk.text

        print("Response: ", response_text)

        # Extract recommendations using regular expressions
        restaurant_names = re.findall(r'Restaurants:(.*?)Breakfast:', response_text, re.DOTALL)
        breakfast_names = re.findall(r'Breakfast:(.*?)Dinner:', response_text, re.DOTALL)
        dinner_names = re.findall(r'Dinner:(.*?)Workouts:', response_text, re.DOTALL)
        workout_names = re.findall(r'Workouts:(.*?)$', response_text, re.DOTALL)

        # Function to clean up extracted names safely
        def extract_names(name_list):
            if name_list:
                return [name.strip() for name in name_list[0].strip().split('\n') if name.strip()]
            return []

        # Cleaning up the extracted lists
        restaurant_names = extract_names(restaurant_names)
        breakfast_names = extract_names(breakfast_names)
        dinner_names = extract_names(dinner_names)
        workout_names = extract_names(workout_names)

        print(restaurant_names, "\n", breakfast_names)

        # Return JSON response with recommendations
        return jsonify(response_text)
    return jsonify({"error": "Invalid request"}), 400

if __name__ == '__main__':
    app.run(debug=True)
