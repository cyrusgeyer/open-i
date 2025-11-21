// Program Data
const programs = [
  {
    title: "Assistive Technology Challenge (ATC)",
    overview:
      "An applied challenge for assistive technology solutions connecting students with industry partners to co-design accessible tech.",
    category: ["Innovation & Engineering", "Healthcare"],
    investment: 0,
    eligiblePartners: ["Companies", "NGO", "Start Ups"],
    engagementType: ["Challenge", "Project Collaborator"],
    duration: 6,
    classSize: 25,
    contact: "Camille Pescatore, Prof. Dr. Roger Gassert",
    department:
      "Rehabilitation Engineering Laboratory, Department of Health Sciences and Technology (D-HEST)",
    level: "Bachelor & Master",
    challengeType:
      "Co-create inclusive technologies that improve everyday life",
    programStructure:
      "Students work in interdisciplinary teams (engineering, health sciences, design). Includes workshops on user-centered design, design thinking, and rapid prototyping. Weekly supervision and mentoring by teaching assistants and lab staff. Access to ETH makerspaces (3D printing, laser cutting, prototyping tools). Culminates in a short documentary video presenting each team's solution.",
    collaborationOutcomes:
      "The ATC bridges engineering, healthcare, and user experience by engaging students with real individuals and organisations in assistive technology. Its approach offers companies, foundations, and NGOs a clear window into how user-centred, socially relevant innovation emerges — and can inspire new ways of thinking about inclusive design.",
    previousPartners: [
      "Access for All",
      "Mathilde Escher Stiftung",
      "Logitech",
      "local rehabilitation centers",
    ],
    ects: 6,
  },
  {
    title: "Science to Medicine - Impacting Patient Lives",
    overview:
      "Lecture series showing how pharmaceutical R&D turns discoveries into patient-impacting medical advances.",
    category: ["Healthcare"],
    investment: 0,
    eligiblePartners: ["Companies"],
    engagementType: ["Educational Contributor"],
    duration: 6,
    classSize: 50,
    contact: "Simone Zuber (Coordinator of Studies D-BSSE)",
    department: "Health Sciences and Technology (D-HEST)",
    level: "Master",
    challengeType: "Translate scientific discoveries into medical innovation",
    programStructure:
      "Lecturers: Experts from ETH and Roche across diverse R&D disciplines. Learning format: Weekly lectures. Semester assignment: Students select one of ten profiled biotech companies and prepare an analytical report evaluating whether the company would represent a promising acquisition target from a pharmaceutical perspective.",
    collaborationOutcomes:
      "The course builds on ETH's educational partnership with Roche, linking academic knowledge with industrial practice. Students gain real-world insight into how pharmaceutical R&D decisions are made and how science translates into patient benefit. The collaboration strengthens ETH's role as a talent incubator and advances Roche's mission to connect with future innovators.",
    previousPartners: ["Roche"],
    ects: 2,
  },
  {
    title: "Strategic Foresight for Sustainable Futures",
    overview:
      "Methods for anticipating change and shaping sustainable futures through scenario methods and foresight tools.",
    category: ["Energy & Sustainability", "Business & Management"],
    investment: 0,
    eligiblePartners: ["Companies", "Governmental Organizations"],
    engagementType: ["Advisory Partner", "Educational Contributor"],
    duration: 6,
    classSize: 20,
    contact: "Dr. Johannes Heck",
    department: "Management, Technology, and Economics (D-MTEC)",
    level: "Master",
    challengeType: "Anticipate change and shape sustainable futures",
    programStructure:
      "Combines lectures, group work, and applied foresight case studies. Tools include trend analysis, horizon scanning, and scenario building. External partners provide real-world context rather than fixed project briefs. Culminates in a presentation and discussion of scenario-based insights.",
    collaborationOutcomes:
      "The course enables organisations to strengthen their foresight capabilities and long-term innovation strategies. By engaging as contextual partners, companies and public institutions gain early insight into sustainability trends, system interdependencies, and emerging opportunities. They also receive student-led analyses on sector-relevant challenges, strategic impulses for innovation and risk management, and exposure to advanced methods for trend monitoring and scenario planning.",
    previousPartners: [
      "Coop",
      "Swiss Federal Office of Energy",
      "AMAG",
      "Siemens",
    ],
    ects: 3,
  },
  {
    title: "Case Studies: Energy Systems & Technology",
    overview:
      "Master course where students tackle real-world energy sector cases across two semesters; companies provide cases and mentorship.",
    category: ["Energy & Sustainability", "Business & Management"],
    investment: 3000,
    eligiblePartners: ["Companies"],
    engagementType: ["Project Collaborator", "Advisory Partner"],
    duration: 12,
    classSize: 40,
    contact: "Dr. Katharina Bosina, Prof. Christian Schaffner",
    department: "Energy Science Center (ESC)",
    level: "Master",
    challengeType: "Design solutions for a sustainable energy future",
    programStructure:
      "Runs over two consecutive semesters with three main milestones: Kick-off and case introduction, Interim presentation and methodology review, Final presentation and awards event. Teams of 5–7 students work on one company-defined challenge under supervision of ESC faculty and teaching assistants. Industry mentors provide feedback and domain expertise throughout the process. Deliverables include detailed project reports, data analyses, and strategic recommendations.",
    collaborationOutcomes:
      "The program provides a structured interface between ETH Zurich and the Swiss energy industry, generating mutual value through applied research and talent development. Companies that submit a challenge gain access to academic expertise and motivated interdisciplinary teams who develop data-driven insights and concrete solution concepts for their sustainability questions. They also benefit from early exposure to emerging talent in energy systems and closer links within the ETH energy innovation ecosystem.",
    previousPartners: ["Axpo", "Swissgrid", "ewz", "EKZ", "Siemens", "BKW"],
    ects: 4,
  },
  {
    title: "Energy Now!",
    overview:
      "An innovation accelerator (3 months) connecting students and industry to co-create prototypes for the energy transition.",
    category: [
      "Energy & Sustainability",
      "Innovation & Engineering",
      "Business & Management",
    ],
    investment: 0,
    eligiblePartners: ["Companies", "NGO"],
    engagementType: ["Challenge", "Project Collaborator"],
    duration: 3,
    classSize: 60,
    contact: "Dr. Katharina Bosina, Prof. Christian Schaffner",
    department: "Energy Science Center (ESC)",
    level: "Bachelor & Master",
    challengeType:
      "Accelerate Switzerland's energy transition through open innovation",
    programStructure:
      "Open call for participation — students and researchers self-organize around challenges submitted by industry and public partners. Runs over three months, starting with a Kick-off event and ending with a public Final Pitch Night. Two key workshops: Design Thinking & Ideation, and Presentation & Impact Communication. Continuous coaching and mentoring provided by ESC experts and facilitators. Outputs include early-stage prototypes, business concepts, or implementation ideas.",
    collaborationOutcomes:
      "Energy Now! offers a low-barrier entry point for companies to engage with ETH Zurich and test new ideas in an open innovation environment. The program provides access to interdisciplinary talent, rapid ideation, and early exploration of solutions that would be difficult to pursue within traditional R&D structures. Partners gain fresh perspectives on energy-transition challenges, early validation of concepts, increased visibility within ETH's innovation ecosystem, and direct contact with emerging talent.",
    previousPartners: ["Axpo", "BKW", "Swissgrid", "ewz", "EKZ", "Alpiq"],
    ects: 0,
  },
  {
    title: "Transdisciplinary Case Study (TDCS)",
    overview:
      "Semester-long course co-created with regional stakeholders addressing sustainability challenges through fieldwork and participatory research.",
    category: [
      "Energy & Sustainability",
      "Innovation & Engineering",
      "Business & Management",
    ],
    investment: 0,
    eligiblePartners: ["Governmental Organizations", "NGO", "Companies"],
    engagementType: ["Project Collaborator", "Community / Network Partner"],
    duration: 6,
    classSize: 25,
    contact: "Dr. Benjamin Hofmann",
    department:
      "Transdisciplinarity Lab (TdLab), Department of Environmental Systems Science (D-USYS)",
    level: "Master",
    challengeType: "Co-create solutions for sustainability challenges",
    programStructure:
      "Semester-long course with weekly sessions and field excursions. Students collaborate in small groups to co-develop research questions with local actors. Fieldwork includes interviews, participatory workshops, and stakeholder feedback sessions. Outputs combine scientific report with applied or creative elements — such as videos, visualizations, or practical tools rather than traditional reports. Collaboration with ZHdK's Master in Transdisciplinarity fosters exchange between scientific and artistic approaches. ETH ethics approval is mandatory prior to data collection.",
    collaborationOutcomes:
      "TDCS strengthens ETH's engagement with society by linking scientific research and local policy and practice. It builds bridges between students, researchers, and regional stakeholders — creating mutual learning and tangible outcomes that support local sustainability solutions.",
    previousPartners: [
      "Canton Graubünden",
      "FH Graubünden/Surselva Lab",
      "regional administration",
      "municipalities",
      "NGOs",
      "tourism and agriculture associations",
      "planning bureaus",
    ],
    ects: 7,
  },
  {
    title: "Umweltproblemlösen",
    overview:
      "Year-long transdisciplinary project-based learning for first-year Environmental Science students working with local partners.",
    category: [
      "Energy & Sustainability",
      "Innovation & Engineering",
      "Business & Management",
    ],
    investment: 0,
    eligiblePartners: ["Governmental Organizations", "NGO"],
    engagementType: ["Project Collaborator", "Community / Network Partner"],
    duration: 12,
    classSize: 100,
    contact: "Marlene Mader, Prof. Dr. Christian Pohl",
    department:
      "Transdisciplinarity Lab (TdLab), Department of Environmental Systems Science (D-USYS)",
    level: "Bachelor",
    challengeType:
      "Teach systems thinking through real-world environmental challenges",
    programStructure:
      "Year-long program consisting of: UPL I – Case Study & Analysis: Students research a regional sustainability issue (e.g., waste management, energy strategy, biodiversity). Synthesis Week: Integration of findings, identification of problems and proposals of solutions using systems and design thinking. UPL II – Project Development: Interdisciplinary teams develop and test sustainability measures. UPL III (optional): Teams can implement their solutions with local partners. Methods: SystemQ (Vester model), stakeholder mapping, design thinking. Culminates in the Market of Measures, a public event where students present their results to stakeholders.",
    collaborationOutcomes:
      "UPL creates a unique interface between academic learning and real-world environmental practice. Regional and industry partners co-develop case studies and provide feedback throughout the process, ensuring both societal relevance and early exposure of students to stakeholder collaboration. Partners gain scientifically grounded analyses of local sustainability challenges, fresh perspectives on environmental and systemic interdependencies, and practical recommendations or prototypes developed by student teams.",
    previousPartners: [
      "Eberhard Recycling",
      "Canton Zurich",
      "regional administrations",
      "NGOs",
    ],
    ects: 10,
  },
  {
    title: "World Food System Summer School",
    overview:
      "Two-week intensive exploring sustainable and equitable food systems with field visits and prototyping.",
    category: [
      "Energy & Sustainability",
      "Innovation & Engineering",
      "Business & Management",
    ],
    investment: 0,
    eligiblePartners: ["NGO", "Companies"],
    engagementType: ["Project Collaborator", "Educational Contributor"],
    duration: 0.5,
    classSize: 40,
    contact: "Monika Siegrist",
    department:
      "World Food System Center (WFSC), Department of Environmental Systems Science (D-USYS)",
    level: "Master",
    challengeType: "Design sustainable and equitable food systems",
    programStructure:
      "Combines lectures, field visits, stakeholder interviews, and prototyping workshops. Participants work in interdisciplinary teams on three real-world case studies co-developed with partner organizations. Guided by the design thinking process. Integrates communication and storytelling training through the ETH Media & Methods Lab. Final outputs are creative and actionable — such as podcasts, comics, infographics, or simulation tools.",
    collaborationOutcomes:
      "The program creates a platform for collaboration between academia, industry, and civil society to accelerate innovation in sustainable food systems. Partners are involved throughout the process — co-developing case studies, hosting field visits, and contributing feedback on emerging ideas. Through this engagement, they gain fresh interdisciplinary perspectives on challenges within their value chains, early-stage prototypes or communication tools that support sustainable transformation, and access to a diverse network of motivated students and professionals.",
    previousPartners: [
      "Biogarten Lieli",
      "Hoflabor",
      "Swiss Platform for Sustainable Cocoa (SWISSCO)",
      "Iconomix",
    ],
    ects: 4,
  },
  {
    title: "Data Science Lab",
    overview:
      "One-semester lab connecting students with partners to tackle data-driven projects and prototypes.",
    category: ["Data Science & AI", "Innovation & Engineering"],
    investment: 0,
    eligiblePartners: ["Companies", "Start Ups"],
    engagementType: ["Project Collaborator", "Challenge"],
    duration: 6,
    classSize: 60,
    contact: "Prof. Alexander Illic, Arnout Devos",
    department: "ETH AI Center & Department of Computer Science (D-INFK)",
    level: "Master",
    challengeType: "Leverage data & AI to solve real-world challenges",
    programStructure:
      "Students form small interdisciplinary teams working on one real-world project. Projects are defined and co-supervised by ETH research labs or AI Center industry partners. Course duration: one semester (14 ECTS), with regular progress meetings and mentoring. Typical topics include: predictive maintenance, language models, image recognition, medical data analysis, or sustainability analytics. Culminates in final presentations and technical reports shared with project partners.",
    collaborationOutcomes:
      "The Data Science Lab provides a unique opportunity for companies and research groups to test data-driven ideas in collaboration with ETH students. The program serves as a bridge between cutting-edge research and practical application — helping organizations explore how AI and machine learning can generate tangible business or societal value.",
    previousPartners: [
      "Swisscom",
      "Rapidata",
      "ETH spin-offs",
      "AI Center research groups",
    ],
    ects: 14,
  },
  {
    title: "UN Student Team",
    overview:
      "Extra-curricular student teams working with UN agencies to co-develop practical technology solutions for global challenges.",
    category: ["Data Science & AI", "Energy & Sustainability"],
    investment: 0,
    eligiblePartners: ["Governmental Organizations", "NGO"],
    engagementType: ["Project Collaborator", "Community / Network Partner"],
    duration: 10,
    classSize: 25,
    contact: "Dr. Sascha Langenbach",
    department:
      "Center for Security Studies (CSS); Department of Humanities, Social and Political Sciences",
    level: "Bachelor & Master",
    challengeType: "Apply science and technology to global challenges",
    programStructure:
      "Open to Bachelor, Master, and Doctoral students across all ETH departments. Projects last up to 10 months, typically involving six students per group. Focus areas include peace and security, humanitarian aid, and sustainable development. Core outputs: data analysis tools, software prototypes, and conceptual policy reports. Supported by ETH mentors and UN liaisons; includes workshops, retreats, and field visits (e.g., International Geneva).",
    collaborationOutcomes:
      "The UN Student Team offers UN agencies and programs direct access to ETH expertise and student innovation capacity. By pairing global challenges with technical excellence, the initiative strengthens the bridge between academia and multilateral institutions. Through this collaboration, partners receive tailored analytical tools, data visualizations, and digital prototypes that address concrete UN needs, along with evidence-based insights that support sustainable development and humanitarian decision-making. They also gain access to ETH's interdisciplinary talent pool in engineering, data science, and policy analysis.",
    previousPartners: ["UN OCHA", "UNHCR", "UNDL"],
    ects: 0,
  },
  {
    title: "Entrepreneurial Leadership Seminar (ELS)",
    overview:
      "Intensive seminar connecting students with senior management to address strategic transformation and innovation challenges.",
    category: ["Innovation & Engineering"],
    investment: 0,
    eligiblePartners: ["Companies"],
    engagementType: ["Educational Contributor", "Advisory Partner"],
    duration: 6,
    classSize: 18,
    contact: "Dr. Isabel Spicker",
    department: "Department of Management, Technology, and Economics (D-MTEC)",
    level: "Master",
    challengeType:
      "Develop leadership and innovation strategies for real business impact",
    programStructure:
      "Teams of Master and MAS students work on a strategic challenge defined by a corporate partner together with the lecturer. Intensive collaboration through executive interviews, workshops, and coaching sessions. Academic supervision provided by ETH professors and lecturers in coaching sessions on problem definition/solving, process improvement, innovation, strategy and management. Final presentations delivered to top management, combining analytical rigor and actionable insights. Core competencies: strategic thinking, project management, leadership, and innovation execution.",
    collaborationOutcomes:
      "The Entrepreneurial Leadership Seminar gives companies a low to medium threshold opportunity to engage with ETH's emerging leadership talent and gain external perspectives on strategic challenges. Student teams act as an innovation task force, translating research-based insights into practical value while strengthening links to ETH's leadership and innovation community.",
    previousPartners: [
      "Georg Fischer",
      "Roche",
      "Stadler",
      "Hirslanden",
      "Swisscom",
      "AWS",
    ],
    ects: 4,
  },
  {
    title: "MTEC Industry Project",
    overview:
      "Core experiential learning module where master students work on company-defined projects (4 months).",
    category: ["Business & Management"],
    investment: 0,
    eligiblePartners: ["Companies"],
    engagementType: ["Project Collaborator", "Sponsor"],
    duration: 4,
    classSize: null,
    contact: "Prof. Bart Clarysse, Carrie Joda Lyn",
    department: "Department of Management, Technology, and Economics (D-MTEC)",
    level: "Master",
    challengeType:
      "Connect management, technology, and innovation through real-world collaboration",
    programStructure:
      "Students form teams of 2–3 to work on a company-defined project. Projects typically run for four months, part-time, alongside regular coursework. ETH ensures standardized quality, contracts, and supervision through the D-MTEC administration. Professors act as academic mentors; company representatives guide and evaluate project progress. Deliverables include project reports, presentations, and strategic recommendations.",
    collaborationOutcomes:
      "The MTEC Industry Project offers companies a structured framework to collaborate with ETH Zurich on real innovation and management challenges. It enables organisations to explore new ideas, test solution concepts, and tap into analytical talent while contributing to the education of future leaders in technology and management. Through tailored analyses, research-informed perspectives, and direct interaction with academic mentors, partners gain actionable insights and closer links to ETH's innovation ecosystem.",
    previousPartners: [],
    ects: 12,
  },
  {
    title: "Exploration Lab",
    overview:
      "A flagship program for prototyping and feasibility exploration (4-6 months) with partner-funded collaboration.",
    category: ["Data Science & AI", "Innovation & Engineering"],
    investment: 50000,
    eligiblePartners: ["Companies"],
    engagementType: [
      "Project Collaborator",
      "Sponsor",
      "Infrastructure / Facilities Partner",
    ],
    duration: 6,
    classSize: 20,
    contact: "Kai von Petersdorff, Josseline Ross",
    department:
      "Originating from the Department of Mechanical and Process Engineering and supported by the Vice Presidency for Knowledge Transfer and Corporate Relations (VPWW)",
    level: "Master",
    challengeType:
      "De-risk innovation — through exploration, prototyping, and engineering excellence",
    programStructure:
      "Teams of 4 students tackle several partner-defined challenges under close ETH coach supervision. Regular milestone events: Methodology Lectures & Basecamp, Kick-off Day, All-Hands Hackathons, Partner Exchange Day, and a Vernissage as a final event. Focus on lean de-risking, iterative design, prototyping, and feasibility validation. Results are presented to all partners and evaluated for further development or transfer.",
    collaborationOutcomes:
      "The Exploration Lab offers companies a structured, low-risk environment to investigate emerging technologies and innovation opportunities together with ETH Zurich. It serves as a hands-on testbed where industrial questions are explored through academic expertise, engineering methods, and student-driven experimentation.",
    previousPartners: [
      "V-ZUG",
      "Bossard",
      "Bühler",
      "VAT",
      "Sauber Motorsport",
      "Siemens",
    ],
    ects: 0,
  },
  {
    title: "Space Systems",
    overview:
      "Program enabling students to design and analyse complete space missions with industry datasets and mission concepts.",
    category: [
      "Data Science & AI",
      "Innovation & Engineering",
      "Business & Management",
    ],
    investment: 0,
    eligiblePartners: ["Companies", "Start Ups"],
    engagementType: ["Project Collaborator", "Advisory Partner"],
    duration: 12,
    classSize: 45,
    contact: "Dr. Simon Stähler",
    department: "Department of Earth and Planetary Sciences",
    level: "Master",
    challengeType:
      "Engineer the next generation of space mission solutions — from concept to orbit",
    programStructure:
      "1st Semester – Mission Design (Core Course 1): Mandatory 8-ECTS module within the 'Develop Mission' block (15 ECTS total). Students develop a full space mission concept driven by scientific or commercial objectives. Annual call for mission ideas in July: ~35 proposals submitted; 10 shortlisted; 6 chosen by student teams. Deliverables: 5–6-page technical and strategic mission design reports. 2nd Semester – Data Analysis from Space: Focus on Python-based data analysis, modelling, and simulation. Students work with industrial datasets that are under-analysed or newly released. Connects to the mission design phase by teaching data verification and interpretation. 3rd & 4th Semester – Commercial Space Product Development: Industry-linked master's theses arising from prior missions or new partner proposals. Emphasis on prototyping, system testing, and feasibility assessment.",
    collaborationOutcomes:
      "The Space Systems program connects academic excellence in space engineering with real industrial challenges across the full mission lifecycle. It provides a structured framework in which companies can propose mission concepts, contribute datasets, or initiate applied research questions that students develop into technical and strategic solutions.",
    previousPartners: [
      "Airbus Defense & Space",
      "Beyond Gravity",
      "Dufour Aerospace",
      "dphi.space",
    ],
    ects: 15,
  },
  {
    title: "PBL Flagship Projects",
    overview:
      "Large-scale project-based learning across engineering clusters connecting companies with student teams for prototyping and applied R&D.",
    category: [
      "Data Science & AI",
      "Energy & Sustainability",
      "Innovation & Engineering",
      "Healthcare",
    ],
    investment: 0,
    eligiblePartners: ["Companies", "Governmental Organizations"],
    engagementType: ["Project Collaborator", "Sponsor"],
    duration: null,
    classSize: null,
    contact: "Dr. Michaele Magno",
    department:
      "Center for Project-Based Learning (PBL), Department of Information Technology and Electrical Engineering (D-ITET)",
    level: "Bachelor & Master",
    challengeType: "Scale hands-on engineering and innovation across ETH",
    programStructure:
      "Integrates multiple learning pathways: course modules, thesis projects, hackathons, and independent student initiatives. Organized into four thematic clusters: Information & Communication, Energy, Robotics, and Embedded Systems. Supported by the Innovedum Fund and ETH internal grants. Students work on applied research and prototyping challenges aligned with cutting-edge technology fields. Faculty and industry mentors provide supervision, ensuring scientific depth and practical relevance.",
    collaborationOutcomes:
      "The PBL Flagship Projects create a bridge between education, research, and industrial application. They allow companies and institutions to engage early with emerging technologies, pilot ideas, and collaborate with highly skilled engineering teams within ETH's innovation ecosystem.",
    previousPartners: [],
    ects: 0,
  },
];

// Active Filters
let activeFilters = {
  category: [],
  eligiblePartners: [],
  duration: [],
  classSize: [],
  investment: [],
  level: [],
};
// DOM Elements
const filterBtn = document.getElementById("filterBtn");
const filterModal = document.getElementById("filterModal");
const closeModal = document.getElementById("closeModal");
const applyFilters = document.getElementById("applyFilters");
const clearFilters = document.getElementById("clearFilters");
const programsList = document.getElementById("programsList");
const resultsCount = document.getElementById("resultsCount");
const filterCount = document.getElementById("filterCount");
const activeFiltersContainer = document.getElementById("activeFilters");

// Details Modal Elements
const detailsModal = document.getElementById("detailsModal");
const closeDetails = document.getElementById("closeDetails");
const closeDetailsBtn = document.getElementById("closeDetailsBtn");
const detailsTitle = document.getElementById("detailsTitle");
const detailsBody = document.getElementById("detailsBody");

// Helper Functions
function formatDuration(months) {
  if (months < 1) {
    const weeks = Math.round(months * 4);
    return `${weeks} week${weeks !== 1 ? "s" : ""}`;
  } else if (months === 1) {
    return "1 month";
  } else if (months < 12) {
    return `${months} months`;
  } else {
    return "Continuous";
  }
}

function getCategoryClass(category) {
  if (category.includes("Healthcare")) return "healthcare";
  if (category.includes("Data Science") || category.includes("AI")) return "ai";
  if (category.includes("Innovation") || category.includes("Engineering"))
    return "innovation";
  if (category.includes("Business") || category.includes("Management"))
    return "management";
  if (category.includes("Energy") || category.includes("Sustainability"))
    return "sustainability";
  return "highlight"; // default
}

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
    category: [],
    eligiblePartners: [],
    duration: [],
    classSize: [],
    investment: [],
    level: [],
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
    category: [],
    eligiblePartners: [],
    duration: [],
    classSize: [],
    investment: [],
    level: [],
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

    // For category, check if any active filter is contained in the program's category array
    const categoryMatch =
      activeFilters.category.length === 0 ||
      activeFilters.category.some(
        (filter) => program.category && program.category.includes(filter)
      );

    // For eligiblePartners, check if any active filter is in the program's eligiblePartners array
    const eligiblePartnersMatch =
      activeFilters.eligiblePartners.length === 0 ||
      activeFilters.eligiblePartners.some(
        (filter) =>
          program.eligiblePartners && program.eligiblePartners.includes(filter)
      );

    // For duration, map filter labels to numeric ranges
    const durationMatch =
      activeFilters.duration.length === 0 ||
      activeFilters.duration.some((filter) => {
        if (filter === "Short (up to 1 month)") {
          return program.duration <= 1;
        } else if (filter === "Medium (1-6 months)") {
          return program.duration > 1 && program.duration <= 6;
        } else if (filter === "Long (6+ months)") {
          return program.duration > 6;
        }
        return false;
      });

    // For classSize (Talent Access), map filter labels to numeric ranges
    const classSizeMatch =
      activeFilters.classSize.length === 0 ||
      activeFilters.classSize.some((filter) => {
        if (filter === "Small (1-25)") {
          return program.classSize >= 1 && program.classSize <= 25;
        } else if (filter === "Medium (26-50)") {
          return program.classSize >= 26 && program.classSize <= 50;
        } else if (filter === "Large (51+)") {
          return program.classSize >= 51;
        }
        return false;
      });

    // For investment, handle cumulative options (below 5k includes none, over 5k includes below 5k)
    const investmentMatch =
      activeFilters.investment.length === 0 ||
      activeFilters.investment.some((filter) => {
        if (filter === "None") {
          return program.investment === 0;
        } else if (filter === "Below CHF 5k") {
          return program.investment < 5000;
        } else if (filter === "Over CHF 5k") {
          return program.investment >= 0; // All programs since it includes everything
        }
        return false;
      });

    // For level, handle "Bachelor & Master" and "Extra-curricular" (empty level)
    const levelMatch =
      activeFilters.level.length === 0 ||
      activeFilters.level.some((filter) => {
        if (!program.level && filter === "Extra-curricular") return true;
        if (!program.level) return false;
        return program.level.includes(filter);
      });

    return (
      categoryMatch &&
      eligiblePartnersMatch &&
      durationMatch &&
      classSizeMatch &&
      investmentMatch &&
      levelMatch
    );
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
                ${
                  program.department
                    ? `<p class="program-department">${program.department}</p>`
                    : ""
                }
            </div>
            <div class="program-body">
                <p class="program-overview">${program.overview}</p>
                
                <div class="program-details">
                    ${
                      program.level
                        ? `
                    <div class="detail-item">
                        <span class="detail-label">Level</span>
                        <span class="detail-value">${program.level}</span>
                    </div>
                    `
                        : ""
                    }
                    <div class="detail-item">
                        <span class="detail-label">Duration</span>
                        <span class="detail-value">${formatDuration(
                          program.duration
                        )}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Talent Reach</span>
                        <span class="detail-value">${
                          program.classSize
                            ? program.classSize + " students"
                            : "N/A"
                        }</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Financial Contribution</span>
                        <span class="detail-value">${
                          program.investment === 0
                            ? "No cost"
                            : "CHF " + program.investment.toLocaleString()
                        }</span>
                    </div>
                </div>
                
                <div class="program-tags">
                    ${program.category
                      .map(
                        (cat) =>
                          `<span class="tag ${getCategoryClass(
                            cat
                          )}">${cat}</span>`
                      )
                      .join("")}
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
                      program.challengeType
                        ? `
                    <div class="details-section">
                        <h3>What challenges are suitable for this programme?</h3>
                        <p><em>${program.challengeType}</em></p>
                    </div>
                    `
                        : ""
                    }
                    
                    <div class="details-section">
                        <h3>Who can get involved?</h3>
                        <p>${program.eligiblePartners.join(", ")}</p>
                    </div>
                    
                    <div class="details-section">
                        <h3>How can you participate?</h3>
                        <p>${program.engagementType.join(", ")}</p>
                    </div>
                    
                    ${
                      program.collaborationOutcomes
                        ? `
                    <div class="details-section">
                        <h3>What outcomes can you expect?</h3>
                        <p>${program.collaborationOutcomes}</p>
                    </div>
                    `
                        : ""
                    }
                    
                    ${
                      program.programStructure
                        ? `
                    <div class="details-section">
                        <h3>Program Structure</h3>
                        <p>${program.programStructure}</p>
                    </div>
                    `
                        : ""
                    }
                    
                    ${
                      program.previousPartners &&
                      program.previousPartners.length > 0
                        ? `
                    <div class="details-section">
                        <h3>Previous Partners</h3>
                        <p>${program.previousPartners.join(", ")}</p>
                    </div>
                    `
                        : ""
                    }
                    
                    <div class="details-section">
                        <h3>Credits in ECTS</h3>
                        <p>${
                          program.ects > 0
                            ? program.ects + " Credits"
                            : "Extra curricular"
                        }</p>
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
          <strong>Talent Reach</strong>
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
