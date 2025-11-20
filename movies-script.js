// Program Data
const programs = [
    {
        title: "Science to Medicine – Impacting Patient Lives",
        department: "Department of Biosystems Science and Engineering",
        category: "Pharma & Health",
        level: "Master",
        ects: "2 ECTS",
        duration: "Medium (1-6 months)",
        timing: "Semester-based",
        investment: "No financial contribution",
        classSize: "N/A",
        partners: "Roche",
        overview: "The lecture series provides an integrated view of how research and development in the pharmaceutical industry turn scientific discoveries into real medical advances. Students gain practical insight into how industrial R&D operates.",
        involvement: "Educational collaboration; Roche employees bring real life challenges and give lectures",
        contact: "",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Strategic Foresight for Sustainable Futures",
        department: "Management, Technology, and Economics (D-MTEC)",
        category: "Energy & Sustainability",
        level: "Master",
        ects: "3 ECTS",
        duration: "Medium (1-6 months)",
        timing: "Autumn Semester",
        investment: "No financial contribution",
        classSize: "max. 20 students",
        partners: "Coop, Swiss Federal Office of Energy, AMAG, Siemens",
        overview: "This lecture introduces students to systematic foresight methods for exploring and shaping long-term developments under uncertainty. The course links foresight theory with applied cases in sustainability and innovation.",
        involvement: "Contextual Collaboration (no financial investment)",
        contact: "Dr. Johannes Heck",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Case Studies: Energy Systems & Technology",
        department: "Energy Science Center (ESC)",
        category: "Energy & Sustainability",
        level: "Master",
        ects: "4 ECTS",
        duration: "Long (6+ months)",
        timing: "Two-semester module (Autumn & Spring)",
        investment: "Low (CHF 0-5k)",
        investmentDetail: "CHF 3,000 per case",
        classSize: "~40 students (6–8 teams)",
        partners: "Axpo, Swissgrid, ewz, EKZ, Siemens, BKW",
        overview: "Students tackle real-world challenges from the energy sector by combining technical, economic, and policy perspectives. Teams develop analytical and practical solutions addressing sustainable energy systems.",
        involvement: "Active collaboration via case definition and feedback rounds; CHF 3,000 per case",
        contact: "Dr. Katharina Bosina, Prof. Christian Schaffner",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Energy Now!",
        department: "Energy Science Center (ESC)",
        category: "Energy & Sustainability",
        level: "Extra-curricular",
        ects: "No ECTS",
        duration: "Medium (1-6 months)",
        timing: "Annual cycle (~3 months, Spring–Summer)",
        investment: "No financial contribution",
        classSize: "~60 participants (6–7 teams)",
        partners: "Axpo, BKW, Swissgrid, ewz, EKZ, Alpiq",
        overview: "An innovation accelerator connecting students, researchers, and industry partners to co-create actionable solutions for pressing energy challenges through open innovation.",
        involvement: "Challenge providers (in-kind contribution; supported by Erde 2.0 Foundation)",
        contact: "Dr. Katharina Bosina, Prof. Christian Schaffner",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Transdisciplinary Case Study (TDCS)",
        department: "Transdisciplinarity Lab (TdLab), Environmental Systems Science (D-USYS)",
        category: "Energy & Sustainability",
        level: "Master",
        ects: "7 ECTS",
        duration: "Medium (1-6 months)",
        timing: "Spring Semester",
        investment: "No financial contribution",
        classSize: "~25 students",
        partners: "Canton Graubünden, regional administration, municipalities, NGOs",
        overview: "Students work directly with regional stakeholders on real-world sustainability challenges through field-based inquiry, stakeholder engagement, and applied research in specific regions.",
        involvement: "Regional stakeholder collaboration (no financial investment; in-kind participation)",
        contact: "Dr. Benjamin Hofmann",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Umweltproblemlösen",
        department: "Transdisciplinarity Lab (TdLab), Environmental Systems Science (D-USYS)",
        category: "Energy & Sustainability",
        level: "Bachelor",
        ects: "10 ECTS (+3 optional)",
        duration: "Long (6+ months)",
        timing: "Full academic year",
        investment: "No financial contribution",
        classSize: "~100 Bachelor students (1st year)",
        partners: "Eberhard Recycling, Canton Zurich, regional administrations, NGOs",
        overview: "First-year Environmental Science students learn real-world sustainability challenges through transdisciplinary, project-based learning with regional partners from administration, civil society, and industry.",
        involvement: "Stakeholder collaboration and case co-design (no financial contribution)",
        contact: "Marlene Mader, Prof. Dr. Christian Pohl",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "World Food System Summer School",
        department: "World Food System Center (WFSC), Environmental Systems Science (D-USYS)",
        category: "Food Systems",
        level: "Master",
        ects: "4 ECTS",
        duration: "Short (up to 1 month)",
        timing: "Summer (two weeks, annual)",
        investment: "No financial contribution",
        classSize: "~30 international students",
        partners: "Biogarten Lieli, Hoflabor, SWISSCO, Iconomix",
        overview: "An intensive two-week program exploring how sustainable and equitable food systems can be designed, using systems and design thinking with farmers, entrepreneurs, and policymakers.",
        involvement: "In-kind collaboration through case co-development, field visits, and feedback sessions",
        contact: "Monika Siegrist",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Data Science Lab",
        department: "ETH AI Center & Computer Science (D-INFK)",
        category: "Data Science & AI",
        level: "Master",
        ects: "14 ECTS",
        duration: "Medium (1-6 months)",
        timing: "Autumn Semester",
        investment: "No financial contribution",
        classSize: "~60 students (teams of 2-3)",
        partners: "Swisscom, Rapidata, ETH spin-offs, AI Center research groups",
        overview: "Students tackle real-world challenges using advanced data science and machine learning methods, gaining hands-on experience with the full data pipeline from collection to interpretation.",
        involvement: "Direct project collaboration (partners provide datasets, mentorship, and domain context)",
        contact: "Prof. Alexander Illic, Arnout Devos",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "UN Student Team",
        department: "Center for Security Studies (CSS)",
        category: "Global Challenges",
        level: "Extra-curricular",
        ects: "No ECTS",
        duration: "Long (6+ months)",
        timing: "Rolling project cycle (projects up to 10 months)",
        investment: "No financial contribution",
        classSize: "~25 students (groups of 5–6)",
        partners: "UN OCHA, UNHCR, UNDL",
        overview: "Students co-develop practical, technology-based solutions for global governance, peace, and sustainability challenges with UN practitioners.",
        involvement: "Direct collaboration with UN practitioners (no financial investment; supported through private donation)",
        contact: "Dr. Sascha Langenbach",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Entrepreneurial Leadership Seminar (ELS)",
        department: "Management, Technology, and Economics (D-MTEC)",
        category: "Management & Innovation",
        level: "Master",
        ects: "4 ECTS",
        duration: "Medium (1-6 months)",
        timing: "Autumn Semester",
        investment: "No financial contribution",
        classSize: "~18 participants (MSc and MAS)",
        partners: "Georg Fischer, Roche, Stadler, Hirslanden, Swisscom, AWS",
        overview: "Students work directly with senior management to address real-world strategy and innovation challenges, developing strategic recommendations for transformation and organizational change.",
        involvement: "High-level executive collaboration (strategic challenge definition, direct engagement with company leadership)",
        contact: "Dr. Isabel Spicker",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "MTEC Industry Project",
        department: "Management, Technology, and Economics (D-MTEC)",
        category: "Management & Innovation",
        level: "Master",
        ects: "12 ECTS",
        duration: "Medium (1-6 months)",
        timing: "Rolling intake (~4 months per project)",
        investment: "No financial contribution",
        classSize: "~100 students per year (teams of 2–3)",
        partners: "Various companies of all sizes",
        overview: "Core experiential learning module where students apply analytical, strategic, and managerial competencies in real company contexts through company-defined projects.",
        involvement: "High; company-defined projects co-supervised by ETH faculty and industry mentors",
        contact: "Prof. Bart Clarysse, Carrie Joda Lyn",
        rating: "⭐⭐⭐⭐"
    },
    {
        title: "Exploration Lab",
        department: "Mechanical and Process Engineering / VPWW",
        category: "Engineering & Technology",
        level: "Master",
        ects: "Varies",
        duration: "Medium (1-6 months)",
        timing: "Annual program cycle (Q3–Q1, 4-6 months)",
        investment: "Medium (CHF 5k+)",
        classSize: "~16 students",
        partners: "V-ZUG, Bossard, Bühler, VAT, Sauber Motorsport, Siemens",
        overview: "ETH's flagship program for early-stage innovation bringing together interdisciplinary teams to prototype and validate solutions to real industrial challenges.",
        involvement: "High; partner-funded collaboration",
        contact: "Kai von Petersdorff, Josseline Ross",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Space Systems",
        department: "Earth and Planetary Sciences",
        category: "Engineering & Technology",
        level: "Master",
        ects: "Varies",
        duration: "Long (6+ months)",
        timing: "Spring & Autumn Semester",
        investment: "No financial contribution",
        classSize: "~45 students (~6 mission teams)",
        partners: "Airbus Defense & Space, Beyond Gravity, Dufour Aerospace, dphi.space",
        overview: "Students design, analyse, and evaluate complete space missions from concept to data interpretation and commercial viability, with close links to industry.",
        involvement: "Mission proposals, datasets, thesis projects",
        contact: "Dr. Simon Stähler",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        title: "PBL Flagship Projects",
        department: "Center for Project-Based Learning (PBL), Information Technology and Electrical Engineering (D-ITET)",
        category: "Engineering & Technology",
        level: "Bachelor",
        ects: "Varies",
        duration: "Long (6+ months)",
        timing: "Continuous throughout academic year",
        investment: "No financial contribution",
        investmentDetail: "in-kind or funded",
        classSize: ">400 students annually",
        partners: "Various tech companies",
        overview: "Large-scale ecosystem connecting students, researchers, and industry through applied innovation projects in robotics, energy, information technology, and embedded systems.",
        involvement: "Collaborative projects, research partnerships, and co-development opportunities (in-kind or funded)",
        contact: "Dr. Michaele Magno",
        rating: "⭐⭐⭐⭐"
    }
];

// State Management
let activeFilters = {
    level: [],
    duration: [],
    investment: [],
    category: []
};

// DOM Elements
const filterBtn = document.getElementById('filterBtn');
const filterModal = document.getElementById('filterModal');
const closeModal = document.getElementById('closeModal');
const applyFilters = document.getElementById('applyFilters');
const clearFilters = document.getElementById('clearFilters');
const programsList = document.getElementById('programsList');
const resultsCount = document.getElementById('resultsCount');
const filterCount = document.getElementById('filterCount');
const activeFiltersContainer = document.getElementById('activeFilters');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPrograms(programs);
    updateResultsCount(programs.length);
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    filterBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalHandler);
    applyFilters.addEventListener('click', applyFiltersHandler);
    clearFilters.addEventListener('click', clearFiltersHandler);
    
    // Close modal on outside click
    filterModal.addEventListener('click', (e) => {
        if (e.target === filterModal) {
            closeModalHandler();
        }
    });
}

// Modal Functions
function openModal() {
    filterModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    loadActiveFilters();
}

function closeModalHandler() {
    filterModal.classList.remove('active');
    document.body.style.overflow = '';
}

function loadActiveFilters() {
    // Load current filters into checkboxes
    const checkboxes = filterModal.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const filterType = checkbox.name;
        const filterValue = checkbox.value;
        checkbox.checked = activeFilters[filterType].includes(filterValue);
    });
}

function applyFiltersHandler() {
    // Collect all checked filters
    activeFilters = {
        level: [],
        duration: [],
        investment: [],
        category: []
    };
    
    const checkboxes = filterModal.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        const filterType = checkbox.name;
        const filterValue = checkbox.value;
        activeFilters[filterType].push(filterValue);
    });
    
    // Filter and render programs
    const filteredPrograms = filterPrograms();
    renderPrograms(filteredPrograms);
    updateResultsCount(filteredPrograms.length);
    updateFilterCount();
    renderActiveFilters();
    closeModalHandler();
}

function clearFiltersHandler() {
    // Uncheck all checkboxes
    const checkboxes = filterModal.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Clear active filters
    activeFilters = {
        level: [],
        duration: [],
        investment: [],
        category: []
    };
    
    renderPrograms(programs);
    updateResultsCount(programs.length);
    updateFilterCount();
    renderActiveFilters();
}

// Filter Logic
function filterPrograms() {
    return programs.filter(program => {
        // If no filters are active, show all programs
        const hasActiveFilters = Object.values(activeFilters).some(arr => arr.length > 0);
        if (!hasActiveFilters) return true;
        
        // Check each filter type
        const levelMatch = activeFilters.level.length === 0 || activeFilters.level.includes(program.level);
        const durationMatch = activeFilters.duration.length === 0 || activeFilters.duration.includes(program.duration);
        const investmentMatch = activeFilters.investment.length === 0 || activeFilters.investment.includes(program.investment);
        const categoryMatch = activeFilters.category.length === 0 || activeFilters.category.includes(program.category);
        
        return levelMatch && durationMatch && investmentMatch && categoryMatch;
    });
}

// Render Functions
function renderPrograms(programsToRender) {
    if (programsToRender.length === 0) {
        programsList.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🎬</div>
                <h3>No programs showing</h3>
                <p>Try selecting different filters</p>
            </div>
        `;
        return;
    }
    
    programsList.innerHTML = programsToRender.map(program => `
        <div class="program-card">
            <div class="program-header">
                <h2 class="program-title">🎬 ${program.title}</h2>
                <p class="program-department">🎭 ${program.department}</p>
            </div>
            <div class="program-body">
                <p class="program-overview">${program.overview}</p>
                
                <div class="program-details">
                    <div class="detail-item">
                        <span class="detail-label">Audience</span>
                        <span class="detail-value">${program.level}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Runtime</span>
                        <span class="detail-value">${program.timing}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Credits</span>
                        <span class="detail-value">${program.ects}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Seats</span>
                        <span class="detail-value">${program.classSize}</span>
                    </div>
                </div>
                
                <div class="program-tags">
                    <span class="tag highlight">${program.category}</span>
                    <span class="tag">🎟️ ${program.investment}</span>
                    <span class="tag">${program.rating}</span>
                </div>
                
                ${program.contact ? `
                <div class="program-footer">
                    <button class="btn btn-secondary" onclick="showContact('${program.contact}')">📧 Contact</button>
                    <button class="btn btn-primary" onclick="showDetails('${program.title.replace(/'/g, "\\'")}')">🎫 Book Now</button>
                </div>
                ` : `
                <div class="program-footer">
                    <button class="btn btn-primary" onclick="showDetails('${program.title.replace(/'/g, "\\'")}')">🎫 Book Now</button>
                </div>
                `}
            </div>
        </div>
    `).join('');
}

function updateResultsCount(count) {
    resultsCount.textContent = count;
}

function updateFilterCount() {
    const totalFilters = Object.values(activeFilters).reduce((sum, arr) => sum + arr.length, 0);
    filterCount.textContent = totalFilters;
    
    if (totalFilters > 0) {
        filterCount.classList.add('active');
    } else {
        filterCount.classList.remove('active');
    }
}

function renderActiveFilters() {
    const allFilters = [];
    
    Object.entries(activeFilters).forEach(([type, values]) => {
        values.forEach(value => {
            allFilters.push({ type, value });
        });
    });
    
    if (allFilters.length === 0) {
        activeFiltersContainer.innerHTML = '';
        return;
    }
    
    activeFiltersContainer.innerHTML = allFilters.map(filter => `
        <div class="filter-tag">
            <span>${filter.value}</span>
            <button onclick="removeFilter('${filter.type}', '${filter.value.replace(/'/g, "\\'")}')">×</button>
        </div>
    `).join('');
}

function removeFilter(type, value) {
    activeFilters[type] = activeFilters[type].filter(v => v !== value);
    
    const filteredPrograms = filterPrograms();
    renderPrograms(filteredPrograms);
    updateResultsCount(filteredPrograms.length);
    updateFilterCount();
    renderActiveFilters();
}

// Placeholder functions for interactions
function showDetails(programTitle) {
    const program = programs.find(p => p.title === programTitle);
    if (program) {
        alert(`🎬 NOW SHOWING\n\n${program.title}\n\n${program.rating}\n\n📧 Contact: ${program.contact || 'Box office'}\n\n🎭 Featuring: ${program.partners}\n\n🎟️ Ticket info: ${program.involvement}`);
    }
}

function showContact(contact) {
    alert(`📧 Contact Box Office:\n\n${contact}`);
}
