const questions = {
    NewOrleans: {
        index: 1,
        question: "Jazz notes in the air, with Mardi Gras flair. In which city does Bourbon Street declare?",
        answer: "New Orleans",
        type:"yes/no",
        hint: "A city famous for its vibrant music scene and lively festivals."
    },
    SanFrancisco: {
        index: 2,
        question: "Golden Gate's grand span, and tech dreams began. Which city by the bay is a Californian clan?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city known for its iconic bridge and tech innovation."
    },
    Nashville: {
        index: 3,
        question: "Country tunes and honky-tonk nights, where the Grand Ole Opry delights. In which city's musical heights?",
        answer: "Nashville",
        type:"text",
        hint: "A city often called the 'Music City' with a rich country music heritage."
    },
    LasVegas: {
        index: 4,
        question: "Neon lights on the famous Strip, where Lady Luck and entertainers flip. In which desert city does excitement grip?",
        answer: "Las Vegas",
        type:"text",
        hint: "A city known for its vibrant nightlife, entertainment, and casinos."
    },
    Seattle: {
        index: 5,
        question: "Where coffee brews and the Space Needle views. In which city does the Puget Sound cruise?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city in the Pacific Northwest known for its coffee culture and iconic landmarks."
    },
    Chicago: {
        index: 6,
        question: "Architectural grace and deep-dish embrace, where the Windy City's skyline you face.",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city known for its impressive architecture, delicious pizza, and windy weather."
    },
    Miami: {
        index: 7,
        question: "Sunny beaches and nightlife heat, where Art Deco and Latin beats. In which city do ocean waves greet?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A vibrant city known for its beaches, art, and diverse cultural scene."
    },
    Austin: {
        index: 8,
        question: "Live music capital and food truck feast, where 'Keep Austin Weird' is a quirky beast.",
        answer: "Austin",
        type:"yes/no",
        hint: "The capital of Texas known for its live music scene and unique culture."
    },
    Boston: {
        index: 9,
        question: "Revolution's start and harbor's part, where history speaks in every cobblestone heart.",
        answer: "Boston",
        type:"yes/no",
        hint: "A city with a rich history and significant role in American independence."
    },
    Denver: {
        index: 10,
        question: "Rocky Mountain air and outdoor flair, in which city does adventure declare?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city known for its proximity to the Rocky Mountains and outdoor activities."
    },
    LosAngeles: {
        index: 11,
        question: "City of Angels where stars align, Hollywood dreams and sun often shine. In which city do celebrities and palm trees entwine?",
        answer: "San Francisco",
        type:"yes/no",
        hint: "A city synonymous with the entertainment industry and iconic Hollywood sign."
    },
    Atlanta: {
        index: 12,
        question: "Peach State charm and southern grace, where historic tales and culture embrace. In which city does the South's spirit trace?",
        answer: "Atlanta",
        type:"text",
        hint: "A city known for its southern hospitality, history, and cultural diversity."
    },
    Philadelphia: {
        index: 13,
        question: "Liberty's bell and cheesesteak delight, where colonial echoes and history unite. In which city does Independence Hall invite?",
        answer: "Philadelphia",
        type:"yes/no",
        hint: "A city with a rich history, the Liberty Bell, and famous Philly cheesesteaks."
    },
    Houston: {
        index: 14,
        question: "Space City's reach and Texan pride, where NASA's mission and energy coincide. In which city does the Lone Star Guide?",
        answer: "Houston",
        type:"text",
        hint: "A city known for its space exploration contributions and vibrant energy industry."
    },
    Phoenix: {
        index: 15,
        question: "Desert sun and cacti tall, where southwestern vibes enthrall. In which city does the Valley sprawl?",
        answer: "Phoenix",
        type:"yes/no",
        hint: "A city in the desert known for its warm climate and unique southwestern culture."
    },
    Orlando: {
        index: 16,
        question: "Theme park magic and Florida's glow, where dreams come true and attractions grow. In which city does imagination flow?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city famous for its theme parks and magical entertainment offerings."
    },
    SanDiego: {
        index: 17,
        question: "Pacific waves and zoo's acclaim, where naval presence and mild climate frame. In which city does the coastline aim?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city known for its beautiful beaches, zoo, and naval influence."
    },
    Portland: {
        index: 18,
        question: "Hipster haven and green terrain, where bridges cross and it often rains. In which city does the Pacific Northwest gain?",
        answer: "Portland",
        type:"text",
        hint: "A city known for its hipster culture, green spaces, and unique bridges."
    },
    Detroit: {
        index: 19,
        question: "Motor City roar and Motown sound, where automotive history is renowned. In which city's streets does innovation abound?",
        answer: "Detroit",
        type:"text",
        hint: "A city with a rich automotive history and contributions to the music industry."
    },
    Charlotte: {
        index: 20,
        question: "Banking hub and NASCAR speed, where southern charm and tech needs meet. In which city do racing and finance greet?",
        answer: "Charlotte",
        type:"yes/no",
        hint: "A city known for its banking industry, NASCAR events, and southern hospitality."
    }
};

const medium_questions = {
    NewOrleans: {
        index: 1,
        question: "Jazz notes in the air, with Mardi Gras flair. In which city does Bourbon Street declare?",
        answer: "New Orleans",
        type:"yes/no",
        hint: "A city famous for its vibrant music scene and lively festivals."
    },
    SanFrancisco: {
        index: 2,
        question: "Golden Gate's grand span, and tech dreams began. Which city by the bay is a Californian clan?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city known for its iconic bridge and tech innovation."
    },
    Nashville: {
        index: 3,
        question: "Country tunes and honky-tonk nights, where the Grand Ole Opry delights. In which city's musical heights?",
        answer: "Nashville",
        type:"text",
        hint: "A city often called the 'Music City' with a rich country music heritage."
    },
    LasVegas: {
        index: 4,
        question: "Neon lights on the famous Strip, where Lady Luck and entertainers flip. In which desert city does excitement grip?",
        answer: "Las Vegas",
        type:"text",
        hint: "A city known for its vibrant nightlife, entertainment, and casinos."
    },
    Seattle: {
        index: 5,
        question: "Where coffee brews and the Space Needle views. In which city does the Puget Sound cruise?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city in the Pacific Northwest known for its coffee culture and iconic landmarks."
    },
    Chicago: {
        index: 6,
        question: "Architectural grace and deep-dish embrace, where the Windy City's skyline you face.",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city known for its impressive architecture, delicious pizza, and windy weather."
    },
    Miami: {
        index: 7,
        question: "Sunny beaches and nightlife heat, where Art Deco and Latin beats. In which city do ocean waves greet?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A vibrant city known for its beaches, art, and diverse cultural scene."
    },
    Austin: {
        index: 8,
        question: "Live music capital and food truck feast, where 'Keep Austin Weird' is a quirky beast.",
        answer: "Austin",
        type:"yes/no",
        hint: "The capital of Texas known for its live music scene and unique culture."
    },
    Boston: {
        index: 9,
        question: "Revolution's start and harbor's part, where history speaks in every cobblestone heart.",
        answer: "Boston",
        type:"yes/no",
        hint: "A city with a rich history and significant role in American independence."
    },
    Denver: {
        index: 10,
        question: "Rocky Mountain air and outdoor flair, in which city does adventure declare?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city known for its proximity to the Rocky Mountains and outdoor activities."
    },
    LosAngeles: {
        index: 11,
        question: "City of Angels where stars align, Hollywood dreams and sun often shine. In which city do celebrities and palm trees entwine?",
        answer: "San Francisco",
        type:"yes/no",
        hint: "A city synonymous with the entertainment industry and iconic Hollywood sign."
    },
    Atlanta: {
        index: 12,
        question: "Peach State charm and southern grace, where historic tales and culture embrace. In which city does the South's spirit trace?",
        answer: "Atlanta",
        type:"text",
        hint: "A city known for its southern hospitality, history, and cultural diversity."
    },
    Philadelphia: {
        index: 13,
        question: "Liberty's bell and cheesesteak delight, where colonial echoes and history unite. In which city does Independence Hall invite?",
        answer: "Philadelphia",
        type:"yes/no",
        hint: "A city with a rich history, the Liberty Bell, and famous Philly cheesesteaks."
    },
    Houston: {
        index: 14,
        question: "Space City's reach and Texan pride, where NASA's mission and energy coincide. In which city does the Lone Star Guide?",
        answer: "Houston",
        type:"text",
        hint: "A city known for its space exploration contributions and vibrant energy industry."
    },
    Phoenix: {
        index: 15,
        question: "Desert sun and cacti tall, where southwestern vibes enthrall. In which city does the Valley sprawl?",
        answer: "Phoenix",
        type:"yes/no",
        hint: "A city in the desert known for its warm climate and unique southwestern culture."
    },
    Orlando: {
        index: 16,
        question: "Theme park magic and Florida's glow, where dreams come true and attractions grow. In which city does imagination flow?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city famous for its theme parks and magical entertainment offerings."
    },
    SanDiego: {
        index: 17,
        question: "Pacific waves and zoo's acclaim, where naval presence and mild climate frame. In which city does the coastline aim?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city known for its beautiful beaches, zoo, and naval influence."
    },
    Portland: {
        index: 18,
        question: "Hipster haven and green terrain, where bridges cross and it often rains. In which city does the Pacific Northwest gain?",
        answer: "Portland",
        type:"text",
        hint: "A city known for its hipster culture, green spaces, and unique bridges."
    },
    Detroit: {
        index: 19,
        question: "Motor City roar and Motown sound, where automotive history is renowned. In which city's streets does innovation abound?",
        answer: "Detroit",
        type:"text",
        hint: "A city with a rich automotive history and contributions to the music industry."
    },
    Charlotte: {
        index: 20,
        question: "Banking hub and NASCAR speed, where southern charm and tech needs meet. In which city do racing and finance greet?",
        answer: "Charlotte",
        type:"yes/no",
        hint: "A city known for its banking industry, NASCAR events, and southern hospitality."
    }
};
const hard_questions = {
    NewOrleans: {
        index: 1,
        question: "Jazz notes in the air, with Mardi Gras flair. In which city does Bourbon Street declare?",
        answer: "New Orleans",
        type:"yes/no",
        hint: "A city famous for its vibrant music scene and lively festivals."
    },
    SanFrancisco: {
        index: 2,
        question: "Golden Gate's grand span, and tech dreams began. Which city by the bay is a Californian clan?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city known for its iconic bridge and tech innovation."
    },
    Nashville: {
        index: 3,
        question: "Country tunes and honky-tonk nights, where the Grand Ole Opry delights. In which city's musical heights?",
        answer: "Nashville",
        type:"text",
        hint: "A city often called the 'Music City' with a rich country music heritage."
    },
    LasVegas: {
        index: 4,
        question: "Neon lights on the famous Strip, where Lady Luck and entertainers flip. In which desert city does excitement grip?",
        answer: "Las Vegas",
        type:"text",
        hint: "A city known for its vibrant nightlife, entertainment, and casinos."
    },
    Seattle: {
        index: 5,
        question: "Where coffee brews and the Space Needle views. In which city does the Puget Sound cruise?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city in the Pacific Northwest known for its coffee culture and iconic landmarks."
    },
    Chicago: {
        index: 6,
        question: "Architectural grace and deep-dish embrace, where the Windy City's skyline you face.",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city known for its impressive architecture, delicious pizza, and windy weather."
    },
    Miami: {
        index: 7,
        question: "Sunny beaches and nightlife heat, where Art Deco and Latin beats. In which city do ocean waves greet?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A vibrant city known for its beaches, art, and diverse cultural scene."
    },
    Austin: {
        index: 8,
        question: "Live music capital and food truck feast, where 'Keep Austin Weird' is a quirky beast.",
        answer: "Austin",
        type:"yes/no",
        hint: "The capital of Texas known for its live music scene and unique culture."
    },
    Boston: {
        index: 9,
        question: "Revolution's start and harbor's part, where history speaks in every cobblestone heart.",
        answer: "Boston",
        type:"yes/no",
        hint: "A city with a rich history and significant role in American independence."
    },
    Denver: {
        index: 10,
        question: "Rocky Mountain air and outdoor flair, in which city does adventure declare?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city known for its proximity to the Rocky Mountains and outdoor activities."
    },
    LosAngeles: {
        index: 11,
        question: "City of Angels where stars align, Hollywood dreams and sun often shine. In which city do celebrities and palm trees entwine?",
        answer: "San Francisco",
        type:"yes/no",
        hint: "A city synonymous with the entertainment industry and iconic Hollywood sign."
    },
    Atlanta: {
        index: 12,
        question: "Peach State charm and southern grace, where historic tales and culture embrace. In which city does the South's spirit trace?",
        answer: "Atlanta",
        type:"text",
        hint: "A city known for its southern hospitality, history, and cultural diversity."
    },
    Philadelphia: {
        index: 13,
        question: "Liberty's bell and cheesesteak delight, where colonial echoes and history unite. In which city does Independence Hall invite?",
        answer: "Philadelphia",
        type:"yes/no",
        hint: "A city with a rich history, the Liberty Bell, and famous Philly cheesesteaks."
    },
    Houston: {
        index: 14,
        question: "Space City's reach and Texan pride, where NASA's mission and energy coincide. In which city does the Lone Star Guide?",
        answer: "Houston",
        type:"text",
        hint: "A city known for its space exploration contributions and vibrant energy industry."
    },
    Phoenix: {
        index: 15,
        question: "Desert sun and cacti tall, where southwestern vibes enthrall. In which city does the Valley sprawl?",
        answer: "Phoenix",
        type:"yes/no",
        hint: "A city in the desert known for its warm climate and unique southwestern culture."
    },
    Orlando: {
        index: 16,
        question: "Theme park magic and Florida's glow, where dreams come true and attractions grow. In which city does imagination flow?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city famous for its theme parks and magical entertainment offerings."
    },
    SanDiego: {
        index: 17,
        question: "Pacific waves and zoo's acclaim, where naval presence and mild climate frame. In which city does the coastline aim?",
        answer: ["San Francisco","Nashville","Seattle","Chicago","Miami"],
        type:"multiple",
        hint: "A city known for its beautiful beaches, zoo, and naval influence."
    },
    Portland: {
        index: 18,
        question: "Hipster haven and green terrain, where bridges cross and it often rains. In which city does the Pacific Northwest gain?",
        answer: "Portland",
        type:"text",
        hint: "A city known for its hipster culture, green spaces, and unique bridges."
    },
    Detroit: {
        index: 19,
        question: "Motor City roar and Motown sound, where automotive history is renowned. In which city's streets does innovation abound?",
        answer: "Detroit",
        type:"text",
        hint: "A city with a rich automotive history and contributions to the music industry."
    },
    Charlotte: {
        index: 20,
        question: "Banking hub and NASCAR speed, where southern charm and tech needs meet. In which city do racing and finance greet?",
        answer: "Charlotte",
        type:"yes/no",
        hint: "A city known for its banking industry, NASCAR events, and southern hospitality."
    }
};
