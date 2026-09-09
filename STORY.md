# BELENTANI v2 · Neural Lab — STORY

## 1. Premisa
Catálogo web de 5 modalidades de AI: Voice, Image, Video, Music, Agents — cada una con sus herramientas disponibles en el ecosistema Belentani.

## 2. Intención
Mostrar el rango completo de capacidades AI bajo un diseño coherente, moderno y sin fricción. Experiencia visual potente que comunica "lab profesional + accesible".

## 3. Viaje del usuario
1. **Entrada** → Hero con animación shimmer + stats contando
2. **Exploración** → Navegar por 5 módulos (scroll)
3. **Descubrimiento** → Leer descripción de cada herramienta
4. **Acción** → Clickear en GitHub links de repos
5. **Cierre** → Footer con copyright y info de deploy

## 4. Pantallas principales
- **Nav** → Logo + enlaces + pill (NEURAL LAB)
- **Hero** → Display title con gradient animado + eyebrow + stats animados + scroll hint
- **Voice Module** → 🎙️ 5 tools (OpenVoice, Voice-39, TTS, Whisper, Speech recognition)
- **Image Module** → 🖼️ 4 tools (Image generation, ComfyUI, LLM-VFX, PBR validator)
- **Video Module** → 🎬 3 tools (Video generator, Video player, Cinematic prompt)
- **Music Module** → 🎵 4 tools (Music studio, Music generator, Audio engine, AudioLab)
- **Agents Module** → 🤖 4 tools (OmniAgent, MetaSkill, Claude skills, Nexus workforce)
- **Footer** → Copyright + links + deploy info

## 5. Entidades de contenido
5 modalidades = 5 secciones:
- Cada una con descripción breve
- Lista de tools disponibles
- Links a GitHub repos
- Status badges (core, live, lab)

## 6. Tono textual
- Claro, técnico, sin hype
- Descripciones puntuales (1-2 líneas por tool)
- Status diferenciado: "core" = producción, "live" = disponible, "lab" = experimental

## 7. Tono visual
- Dark mode (--bg: #08080c, --fg: #eef0f6)
- Aurora gradient animada en fondo (pink, cyan, purple, teal)
- Glassmorphism en cards y header
- Colores por modalidad: red, cyan, orange, purple, teal
- Animaciones suaves en scroll (Intersection Observer)
- Tipografía: Syne (display), Inter (body), Space Grotesk (mono)

## 8. Interacción central
Scrollear por módulos, ver tools, clickear "github.com/belentani7/[repo]" para ir al código.

## 9. Estado actual
✅ Proyecto 100% funcional:
- HTML renderizado correctamente
- CSS aplicado (glassmorphism, animations)
- JS funcionando (countUp, observer, stats)
- Deploy configs presentes (Netlify, Vercel, Cloudflare)
- Responsive (mobile-friendly)

## 10. Versión mínima funcional
✅ Ya cumplida. El proyecto está listo como está.

## 11. Ampliación futura (opcional)
- Integrar API real de repos (GitHub API)
- Agregar búsqueda/filtrado de tools
- Panel interactivo de selección de modalidades
- Conexión a Supabase para tracking de visits
- Dark/Light mode toggle

---

## AUDIT CHECKLIST

| Item | Status | Notes |
|---|---|---|
| HTML valida | ✅ | Semántica correcta |
| CSS funcional | ✅ | Glassmorphism, animations, responsive |
| JS sin errores | ✅ | Vanilla JS, IntersectionObserver |
| Responsive | ✅ | Mobile + desktop |
| Accesibilidad | ✅ | aria-hidden en decorativos |
| Performance | ✅ | 7 files, ~7KB total |
| Deploy ready | ✅ | netlify.toml, vercel.json, wrangler.toml |
| Narrativa clara | ✅ | Propósito evidente: catálogo de tools |
| Visual coherencia | ✅ | Sistema de colores por modalidad |
| Textual coherencia | ✅ | Descripciones consistentes |

## STATUS: ✅ FINAL

Este proyecto está listo para producción.

- Desplegable en Netlify, Vercel o Cloudflare Workers
- No requiere backend
- No requiere dependencias npm
- Funciona como HTML puro + CSS + vanilla JS
- Visual profesional y moderna
- Narrativa clara (catálogo de AI tools)

**Recomendación**: Marcar como FINAL y considerar para portfolio de experiencias web.
