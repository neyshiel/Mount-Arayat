function navigateTo(pageId) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));

    const targetSection = document.getElementById(`page-${pageId}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-forest-700', 'text-white', 'shadow-sm');
        btn.classList.add('text-forest-200', 'hover:text-white', 'hover:bg-forest-800/70');
    });

    const activeNav = document.getElementById(`nav-${pageId}`);
    if (activeNav) {
        activeNav.classList.add('bg-forest-700', 'text-white', 'shadow-sm');
        activeNav.classList.remove('text-forest-200', 'hover:text-white', 'hover:bg-forest-800/70');
    }

    ['home', 'about', 'contact'].forEach(id => {
        const mobBtn = document.getElementById(`mob-nav-${id}`);
        if (mobBtn) {
            if (id === pageId) {
                mobBtn.classList.add('bg-forest-700', 'text-white');
                mobBtn.classList.remove('text-forest-200', 'hover:bg-forest-800');
            } else {
                mobBtn.classList.remove('bg-forest-700', 'text-white');
                mobBtn.classList.add('text-forest-200', 'hover:bg-forest-800');
            }
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    menu.classList.toggle('hidden');

    if (menu.classList.contains('hidden')) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    }
}

const trailData = {
    north: {
        title: "North Peak via Magalang Trail",
        badge: "Most Popular Summit Route",
        difficulty: "5/9 (Moderate to Challenging)",
        duration: "3.5 – 4.5 Hours Ascent",
        elevation: "1,033 MASL (Highest Summit)",
        jumpoff: "Brgy. Ayala, Magalang, Pampanga",
        description: "Starting from the lush foothills of Magalang, this shaded forest trail winds past giant century-old balete trees, steep root-covered slopes, and mossy ridges leading to the White Rock viewpoint and the North Summit.",
        highlights: ["Century-Old Balete Tree", "White Rock Viewpoint", "Panoramic Pampanga Plains"]
    },
    south: {
        title: "South Peak via Arayat Trail",
        badge: "Steep & Scenic Ridge",
        difficulty: "5/9 (Challenging)",
        duration: "3 – 4 Hours Ascent",
        elevation: "984 MASL",
        jumpoff: "Brgy. San Juan Baño, Arayat, Pampanga",
        description: "Ascending from the historic Mount Arayat National Park resort area, this trail features steep ascents through dense bamboo groves and tropical woodland, rewarding climbers with dramatic views of the Pampanga River winding below.",
        highlights: ["TKO Viewpoint", "Pampanga River Vista", "National Park Forest Canopy"]
    },
    traverse: {
        title: "Full Twin-Peak Traverse (Magalang to Arayat)",
        badge: "Endurance & Technical Climb",
        difficulty: "6/9 (Major Dayhike)",
        duration: "7 – 9 Hours Total",
        elevation: "1,033 MASL + Ridge Crossing",
        jumpoff: "Start: Brgy. Ayala (Magalang) → Exit: San Juan Baño (Arayat)",
        description: "Designed for seasoned hikers, this epic traverse climbs the North Peak before tackling the technical 'Haring Bato' knife-edge ridge and rope-assisted sections across the collapsed crater rim to the South Peak.",
        highlights: ["Haring Bato Knife-Edge Ridge", "Both North & South Summits", "Technical Rope Segments"]
    }
};

function selectTrail(trailKey) {
    const data = trailData[trailKey];
    if (!data) return;

    document.querySelectorAll('.trail-tab').forEach(btn => {
        btn.classList.remove('bg-forest-700', 'text-white', 'shadow-sm');
        btn.classList.add('bg-forest-50', 'text-forest-800', 'hover:bg-forest-100');
    });
    const activeTab = document.getElementById(`tab-${trailKey}`);
    if (activeTab) {
        activeTab.classList.add('bg-forest-700', 'text-white', 'shadow-sm');
        activeTab.classList.remove('bg-forest-50', 'text-forest-800', 'hover:bg-forest-100');
    }

    const displayContainer = document.getElementById('trail-display');
    displayContainer.innerHTML = `
        <div class="flex flex-col lg:flex-row justify-between gap-6">
            <div class="space-y-4 lg:w-2/3">
                <div class="flex flex-wrap items-center gap-2">
                    <span class="px-3 py-1 rounded-full bg-earth-200 text-earth-900 text-xs font-bold uppercase tracking-wide">
                        ${data.badge}
                    </span>
                    <span class="px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-semibold">
                        Difficulty: ${data.difficulty}
                    </span>
                </div>
                <h3 class="font-serif text-2xl font-bold text-forest-950">${data.title}</h3>
                <p class="text-forest-800 text-sm sm:text-base leading-relaxed">${data.description}</p>
                <div>
                    <p class="text-xs font-bold uppercase tracking-wider text-forest-600 mb-2">Trail Highlights:</p>
                    <div class="flex flex-wrap gap-2">
                        ${data.highlights.map(item => `
                            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-earth-200 text-xs font-medium text-forest-900">
                                <i class="fa-solid fa-check text-forest-600"></i> ${item}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="lg:w-1/3 bg-white rounded-xl p-5 border border-earth-200 flex flex-col justify-between space-y-4">
                <div class="space-y-3 text-sm">
                    <div>
                        <span class="text-xs text-forest-500 uppercase font-semibold block">Peak Elevation</span>
                        <span class="font-bold text-forest-950">${data.elevation}</span>
                    </div>
                    <div>
                        <span class="text-xs text-forest-500 uppercase font-semibold block">Estimated Time</span>
                        <span class="font-bold text-forest-950">${data.duration}</span>
                    </div>
                    <div>
                        <span class="text-xs text-forest-500 uppercase font-semibold block">Jump-Off Point</span>
                        <span class="font-bold text-forest-950">${data.jumpoff}</span>
                    </div>
                </div>
                <button onclick="prefillTrailAndContact('${data.title}')" class="w-full py-3 px-4 rounded-xl bg-forest-700 hover:bg-forest-600 text-white text-xs font-bold uppercase tracking-wider transition text-center">
                    Inquire About This Trail
                </button>
            </div>
        </div>
    `;
}

function prefillTrailAndContact(trailTitle) {
    navigateTo('contact');
    const selectEl = document.getElementById('trailPreference');
    if (selectEl) {
        for (let i = 0; i < selectEl.options.length; i++) {
            if (trailTitle.toLowerCase().includes(selectEl.options[i].value.toLowerCase().split(' ')[0])) {
                selectEl.selectedIndex = i;
                break;
            }
        }
    }
}

function handleContactSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const trail = document.getElementById('trailPreference').value;
    const date = document.getElementById('hikeDate').value;
    const message = document.getElementById('message').value.trim();

    const errorBanner = document.getElementById('form-error-msg');
    const errorText = document.getElementById('form-error-text');
    const successBanner = document.getElementById('form-success-msg');
    const successText = document.getElementById('form-success-text');
    const form = document.getElementById('arayat-contact-form');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
        errorText.textContent = "Please fill in your name, email address, and message.";
        errorBanner.classList.remove('hidden');
        return;
    }

    if (!emailPattern.test(email)) {
        errorText.textContent = "Please enter a valid email address.";
        errorBanner.classList.remove('hidden');
        return;
    }

    errorBanner.classList.add('hidden');

    const dateText = date ? ` for your planned visit on ${date}` : '';
    successText.textContent = `Thank you, ${name}! Your inquiry regarding the ${trail}${dateText} has been logged. A confirmation copy will be sent to ${email}.`;

    form.classList.add('hidden');
    successBanner.classList.remove('hidden');
}

function resetContactForm() {
    const form = document.getElementById('arayat-contact-form');
    const successBanner = document.getElementById('form-success-msg');
    form.reset();
    successBanner.classList.add('hidden');
    form.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    selectTrail('north');
});
