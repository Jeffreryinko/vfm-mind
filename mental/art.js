/* 맨탈 그림 자료 — 기술 19개 아이콘(직접 그린 선 그림), 기술·단계·개념 사진 이름(위키백과 문서, 사람 얼굴 대신 물건·장소).
   화면 코드는 mental/index.html 이 가져다 써요. 로봇·토큰 0. */
window.MART = (function () {
  const I = {
    objroom: `<path d="M8 22L24 8l16 14v18H8z"/><path d="M19 40V28h10v12"/>`,
    body: `<path d="M16 8l8 5 8-5 10 8-6 7-4-3v20H16V20l-4 3-6-7z"/>`,
    pulse: `<path d="M4 26h10l4-12 6 24 5-16 3 4h12"/>`,
    react: `<circle cx="24" cy="24" r="16"/><circle cx="18" cy="21" r="2"/><circle cx="30" cy="21" r="2"/><path d="M18 31q6 4 12 0"/>`,
    rel: `<circle cx="16" cy="16" r="6"/><circle cx="32" cy="16" r="6"/><path d="M6 40c0-9 4-13 10-13s10 4 10 13M22 40c0-9 4-13 10-13s10 4 10 13"/>`,
    cold: `<circle cx="24" cy="20" r="13"/><path d="M12 40h24l-4-8H16z"/><path d="M18 16q3-5 8-5"/>`,
    rapport: `<path d="M24 40S8 30 8 19a8 8 0 0 1 16-3 8 8 0 0 1 16 3c0 11-16 21-16 21z"/>`,
    lie: `<path d="M8 10h32v20H22l-8 8v-8H8z"/><path d="M18 15l12 10M30 15L18 25"/>`,
    scene: `<rect x="6" y="18" width="36" height="22" rx="2"/><path d="M6 18l4-9 32 5-2 4M14 10l4 8M24 12l4 6M34 13l3 5"/>`,
    chain: `<rect x="6" y="18" width="18" height="12" rx="6"/><rect x="24" y="18" width="18" height="12" rx="6"/><path d="M18 24h12"/>`,
    skep: `<path d="M12 40V20a12 12 0 0 1 24 0v20l-4-4-4 4-4-4-4 4-4-4z"/><circle cx="20" cy="20" r="1.5"/><circle cx="28" cy="20" r="1.5"/>`,
    hyp: `<circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="4"/>`,
    sleight: `<rect x="14" y="8" width="16" height="24" rx="2" transform="rotate(-12 22 20)"/><path d="M10 40c4-8 12-10 20-8l8 2"/>`,
    act: `<path d="M8 10h18v12a9 9 0 0 1-18 0z"/><path d="M13 22q4 3 8 0"/><path d="M26 20h14v10a7 7 0 0 1-14 0"/><path d="M30 33q3-3 6 0"/>`,
    provoke: `<path d="M26 4L10 28h10l-4 16 18-26H24z"/>`,
    direct: `<circle cx="24" cy="24" r="6"/><path d="M4 24s8-12 20-12 20 12 20 12-8 12-20 12S4 24 4 24z"/>`,
    leak: `<path d="M6 20v8l8 2 4 10h4l-2-9 20 7V10L14 18z"/>`,
    fake: `<path d="M12 6h18l8 8v28H12z"/><path d="M30 6v8h8"/><path d="M20 24a4 4 0 1 1 6 3c-2 1-2 2-2 4M24 35v1"/>`,
    stage: `<path d="M6 38h36M10 38V20l14-10 14 10v18"/><path d="M24 20v8a4 4 0 1 1-4 4"/>`
  };
  const icon = (k, cls) => I[k] ? `<svg class="ti ${cls || ""}" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[k]}</svg>` : "";
  const TECH = { objroom: "Living room", body: "Shoe", pulse: "Pulse", react: "Mask", rel: "Body language", cold: "Tarot", rapport: "Tea", lie: "Polygraph", scene: "Crime scene", chain: "Jigsaw puzzle", skep: "Séance", hyp: "Hypnosis", sleight: "Sleight of hand", act: "Theatre", provoke: "Chess", direct: "Desk lamp", leak: "Megaphone", fake: "Poker", stage: "Mousetrap" };
  const STAGE = { s1: "Magnifying glass", s2: "Eye", s3: "Conversation", s4: "Mind map", s5: "Ouija", s6: "Stage (theatre)", s7: "Vise", s8: "Mousetrap" };
  const CONCEPT = { p_barnum: "Horoscope", p_thin: "Stopwatch", p_room: "Bookcase", p_attention: "Stage lighting", p_ideomotor: "Ouija", p_lie: "Polygraph", p_face: "Mask", p_arousal: "Pupil", p_cit: "Fingerprint", p_guilt: "Handcuffs", p_falseconf: "Interrogation", p_context: "Perfume", p_misinfo: "Eraser", p_hypnosis: "Pocket watch", p_condition: "Bell", p_confirm: "Glasses", p_loss: "Piggy bank", p_reward: "Carrot", p_conform: "Sheep", p_authority: "Uniform", p_rapport: "Handshake", p_belief: "Tightrope walking", p_ego: "Trophy", p_anger: "Volcano", p_fear: "Spider", p_jealous: "Padlock", p_revenge: "Sword", p_addict: "Slot machine", p_prob: "Dice", p_predict: "Weather vane", p_grief: "Candle", p_trauma: "Kintsugi", p_correct: "Proofreading", p_silence: "Hourglass", p_frame: "Picture frame", p_proxemics: "Bench (furniture)", p_crisis: "Telephone", p_negotiate: "Weighing scale", p_inference: "Jigsaw puzzle", p_habit_trace: "Footprint",
    f_privacy: "Keyhole", f_means: "Pawn (chess)", f_lie: "Crossed fingers", f_entrap: "Mousetrap", f_resp: "Dominoes", f_humility: "Question mark", f_belief: "Lantern", f_justice: "Lady Justice", f_safety: "Helmet", f_child: "Teddy bear", f_grief: "Chrysanthemum", f_consent: "Signature", f_law: "Gavel", f_trust: "Simple suspension bridge", f_prejudice: "Label", f_dignity: "Olive branch", f_ends: "Arrow", f_free: "Marionette", f_epist: "Allegory of the cave",
    s_magic: "Playing card", s_cit: "Electroencephalography", s_interview: "Notebook", s_polygraph: "Electrocardiography", s_forensic: "Forensic science", s_profile: "Silhouette", s_hypothesis: "Laboratory flask", s_bayes: "Abacus", s_game: "Prisoner's dilemma", s_social_eng: "Phishing", s_olfaction: "Nose", s_voice: "Spectrogram", s_nonverbal: "Gesture", s_lure: "Fishing lure", s_rapport_sci: "Mirror", s_crowd: "Flocking", s_neuro_emotion: "Amygdala", s_memory_sci: "Hippocampus", s_probability: "Roulette", s_health: "Stethoscope", s_crisis_model: "Stairs", s_observation: "Binoculars", s_persuasion: "Megaphone", s_expect: "Placebo", s_group: "Crowd" };
  // 실험 절차 그림 글자: p사람 g여럿 e눈 h손 c시계 k카드 m돈 d종이 s말 z충격 b뇌 o문·장소 t전화 v영상 q질문 l실험·비교 f얼굴 r귀 y선물·물건 a동물
  const P = {
    p: `<circle cx="12" cy="7" r="3.5"/><path d="M5 21c0-5 3-8 7-8s7 3 7 8"/>`,
    g: `<circle cx="8" cy="8" r="3"/><circle cx="16.5" cy="8" r="3"/><path d="M2 20c0-4 2.5-6.5 6-6.5s6 2.5 6 6.5M13 14c1-.4 2.2-.5 3.5-.5 3.5 0 5.5 2.5 5.5 6.5"/>`,
    e: `<path d="M2 12s4-6.5 10-6.500S22 12 22 12s-4 6.5-10 6.500S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/>`,
    h: `<path d="M7 12V6.500a1.5 1.5 0 0 1 3 0V11V4.500a1.5 1.5 0 0 1 3 0V11V5.500a1.5 1.5 0 0 1 3 0V12v-3a1.5 1.5 0 0 1 3 0v6c0 4-2.5 6.5-6 6.500S7 19 5 15l-1.5-3c1-1 2.5-.5 3.5 1z"/>`,
    c: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>`,
    k: `<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M12 9l2.5 3-2.5 3-2.5-3z"/>`,
    m: `<circle cx="12" cy="12" r="9"/><path d="M14.5 9c-.6-.9-1.5-1.3-2.5-1.3-1.5 0-2.600.8-2.600 2.100 0 3 5.4 1.4 5.4 4.3 0 1.3-1.200 2.200-2.8 2.200-1.200 0-2.3-.5-2.900-1.500M12 6v1.700M12 16.300V18"/>`,
    d: `<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>`,
    s: `<path d="M4 5h16v11H11l-5 4v-4H4z"/>`,
    z: `<path d="M13 2L5 14h6l-1 8 8-12h-6z"/>`,
    b: `<path d="M9 4a3.5 3.5 0 0 0-3.5 3.500A3.5 3.5 0 0 0 4 13.5 3.5 3.5 0 0 0 7 19a3 3 0 0 0 5 1V5.500A2.5 2.5 0 0 0 9 4zM15 4a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1 1.5 6A3.5 3.5 0 0 1 17 19a3 3 0 0 1-5 1"/>`,
    o: `<path d="M5 21V4h10v17M3 21h18M15 7l4 1.500V21"/><circle cx="12" cy="13" r=".8"/>`,
    t: `<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18.500h2"/>`,
    v: `<rect x="3" y="5" width="18" height="13" rx="2"/><path d="M10 9l5 2.5-5 2.500zM8 21h8"/>`,
    q: `<circle cx="12" cy="12" r="9"/><path d="M9.5 9.500a2.5 2.5 0 1 1 3.8 2.100c-.9.6-1.3 1-1.3 2M12 16.800v.2"/>`,
    l: `<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.400A2 2 0 0 0 19 18l-5-9V3M7.5 15h9"/>`,
    f: `<circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r=".9"/><circle cx="15" cy="10" r=".9"/><path d="M8.5 14.500q3.5 3 7 0"/>`,
    r: `<path d="M7 9a5 5 0 0 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0M10 9.500a2 2 0 0 1 4 0c0 1.5-1.5 2-1.5 3.5"/>`,
    y: `<rect x="4" y="10" width="16" height="11" rx="1.5"/><path d="M3 7h18v3H3zM12 7v14M12 7c-1.5-4-6-3.5-4.5-.5M12 7c1.5-4 6-3.5 4.5-.5"/>`,
    a: `<circle cx="7" cy="9" r="2"/><circle cx="12" cy="6.5" r="2"/><circle cx="17" cy="9" r="2"/><path d="M12 12c-3 0-5.5 2.5-5.5 5 0 1.7 1.3 2.5 2.8 2.5 1 0 1.7-.5 2.7-.5s1.7.5 2.7.5c1.5 0 2.8-.8 2.8-2.5 0-2.5-2.5-5-5.5-5z"/>`
  };
  const step = i => `<svg class="pi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[i] || P.l}</svg>`;
  const pic = (map, k) => map[k] ? "en:" + map[k] : "";
  return { icon, step, tech: k => pic(TECH, k), stage: k => pic(STAGE, k), concept: k => pic(CONCEPT, k) };
})();
