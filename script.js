const chatBox = document.getElementById('chat-box');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const historyBox = document.getElementById('history-box');

// Embed the first 50 intents directly in the script.js file
const intents = [
    {
        "tag": "greeting",
        "patterns": ["Hi", "Hello", "Hey", "How are you", "Is anyone there?","MedDoc"],
        "responses": [
            {
                "text": "Hello, thanks for visiting MedDoc",
                
            },
            {
                "text": "Good to see you again",
                
            },
            {
                "text": "Hello, How can I Assist you Today?",
                
            },
            {
                "text": "Hi, I'm MedDoc,Feel Free To Ask me about your health Condition.",
                
            }
        ]
    },
    {
        "tag": "goodbye",
        "patterns": ["Bye", "Goodbye", "See you later"],
        "responses": [
            {
                "text": "See you later, thanks for visiting MedDoc",
                "image": "Responsive_Images/visit_us.jpg"
            },
            {
                "text": "Have a nice day",
                "image": "Responsive_Images/have_a_nice_day.jpg"
            }
        ]
    },
    {
        "tag": "thanks",
        "patterns": ["Thanks", "Thank you","Thankful", "That's helpful"],
        "responses": [
            {
                "text": "Happy to help!",
                
            },
            {
                "text": "Visit us anytime!",
                "image": "Responsive_Images/visit_us.jpg"
            }
        ]
    },
    {
        "tag": "hypertensive disease",
        "patterns": [
            "pain chest","hypertensive disease", "shortness of breath", "dizziness", 
            "asthenia", "fall", "syncope", "vertigo", 
            "sweat", "sweating increased", "palpitation", 
            "nausea", "angina pectoris", "pressure chest"
        ],
        "responses": [
            {
                "text": "You can consult a cardiologist as soon as possible.",
                "image": "Responsive_Images/Medication/cardio.jpg"
            },
            {
                "text": "It looks like you may have hypertensive disease,Valsartan is commonly used for To lower high blood pressure (hypertension),To lower the risk of hospitalization for heart failure in people with heart failure,To lower the risk of death in people whose heart is not pumping blood as well as it should after a heart attack ",
                "image": "Responsive_Images/Medication/diovan.jpg"
            }
        ]
    },
    {
        "tag": "diabetes",
        "patterns": [
            "polyuria","diabetes", "polydipsia", "shortness of breath", 
            "chest pain", "asthenia", "nausea", "orthopnea", 
            "rale", "sweat", "sweating increased", 
            "unresponsiveness", "mental status changes", "vertigo", 
            "vomiting", "labored breathing"
        ],
        "responses": [
            {
                "text": "You can consult an endocrinologist as soon as possible.",
                "image": "Responsive_Images/Medication/endocrinologist.jpeg"
            },
            {
                "text": "It looks like you may have diabetes,Metformin is used to treat high blood sugar levels that are caused by a type of diabetes mellitus or sugar diabetes called type 2 diabetes. ",
                "image": "Responsive_Images/Medication/metaformin.jpg"
            }
        ]
    },
    {
        "tag": "depression mental",
        "patterns": [
            "feeling suicidal","depression mental", "suicidal", "hallucinations auditory", 
            "feeling hopeless", "weepiness", "sleeplessness", 
            "motor retardation", "irritable mood", "blackout", 
            "mood depressed", "hallucinations visual", "worry", 
            "agitation"
        ],
        "responses": [
            {
                "text": "You can consult a psychiatrist as soon as possible.",
                "image": "Responsive_Images/Medication/Psychiatry.jpg"
            },
            {
                "text": "It looks like you may have mental depression,Dulocare 20 Tablet is used in the treatment of depression, anxiety disorder, diabetic nerve pain, fibromyalgia (a condition in which there are generalized pain and tenderness in the body), neuropathic pain, and stress urinary incontinence.",
                "image": "Responsive_Images/Medication/duloser-20.jpg"
            }
        ]
    },
    {
        "tag": "coronary arteriosclerosis",
        "patterns": [
            "chest pain", "angina pectoris", "shortness of breath", 
            "hypokinesia", "sweat", "sweating increased", 
            "pressure chest","coronary arteriosclerosis", "dyspnea on exertion", "orthopnea", 
            "chest tightness"
        ],
        "responses": [
            {
                "text": "You can consult a cardiothoracic specialist as soon as possible.",
                "image": "Responsive_Images/Medication/cardiothoracic.jpeg"
            },
            {
                "text": "It looks like you may have coronary arteriosclerosis.Adilip 45 Tablet DR is a medicine used to treat high cholesterol. This medicine helps by lowering triglycerides and bad cholesterol (LDL), while at the same time raising the levels of good cholesterol (HDL). Lowering cholesterol levels reduces the risk of heart attack and stroke.",
                "image": "Responsive_Images/Medication/adilip_45.jpeg"
            }
        ]
    },
    {
        "tag": "pneumonia",
        "patterns": [
            "cough", "fever", "decreased translucency", "shortness of breath", 
            "rale", "productive cough", "pleuritic pain", 
            "yellow sputum", "breath sounds decreased", "chill", 
            "rhonchus", "green sputum", "non-productive cough", 
            "wheezing", "haemoptysis", "distress respiratory", 
            "tachypnea","pneumonia", "malaise", "night sweat"
        ],
        "responses": [
            {
                "text": "You can consult a pulmonologist as soon as possible.",
                "image": "Responsive_Images/Medication/pulmonologist.jpeg"
            },
            {
                "text": "It looks like you may have pneumonia,Zanocin 200mg tablet is an antibiotic medicine. It is used to treat bacterial infections like pneumonia, urinary tract infection, throat, airways, nose, ears, and sexually transmitted diseases. It should not be used for treating any other condition unless specified by the doctor.",
                "image": "Responsive_Images/Medication/zanocin_200.jpeg"
            }
        ]
    },
    {
        "tag": "asthma",
        "patterns": [
            "shortness of breath", "wheezing", "cough", "tightness in chest", "difficulty breathing", 
            "shortness of breath after exercise","asthma", "noisy breathing", "difficulty sleeping", "whistling sound while breathing"
        ],
        "responses": [
            {
                "text": "You should consult a pulmonologist immediately if your symptoms persist.",
                "image": "Responsive_Images/Medication/pulmonologist.jpeg"
            },
            {
                "text": "It looks like you may have asthma. Duolin Inhaler is one common prescription. However, it's essential to get your condition confirmed by a healthcare professional before starting any treatment.",
                "image": "Responsive_Images/Medication/duolin_inhaler.jpeg"
            }
        ]
    },
    {
        "tag": "infection",
        "patterns": [
            "erythema", "decreased translucency", "hepatosplenomegaly", "chill", 
            "abscess bacterial", "swelling", "Itch", "apyrexial", "itching", 
            "bellybutton incision splitting open", "feeling something moving inside abdomen", 
            "abdominal pain","infection", "discomfort while eating"
        ],
        "responses": [
            {
                "text": "It looks like you may have an infection, This medication is used to treat a variety of skin conditions (such as eczema, dermatitis, allergies, rash). Betamethasone reduces the swelling, itching, and redness that can occur in these types of conditions. This medication is a medium-strength corticosteroid.",
                "image": "Responsive_Images/Medication/betavel-skin-cream.jpeg"
            },
            {
                "text": "It looks like you may have an infection. Please consult a doctor for further diagnosis. For infections, your doctor may prescribe antibiotics or suggest other treatments.",
                "image": "Responsive_Images/Medication/antibiotic.jpeg"
            }
        ]
    },
    {
        "tag": "anemia",
        "patterns": [
            "chill", "guaiac positive", "monoclonal", "ecchymosis", "tumor cell invasion", 
            "haemorrhage", "pallor", "asthenia", "fatigue", "heme positive", "pain back", 
            "orthostasis","anemia", "dizziness", "shortness of breath", "rhonchus", "arthralgia", "swelling", "transaminitis"
        ],
        "responses": [
            {
                "text": "It looks like you may have anemia. Please consult a doctor to get tested for iron levels and potential treatments like supplements or dietary adjustments.",
                "image": "Responsive_Images/Medication/iron_supplement.jpeg"
            },
            {
                "text": "We will be with you as soon as we can to take your Blood Sample.",
                "image": "Responsive_Images/Medication/doctor_consultation.jpeg"
            }
        ]
    },
    {
        "tag": "insufficiency renal",
        "patterns": [
            "hyperkalemia", "insufficiency renal","orthopnea", "rale", "urgency of micturition", 
            "ascites", "guaiac positive", "asthenia", "apyrexial", "mental status changes", "dyspnea", 
            "difficulty", "hypotension", "breath sounds decreased", "swelling", "hypokinesia"
        ],
        "responses": [
            {
                "text": "It looks like you may have renal insufficiency. Please consult a nephrologist for proper evaluation and treatment.",
                "image": "Responsive_Images/Medication/nephrologist.jpeg"
            },
            {
                "text": "We will be with you as soon as we can to treat to reduce the creatine level.",
                "image": "Responsive_Images/Medication/doctor_consultation1.jpeg"
            }
        ]
    },
    {
        "tag": "confusion",
        "patterns": [
            "seizure", "confusion","enuresis", "lethargy", "speech slurred", "fall", "consciousness clear", 
            "mental status changes", "asterixis", "unconscious state", "agitation", "muscle twitch", 
            "asthenia", "sleepy", "dizziness", "headache", "dysarthria", "lightheadedness", "tremor", 
            "hyponatremia", "unresponsiveness"
        ],
        "responses": [
            {
                "text": "It seems you may be experiencing confusion. It's recommended to visit a healthcare provider for a thorough neurological evaluation.",
                "image": "Responsive_Images/Medication/neurology.jpeg"
            },
            { 
                "text": "It look like you have Confusion, Corbate Tablet is used for the treatment of bacterial infections of the ears, throat, tonsils, airways, lungs and nasal passage,",
                "image": "Responsive_Images/Medication/sulpitac.jpeg"
            }
        ]
    },
      
    // Add more intents up to 50...
    // Just keep following the format shown above for each intent
];


// Keywords for chest pain and other conditions
const keywordToTagMap = {
    "chest pain": "coronary arteriosclerosis",
    "discomfort in chest": "coronary arteriosclerosis",
    "shortness of breath": "hypertensive disease",
    "fever": "pneumonia",
    "cough": "pneumonia",
    "suicidal": "depression mental"
    // Add more keywords and their corresponding tags as needed
};

// Send message button click
sendBtn.addEventListener('click', sendMessage);

// Handle Enter key press
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default Enter key behavior
        sendMessage();
    }
});

// Modify existing sendMessage function to call addMessageToChat with the correct sender
function sendMessage() {
    let userText = userInput.value.trim();

    if (userText) {
        addMessageToChat('You: ' + userText, 'user'); // User message is added on the right
        userInput.value = ''; // Clear input field

        // Save user message to backend
        saveMessage(userText, 'user');

        botResponse(userText); // Trigger bot response
    }
}


// Function to add a message to the chat box
function addMessageToChat(message, sender) {
    let messageDiv = document.createElement('div');

    // Check if the sender is the user or the bot, and assign the correct class
    if (sender === 'user') {
        messageDiv.className = 'user-message'; // Right-aligned for user
    } else {
        messageDiv.className = 'bot-message'; // Left-aligned for bot
    }

    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom to show the latest message
}



// Function to save a message to the backend
function saveMessage(message, sender) {
    fetch('http://localhost:3000/save-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: message,
            sender: sender,
        }),
    })
    .then(response => response.json())
    .then(data => console.log('Message saved:', data))
    .catch((error) => console.error('Error saving message:', error));
}







// Function to add an image to the chat box
function addImageToChat(imageUrl) {
    let imgDiv = document.createElement('div');
    imgDiv.className = 'chat-image'; // Class for image styling
    let imgTag = document.createElement('img');
    imgTag.src = imageUrl;
    imgTag.alt = "Response Image"; // Alt text for accessibility
    imgTag.style.maxWidth = "100%"; // Make sure image fits the chat
    imgDiv.appendChild(imgTag);
    chatBox.appendChild(imgDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Function to handle bot responses
function botResponse(userText) {
    let response = matchIntent(userText);

    if (!response) {
        response = { "text": "Sorry, I didn't understand that. Can you please ask about your medication schedule, dosage, or side effects?" };  // Default response
    }

    // Delay bot response to simulate a real conversation
    setTimeout(() => {
        addMessageToChat(response.text, 'bot'); // Bot message is added on the left
        saveMessage(response.text, 'bot'); // Save bot response to backend
        if (response.image) {
            addImageToChat(response.image); // Display the bot's image (if any)
        }
    }, 1000);  // 1 second delay
}


// Function to match the user's input to an intent
// Function to match user's input to intent based on keywords or patterns
function matchIntent(userText) {
    userText = userText.toLowerCase().trim();

    // Check for keyword matches first
    for (let keyword in keywordToTagMap) {
        if (userText.includes(keyword)) {
            const tag = keywordToTagMap[keyword];
            const intent = intents.find(intent => intent.tag === tag);
            if (intent) {
                const responses = intent.responses;
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }

    // If no keyword match, fallback to pattern matching within intents
    for (let intent of intents) {
        for (let pattern of intent.patterns) {
            const regex = new RegExp(`\\b${pattern.toLowerCase()}\\b`, 'i');
            if (regex.test(userText)) {
                const responses = intent.responses;
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }

    // Return null if no match
    return null;
}


// Fetch and display chat history
function fetchChatHistory() {
    fetch('http://localhost:3000/chat-history')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const sender = item.sender === 'user' ? 'You' : 'Bot';
                const message = `${sender}: ${item.message}`;
                const messageDiv = document.createElement('div');
                messageDiv.textContent = message;
                historyBox.appendChild(messageDiv);
            });
        })
        .catch(error => console.error('Error fetching chat history:', error));
}

// Fetch chat history on page load
window.onload = fetchChatHistory;
