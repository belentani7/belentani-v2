// BELENTANI v2 — Neural Lab · catalog of the AI tools already in the ecosystem
const LAB = {
  name: "BELENTANI",
  version: "v2",
  tagline: "Neural Lab — voz, visión, música, vídeo y agentes detrás de un cristal.",
  modalities: [
    {
      id: "voice", label: "Voice", icon: "🎙️", accent: "#ff5c7a",
      desc: "Síntesis y clonación de voz humana — portugués, español, inglés.",
      tools: [
        { name: "OpenVoice", desc: "Clonación de voz por referencia (secure-t)", repo: "secure-t", status: "core" },
        { name: "Voice-39", desc: "39 voces humanas listas para TTS", repo: "ManosAbiertas", status: "live" },
        { name: "TTS multi-idioma", desc: "Síntesis PT·ES·EN (nexus-chat / secure-t)", repo: "nexus-os", status: "core" },
        { name: "Whisper transcription", desc: "Transcripción de voz (aion · linguaforge · duck)", repo: "belentani-unified", status: "live" },
        { name: "Speech recognition", desc: "Reconocimiento en vivo (use-speech)", repo: "manos-abiertas", status: "lab" }
      ]
    },
    {
      id: "image", label: "Image", icon: "🖼️", accent: "#00e5ff",
      desc: "Generación y manipulación de imagen.",
      tools: [
        { name: "Image generation", desc: "Generación por prompt (aion · linguaforge · duck)", repo: "belentani-unified", status: "core" },
        { name: "ComfyUI compiler", desc: "Workflows JSON → ejecutables", repo: "comfyui-json-compiler", status: "lab" },
        { name: "LLM-VFX orchestrator", desc: "Efectos visuales por lenguaje", repo: "llm-vfx-orchestrator", status: "lab" },
        { name: "PBR validator", desc: "Validación de materiales PBR", repo: "pbr-validator", status: "lab" }
      ]
    },
    {
      id: "video", label: "Video", icon: "🎬", accent: "#ff8a3d",
      desc: "Generación y composición de vídeo.",
      tools: [
        { name: "Video generator", desc: "Generación por prompt (secure-t factory)", repo: "secure-t", status: "core" },
        { name: "Video player", desc: "Reproductor in-OS (nexus-os)", repo: "nexus-os", status: "live" },
        { name: "Cinematic prompt formatter", desc: "Formato de prompts cinematográficos", repo: "cinematic-prompt-formatter", status: "lab" }
      ]
    },
    {
      id: "music", label: "Music", icon: "🎵", accent: "#b8a6ff",
      desc: "Generación, estudio y motor de audio.",
      tools: [
        { name: "Music studio", desc: "Estudio musical in-OS", repo: "nexus-os", status: "live" },
        { name: "Music generator", desc: "Generación de música (secure-t factory)", repo: "secure-t", status: "core" },
        { name: "Audio engine", desc: "Motor de audio + visualizador", repo: "nexus-os", status: "core" },
        { name: "AudioLab", desc: "Panel de audio + cola (duck)", repo: "BELENTANI_OMEGA_CORE", status: "lab" }
      ]
    },
    {
      id: "agents", label: "Agents", icon: "🤖", accent: "#5cffd6",
      desc: "Sistemas de agentes y skills reutilizables.",
      tools: [
        { name: "OmniAgent", desc: "Agente multimodal", repo: "omniagent", status: "core" },
        { name: "MetaSkill", desc: "Skills componibles", repo: "MetaSkill", status: "live" },
        { name: "Claude skills pack", desc: "Pack de skills", repo: "claude-skills-pack", status: "lab" },
        { name: "Nexus workforce", desc: "Orquestación de agentes", repo: "nexus-workforce-enterprise", status: "core" }
      ]
    }
  ],
  stats: { repos: 510, tools: 20, voices: 39, languages: "PT·ES·EN" }
};
