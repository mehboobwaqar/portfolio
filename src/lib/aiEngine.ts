// ============================================================
// AI ENGINE — 100% Client-Side, High-Precision Portfolio Intelligence
// ============================================================

import { knowledgeBase, refusalResponses, suggestedChips, KnowledgeEntry } from "@/data/aiKnowledge";

export { suggestedChips };

/**
 * Common off-topic patterns: celebrities, sports figures, world trivia,
 * generic entertainment, homework, non-portfolio coding, etc.
 * If a query triggers any of these and does not explicitly reference Mehboob
 * or his portfolio artifacts, it will be strictly refused.
 */
const OFF_TOPIC_PATTERNS: RegExp[] = [
  // Celebrities & public figures
  /\b(ronaldo|cristiano|messi|lionel|neymar|mbappe|virat|kohli|babar azam|dhoni|sachin|rohit sharma)\b/i,
  /\b(elon musk|tesla|spacex|trump|donald trump|biden|joe biden|obama|modi|narendra modi|imran khan|nawaz sharif|zardari|bilawal)\b/i,
  /\b(bill gates|steve jobs|mark zuckerberg|taylor swift|shahrukh khan|salman khan|amir khan|tom cruise)\b/i,
  // General world trivia & geography
  /\b(capital of|population of|president of|prime minister of|currency of|flag of)\b/i,
  /\b(mount everest|solar system|planets?|dinosaur|asteroid|speed of light)\b/i,
  /\b(france|paris|germany|berlin|russia|moscow|china|beijing|tokyo|japan|london|england)\b/i,
  // Entertainment, recipes, casual chit-chat
  /\b(tell (me )?a joke|say a joke|funny joke|riddle|knock knock)\b/i,
  /\b(write (me )?a (poem|poetry|song|lyrics|story))\b/i,
  /\b(recipe for|how to cook|make pizza|make biryani|make burger)\b/i,
  /\b(weather in|temperature today|rain today|weather forecast)\b/i,
  /\b(horoscope|zodiac|astrology|match score|cricket score|football score)\b/i,
  // General homework & unrelated programming tutorials
  /\b(solve this|calculate|derivative of|integral of|\b2\s*\+\s*2\b)\b/i,
  /\b(teach me python|write python code|python script|reverse a linked list|bubble sort|binary search code)\b/i,
  /\b(django tutorial|react tutorial|angular tutorial|spring boot tutorial)\b/i,
];

/**
 * Domain anchors: The query must connect to Mehboob, his projects,
 * tech stack, or professional background to be eligible for portfolio answers.
 */
const DOMAIN_ANCHORS: RegExp[] = [
  // Personal identity & pronouns in portfolio context
  /\b(mehboob|waqar)\b/i,
  // Direct project names
  /\b(court pro|courtpro|trusted air|calorie tracker|plant identifier|harvest hub)\b/i,
  // Companies & Institutions
  /\b(orax|headstarter|riphah)\b/i,
  // Tech stack & mobile engineering
  /\b(flutter|dart|getx|provider|hive|dio|freezed|gorouter|mvvm|repository pattern|getit)\b/i,
  /\b(firebase|firestore|cloud functions|fcm|remote config)\b/i,
  /\b(tuya|iot|internet of things|ml kit|openai|methodchannel|eventchannel)\b/i,
  // Career / hiring inquiries
  /\b(portfolio|resume|cv|curriculum vitae|hire|hiring|rates|pricing|salary|hourly|freelance|contract)\b/i,
  /\b(experience|projects?|apps?|applications?|skills?|technologies|tech stack|stack)\b/i,
  /\b(education|university|degree|bscs|awards?|hackathon|winner|competition|certifications?|certificates?)\b/i,
  /\b(contact|email|phone|whatsapp|call|linkedin|github|reach|message)\b/i,
  /\b(lahore|pakistan|remote|onsite|availability|available)\b/i,
  // Pronouns paired with career intent
  /\b(you|your|yourself|he|him|his)\b.*\b(work|built|build|make|made|created|background|live|based|located|specialize|expertise|achieve|win|learn|role|job)\b/i,
  /\b(work|built|build|make|made|created|background|live|based|located|specialize|expertise|achieve|win|learn|role|job)\b.*\b(you|your|yourself|he|him|his)\b/i,
  // Roman Urdu portfolio terms
  /\b(kon hai|kaun hai|kya karta|kya banaya|kahan rehta|kahan kaam|rabta|tajurba|taleem|parhai|sanad|inam|jeet|naukri|rakhein|sheher|pesha)\b/i,
];

/** Escape special regex characters */
function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Pick a random refusal response */
function getRandomRefusal(): string {
  return refusalResponses[Math.floor(Math.random() * refusalResponses.length)];
}

/**
 * Finds the best matching knowledge entry for a user query.
 *
 * Multi-layer pipeline:
 *  1. Normalization & Greeting / Goodbye detection
 *  2. Out-of-scope negative filter (celebrities, trivia, jokes, homework)
 *  3. Domain anchor check (must belong to Mehboob's portfolio context)
 *  4. Weighted multi-phrase & keyword scoring
 *  5. Thresholding & fallback refusal
 */
export function getAIResponse(query: string): string {
  const cleanQuery = query.trim();
  if (!cleanQuery) return getRandomRefusal();

  const normalizedQuery = cleanQuery.toLowerCase();

  // ── 1. Greetings ───────────────────────────────────────────────
  const greetingTokens = [
    "hi", "hello", "hey", "salam", "assalam", "assalam o alaikum", "assalam-o-alaikum",
    "aoa", "sup", "howdy", "good morning", "good afternoon", "good evening",
    "kia haal hai", "kya haal hai", "kese ho", "kaisay ho"
  ];
  const isGreeting = greetingTokens.some((g) => {
    if (normalizedQuery === g) return true;
    if (normalizedQuery.startsWith(g + " ") || normalizedQuery.startsWith(g + "!")) return true;
    return false;
  });

  if (isGreeting && normalizedQuery.split(/\s+/).length <= 4) {
    return "Hello! 👋 I'm **Mehboob Waqar's Portfolio AI Assistant**. How can I help you explore his work and portfolio today?";
  }

  // ── 2. Gratitude / Farewell ────────────────────────────────────
  const farewellTokens = [
    "thanks", "thank you", "thankyou", "shukriya", "jazakallah",
    "bye", "goodbye", "khuda hafiz", "allah hafiz", "see you", "cya"
  ];
  const isFarewell = farewellTokens.some((f) => {
    try {
      return new RegExp(`\\b${escapeRegex(f)}\\b`).test(normalizedQuery);
    } catch {
      return normalizedQuery.includes(f);
    }
  });

  if (isFarewell && normalizedQuery.split(/\s+/).length <= 5) {
    return "You're very welcome! 😊 If you have more questions about Mehboob's work, tech stack, or would like to discuss hiring him — I'm always here.\n\nHave a great day! 🚀";
  }

  // ── 3. Strict Out-of-Scope Filter ──────────────────────────────
  // If the query asks for known off-topic topics (e.g. Ronaldo, France, jokes, pizza)
  // and does NOT specifically ask about Mehboob or his projects, immediately refuse!
  const hasMehboobMention = /\b(mehboob|waqar|court pro|trusted air|calorie tracker|plant identifier|harvest hub)\b/i.test(normalizedQuery);

  if (!hasMehboobMention) {
    for (const pattern of OFF_TOPIC_PATTERNS) {
      if (pattern.test(normalizedQuery)) {
        return getRandomRefusal();
      }
    }
  }

  // ── 4. Domain Anchor Check ─────────────────────────────────────
  // Ensure the query has at least one anchor connecting to portfolio topics.
  const hasDomainAnchor = DOMAIN_ANCHORS.some((pattern) => pattern.test(normalizedQuery));
  if (!hasDomainAnchor) {
    return getRandomRefusal();
  }

  // ── 5. Weighted Scoring Across Knowledge Base ──────────────────
  let bestEntry: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;

    // A. High-confidence multi-word phrase matching (+30)
    for (const phrase of entry.phrases) {
      const p = phrase.toLowerCase();
      if (normalizedQuery.includes(p)) {
        score += 30 + p.length;
      }
    }

    // B. Roman Urdu phrase matching (+30)
    for (const urduPhrase of entry.urduPhrases) {
      const u = urduPhrase.toLowerCase();
      if (normalizedQuery.includes(u)) {
        score += 30 + u.length;
      }
    }

    // C. Exact project / company ID matching boosts (+40)
    if (entry.id === "court_pro" && /\b(court pro|courtpro|sports app)\b/i.test(normalizedQuery)) {
      score += 45;
    }
    if (entry.id === "trusted_air" && /\b(trusted air|air purifier|tuya|pm2\.?5)\b/i.test(normalizedQuery)) {
      score += 45;
    }
    if (entry.id === "calorie_tracker" && /\b(calorie|nutrition|food recognition)\b/i.test(normalizedQuery)) {
      score += 45;
    }
    if (entry.id === "plant_identifier" && /\b(plant|botanical|diagnosis)\b/i.test(normalizedQuery)) {
      score += 45;
    }
    if (entry.id === "harvest_hub" && /\b(harvest hub|agriculture|farming|kisan)\b/i.test(normalizedQuery)) {
      score += 45;
    }
    if (entry.id === "experience_orax" && /\b(orax|orax technologies)\b/i.test(normalizedQuery)) {
      score += 45;
    }
    if (entry.id === "experience_headstarter" && /\b(headstarter)\b/i.test(normalizedQuery)) {
      score += 45;
    }
    if (entry.id === "education" && /\b(riphah|degree|university|bscs)\b/i.test(normalizedQuery)) {
      score += 40;
    }
    if (entry.id === "awards" && /\b(awards?|achievements?|hackathon|innovate 4\.0|itcn asia|speed programming)\b/i.test(normalizedQuery)) {
      score += 40;
    }
    if (entry.id === "certifications" && /\b(certifications?|certificates?|coursera)\b/i.test(normalizedQuery)) {
      score += 40;
    }
    if (entry.id === "contact" && /\b(contact|email|phone|whatsapp|reach|call)\b/i.test(normalizedQuery)) {
      score += 40;
    }
    if (entry.id === "resume_cv" && /\b(resume|cv|pdf|download cv)\b/i.test(normalizedQuery)) {
      score += 40;
    }
    if (entry.id === "rates_pricing" && /\b(rates?|pricing|salary|charge|cost|hourly)\b/i.test(normalizedQuery)) {
      score += 40;
    }
    if (entry.id === "why_hire" && /\b(why hire|why should|reasons to hire|kyun hire|kyun rakhein)\b/i.test(normalizedQuery)) {
      score += 40;
    }
    if (entry.id === "location_availability" && /\b(location|located|where is mehboob|where do you live|kahan rehta|sheher)\b/i.test(normalizedQuery)) {
      score += 40;
    }
    if (entry.id === "iot" && /\b(iot|internet of things|smart devices?)\b/i.test(normalizedQuery)) {
      score += 35;
    }
    if (entry.id === "ai_ml" && /\b(ai|ml|machine learning|ml kit|artificial intelligence)\b/i.test(normalizedQuery)) {
      score += 35;
    }

    // D. Individual keyword matching (word-boundary strictly required, +5)
    for (const kw of entry.keywords) {
      try {
        const regex = new RegExp(`\\b${escapeRegex(kw.toLowerCase())}\\b`);
        if (regex.test(normalizedQuery)) {
          score += 5 + kw.length;
        }
      } catch {
        if (normalizedQuery.includes(kw.toLowerCase())) {
          score += 5;
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  // ── 6. Strict Thresholding ─────────────────────────────────────
  // High bar ensures zero guesswork on ambiguous or weak queries
  if (bestScore >= 12 && bestEntry) {
    return bestEntry.response;
  }

  // Fallback if no strong match found
  return getRandomRefusal();
}

/**
 * Simulates a natural streaming/typing effect by progressively feeding characters.
 * Returns a cancel function so user navigation or fresh sends don't glitch.
 */
export function streamResponse(
  fullText: string,
  onChunk: (partialText: string) => void,
  onComplete: () => void,
  speed: number = 10
): () => void {
  let index = 0;
  let cancelled = false;

  const tick = () => {
    if (cancelled) return;
    if (index < fullText.length) {
      // Chunk size varies for human-like typing cadence
      const chunkSize = Math.random() > 0.65 ? 3 : Math.random() > 0.35 ? 2 : 1;
      index = Math.min(index + chunkSize, fullText.length);
      onChunk(fullText.slice(0, index));
      setTimeout(tick, speed + Math.random() * 12);
    } else {
      onComplete();
    }
  };

  tick();

  return () => {
    cancelled = true;
  };
}
