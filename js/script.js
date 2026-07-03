const translations = {
    'en-US': {
        'intro_sys': 'Independent Asset Distribution',
        'intro_init': 'SYSTEM INITIALIZATION',
        'intro_btn': 'ACCESS HUB',
        'intro_loading_label': 'SYNCING ASSETS',
        'name_sys': 'Identity Verification',
        'name_title': 'STATE YOUR NAME',
        'name_placeholder': 'Enter your name',
        'name_btn': 'CONFIRM IDENTITY',
        'password_placeholder': 'Password',
        'auth_choice_title': 'ACCESS REQUIRED',
        'auth_login_btn': 'LOG IN',
        'auth_create_btn': 'CREATE ACCOUNT',
        'auth_login_title': 'LOG IN',
        'auth_login_submit': 'LOG IN',
        'auth_create_title': 'CREATE ACCOUNT',
        'auth_create_submit': 'CREATE ACCOUNT',
        'auth_back': '← Back',
        'hub_greeting': 'Welcome back, {name}',
        'settings_title': 'SYSTEM SETTINGS',
        'settings_back': 'Return to Directory',
        'settings_lang_title': 'Language / Idioma',
        'settings_lang_desc': 'Select your preferred interface language.',
        'settings_identity_title': 'Stored Identity',
        'settings_identity_desc': 'Forget your saved name and verify again next visit.',
        'settings_identity_btn': 'Forget Me',
        'settings_theme_title': 'Interface Theme',
        'settings_theme_desc': 'Choose your accent colour.',
        'btn_settings': 'SETTINGS',
        'hub_subtitle': 'Independent Asset Distribution',
        'hub_title': 'ASSETS DIRECTORY',
        'hub_desc': 'Select a module to view documentation, previews, and download links.',
        'card1_badge': 'V0.1 RELEASE',
        'card1_title': "Sol's RNG System",
        'card1_desc': 'Complete aura rolling system with equip/skip mechanics, automated infinite rolls, and quick roll bypass features.',
        'card1_btn': 'Access Module',
        'card2_title': 'Unassigned Slot',
        'card2_desc': 'System pending future development. Check back later for new asset releases.',
        'card2_btn': 'Locked',
        'sols_back': 'Return to Directory',
        'sols_subtitle': 'Asset Distribution Protocol',
        'sols_title': "SOL'S RNG ASSETS",
        'sols_phase': 'Release Phase',
        'sols_doc_title': 'Version Documentation',
        'sols_doc_h2': 'V0.1 Update',
        'sols_doc_p': 'This release includes the main loop handlers for the equip and skip mechanics, integrated alongside the classic RNG automation flows detailed in the registry list below.',
        'sols_tbl_h1': 'System Interface',
        'sols_tbl_h2': 'Technical Execution & Features',
        'sols_tbl_r1_t': 'Roll System',
        'sols_tbl_r1_d': 'Plays a 2.5s animation showing auras cycling through until landing on the final result, then lets you choose to EQUIP or SKIP it.',
        'sols_tbl_r2_t': 'Auto-Roll System',
        'sols_tbl_r2_d': 'Once you press its button to turn it ON, it rolls automatically with the same 2.5s animation, but slightly faster between rolls after the cooldown, since from then on the system triggers each roll for you, no clicking needed per roll.',
        'sols_tbl_r3_t': 'Quick Roll System',
        'sols_tbl_r3_d': 'Completely skips the 2.5s animation and jumps straight to the result, giving you the EQUIP/SKIP choice instantly (does not affect the cooldown).',
        'sols_changelog_title': 'Changelog',
        'sols_changelog_v01_date': '— Jun 27, 2026',
        'sols_changelog_v01_1': '+ Roll System with equip/skip selectors',
        'sols_changelog_v01_2': '+ Auto-Roll System (press its button to toggle OFF/ON to activate it)',
        'sols_changelog_v01_3': '+ Quick Roll System (press its button to toggle OFF/ON to activate it)',
        'sols_media_title': 'System Media & Preview',
        'sols_media_h2': 'Visual Demonstration',
        'sols_media_p': 'Media preview showcasing the actual UI structure in action. Click any frame to expand the viewport.',
        'sols_media_vid': 'Expand with Sound',
        'sols_media_img': 'Click to Expand',
        'sols_faq_title': 'Hub Support & FAQ',
        'sols_faq_h2': 'Frequently Asked Questions',
        'sols_faq_q1': 'How do I modify aura rarities?',
        'sols_faq_a1_1': 'To modify the rarities of the auras, you need to follow this path in the Roblox Studio Explorer:',
        'sols_faq_a1_2': 'Inside the Auras module script, you will find all the rarity configurations ready to be edited.',
        'sols_faq_q2': 'How often will there be an update?',
        'sols_faq_a2': 'Updates for this asset will likely take between 1 and 2 weeks, depending on my available free time.',
        'sols_faq_q3': 'How can I contact you?',
        'sols_faq_a3': 'At the moment, the only available method to contact me is through Discord.',
        'sols_dl_title': 'Asset Download',
        'sols_dl_h2': 'System Build',
        'sols_dl_p': 'Download the main file to import into Roblox Studio.',
        'sols_dl_btn': 'Download .RBXL',
        'sols_prev_title': 'Version Archive',
        'sols_prev_h2': 'Previous Versions',
        'sols_prev_p': 'Older builds, kept available for compatibility or rollback.',
        'sols_prev_empty': 'No previous versions archived yet.'
    },
    'es-LA': {
        'intro_sys': 'Distribución Independiente de Assets',
        'intro_init': 'INICIALIZACIÓN DEL SISTEMA',
        'intro_btn': 'ACCEDER AL HUB',
        'intro_loading_label': 'SINCRONIZANDO ACTIVOS',
        'name_sys': 'Verificación de Identidad',
        'name_title': 'DI TU NOMBRE',
        'name_placeholder': 'Escribe tu nombre',
        'name_btn': 'CONFIRMAR IDENTIDAD',
        'password_placeholder': 'Contraseña',
        'auth_choice_title': 'ACCESO REQUERIDO',
        'auth_login_btn': 'INICIAR SESIÓN',
        'auth_create_btn': 'CREAR CUENTA',
        'auth_login_title': 'INICIAR SESIÓN',
        'auth_login_submit': 'INICIAR SESIÓN',
        'auth_create_title': 'CREAR CUENTA',
        'auth_create_submit': 'CREAR CUENTA',
        'auth_back': '← Volver',
        'hub_greeting': 'Bienvenido de nuevo, {name}',
        'settings_title': 'CONFIGURACIÓN DEL SISTEMA',
        'settings_back': 'Volver al Directorio',
        'settings_lang_title': 'Idioma / Language',
        'settings_lang_desc': 'Seleccione su idioma de interfaz preferido.',
        'settings_identity_title': 'Identidad Guardada',
        'settings_identity_desc': 'Olvida tu nombre guardado y verifícalo de nuevo la próxima vez.',
        'settings_identity_btn': 'Olvidarme',
        'settings_theme_title': 'Tema de Interfaz',
        'settings_theme_desc': 'Elige tu color de acento.',
        'btn_settings': 'AJUSTES',
        'hub_subtitle': 'Distribución Independiente de Assets',
        'hub_title': 'DIRECTORIO DE ACTIVOS',
        'hub_desc': 'Seleccione un módulo para ver documentación, vistas previas y enlaces de descarga.',
        'card1_badge': 'LANZAMIENTO V0.1',
        'card1_title': "Sistema Sol's RNG",
        'card1_desc': 'Sistema completo de tiradas de aura con mecánicas de equipar/omitir, tiradas infinitas automáticas y funciones de salto rápido.',
        'card1_btn': 'Acceder al Módulo',
        'card2_title': 'Espacio sin Asignar',
        'card2_desc': 'Sistema pendiente de desarrollo futuro. Vuelve más tarde para nuevos lanzamientos.',
        'card2_btn': 'Bloqueado',
        'sols_back': 'Volver al Directorio',
        'sols_subtitle': 'Protocolo de Distribución de Activos',
        'sols_title': "ACTIVOS DE SOL'S RNG",
        'sols_phase': 'Fase de Lanzamiento',
        'sols_doc_title': 'Documentación de la Versión',
        'sols_doc_h2': 'Actualización V0.1',
        'sols_doc_p': 'Esta versión incluye los manejadores del bucle principal para las mecánicas de equipar y omitir, integradas junto a los flujos clásicos de automatización detallados abajo.',
        'sols_tbl_h1': 'Interfaz del Sistema',
        'sols_tbl_h2': 'Ejecución Técnica y Características',
        'sols_tbl_r1_t': 'Sistema de Tirada',
        'sols_tbl_r1_d': 'Hace una animación de 2.5 segundos donde pasan auras hasta llegar a su resultado final, y luego te deja elegir si quieres EQUIPAR o SALTAR (skip).',
        'sols_tbl_r2_t': 'Auto-Tirada',
        'sols_tbl_r2_d': 'Una vez presionas su botón para ponerlo en ON, hace roll automáticamente con la misma animación de 2.5 segundos, pero un poco más rápido entre tiradas después del cooldown, ya que a partir de ahí el propio sistema activa cada tirada sin que tengas que darle click cada vez.',
        'sols_tbl_r3_t': 'Tirada Rápida',
        'sols_tbl_r3_d': 'Elimina por completo la animación de 2.5 segundos, pasando directo al resultado con la opción de EQUIPAR o SALTAR al instante (no afecta el cooldown).',
        'sols_changelog_title': 'Registro de Cambios',
        'sols_changelog_v01_date': '— 27 jun 2026',
        'sols_changelog_v01_1': '+ Sistema de Tirada con selectores de equipar/omitir',
        'sols_changelog_v01_2': '+ Sistema de Auto-Tirada (debes presionar su botón para pasar de OFF a ON y que funcione)',
        'sols_changelog_v01_3': '+ Sistema de Tirada Rápida (debes presionar su botón para pasar de OFF a ON y que funcione)',
        'sols_media_title': 'Medios y Vista Previa',
        'sols_media_h2': 'Demostración Visual',
        'sols_media_p': 'Vista previa que muestra la estructura real de la UI en acción. Haz clic en cualquier recuadro para expandir.',
        'sols_media_vid': 'Expandir con Sonido',
        'sols_media_img': 'Clic para Expandir',
        'sols_faq_title': 'Soporte y Preguntas Frecuentes',
        'sols_faq_h2': 'Preguntas Frecuentes',
        'sols_faq_q1': '¿Cómo modifico las rarezas de las auras?',
        'sols_faq_a1_1': 'Para modificar las rarezas de las auras, debes seguir esta ruta en el Explorador de Roblox Studio:',
        'sols_faq_a1_2': 'Dentro del script del módulo Auras, encontrarás todas las configuraciones de rareza listas para ser editadas.',
        'sols_faq_q2': '¿Con qué frecuencia habrá una actualización?',
        'sols_faq_a2': 'Las actualizaciones para este activo probablemente tomarán entre 1 y 2 semanas, dependiendo de mi tiempo libre disponible.',
        'sols_faq_q3': '¿Cómo puedo contactarte?',
        'sols_faq_a3': 'Por el momento, el único método disponible para contactarme es a través de Discord.',
        'sols_dl_title': 'Descarga de Activos',
        'sols_dl_h2': 'Construcción del Sistema',
        'sols_dl_p': 'Descarga el archivo principal para importarlo en Roblox Studio.',
        'sols_dl_btn': 'Descargar .RBXL',
        'sols_prev_title': 'Archivo de Versiones',
        'sols_prev_h2': 'Versiones Anteriores',
        'sols_prev_p': 'Construcciones anteriores, disponibles por compatibilidad o si necesitas regresar a una versión previa.',
        'sols_prev_empty': 'Aún no hay versiones anteriores archivadas.'
    }
};

let currentLang = 'en-US';
const OWNER_USER = 'william';
const OWNER_PASS = 'Owner213';
const AUTH_VERSION = '2';
const ALL_THEMES = ['theme-blue','theme-red','theme-green','theme-yellow','theme-gold','theme-rgb'];
const DOWNLOAD_COUNTER_KEY = 'solsrng-assets-hub-rbxl-v01-downloads';
const DOWNLOAD_COUNTER_BASE = 'https://countapi.mileshilliard.com/api/v1';
const PREVIOUS_VERSIONS = [];
let introAnimFrame = null;

function changeLanguage(langCode) {
    currentLang = langCode;
    document.documentElement.lang = langCode.split('-')[0];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
    updateGreeting();
    try { localStorage.setItem('preferredLang', langCode); } catch(e){}
}

function getSavedName() {
    try { return localStorage.getItem('visitorName'); } catch(e) { return null; }
}

function isOwner() {
    try { return localStorage.getItem('isOwner') === 'true'; } catch(e) { return false; }
}

function enforceAuthVersion() {
    try {
        const stored = localStorage.getItem('authVersion');
        if (stored !== AUTH_VERSION) {
            localStorage.removeItem('visitorName');
            localStorage.removeItem('isOwner');
            localStorage.setItem('authVersion', AUTH_VERSION);
        }
    } catch(e) {}
}

function showAuthStep(step) {
    document.getElementById('auth-choice-step').classList.add('hidden');
    document.getElementById('auth-login-step').classList.add('hidden');
    document.getElementById('auth-create-step').classList.add('hidden');
    document.getElementById('login-error').classList.add('hidden');
    document.getElementById('create-error').classList.add('hidden');
    if (step === 'login') document.getElementById('auth-login-step').classList.remove('hidden');
    else if (step === 'create') document.getElementById('auth-create-step').classList.remove('hidden');
    else document.getElementById('auth-choice-step').classList.remove('hidden');
}

function showAuthError(which, msg) {
    const el = document.getElementById(which + '-error');
    el.textContent = msg;
    el.classList.remove('hidden');
}

function getAccounts() {
    try {
        const raw = localStorage.getItem('hub_accounts');
        return raw ? JSON.parse(raw) : {};
    } catch(e) { return {}; }
}

function saveAccounts(accounts) {
    try { localStorage.setItem('hub_accounts', JSON.stringify(accounts)); } catch(e) {}
}

function accountKey(name) {
    return name.toUpperCase().trim().replace(/[^A-Z0-9_-]/g, '');
}

function getAccount(name) {
    return getAccounts()[accountKey(name)] || null;
}

function createAccount(name, password) {
    const accounts = getAccounts();
    const key = accountKey(name);
    if (accounts[key]) return false;
    accounts[key] = { name: name.toUpperCase(), password: password.toUpperCase(), created: new Date().toISOString() };
    saveAccounts(accounts);
    return true;
}

function setTheme(name, save = true) {
    if (name === 'gold' && !isOwner()) name = 'blue';
    ALL_THEMES.forEach(t => document.body.classList.remove(t));
    document.body.classList.add('theme-' + name);
    ALL_THEMES.forEach(t => {
        const id = 'swatch-' + t.replace('theme-','');
        const el = document.getElementById(id);
        if (el) el.classList.toggle('active', t === 'theme-' + name);
    });
    if (save) {
        try { localStorage.setItem('userTheme', name); } catch(e) {}
    }
}

function applyOwnerTheme() {
    const goldSwatch = document.getElementById('swatch-gold');
    if (goldSwatch) goldSwatch.classList.toggle('hidden', !isOwner());
    const saved = (() => { try { return localStorage.getItem('userTheme'); } catch(e) { return null; } })();
    if (isOwner() && !saved) {
        setTheme('gold');
    } else if (saved) {
        setTheme(saved, false);
    } else {
        setTheme('blue', false);
    }
}

function submitLogin() {
    const nameField = document.getElementById('login-name-field');
    const passField = document.getElementById('login-password-field');
    const name = (nameField.value || '').trim().toUpperCase();
    const pass = (passField.value || '').trim().toUpperCase();
    if (!name || !pass) {
        showAuthError('login', currentLang === 'es-LA' ? 'Completa nombre y contraseña.' : 'Enter both name and password.');
        return;
    }
    if (name === OWNER_USER.toUpperCase() && pass === OWNER_PASS.toUpperCase()) {
        completeLogin(name, true);
        return;
    }
    const account = getAccount(name);
    if (account && account.password === pass) {
        completeLogin(account.name, false);
    } else {
        showAuthError('login', currentLang === 'es-LA' ? 'Nombre o contraseña incorrectos.' : 'Incorrect name or password.');
    }
}

function submitCreateAccount() {
    const nameField = document.getElementById('create-name-field');
    const passField = document.getElementById('create-password-field');
    const name = (nameField.value || '').trim().toUpperCase();
    const pass = (passField.value || '').trim().toUpperCase();
    if (!name || !pass) {
        showAuthError('create', currentLang === 'es-LA' ? 'Completa nombre y contraseña.' : 'Enter both name and password.');
        return;
    }
    if (name === OWNER_USER.toUpperCase()) {
        showAuthError('create', currentLang === 'es-LA' ? 'Ese nombre está reservado.' : 'That name is reserved.');
        return;
    }
    if (getAccount(name)) {
        showAuthError('create', currentLang === 'es-LA' ? 'Esa cuenta ya existe. Usa Iniciar Sesión.' : 'That account already exists. Use Log In instead.');
        return;
    }
    const success = createAccount(name, pass);
    if (!success) {
        showAuthError('create', currentLang === 'es-LA' ? 'Error al crear la cuenta. Intenta de nuevo.' : 'Could not create account. Try again.');
        return;
    }
    completeLogin(name, false);
}

function completeLogin(name, ownerLogin) {
    try {
        localStorage.setItem('visitorName', name);
        localStorage.setItem('isOwner', ownerLogin ? 'true' : 'false');
        localStorage.setItem('authVersion', AUTH_VERSION);
    } catch(e) {}
    switchView('view-intro');
    runIntroSequence(name);
    applyOwnerTheme();
    updateGreeting();
}

function forgetName() {
    try {
        localStorage.removeItem('visitorName');
        localStorage.removeItem('isOwner');
    } catch(e) {}
    showAuthStep('choice');
    switchView('view-name');
}

function updateGreeting() {
    const name = getSavedName();
    const greetEl = document.getElementById('hub-greeting');
    if (!greetEl) return;
    if (name) {
        const template = translations[currentLang]['hub_greeting'] || 'Welcome back, {name}';
        greetEl.textContent = template.replace('{name}', name.toUpperCase());
    } else {
        greetEl.textContent = '';
    }
    applyOwnerTheme();
}

function switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(el => {
        el.classList.remove('active');
    });
    const target = document.getElementById(viewId);
    if(target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

function runIntroSequence(name) {
    const titleEl = document.getElementById('intro-typing-text');
    const accessBtn = document.getElementById('intro-access-btn');
    const fill = document.getElementById('intro-loading-fill');
    const pct = document.getElementById('intro-loading-pct');
    if (introAnimFrame) cancelAnimationFrame(introAnimFrame);
    accessBtn.classList.add('hidden');
    fill.style.width = '0%';
    pct.textContent = '0%';
    titleEl.textContent = '';
    titleEl.parentElement.classList.add('typing-caret');
    const full = 'WELCOME ' + name.toUpperCase() + ' TO ASSETS HUB!';
    const msPerChar = 45;
    const typingDuration = full.length * msPerChar;
    const pauseAfterTyping = 400;
    const loadingDuration = 1100;
    const startTime = performance.now();
    function frame(now) {
        const elapsed = now - startTime;
        if (elapsed <= typingDuration) {
            const charsToShow = Math.min(full.length, Math.floor(elapsed / msPerChar) + 1);
            titleEl.textContent = full.slice(0, charsToShow);
        } else if (elapsed <= typingDuration + pauseAfterTyping) {
            if (titleEl.textContent !== full) titleEl.textContent = full;
            if (titleEl.parentElement.classList.contains('typing-caret')) {
                titleEl.parentElement.classList.remove('typing-caret');
            }
        } else {
            const loadElapsed = elapsed - typingDuration - pauseAfterTyping;
            const p = Math.min(100, Math.round((loadElapsed / loadingDuration) * 100));
            fill.style.width = p + '%';
            pct.textContent = p + '%';
            if (p >= 100) {
                accessBtn.classList.remove('hidden');
                introAnimFrame = null;
                return;
            }
        }
        introAnimFrame = requestAnimationFrame(frame);
    }
    introAnimFrame = requestAnimationFrame(frame);
}

const modal = document.getElementById('media-modal');
const expVideo = document.getElementById('expanded-video');
const expImage = document.getElementById('expanded-image');

function openModal(type, src) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
    }, 10);
    if (type === 'video') {
        expVideo.src = src;
        expVideo.classList.remove('hidden');
        expImage.classList.add('hidden');
        expVideo.play();
    } else if (type === 'image') {
        expImage.src = src;
        expImage.classList.remove('hidden');
        expVideo.classList.add('hidden');
    }
}

function closeModal() {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    expVideo.pause();
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        expVideo.src = '';
        expImage.src = '';
    }, 300);
}

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function getRemoteFileSize(fileUrl) {
    try {
        const res = await fetch(fileUrl, { method: 'HEAD', cache: 'no-store' });
        const len = res.headers.get('content-length');
        if (res.ok && len) return formatBytes(parseInt(len, 10));
    } catch (e) {}
    return '';
}

async function loadRbxlFileSize() {
    const el = document.getElementById('rbxl-filesize');
    if (!el) return;
    const size = await getRemoteFileSize('versions/Sol\'s RNG Assets/V0.1/Sols%20RNG%20SYSTEM%20V0.1.rbxl');
    el.textContent = size || '';
}

function formatCount(num) {
    if (num < 1000) return num.toString();
    const thousands = num / 1000;
    const rounded = Math.round(thousands * 10) / 10;
    return (rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1)) + 'K';
}

function renderDownloadCount(value) {
    const el = document.getElementById('rbxl-download-count');
    if (!el || value === null || value === undefined) return;
    const num = parseInt(value, 10);
    if (isNaN(num)) return;
    const label = (currentLang === 'es-LA') ? 'descargas' : 'downloads';
    el.textContent = formatCount(num) + ' ' + label;
}

async function loadDownloadCount() {
    try {
        const res = await fetch(`${DOWNLOAD_COUNTER_BASE}/get/${DOWNLOAD_COUNTER_KEY}`);
        const data = await res.json();
        renderDownloadCount(data.value ?? 0);
    } catch (e) {}
}

async function incrementDownloadCount() {
    try {
        const res = await fetch(`${DOWNLOAD_COUNTER_BASE}/hit/${DOWNLOAD_COUNTER_KEY}`);
        const data = await res.json();
        renderDownloadCount(data.value);
    } catch (e) {}
}

async function renderPreviousVersions() {
    const list = document.getElementById('previous-versions-list');
    const emptyMsg = document.getElementById('previous-versions-empty');
    if (!list) return;
    if (!PREVIOUS_VERSIONS.length) {
        emptyMsg.classList.remove('hidden');
        return;
    }
    emptyMsg.classList.add('hidden');
    for (const v of PREVIOUS_VERSIONS) {
        const encoded = encodeURIComponent(v.filename);
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between gap-3 p-3 bg-white/5 border border-white/10 rounded-sm';
        row.innerHTML = `
            <div class="min-w-0">
                <p class="text-white text-xs font-bold uppercase tracking-wider truncate">${v.label}</p>
                <p class="text-gray-500 text-[10px] font-medium uppercase tracking-wider" data-size-for="${encoded}">${v.date || ''}</p>
            </div>
            <a href="${encoded}" download class="flex-shrink-0 flex items-center justify-center w-9 h-9 bg-white/10 hover:bg-white/20 border border-white/20 rounded-sm text-white transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            </a>
        `;
        list.appendChild(row);
        getRemoteFileSize(encoded).then(size => {
            if (!size) return;
            const sizeEl = row.querySelector(`[data-size-for="${encoded}"]`);
            if (sizeEl) {
                sizeEl.textContent = (v.date ? v.date + ' · ' : '') + size;
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        const savedLang = localStorage.getItem('preferredLang');
        if(savedLang && (savedLang === 'en-US' || savedLang === 'es-LA')) {
            document.getElementById('language-selector').value = savedLang;
            changeLanguage(savedLang);
        } else {
            changeLanguage('en-US');
        }
    } catch(e) {
        changeLanguage('en-US');
    }
    loadRbxlFileSize();
    loadDownloadCount();
    renderPreviousVersions();
    document.getElementById('video-card').addEventListener('click', function() {
        const src = this.querySelector('video').src;
        openModal('video', src);
    });
    document.getElementById('photo-card').addEventListener('click', function() {
        const src = this.querySelector('img').src;
        openModal('image', src);
    });
    document.querySelectorAll('.faq-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('svg');
            if (content.classList.contains('max-h-0')) {
                content.classList.remove('max-h-0');
                content.classList.add('max-h-[500px]');
                icon.classList.add('rotate-180');
            } else {
                content.classList.add('max-h-0');
                content.classList.remove('max-h-[500px]');
                icon.classList.remove('rotate-180');
            }
        });
    });
    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape'){ closeModal(); }
    });
    enforceAuthVersion();
    const savedName = getSavedName();
    if (savedName) {
        switchView('view-intro');
        runIntroSequence(savedName);
    } else {
        showAuthStep('choice');
        switchView('view-name');
    }
    updateGreeting();
    applyOwnerTheme();
    document.getElementById('login-name-field').addEventListener('keydown', function(e){ if (e.key === 'Enter') submitLogin(); });
    document.getElementById('login-password-field').addEventListener('keydown', function(e){ if (e.key === 'Enter') submitLogin(); });
    document.getElementById('create-name-field').addEventListener('keydown', function(e){ if (e.key === 'Enter') submitCreateAccount(); });
    document.getElementById('create-password-field').addEventListener('keydown', function(e){ if (e.key === 'Enter') submitCreateAccount(); });
});
