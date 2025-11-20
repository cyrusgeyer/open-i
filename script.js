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
    overview:
      "The lecture series provides an integrated view of how research and development in the pharmaceutical industry turn scientific discoveries into real medical advances. Students gain practical insight into how industrial R&D operates.",
    involvement:
      "Educational collaboration; Roche employees bring real life challenges and give lectures",
    contact: "",
  },
  {
    title: "Strategic Foresight for Sustainable Futures",
    // Program Data will be loaded from `programs.json` and mapped into the shape
    // expected by the rest of the script for backward compatibility.
    let programs = [];

    async function loadPrograms() {
      try {
        const res = await fetch('programs.json');
        const data = await res.json();

        // Map JSON entries to the internal shape used by the UI
        programs = data.map((p) => {
          // Investment normalization: number values expected in JSON
          let investmentDisplay = 'No financial contribution';
          const inv = Number(p['Investment'] || 0);
          if (!inv || inv === 0) investmentDisplay = 'No financial contribution';
          else if (inv <= 5000) investmentDisplay = `Low (CHF ${inv})`;
          else if (inv >= 50000) investmentDisplay = `Large (CHF ${inv}+)`;
          else investmentDisplay = `Medium (CHF ${inv})`;

          return {
            title: p['Title'] || '',
            department: p['Department'] || p['notes'] || '',
            category: Array.isArray(p['Category']) ? p['Category'][0] : p['Category'] || '',
            categories: p['Category'] || [],
            level: p['Level'] || '',
            ects: p['ECTS'] || '',
            duration: p['Duration'] || '',
            timing: p['Duration'] || '',
            investment: investmentDisplay,
            investmentValue: inv,
            classSize: p['Class size'] || p['Class size'] === 0 ? p['Class size'] : (p['Class size'] || p['classSize'] || ''),
            partners: Array.isArray(p['Eligible Partners']) ? p['Eligible Partners'].join(', ') : (p['Eligible Partners'] || p['partners'] || ''),
            eligiblePartners: p['Eligible Partners'] || [],
            engagementType: p['Engagement Type'] || p['Engagement Type'] || [],
            overview: p['Short Overview'] || p['Short overview'] || p['ShortOverview'] || p['overview'] || '',
            involvement: p['notes'] || p['involvement'] || '',
            structure: p['Structure'] || p['structure'] || '',
            whoShouldJoin: p['Who should get involved?'] || p['whoShouldJoin'] || '',
            suitableChallenges: p['suitableChallenges'] || p['Suitable Challenges'] || '',
            contact: p['Contact'] || '',
          };
        });

        // After loading, initialize the UI
        renderPrograms(programs);
        updateResultsCount(programs.length);
        updateFilterCount();
        renderActiveFilters();
      } catch (err) {
        console.error('Failed to load programs.json', err);
      }
    }

// Details Modal Elements
const detailsModal = document.getElementById("detailsModal");
const closeDetails = document.getElementById("closeDetails");
const closeDetailsBtn = document.getElementById("closeDetailsBtn");
const detailsTitle = document.getElementById("detailsTitle");
const detailsBody = document.getElementById("detailsBody");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderPrograms(programs);
  updateResultsCount(programs.length);
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  filterBtn.addEventListener("click", openModal);
  closeModal.addEventListener("click", closeModalHandler);
  applyFilters.addEventListener("click", applyFiltersHandler);
  clearFilters.addEventListener("click", clearFiltersHandler);

  // Details modal listeners
  closeDetails.addEventListener("click", closeDetailsModal);
  closeDetailsBtn.addEventListener("click", closeDetailsModal);

  // Close modal on outside click
  filterModal.addEventListener("click", (e) => {
    if (e.target === filterModal) {
      closeModalHandler();
    }
  });

  detailsModal.addEventListener("click", (e) => {
    if (e.target === detailsModal) {
      closeDetailsModal();
    }
  });
}

// Modal Functions
function openModal() {
  filterModal.classList.add("active");
  document.body.style.overflow = "hidden";
  loadActiveFilters();
}

function closeModalHandler() {
  filterModal.classList.remove("active");
  document.body.style.overflow = "";
}

function loadActiveFilters() {
  // Load current filters into checkboxes
  const checkboxes = filterModal.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
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
    category: [],
  };

  const checkboxes = filterModal.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  checkboxes.forEach((checkbox) => {
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
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Clear active filters
  activeFilters = {
    level: [],
    duration: [],
    investment: [],
    category: [],
  };

  renderPrograms(programs);
  updateResultsCount(programs.length);
  updateFilterCount();
  renderActiveFilters();
}

// Filter Logic
function filterPrograms() {
  return programs.filter((program) => {
    // If no filters are active, show all programs
    const hasActiveFilters = Object.values(activeFilters).some(
      (arr) => arr.length > 0
    );
    if (!hasActiveFilters) return true;

    // Check each filter type
    const levelMatch =
      activeFilters.level.length === 0 ||
      activeFilters.level.includes(program.level);
    const durationMatch =
      activeFilters.duration.length === 0 ||
      activeFilters.duration.includes(program.duration);
    const investmentMatch =
      activeFilters.investment.length === 0 ||
      activeFilters.investment.includes(program.investment);
    const categoryMatch =
      activeFilters.category.length === 0 ||
      activeFilters.category.includes(program.category);

    return levelMatch && durationMatch && investmentMatch && categoryMatch;
  });
}

// Render Functions
function renderPrograms(programsToRender) {
  if (programsToRender.length === 0) {
    programsList.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>No programs found</h3>
                <p>Try adjusting your filters</p>
            </div>
        `;
    return;
  }

  programsList.innerHTML = programsToRender
    .map(
      (program) => `
        <div class="program-card" id="card-${program.title.replace(
          /[^a-zA-Z0-9]/g,
          "-"
        )}">
            <div class="program-header">
                <h2 class="program-title">${program.title}</h2>
                <p class="program-department">${program.department}</p>
            </div>
            <div class="program-body">
                <p class="program-overview">${program.overview}</p>
                
                <div class="program-details">
                    <div class="detail-item">
                        <span class="detail-label">Level</span>
                        <span class="detail-value">${program.level}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Duration</span>
                        <span class="detail-value">${program.timing}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Credits</span>
                        <span class="detail-value">${program.ects}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Class Size</span>
                        <span class="detail-value">${program.classSize}</span>
                    </div>
                </div>
                
                <div class="program-tags">
                    <span class="tag highlight">${program.category}</span>
                    <span class="tag">${program.investment}</span>
                </div>
                
                <div class="program-footer">
                    <button class="btn btn-primary" onclick="toggleDetails('${program.title.replace(
                      /'/g,
                      "\\'"
                    )}')">View Details & Contact</button>
                </div>
            </div>
            
            <div class="program-expanded" id="details-${program.title.replace(
              /[^a-zA-Z0-9]/g,
              "-"
            )}" style="display: none;">
                <div class="expanded-content">
                    ${
                      program.structure
                        ? `
                    <div class="details-section">
                        <h3>Structure & Learning Approach</h3>
                        <p>${program.structure}</p>
                    </div>
                    `
                        : ""
                    }
                    
                    <div class="details-section">
                        <h3>Collaboration & Impact</h3>
                        <p>${program.involvement}</p>
                    </div>
                    
                    ${
                      program.whoShouldJoin
                        ? `
                    <div class="details-section">
                        <h3>Who Should Get Involved?</h3>
                        <p>${program.whoShouldJoin}</p>
                    </div>
                    `
                        : ""
                    }
                    
                    ${
                      program.suitableChallenges
                        ? `
                    <div class="details-section">
                        <h3>What Types of Challenges Are Suitable?</h3>
                        <p>${program.suitableChallenges}</p>
                    </div>
                    `
                        : ""
                    }
                    
                    <div class="details-section">
                        <h3>Previous Partners</h3>
                        <p>${program.partners}</p>
                    </div>
                    
                    ${
                      program.contact
                        ? `
                    <div class="details-section">
                        <h3>Contact</h3>
                        <p>Program Coordinator: <strong>${program.contact}</strong></p>
                        <p>To get in touch about this program, please <a href="https://forms.gle/yuZ5gAva4PSL7ciG7" target="_blank" rel="noopener noreferrer" class="contact-link">fill out our contact form</a>.</p>
                    </div>
                    `
                        : ""
                    }
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

function updateResultsCount(count) {
  resultsCount.textContent = count;
}

function updateFilterCount() {
  const totalFilters = Object.values(activeFilters).reduce(
    (sum, arr) => sum + arr.length,
    0
  );
  filterCount.textContent = totalFilters;

  if (totalFilters > 0) {
    filterCount.classList.add("active");
  } else {
    filterCount.classList.remove("active");
  }
}

function renderActiveFilters() {
  const allFilters = [];

  Object.entries(activeFilters).forEach(([type, values]) => {
    values.forEach((value) => {
      allFilters.push({ type, value });
    });
  });

  if (allFilters.length === 0) {
    activeFiltersContainer.innerHTML = "";
    return;
  }

  activeFiltersContainer.innerHTML = allFilters
    .map(
      (filter) => `
        <div class="filter-tag">
            <span>${filter.value}</span>
            <button onclick="removeFilter('${
              filter.type
            }', '${filter.value.replace(/'/g, "\\'")}')">×</button>
        </div>
    `
    )
    .join("");
}

function removeFilter(type, value) {
  activeFilters[type] = activeFilters[type].filter((v) => v !== value);

  const filteredPrograms = filterPrograms();
  renderPrograms(filteredPrograms);
  updateResultsCount(filteredPrograms.length);
  updateFilterCount();
  renderActiveFilters();
}

// Placeholder functions for interactions
function toggleDetails(programTitle) {
  const cardId = "details-" + programTitle.replace(/[^a-zA-Z0-9]/g, "-");
  const detailsElement = document.getElementById(cardId);
  const cardElement = document.getElementById(
    "card-" + programTitle.replace(/[^a-zA-Z0-9]/g, "-")
  );

  if (detailsElement && cardElement) {
    // Find the View Details button within this specific card
    const buttons = cardElement.querySelectorAll(".btn-primary");
    const detailsButton = Array.from(buttons).find(
      (btn) =>
        btn.textContent === "View Details & Contact" ||
        btn.textContent === "Close"
    );

    if (detailsElement.style.display === "none") {
      detailsElement.style.display = "block";
      if (detailsButton) {
        detailsButton.textContent = "Close";
      }
      // Smooth scroll to the expanded content
      setTimeout(() => {
        detailsElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    } else {
      detailsElement.style.display = "none";
      if (detailsButton) {
        detailsButton.textContent = "View Details & Contact";
      }
    }
  }
}

// Details Modal Functions
function openDetailsModal(program) {
  detailsTitle.textContent = program.title;

  detailsBody.innerHTML = `
    <div class="details-section">
      <h3>Overview</h3>
      <p>${program.overview}</p>
    </div>
    
    <div class="details-section">
      <h3>Program Information</h3>
      <div class="details-grid">
        <div class="details-item">
          <strong>Department</strong>
          <span>${program.department}</span>
        </div>
        <div class="details-item">
          <strong>Category</strong>
          <span>${program.category}</span>
        </div>
        <div class="details-item">
          <strong>Level</strong>
          <span>${program.level}</span>
        </div>
        <div class="details-item">
          <strong>Credits</strong>
          <span>${program.ects}</span>
        </div>
        <div class="details-item">
          <strong>Timing</strong>
          <span>${program.timing}</span>
        </div>
        <div class="details-item">
          <strong>Class Size</strong>
          <span>${program.classSize}</span>
        </div>
        <div class="details-item">
          <strong>Investment</strong>
          <span>${program.investment}</span>
        </div>
        <div class="details-item">
          <strong>Duration</strong>
          <span>${program.duration}</span>
        </div>
      </div>
    </div>
    
    <div class="details-section">
      <h3>Industry Involvement</h3>
      <p>${program.involvement}</p>
    </div>
    
    <div class="details-section">
      <h3>Previous Partners</h3>
      <p>${program.partners}</p>
    </div>
    
    ${
      program.contact
        ? `
    <div class="details-section">
      <h3>Contact</h3>
      <p>${program.contact}</p>
    </div>
    `
        : ""
    }
  `;

  detailsModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDetailsModal() {
  detailsModal.classList.remove("active");
  document.body.style.overflow = "";
}
