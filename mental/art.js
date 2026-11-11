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
  const pic = (map, k) => map[k] ? "en:" + map[k] : "";
  return { icon, tech: k => pic(TECH, k), stage: k => pic(STAGE, k), concept: k => pic(CONCEPT, k) };
})();
