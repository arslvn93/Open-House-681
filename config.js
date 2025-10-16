const config = {
  "property": {
    "streetAddress": "10 Morrison St",
    "city": "Toronto",
    "cityStateZip": "Toronto, ON M5V2T8",
    "heroSubtitle": "Experience the epitome of modern living in this extraordinary 2-bedroom, 2-bathroom Semi-Detached. Spanning an impressive 1233 sq ft, this meticulously crafted home offers a perfect blend of style, comfort, and functionality. Every corner has been designed with precision, creating a space that not only meets but exceeds the expectations of discerning homeowners. Discover a residence that seamlessly combines sophisticated design with practical living, where every detail tells a story of quality and thoughtful construction.",
    "backgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760642425192-2912-80 John St-01.jpg"
  },
  "realtor": {
    "fullName": "Arslan Ahmed",
    "title": "REALTOR®",
    "phone": "4166554850",
    "email": "arslan@salesgenius.co",
    "bio": "Professional real estate agent dedicated to helping you find your perfect home.",
    "photoUrl": null,
    "social": {
      "facebook": "https://www.facebook.com/realbrokerage",
      "instagram": "https://www.instagram.com/realbrokerage/",
      "website": "https://onereal.com"
    }
  },
  "brokerage": {
    "name": "Real Broker Ontario Ltd.",
    "logoUrl": "https://cdn.chime.me/image/fs/cmsbuild/2023817/13/w1200_original_13dc3970-c036-43e0-8228-e0a6fb4270fa.png",
    "address": "130 KING ST W UNIT 1900B"
  },
  "openHouse": {
    "eventDate": "",
    "bundlefirst()s": [
      {
        "icon": "fas fa-ruler-combined",
        "text": "Architectural Floor Plan"
      },
      {
        "icon": "fas fa-star",
        "text": "Neighbourhood Guide"
      },
      {
        "icon": "fas fa-check-circle",
        "text": "Market Stats"
      },
      {
        "icon": "fas fa-car",
        "text": "School District Information"
      },
      {
        "icon": "fas fa-key",
        "text": "Financing Resources"
      },
      {
        "icon": "fas fa-home",
        "text": "Utility Cost Estimates"
      },
      {
        "icon": "fas fa-map-location-dot",
        "text": "Property Feature List"
      },
      {
        "icon": "fas fa-image",
        "text": "Home Inspection Tips"
      }
    ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 Arslan Ahmed Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": "https://onereal.com"
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        { "value": "committed", "text": "Yes, I'm committed to an agent." },
        { "value": "not_committed", "text": "No, I'm not committed to an agent." },
        { "value": "gathering_info", "text": "Just gathering information at this stage." }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in this Semi-Detached?",
      "options": [
        { "value": "very_interested", "text": "Very interested, actively looking." },
        { "value": "somewhat_interested", "text": "Somewhat interested, keeping options open." },
        { "value": "just_browsing", "text": "Just browsing for now." }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        { "value": "resident_explorer", "text": "I live here and love exploring locally." },
        { "value": "considering_move", "text": "I'm considering moving to this area." },
        { "value": "just_visiting", "text": "Just visiting for the open house." }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        { "value": "design_layout", "text": "The design and layout." },
        { "value": "location_neighborhood", "text": "The location and neighborhood." },
        { "value": "home_price", "text": "The price of the home." }
      ]
    }
  ],
  "deploymentInfo": {
    "repoId": "1077812641",
    "repoName": "Open-House-681",
    "repoUrl": "https://github.com/arslvn93/Open-House-681",
    "tag": "Open House 10 Morrison St",
    "netlifyUrl": "https://services.leadconnectorhq.com/hooks/KxSrsX5ZH2ZttFjyt9hW/webhook-trigger/723v7Nh8JC60wCn3aRmV",
    "siteId": "04bbcb41-a7db-4224-a54c-673e47bf2725"
  }
};