/*
 * HVAC Code Navigator — content data
 * ------------------------------------------------------------------
 * Everything the site shows lives in this file, so you can add or
 * correct entries without touching the app code.
 *
 *  CODES  : the library. Each entry is one code, standard, regulation
 *           or guideline. `type` is one of: code | standard | regulation | guideline
 *           `region` is one of: US | CA | INTL
 *  JOBS   : the job finder. Each job lists the CODES ids that apply,
 *           with "why" it applies and "look" (where to look inside it).
 *
 * Section/chapter numbers move between editions — always confirm against
 * the edition your jurisdiction has adopted.
 */

const PUBLISHERS = {
  ICC:    { name: "International Code Council (ICC)", url: "https://codes.iccsafe.org/" },
  NFPA:   { name: "National Fire Protection Association (NFPA)", url: "https://www.nfpa.org/codes-and-standards" },
  ASHRAE: { name: "ASHRAE", url: "https://www.ashrae.org/technical-resources/standards-and-guidelines" },
  IAPMO:  { name: "IAPMO", url: "https://www.iapmo.org/" },
  ACCA:   { name: "Air Conditioning Contractors of America (ACCA)", url: "https://www.acca.org/standards" },
  SMACNA: { name: "SMACNA", url: "https://www.smacna.org/" },
  UL:     { name: "UL Standards & Engagement", url: "https://www.shopulstandards.com/" },
  ASME:   { name: "ASME", url: "https://www.asme.org/codes-standards" },
  AHRI:   { name: "AHRI", url: "https://www.ahrinet.org/" },
  ASCE:   { name: "ASCE", url: "https://www.asce.org/" },
  EPA:    { name: "U.S. Environmental Protection Agency", url: "https://www.epa.gov/section608" },
  DOE:    { name: "U.S. Department of Energy", url: "https://www.energy.gov/eere/buildings/appliance-and-equipment-standards-program" },
  OSHA:   { name: "OSHA", url: "https://www.osha.gov/laws-regs" },
  NEBB:   { name: "NEBB / AABC / TABB", url: "https://www.nebb.org/" },
  NRC:    { name: "National Research Council Canada", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
  CSA:    { name: "CSA Group", url: "https://www.csagroup.org/store/" },
  ECCC:   { name: "Environment and Climate Change Canada", url: "https://www.canada.ca/en/environment-climate-change.html" },
  ISO:    { name: "ISO / CEN", url: "https://www.iso.org/" },
  LOCAL:  { name: "Your state / city building department", url: "https://www.energycodes.gov/" }
};

const TYPES = {
  code:       { label: "Code",       plural: "Adopted codes",            blurb: "Model codes become law once a state or city adopts them." },
  standard:   { label: "Standard",   plural: "Referenced standards",     blurb: "Technical documents that codes point to — enforceable when referenced." },
  regulation: { label: "Regulation", plural: "Government regulations",   blurb: "Federal/state rules that apply no matter which codes are adopted." },
  guideline:  { label: "Guideline",  plural: "Design & best-practice guides", blurb: "Industry methods — often required by code for sizing or design." }
};

const REGIONS = { US: "United States", CA: "Canada", INTL: "International" };

const CODES = {
  /* ---------------- U.S. model codes ---------------- */
  imc: {
    short: "IMC", name: "International Mechanical Code", type: "code", region: "US", pub: "ICC",
    summary: "The most widely adopted mechanical code in the U.S. Covers design and installation of HVAC, exhaust, ducts, refrigeration and hydronic systems in buildings other than most one- and two-family homes.",
    topics: ["Ch. 3 General regulations (access, clearances, condensate)", "Ch. 4 Ventilation", "Ch. 5 Exhaust systems (incl. kitchen hoods)", "Ch. 6 Duct systems, fire/smoke dampers, smoke detection", "Ch. 7 Combustion air", "Ch. 8 Chimneys & vents", "Ch. 9 Specific appliances", "Ch. 10 Boilers, water heaters, pressure vessels", "Ch. 11 Refrigeration", "Ch. 12 Hydronic piping"]
  },
  ifgc: {
    short: "IFGC", name: "International Fuel Gas Code", type: "code", region: "US", pub: "ICC",
    summary: "Covers natural gas and propane piping, appliance installation, venting and combustion air for gas-fired equipment.",
    topics: ["Ch. 3 General (incl. combustion air, clearances)", "Ch. 4 Gas piping sizing, materials, testing", "Ch. 5 Chimneys & vents", "Ch. 6 Specific appliances (furnaces, boilers, unit heaters)"]
  },
  irc: {
    short: "IRC", name: "International Residential Code (Mechanical & Fuel Gas chapters)", type: "code", region: "US", pub: "ICC",
    summary: "Applies to one- and two-family dwellings and townhouses up to three stories. Its own mechanical (M) and fuel gas (G) chapters take the place of the IMC/IFGC for these homes.",
    topics: ["Ch. 11 Energy efficiency (mirrors IECC residential)", "Ch. 13 General mechanical requirements", "Ch. 14 Heating & cooling equipment (M1401.3 sizing per ACCA Manual J/S)", "Ch. 15 Exhaust systems", "Ch. 16 Duct systems", "Ch. 17 Combustion air", "Ch. 18 Chimneys & vents", "Ch. 20–21 Boilers & hydronics", "Ch. 24 Fuel gas"]
  },
  iecc: {
    short: "IECC", name: "International Energy Conservation Code", type: "code", region: "US", pub: "ICC",
    summary: "Minimum energy efficiency for buildings: equipment efficiency, controls, duct insulation/sealing/testing, ventilation and economizers. Commercial buildings may comply via ASHRAE 90.1 instead.",
    topics: ["Residential: R403 systems (controls, ducts, ventilation, equipment sizing)", "Commercial: C403 mechanical systems (efficiency, controls, economizers, energy recovery)", "Existing buildings: alterations & replacements", "Duct leakage testing"]
  },
  ibc: {
    short: "IBC", name: "International Building Code", type: "code", region: "US", pub: "ICC",
    summary: "The main building code. HVAC work touches it for fire-rated wall/floor penetrations, rooftop equipment and structural/seismic support.",
    topics: ["Ch. 7 Fire-resistance (penetrations, ducts & air transfer openings)", "Ch. 15 Rooftop structures & equipment", "Ch. 16 Structural loads (wind/seismic, references ASCE 7)"]
  },
  ifc: {
    short: "IFC", name: "International Fire Code", type: "code", region: "US", pub: "ICC",
    summary: "Fire-safety rules for existing and new buildings. Includes mechanical refrigeration (machinery rooms, refrigerant detection, emergency controls) and commercial cooking requirements.",
    topics: ["Mechanical refrigeration section", "Commercial kitchen hood maintenance", "Fire protection systems"]
  },
  umc: {
    short: "UMC", name: "Uniform Mechanical Code", type: "code", region: "US", pub: "IAPMO",
    summary: "Alternative model mechanical code used in several western states. California's Mechanical Code (CMC) is based on it. Use it instead of the IMC where adopted.",
    topics: ["Ventilation air", "Exhaust systems & kitchen hoods", "Duct systems", "Combustion air", "Refrigeration", "Hydronics", "Fuel gas piping"]
  },
  nec: {
    short: "NFPA 70 (NEC)", name: "National Electrical Code", type: "code", region: "US", pub: "NFPA",
    summary: "Electrical installation code adopted nearly everywhere in the U.S. Governs wiring, overcurrent protection and disconnects for HVAC equipment.",
    topics: ["Art. 440 Air-conditioning & refrigerating equipment", "Art. 430 Motors", "Art. 424 Fixed electric space heating", "210.63 Service receptacle near HVAC equipment", "110.26 Working space"]
  },
  nfpa54: {
    short: "NFPA 54", name: "National Fuel Gas Code (ANSI Z223.1)", type: "code", region: "US", pub: "NFPA",
    summary: "Gas piping and appliance installation code used where the IFGC is not adopted (and the basis for much of it).",
    topics: ["Gas piping sizing & testing", "Venting of appliances", "Combustion & ventilation air", "Appliance installation"]
  },
  nfpa58: {
    short: "NFPA 58", name: "Liquefied Petroleum Gas Code", type: "code", region: "US", pub: "NFPA",
    summary: "Storage, handling and piping of propane (LP-gas), including tanks and regulators serving heating equipment.",
    topics: ["Tank location & clearances", "Regulators", "LP-gas piping"]
  },
  nfpa31: {
    short: "NFPA 31", name: "Installation of Oil-Burning Equipment", type: "code", region: "US", pub: "NFPA",
    summary: "Covers oil-fired furnaces and boilers, oil tanks, piping and venting.",
    topics: ["Oil tanks & piping", "Burner installation", "Venting", "Clearances"]
  },
  nfpa90a: {
    short: "NFPA 90A", name: "Installation of Air-Conditioning and Ventilating Systems", type: "code", region: "US", pub: "NFPA",
    summary: "Fire safety for larger (generally commercial) air distribution systems: duct materials, plenums, fire dampers and smoke detectors.",
    topics: ["Duct & plenum materials", "Fire dampers", "Smoke detection & fan shutdown"]
  },
  nfpa90b: {
    short: "NFPA 90B", name: "Installation of Warm Air Heating and Air-Conditioning Systems", type: "code", region: "US", pub: "NFPA",
    summary: "Companion to 90A for one- and two-family dwellings and smaller buildings.",
    topics: ["Duct materials & clearances", "Return air", "Supply registers"]
  },
  nfpa96: {
    short: "NFPA 96", name: "Ventilation Control and Fire Protection of Commercial Cooking Operations", type: "code", region: "US", pub: "NFPA",
    summary: "Kitchen hood and grease duct construction, clearances, cleaning and fire suppression for commercial cooking.",
    topics: ["Hood & grease duct construction", "Clearance to combustibles", "Exhaust fans", "Cleaning & inspection frequency", "Fire-extinguishing systems"]
  },
  nfpa211: {
    short: "NFPA 211", name: "Chimneys, Fireplaces, Vents, and Solid Fuel-Burning Appliances", type: "code", region: "US", pub: "NFPA",
    summary: "Chimney and vent construction, relining and inspection — relevant when replacing gas/oil appliances that vent into existing chimneys.",
    topics: ["Chimney inspection levels", "Liners", "Vent connectors"]
  },
  nfpa92: {
    short: "NFPA 92", name: "Standard for Smoke Control Systems", type: "standard", region: "US", pub: "NFPA",
    summary: "Design, installation and testing of smoke control (stairwell pressurization, atrium exhaust, zoned smoke control).",
    topics: ["Design approaches", "Acceptance testing", "Periodic testing"]
  },
  nfpa72: {
    short: "NFPA 72", name: "National Fire Alarm and Signaling Code", type: "code", region: "US", pub: "NFPA",
    summary: "Applies to duct smoke detectors and HVAC interfaces with the building fire alarm system.",
    topics: ["Duct smoke detector installation", "Fan shutdown interfaces", "Testing"]
  },

  /* ---------------- U.S. standards ---------------- */
  ashrae15: {
    short: "ASHRAE 15", name: "Safety Standard for Refrigeration Systems", type: "standard", region: "US", pub: "ASHRAE",
    summary: "Refrigerant safety: how much refrigerant may be in an occupied space, when a machinery room is needed and what it must contain (detection, ventilation, alarms). Referenced by the IMC/UMC.",
    topics: ["Refrigerant concentration limits", "Machinery room requirements", "Refrigerant detectors & ventilation", "A2L refrigerant provisions"]
  },
  ashrae152: {
    short: "ASHRAE 15.2", name: "Safety Standard for Refrigeration Systems in Residential Applications", type: "standard", region: "US", pub: "ASHRAE",
    summary: "Residential version of ASHRAE 15, written largely for A2L (mildly flammable) refrigerants in homes.",
    topics: ["Charge limits by room size", "Leak detection & mitigation", "Installation requirements"]
  },
  ashrae34: {
    short: "ASHRAE 34", name: "Designation and Safety Classification of Refrigerants", type: "standard", region: "US", pub: "ASHRAE",
    summary: "Assigns refrigerant numbers (R-410A, R-454B…) and safety groups (A1, A2L, A3, B2L…) based on toxicity and flammability.",
    topics: ["Refrigerant numbering", "Safety groups (A/B, 1/2L/2/3)", "Concentration limits"]
  },
  ashrae621: {
    short: "ASHRAE 62.1", name: "Ventilation and Acceptable Indoor Air Quality", type: "standard", region: "US", pub: "ASHRAE",
    summary: "Outdoor-air ventilation rates and IAQ design for commercial and multifamily (4+ story) buildings. The IMC's ventilation tables are based on it.",
    topics: ["Ventilation Rate Procedure", "IAQ Procedure", "Outdoor air intake locations", "Filtration", "Exhaust rates"]
  },
  ashrae622: {
    short: "ASHRAE 62.2", name: "Ventilation and Acceptable IAQ in Residential Buildings", type: "standard", region: "US", pub: "ASHRAE",
    summary: "Whole-house mechanical ventilation and local exhaust (bath, kitchen) rates for homes.",
    topics: ["Whole-dwelling ventilation rate", "Local exhaust (kitchen/bath)", "Infiltration credit", "Fan sound ratings"]
  },
  ashrae901: {
    short: "ASHRAE 90.1", name: "Energy Standard for Sites and Buildings Except Low-Rise Residential", type: "standard", region: "US", pub: "ASHRAE",
    summary: "Commercial energy standard. Allowed as an alternate path to IECC commercial and the federal baseline for commercial energy codes.",
    topics: ["Equipment efficiency tables", "Economizers", "Energy recovery", "Fan power limits", "Controls (setback, VAV, reset)"]
  },
  ashrae55: {
    short: "ASHRAE 55", name: "Thermal Environmental Conditions for Human Occupancy", type: "standard", region: "US", pub: "ASHRAE",
    summary: "Defines acceptable thermal comfort (temperature, humidity, air speed). A design basis, not usually a code requirement.",
    topics: ["Comfort zones", "PMV/PPD", "Occupant surveys"]
  },
  ashrae170: {
    short: "ASHRAE 170", name: "Ventilation of Health Care Facilities", type: "standard", region: "US", pub: "ASHRAE",
    summary: "Air change rates, pressure relationships, filtration and humidity for hospitals, surgery, isolation rooms and other healthcare spaces.",
    topics: ["Air changes per hour by room type", "Pressure relationships", "Filtration levels", "Temperature & humidity ranges"]
  },
  ashrae522: {
    short: "ASHRAE 52.2", name: "Method of Testing Air-Cleaning Devices (MERV)", type: "standard", region: "US", pub: "ASHRAE",
    summary: "The test standard behind MERV filter ratings referenced by codes and other standards.",
    topics: ["MERV 1–16 ratings", "Particle-size efficiency"]
  },
  ashrae188: {
    short: "ASHRAE 188", name: "Legionellosis: Risk Management for Building Water Systems", type: "standard", region: "US", pub: "ASHRAE",
    summary: "Water management programs for cooling towers, hot water systems and other water systems that can grow Legionella.",
    topics: ["Water management program", "Cooling towers", "Hazard analysis"]
  },
  ashrae241: {
    short: "ASHRAE 241", name: "Control of Infectious Aerosols", type: "standard", region: "US", pub: "ASHRAE",
    summary: "Equivalent clean airflow targets for reducing airborne infection risk (ventilation + filtration + air cleaning).",
    topics: ["Equivalent clean airflow", "Infection risk mitigation mode", "Air cleaner testing"]
  },
  ashrae154: {
    short: "ASHRAE 154", name: "Ventilation for Commercial Cooking Operations", type: "standard", region: "US", pub: "ASHRAE",
    summary: "Design of kitchen hood exhaust and makeup air, complementing NFPA 96 fire-safety rules.",
    topics: ["Hood exhaust rates", "Makeup air", "Hood types"]
  },
  ashrae180: {
    short: "ASHRAE/ACCA 180", name: "Inspection and Maintenance of Commercial Building HVAC Systems", type: "standard", region: "US", pub: "ASHRAE",
    summary: "Minimum inspection and maintenance tasks and frequencies for commercial HVAC equipment.",
    topics: ["Maintenance task tables", "Frequencies", "Documentation"]
  },
  ashrae202: {
    short: "ASHRAE 202", name: "Commissioning Process for Buildings and Systems", type: "standard", region: "US", pub: "ASHRAE",
    summary: "The commissioning process from owner's requirements through design, construction, testing and turnover.",
    topics: ["Owner's Project Requirements", "Basis of Design", "Functional testing", "Systems manual & training"]
  },
  ashrae111: {
    short: "ASHRAE 111", name: "Measurement, Testing, Adjusting and Balancing of HVAC Systems", type: "standard", region: "US", pub: "ASHRAE",
    summary: "Methods and instruments for measuring and balancing air and water flow.",
    topics: ["Airflow measurement", "Hydronic flow measurement", "Instrumentation"]
  },
  ul60335: {
    short: "UL 60335-2-40", name: "Heat Pumps, Air-Conditioners and Dehumidifiers (safety)", type: "standard", region: "US", pub: "UL",
    summary: "The product safety standard for AC and heat pump equipment, now required for equipment using A2L refrigerants. Sets charge limits, leak detection and mitigation requirements that installers must follow.",
    topics: ["Refrigerant charge limits", "Refrigerant detection systems", "Mitigation (fan activation)", "Marking & installation instructions"]
  },
  ul1995: {
    short: "UL 1995", name: "Heating and Cooling Equipment", type: "standard", region: "US", pub: "UL",
    summary: "Legacy safety standard for HVAC equipment listing, being replaced by UL 60335-2-40.",
    topics: ["Equipment listing"]
  },
  ul181: {
    short: "UL 181", name: "Factory-Made Air Ducts and Air Connectors (+181A/181B closures)", type: "standard", region: "US", pub: "UL",
    summary: "Listing standard for flex duct, duct board and the tapes/mastics used to seal them. Codes require these listings.",
    topics: ["Class 0/1 ducts", "Flex connectors", "181A (duct board) & 181B (flex) closure systems"]
  },
  ul555: {
    short: "UL 555 / 555S", name: "Fire Dampers / Smoke Dampers", type: "standard", region: "US", pub: "UL",
    summary: "Listing standards for fire dampers (555) and smoke dampers (555S) installed where ducts pass through rated assemblies.",
    topics: ["Fire damper ratings", "Smoke damper leakage classes", "Installation per listing"]
  },
  ul300: {
    short: "UL 300", name: "Fire Extinguishing Systems for Commercial Cooking Equipment", type: "standard", region: "US", pub: "UL",
    summary: "Testing standard for kitchen hood wet-chemical fire suppression systems.",
    topics: ["Wet-chemical systems", "Appliance coverage"]
  },
  asce7: {
    short: "ASCE 7", name: "Minimum Design Loads for Buildings", type: "standard", region: "US", pub: "ASCE",
    summary: "Wind and seismic loads, including anchorage of rooftop and mechanical equipment (nonstructural components chapter).",
    topics: ["Seismic design of nonstructural components", "Wind loads on rooftop equipment"]
  },
  asmeb315: {
    short: "ASME B31.5", name: "Refrigeration Piping and Heat Transfer Components", type: "standard", region: "US", pub: "ASME",
    summary: "Design, materials, fabrication and testing of refrigeration piping — referenced for larger refrigeration systems.",
    topics: ["Piping materials", "Brazing & welding", "Pressure testing"]
  },
  asmeb319: {
    short: "ASME B31.9", name: "Building Services Piping", type: "standard", region: "US", pub: "ASME",
    summary: "Piping for building heating/cooling water and steam within its pressure/temperature limits.",
    topics: ["Hydronic & steam piping", "Joining", "Testing"]
  },
  asmebpvc: {
    short: "ASME BPVC", name: "Boiler and Pressure Vessel Code (Sec. I, IV, VIII)", type: "code", region: "US", pub: "ASME",
    summary: "Construction rules for boilers and pressure vessels. Section IV covers heating boilers; Section VIII covers pressure vessels such as receivers. Enforced through state boiler laws.",
    topics: ["Sec. I Power boilers", "Sec. IV Heating boilers", "Sec. VIII Pressure vessels", "ASME stamps"]
  },
  csd1: {
    short: "ASME CSD-1", name: "Controls and Safety Devices for Automatically Fired Boilers", type: "standard", region: "US", pub: "ASME",
    summary: "Required safety controls (low-water cutoffs, limits, flame safeguards) and periodic testing for automatically fired boilers in many states.",
    topics: ["Low-water cutoffs", "Operating & limit controls", "Flame safeguard", "Testing checklist"]
  },
  ahri: {
    short: "AHRI 210/240 · 340/360 · 550/590", name: "AHRI Equipment Rating Standards", type: "standard", region: "US", pub: "AHRI",
    summary: "How equipment efficiency (SEER2, EER2, HSPF2, IEER, IPLV) is tested and rated. The AHRI Directory lets you verify the rating of a matched system.",
    topics: ["210/240 Unitary AC & heat pumps", "340/360 Commercial unitary", "550/590 Chillers", "1230 VRF", "AHRI Directory (ahridirectory.org)"]
  },
  smacnaDuct: {
    short: "SMACNA Duct Standards", name: "HVAC Duct Construction Standards — Metal and Flexible", type: "standard", region: "US", pub: "SMACNA",
    summary: "How sheet-metal and flexible duct is built, joined, reinforced, sealed and supported. Referenced by the IMC.",
    topics: ["Pressure classes", "Gauges & reinforcement", "Seams & joints", "Hangers & supports", "Seal classes"]
  },
  smacnaLeak: {
    short: "SMACNA Leakage Test Manual", name: "HVAC Air Duct Leakage Test Manual", type: "standard", region: "US", pub: "SMACNA",
    summary: "Procedures for duct leakage testing on commercial projects.",
    topics: ["Leakage classes", "Test apparatus", "Test procedure"]
  },
  smacnaDamper: {
    short: "SMACNA Damper Guide", name: "Fire, Smoke and Radiation Damper Installation Guide", type: "guideline", region: "US", pub: "SMACNA",
    summary: "Practical installation details for fire and smoke dampers — always alongside the damper's own listed instructions.",
    topics: ["Sleeves & retaining angles", "Access doors", "Breakaway connections"]
  },
  tab: {
    short: "NEBB / AABC / TABB", name: "Testing, Adjusting & Balancing Procedural Standards", type: "standard", region: "US", pub: "NEBB",
    summary: "Certification bodies' procedural standards for TAB work and reports. Project specifications usually name one.",
    topics: ["TAB procedures", "Report format", "Instrument calibration", "Tolerances"]
  },

  /* ---------------- U.S. design guidelines ---------------- */
  accaJ: {
    short: "ACCA Manual J", name: "Residential Load Calculation", type: "guideline", region: "US", pub: "ACCA",
    summary: "The standard method for calculating a home's heating and cooling loads. Required by the IRC/IECC as the basis for equipment sizing.",
    topics: ["Design conditions", "Envelope loads", "Infiltration", "Duct loads"]
  },
  accaS: {
    short: "ACCA Manual S", name: "Residential Equipment Selection", type: "guideline", region: "US", pub: "ACCA",
    summary: "Choosing equipment that matches the Manual J loads using manufacturers' expanded performance data, with sizing limits.",
    topics: ["Sizing limits (over/under-sizing)", "Expanded performance data", "Heat pump balance point"]
  },
  accaD: {
    short: "ACCA Manual D", name: "Residential Duct Systems", type: "guideline", region: "US", pub: "ACCA",
    summary: "Duct design method for residential systems based on available static pressure and room airflows.",
    topics: ["Friction rate", "Effective length", "Duct sizing"]
  },
  accaT: {
    short: "ACCA Manual T", name: "Air Distribution Basics", type: "guideline", region: "US", pub: "ACCA",
    summary: "Selecting and placing supply outlets and returns for comfort.",
    topics: ["Throw & spread", "Register selection"]
  },
  accaN: {
    short: "ACCA Manual N", name: "Commercial Load Calculation", type: "guideline", region: "US", pub: "ACCA",
    summary: "Load calculation method for light commercial buildings.",
    topics: ["Commercial loads", "Ventilation loads"]
  },
  acca5: {
    short: "ACCA Standard 5 (QI)", name: "HVAC Quality Installation Specification", type: "guideline", region: "US", pub: "ACCA",
    summary: "The industry benchmark for a quality residential/light commercial install: proper sizing, airflow, refrigerant charge, duct leakage and documentation. Often required by utility rebate programs.",
    topics: ["Design aspects", "Equipment installation", "Distribution system", "System documentation"]
  },
  acca4: {
    short: "ACCA Standard 4 (QM)", name: "Maintenance of Residential HVAC Systems", type: "guideline", region: "US", pub: "ACCA",
    summary: "Minimum tasks for residential HVAC maintenance visits.",
    topics: ["Inspection tasks", "Frequencies"]
  },

  /* ---------------- U.S. regulations ---------------- */
  epa608: {
    short: "EPA Section 608", name: "Clean Air Act §608 — Refrigerant Management (40 CFR Part 82, Subpart F)", type: "regulation", region: "US", pub: "EPA",
    summary: "Federal law for stationary refrigerant handling: technician certification, no venting, recovery, certified recovery equipment, leak repair for larger systems and recordkeeping.",
    topics: ["Technician certification: Type I (small appliances), Type II (high-pressure), Type III (low-pressure), Universal", "Venting prohibition", "Evacuation levels & recovery", "Leak repair & records (thresholds have changed — check current rules)", "Disposal"]
  },
  aim: {
    short: "EPA AIM Act rules", name: "AIM Act — HFC Phasedown & Technology Transitions", type: "regulation", region: "US", pub: "EPA",
    summary: "Phases down HFC refrigerants and limits the global warming potential (GWP) of refrigerants in new equipment. This is what moved new residential/light-commercial AC to A2L refrigerants like R-454B and R-32. Compliance dates differ by equipment type.",
    topics: ["GWP limits for new systems by sector", "Installation deadlines for older-refrigerant equipment", "Refrigerant management (leak repair, reclaimed refrigerant)", "Check epa.gov for current dates and amendments"]
  },
  doe: {
    short: "DOE Efficiency Standards", name: "DOE Appliance & Equipment Efficiency Standards (10 CFR 430 / 431)", type: "regulation", region: "US", pub: "DOE",
    summary: "Federal minimum efficiencies for HVAC equipment (SEER2, EER2, HSPF2, AFUE, IEER…). Split-system AC minimums differ by region (North, Southeast, Southwest) and are enforced at installation.",
    topics: ["Residential: 10 CFR Part 430", "Commercial: 10 CFR Part 431", "Regional standards for split AC", "SEER2/EER2/HSPF2 metrics (since 2023)"]
  },
  osha: {
    short: "OSHA", name: "OSHA 29 CFR 1910 (General Industry) & 1926 (Construction)", type: "regulation", region: "US", pub: "OSHA",
    summary: "Worker safety rules that apply on every HVAC job: lockout/tagout, fall protection, ladders, confined spaces, respiratory protection, hazard communication.",
    topics: ["1910.147 Lockout/tagout", "1926 Subpart M Fall protection", "Ladders & scaffolds", "Permit-required confined spaces", "Hazard communication (SDS for refrigerants/chemicals)"]
  },
  local: {
    short: "Local rules", name: "State & Local Amendments, Permits and Licensing", type: "regulation", region: "US", pub: "LOCAL",
    summary: "Your state, county or city decides which code editions apply, adds amendments, issues permits and licenses contractors. Always the first stop.",
    topics: ["Adopted code editions", "Local amendments", "Permit & inspection requirements", "Contractor/mechanic licensing", "Energy code status (energycodes.gov)"]
  },

  /* ---------------- Canada ---------------- */
  nbc: {
    short: "NBC", name: "National Building Code of Canada (Part 6 HVAC, Part 9 Housing)", type: "code", region: "CA", pub: "NRC",
    summary: "Model building code adopted (often with changes) by provinces. Part 6 covers HVAC; Part 9 covers housing and small buildings including ventilation.",
    topics: ["Part 6 Heating, ventilating & air-conditioning", "Part 9 Housing (9.32 ventilation, 9.33 heating & AC)"]
  },
  necb: {
    short: "NECB", name: "National Energy Code of Canada for Buildings", type: "code", region: "CA", pub: "NRC",
    summary: "Energy efficiency requirements for buildings other than houses (housing energy efficiency is in NBC Part 9).",
    topics: ["HVAC efficiency", "Controls", "Heat recovery"]
  },
  csab52: {
    short: "CSA B52", name: "Mechanical Refrigeration Code", type: "code", region: "CA", pub: "CSA",
    summary: "Canada's refrigeration safety code — refrigerant limits, machinery rooms, piping and testing. Comparable to ASHRAE 15.",
    topics: ["Refrigerant quantity limits", "Machinery rooms", "Pressure testing"]
  },
  csab149: {
    short: "CSA B149.1 / B149.2", name: "Natural Gas and Propane Installation Code / Propane Storage and Handling", type: "code", region: "CA", pub: "CSA",
    summary: "Gas piping, appliance installation and venting in Canada (B149.1); propane storage and handling (B149.2).",
    topics: ["Gas piping", "Venting", "Air supply", "Appliance clearances"]
  },
  csaf280: {
    short: "CSA F280", name: "Determining the Required Capacity of Residential Space Heating and Cooling Appliances", type: "standard", region: "CA", pub: "CSA",
    summary: "Canada's residential heat loss/gain and equipment sizing standard (similar role to ACCA Manual J/S).",
    topics: ["Heat loss/gain", "Equipment sizing limits"]
  },
  csac221: {
    short: "CSA C22.1 (CEC)", name: "Canadian Electrical Code, Part I", type: "code", region: "CA", pub: "CSA",
    summary: "Electrical installation code for Canada, including HVAC and refrigeration equipment circuits.",
    topics: ["Motors & AC equipment", "Disconnects", "Electric heating"]
  },
  csab51: {
    short: "CSA B51", name: "Boiler, Pressure Vessel and Pressure Piping Code", type: "code", region: "CA", pub: "CSA",
    summary: "Registration, design and installation of boilers, pressure vessels and pressure piping, enforced by provincial safety authorities.",
    topics: ["Design registration", "Pressure piping", "Inspection"]
  },
  caOds: {
    short: "Halocarbon regs", name: "Federal Halocarbon Regulations & Provincial ODS Regulations", type: "regulation", region: "CA", pub: "ECCC",
    summary: "Refrigerant handling, leak testing, recovery and technician certification in Canada (federal rules for federal works; provinces regulate most other sites).",
    topics: ["Technician certification (e.g., ODP card)", "Leak testing", "Recovery & records"]
  },

  /* ---------------- International ---------------- */
  en378: {
    short: "EN 378", name: "Refrigerating Systems and Heat Pumps — Safety and Environmental Requirements", type: "standard", region: "INTL", pub: "ISO",
    summary: "The European refrigeration safety standard (comparable to ASHRAE 15).",
    topics: ["Charge limits", "Machinery rooms", "Design & installation"]
  },
  iso5149: {
    short: "ISO 5149", name: "Refrigerating Systems and Heat Pumps — Safety and Environmental Requirements", type: "standard", region: "INTL", pub: "ISO",
    summary: "International refrigeration safety standard used in many countries.",
    topics: ["Charge limits", "Design & installation", "Maintenance"]
  },
  iso16890: {
    short: "ISO 16890", name: "Air Filters for General Ventilation", type: "standard", region: "INTL", pub: "ISO",
    summary: "International filter rating system (ePM1, ePM2.5, ePM10), used outside North America instead of MERV.",
    topics: ["ePM ratings", "Test method"]
  }
};

/* ------------------------------------------------------------------
 * JOBS — each item: [codeId, why it applies, where to look]
 * ------------------------------------------------------------------ */
const CATEGORIES = [
  { id: "res",   label: "Residential" },
  { id: "com",   label: "Commercial" },
  { id: "ref",   label: "Refrigeration & refrigerants" },
  { id: "heat",  label: "Heating & hydronics" },
  { id: "air",   label: "Air distribution & ventilation" },
  { id: "svc",   label: "Testing, service & safety" }
];

const JOBS = [
  {
    id: "res-ac-replace", cat: "res", icon: "❄️",
    title: "Replace a residential AC or heat pump",
    desc: "Change-out of a split-system or packaged AC/heat pump in a house.",
    keywords: "changeout swap condenser outdoor unit air handler split system central air",
    roles: {
      tech: "Recover refrigerant (EPA 608 Type II/Universal), follow the manufacturer's installation instructions exactly — codes make listed instructions enforceable — and learn the A2L handling rules for R-454B/R-32 equipment.",
      eng:  "Rarely involved, but you may be asked to verify sizing (Manual J/S) or energy-code compliance for the permit.",
      owner:"Ask for: a permit, a Manual J load calculation, the AHRI certificate for the matched system, and proof the contractor is licensed and EPA-certified."
    },
    items: [
      ["local",   "Determines whether a permit is needed, which code editions apply and who may do the work.", "Permit requirements, contractor licensing"],
      ["irc",     "The governing mechanical code for one- and two-family homes.", "Ch. 13 (access, clearances, condensate), Ch. 14 (equipment, M1401.3 sizing)"],
      ["umc",     "Use instead of the IRC/IMC mechanical rules where your state adopted the UMC (e.g., California's CMC).", "Refrigeration and condensate chapters"],
      ["iecc",    "Replacement equipment and any altered ducts must meet the energy code.", "Residential systems (R403) and existing-building alteration rules"],
      ["nec",     "Circuit, disconnect and overcurrent sizing come from the unit nameplate; a service receptacle is required nearby.", "Art. 440, 210.63, 110.26"],
      ["doe",     "Installed equipment must meet federal minimum efficiency; split-AC minimums vary by region.", "Regional SEER2/EER2 table for your state"],
      ["aim",     "Limits which refrigerants new systems may use — most new equipment is now A2L (R-454B, R-32).", "Residential AC/heat pump compliance dates"],
      ["epa608",  "Required certification and recovery when removing the old system's refrigerant.", "Recovery, evacuation levels, disposal"],
      ["ul60335", "A2L equipment is listed to this standard; its instructions set charge limits and leak-detection requirements.", "Installation instructions supplied with the unit"],
      ["ashrae152","Residential refrigerant safety, especially for A2L charge vs. room size.", "Charge limits, mitigation"],
      ["accaJ",   "Load calculation that code requires as the basis for sizing.", "Full house calc — not a rule of thumb"],
      ["accaS",   "Equipment selection against the Manual J loads.", "Sizing limits, expanded performance data"],
      ["acca5",   "Quality-installation benchmark often required for rebates.", "Airflow, charge verification, documentation"],
      ["ahri",    "Verify the indoor/outdoor combination's certified efficiency.", "AHRI Directory certificate"]
    ]
  },
  {
    id: "res-new", cat: "res", icon: "🏠",
    title: "Design / install a new home HVAC system",
    desc: "New construction or full system replacement including new ductwork.",
    keywords: "new construction design ductwork furnace air handler heat pump sizing",
    roles: {
      tech: "Install per the approved design: duct sealing, insulation and testing will be checked. Expect a duct leakage (and often a blower door) test.",
      eng:  "Produce Manual J/S/D, ventilation design per 62.2/IRC, and the energy-code compliance documentation.",
      owner:"New homes get plan review and inspections. Ask to see the load calc and duct design — oversized systems are a common problem."
    },
    items: [
      ["local",   "Plan review, permits, inspections and the adopted energy code edition.", "Submittal requirements"],
      ["irc",     "Mechanical and fuel gas chapters for the house.", "Ch. 13–18, 24"],
      ["iecc",    "Duct sealing/insulation, duct leakage testing, controls, mechanical ventilation and equipment sizing.", "Residential R403 systems"],
      ["nec",     "Electrical for equipment and electric heat.", "Art. 440, 424, 210.63"],
      ["ifgc",    "Gas piping and venting if gas appliances are used (IRC Ch. 24 mirrors it).", "Ch. 4 piping, Ch. 5 venting"],
      ["accaJ",   "Required load calculation.", "Room-by-room loads"],
      ["accaS",   "Equipment selection.", "Sizing limits"],
      ["accaD",   "Duct design so each room gets its airflow.", "Duct sizing"],
      ["accaT",   "Register/grille selection and placement.", "Throw & spread"],
      ["ashrae622","Whole-house ventilation and local exhaust rates.", "Ventilation rate calculation"],
      ["ul181",   "Flex duct, duct board and sealants must be listed.", "Listing labels on materials"],
      ["doe",     "Federal efficiency minimums.", "Regional standards"],
      ["aim",     "Refrigerant requirements for new systems.", "Compliance dates"],
      ["ul60335", "A2L equipment installation requirements.", "Manufacturer instructions"],
      ["acca5",   "Quality installation checklist.", "Commissioning & documentation"],
      ["nbc",     "Canada: Part 9 heating, ventilation and AC for houses.", "9.32, 9.33"],
      ["csaf280", "Canada: residential sizing standard.", "Heat loss/gain"]
    ]
  },
  {
    id: "gas-furnace", cat: "heat", icon: "🔥",
    title: "Install or replace a gas furnace",
    desc: "Natural gas or propane furnace, including venting and gas piping.",
    keywords: "furnace gas propane venting flue chimney combustion air natural gas heater",
    roles: {
      tech: "Key checks: gas piping size and pressure test, vent category and termination clearances, combustion air, orphaned water heater venting when a chimney is no longer shared, CO/combustion analysis.",
      eng:  "Verify venting design, combustion air method and equipment sizing; check AFUE vs. energy code.",
      owner:"Insist on a permit and a combustion safety check. Make sure CO alarms are installed where required."
    },
    items: [
      ["local",   "Permit, gas inspection and licensing (gas work is often separately licensed).", "Gas fitter licensing"],
      ["irc",     "Fuel gas (Ch. 24) and mechanical chapters for homes.", "Ch. 17 combustion air, Ch. 18 venting, Ch. 24 fuel gas"],
      ["ifgc",    "Gas code for non-IRC buildings (and source of the IRC fuel gas chapter).", "Ch. 3 combustion air, Ch. 4 piping, Ch. 5 vents, Ch. 6 appliances"],
      ["nfpa54",  "Gas code where the IFGC isn't adopted.", "Venting tables, piping"],
      ["nfpa58",  "If fueled by propane — tanks and regulators.", "Tank clearances, regulators"],
      ["nfpa211", "When venting into an existing masonry chimney or relining.", "Chimney inspection & liners"],
      ["nec",     "Furnace circuit and disconnect.", "Art. 422/424 as applicable, 110.26"],
      ["doe",     "Minimum AFUE for new furnaces.", "Furnace efficiency standard"],
      ["iecc",    "Equipment efficiency, duct work and controls.", "R403"],
      ["accaJ",   "Heating load for sizing.", "Heating load"],
      ["accaS",   "Furnace selection.", "Heating sizing limits"],
      ["csab149", "Canada: gas installation code.", "Venting, air supply, piping"]
    ]
  },
  {
    id: "mini-split", cat: "res", icon: "🌀",
    title: "Install a ductless mini-split or VRF system",
    desc: "Single/multi-zone ductless heat pumps or commercial VRF.",
    keywords: "ductless mini split vrf vrv heat pump multi zone wall unit cassette",
    roles: {
      tech: "Line-set length/charge adjustments, flare or brazed joints per instructions, nitrogen pressure test, deep vacuum, condensate disposal and electrical per nameplate. For VRF, refrigerant concentration limits per room become critical.",
      eng:  "For VRF, check ASHRAE 15 refrigerant concentration limits in the smallest room served, plus ventilation per 62.1 since VRF doesn't provide outdoor air.",
      owner:"Confirm the installer follows the manufacturer's line-set and charge requirements — warranty often depends on it."
    },
    items: [
      ["local",   "Permit and licensing.", "Mechanical permit"],
      ["irc",     "Homes: mechanical chapters.", "Ch. 13–14"],
      ["imc",     "Commercial/multifamily: mechanical code.", "Ch. 3, Ch. 11 refrigeration"],
      ["nec",     "Circuits, disconnects, service receptacle.", "Art. 440, 210.63"],
      ["ashrae15","Refrigerant quantity per occupied room — a major VRF design constraint.", "Concentration limits, A2L provisions"],
      ["ashrae152","Residential A2L systems.", "Charge vs. room size"],
      ["ul60335", "A2L listing and installation rules.", "Instructions"],
      ["epa608",  "Refrigerant handling and certification.", "Recovery, venting prohibition"],
      ["aim",     "Refrigerant/GWP requirements for new systems (VRF has its own dates).", "Sector compliance dates"],
      ["ashrae621","Commercial: ductless systems still need code-required outdoor air.", "Ventilation Rate Procedure"],
      ["iecc",    "Equipment efficiency and controls.", "R403 / C403"],
      ["ahri",    "VRF (AHRI 1230) and ductless ratings.", "AHRI Directory"],
      ["accaJ",   "Room-by-room loads to size zones.", "Room loads"]
    ]
  },
  {
    id: "rtu", cat: "com", icon: "🏢",
    title: "Install or replace a commercial rooftop unit (RTU)",
    desc: "Packaged rooftop units on commercial buildings.",
    keywords: "rtu rooftop packaged unit commercial roof curb economizer crane",
    roles: {
      tech: "Curb/adaptor fit, condensate trap, gas piping and electrical, economizer setup, smoke detector interlock (if over the code threshold), and a full startup report.",
      eng:  "Ventilation (62.1/IMC Ch. 4), economizer and efficiency (IECC C403/90.1), structural support and seismic/wind anchorage, smoke detector/fire alarm interface.",
      owner:"Larger replacements may trigger structural review, economizer requirements and fire-alarm work — budget for them."
    },
    items: [
      ["local",   "Permit, possibly structural and fire-alarm permits too.", "Combined permits"],
      ["imc",     "Rooftop equipment access, condensate, ventilation and duct smoke detectors.", "Ch. 3 (rooftop access & guards), Ch. 4 ventilation, Sec. 606 smoke detection"],
      ["ifgc",    "Gas piping on roof and appliance installation.", "Ch. 4, Ch. 6"],
      ["iecc",    "Efficiency, economizers, controls and fan power.", "C403"],
      ["ashrae901","Alternate energy compliance path.", "Ch. 6 HVAC"],
      ["ashrae621","Outdoor-air rates.", "Ventilation Rate Procedure"],
      ["ibc",     "Rooftop equipment, roof penetrations and structural loads.", "Ch. 15, Ch. 16"],
      ["asce7",   "Wind and seismic anchorage of the unit.", "Nonstructural components"],
      ["nec",     "Electrical, disconnect, service receptacle.", "Art. 440, 210.63"],
      ["nfpa72",  "Duct smoke detector connection to fire alarm.", "Duct detectors"],
      ["nfpa90a", "Air distribution fire safety where adopted.", "Smoke detection"],
      ["doe",     "Commercial equipment efficiency minimums.", "10 CFR 431"],
      ["aim",     "Refrigerant rules for new packaged equipment.", "Compliance dates"],
      ["epa608",  "Recovery from the old unit.", "Recovery"],
      ["osha",    "Roof work: fall protection, crane lifts.", "1926 Subpart M, cranes"]
    ]
  },
  {
    id: "com-design", cat: "com", icon: "📐",
    title: "Design a commercial HVAC system",
    desc: "Engineering design for offices, retail, schools and similar buildings.",
    keywords: "engineer design commercial office school mechanical drawings vav chiller ahu",
    roles: {
      tech: "Useful to know what drove the design: ventilation rates, energy code controls and fire/smoke requirements you'll install and test.",
      eng:  "Core set: IMC/UMC, IECC or 90.1, 62.1, IBC fire-rated penetrations, NFPA 90A/72 interfaces, ASHRAE 15 for refrigerants, structural anchorage, and commissioning requirements.",
      owner:"Define your requirements early (Owner's Project Requirements) — commissioning per ASHRAE 202 helps you get what you paid for."
    },
    items: [
      ["local",   "Adopted editions and amendments — confirm before design starts.", "Code analysis"],
      ["imc",     "Mechanical code.", "All chapters"],
      ["umc",     "Instead of IMC where adopted.", "All chapters"],
      ["iecc",    "Energy code (commercial).", "C403, C408 commissioning"],
      ["ashrae901","Alternate energy path / federal baseline.", "Ch. 6, Ch. 11 / App. G performance"],
      ["ashrae621","Ventilation design.", "VRP, intake separation"],
      ["ashrae55", "Comfort design basis.", "Design criteria"],
      ["ibc",     "Fire-rated assemblies, penetrations, rooftop and structural.", "Ch. 7, 15, 16"],
      ["nfpa90a", "Air distribution fire safety.", "Materials, dampers"],
      ["nfpa92",  "If smoke control is required.", "Design & testing"],
      ["nfpa72",  "Fire alarm interfaces.", "Duct detectors"],
      ["ashrae15","Refrigerant safety.", "Concentration limits, machinery rooms"],
      ["smacnaDuct","Duct construction.", "Pressure class, seal class"],
      ["ul555",   "Fire/smoke dampers in rated assemblies.", "Listing"],
      ["asce7",   "Equipment anchorage.", "Nonstructural components"],
      ["ashrae202","Commissioning process.", "OPR, BoD, functional testing"],
      ["accaN",   "Light-commercial load calc.", "Loads"],
      ["necb",    "Canada: commercial energy code.", "HVAC"],
      ["nbc",     "Canada: Part 6 HVAC.", "Part 6"]
    ]
  },
  {
    id: "kitchen", cat: "com", icon: "🍳",
    title: "Commercial kitchen hood & exhaust",
    desc: "Type I grease hoods, grease ducts, makeup air and fire suppression.",
    keywords: "kitchen hood grease duct restaurant type i makeup air exhaust fan suppression ansul",
    roles: {
      tech: "Grease duct must be liquid-tight welded, sloped and have clearances/cleanouts; exhaust fan listed; makeup air interlocked.",
      eng:  "Size exhaust and makeup air, grease duct route, shaft enclosure, clearance to combustibles, suppression coordination.",
      owner:"Hood cleaning and suppression inspection frequencies are required by NFPA 96/IFC — keep records."
    },
    items: [
      ["local",   "Mechanical, fire and health department approvals.", "Multiple permits"],
      ["imc",     "Commercial kitchen hoods and grease ducts, makeup air.", "Ch. 5 (Sec. 506–508)"],
      ["umc",     "Where adopted, its kitchen exhaust chapter applies.", "Exhaust systems chapter"],
      ["nfpa96",  "Fire safety for cooking operations.", "Hood/duct construction, clearances, cleaning"],
      ["ifc",     "Hood maintenance and suppression inspections.", "Commercial cooking"],
      ["ul300",   "Suppression system listing.", "Wet-chemical systems"],
      ["ashrae154","Exhaust/makeup air design.", "Hood exhaust rates"],
      ["ibc",     "Shaft enclosures for grease ducts.", "Ch. 7"],
      ["iecc",    "Kitchen exhaust energy requirements (demand control, makeup air).", "C403"]
    ]
  },
  {
    id: "boiler", cat: "heat", icon: "♨️",
    title: "Boiler & hydronic heating",
    desc: "Hot water or steam boilers, piping, expansion tanks and controls.",
    keywords: "boiler hydronic hot water steam radiant baseboard piping expansion tank",
    roles: {
      tech: "Relief valve sizing/piping, low-water cutoff, expansion tank, venting, combustion analysis, and CSD-1 safety control testing where required.",
      eng:  "Boiler room requirements (IMC Ch. 10), venting/combustion air, piping per B31.9, state boiler registration and inspection.",
      owner:"Many states require boiler registration and periodic inspection — check your state boiler program."
    },
    items: [
      ["local",   "State boiler law, inspections and licensing.", "Boiler registration"],
      ["imc",     "Boilers, water heaters and hydronic piping.", "Ch. 10, Ch. 12"],
      ["irc",     "Homes: boilers and hydronic piping.", "Ch. 20–21"],
      ["ifgc",    "Gas-fired boilers: venting, combustion air.", "Ch. 3, 5, 6"],
      ["nfpa31",  "Oil-fired boilers.", "Tanks, burners"],
      ["asmebpvc","Boiler construction (Sec. IV heating boilers).", "ASME stamp"],
      ["csd1",    "Safety controls and testing.", "Controls checklist"],
      ["asmeb319","Building services piping.", "Hydronic/steam piping"],
      ["iecc",    "Boiler efficiency, controls (reset), pipe insulation.", "R403 / C403"],
      ["doe",     "Minimum AFUE/thermal efficiency.", "Boiler standards"],
      ["csab51",  "Canada: boiler & pressure vessel code.", "Registration"]
    ]
  },
  {
    id: "oil", cat: "heat", icon: "🛢️",
    title: "Oil-fired heating equipment",
    desc: "Oil furnaces/boilers, tanks and fuel lines.",
    keywords: "oil furnace oil boiler fuel oil tank burner",
    roles: {
      tech: "Tank and fuel line installation, burner setup, venting/chimney condition, combustion testing.",
      eng:  "Tank location rules and venting design.",
      owner:"Old buried tanks can carry environmental liability — check state rules."
    },
    items: [
      ["local",   "Permits; state tank regulations.", "Tank rules"],
      ["nfpa31",  "Primary installation standard for oil equipment.", "All"],
      ["imc",     "Fuel oil piping and storage, appliances.", "Ch. 9, Ch. 13"],
      ["irc",     "Homes: special piping and storage.", "Ch. 22"],
      ["nfpa211", "Chimney and vent condition.", "Inspection, liners"],
      ["doe",     "Efficiency minimums.", "AFUE"]
    ]
  },
  {
    id: "com-refrig", cat: "ref", icon: "🧊",
    title: "Commercial refrigeration (walk-ins, racks, cases)",
    desc: "Walk-in coolers/freezers, rack systems, display cases.",
    keywords: "walk in cooler freezer rack supermarket refrigeration display case condensing unit",
    roles: {
      tech: "EPA 608 leak repair & records for larger systems, pressure testing, refrigerant detection where required, piping per B31.5 for larger systems.",
      eng:  "Refrigerant concentration limits/machinery room rules (ASHRAE 15/IMC Ch. 11), AIM Act refrigerant restrictions for new systems, walk-in efficiency rules.",
      owner:"Larger systems carry leak-inspection and record-keeping obligations under EPA rules."
    },
    items: [
      ["local",   "Permits and refrigeration licensing.", "Licensing"],
      ["imc",     "Refrigeration chapter.", "Ch. 11"],
      ["ifc",     "Mechanical refrigeration fire safety.", "Refrigeration section"],
      ["ashrae15","Refrigerant safety, machinery rooms.", "Limits, detection"],
      ["ashrae34","Refrigerant safety classes.", "Classification"],
      ["asmeb315","Refrigeration piping.", "Materials, testing"],
      ["epa608",  "Handling, leak repair, records.", "Leak repair thresholds"],
      ["aim",     "GWP limits for new refrigeration systems.", "Retail food & cold storage dates"],
      ["doe",     "Walk-in cooler/freezer and equipment efficiency.", "10 CFR 431"],
      ["nec",     "Electrical.", "Art. 440"],
      ["csab52",  "Canada: refrigeration code.", "All"]
    ]
  },
  {
    id: "chiller", cat: "ref", icon: "🏭",
    title: "Chillers & refrigeration machinery rooms",
    desc: "Chilled-water plants, large refrigeration systems and machinery rooms.",
    keywords: "chiller plant machinery room cooling tower centrifugal screw large refrigeration",
    roles: {
      tech: "Machinery room detector/alarm/ventilation testing, low-pressure (Type III) recovery for centrifugals, leak inspections and records, cooling tower water treatment.",
      eng:  "Machinery room design (ventilation, detection, emergency shutdown, access), pressure relief discharge, B31.5/B31.9 piping, Legionella water management.",
      owner:"Required: leak inspections/records, water management plan for cooling towers in many jurisdictions."
    },
    items: [
      ["local",   "Permits, boiler/pressure vessel and operator licensing in some areas.", "Licensing"],
      ["imc",     "Refrigeration and machinery rooms.", "Ch. 11"],
      ["ifc",     "Machinery room safety, emergency controls.", "Refrigeration section"],
      ["ashrae15","Machinery room requirements.", "Ventilation, detection, relief"],
      ["ashrae34","Refrigerant classification.", "Safety groups"],
      ["asmeb315","Refrigeration piping.", "Testing"],
      ["asmeb319","Chilled water piping.", "Piping"],
      ["asmebpvc","Pressure vessels (Sec. VIII).", "Receivers, shells"],
      ["ashrae188","Cooling tower Legionella risk management.", "Water management program"],
      ["epa608",  "Type III/Universal certification, leak repair.", "Leak inspections"],
      ["aim",     "Chiller refrigerant GWP limits.", "Compliance dates"],
      ["ahri",    "Chiller ratings (550/590).", "IPLV/kW per ton"],
      ["iecc",    "Chiller efficiency and plant controls.", "C403"],
      ["csab52",  "Canada: refrigeration code.", "Machinery rooms"],
      ["en378",   "Europe: refrigeration safety.", "Machinery rooms"]
    ]
  },
  {
    id: "refrigerant", cat: "ref", icon: "🧪",
    title: "Refrigerant service, recovery & leak repair",
    desc: "Charging, recovering, recycling and leak repair on any system.",
    keywords: "refrigerant recovery leak repair epa 608 certification charging venting r410a r22",
    roles: {
      tech: "Get EPA 608 certified for the system types you work on. Never vent; use certified recovery equipment; follow evacuation levels; keep records; sell/buy refrigerant only with certification.",
      eng:  "Specify leak detection and design for serviceability; understand leak repair obligations for owners.",
      owner:"You are responsible for leak repair and records on larger systems — hire certified technicians."
    },
    items: [
      ["epa608",  "Core federal rule for all stationary refrigerant handling.", "Certification types, recovery, leak repair, records"],
      ["aim",     "HFC management: reclaimed refrigerant and leak repair rules under the AIM Act.", "Emissions reduction & reclamation rules"],
      ["ashrae34","Know the safety class of the refrigerant you're handling.", "Safety groups"],
      ["ashrae15","Charge limits and safety when adding refrigerant.", "Limits"],
      ["osha",    "PPE, hazard communication (SDS), confined spaces.", "HazCom"],
      ["caOds",   "Canada: refrigerant handling and certification.", "Certification"]
    ]
  },
  {
    id: "a2l", cat: "ref", icon: "⚠️",
    title: "Working with A2L refrigerants (R-454B, R-32)",
    desc: "The new mildly flammable refrigerants in most new AC/heat pumps.",
    keywords: "a2l r454b r-454b r32 r-32 flammable refrigerant new refrigerant transition",
    roles: {
      tech: "Use A2L-rated recovery machines/vacuum pumps/leak detectors, red-marked cylinders with left-hand threads, no ignition sources, follow manufacturer charge limits and leak-detection/mitigation setup, and take A2L training.",
      eng:  "Check charge vs. room size (UL 60335-2-40 / ASHRAE 15/15.2), detection & mitigation requirements, and that your adopted code edition allows A2Ls (older editions may need amendments).",
      owner:"New systems using A2Ls are safe when installed correctly — they may include a refrigerant sensor that runs the blower if a leak is detected."
    },
    items: [
      ["local",   "Confirm your jurisdiction's code edition/amendments permit A2L systems.", "Local amendments"],
      ["aim",     "Why the transition is happening and the dates.", "Technology transitions"],
      ["ashrae34","A2L safety classification.", "A2L definition"],
      ["ul60335", "Equipment listing — sets charge limits, detection and mitigation.", "Installation instructions"],
      ["ashrae15","Commercial A2L requirements.", "A2L provisions"],
      ["ashrae152","Residential A2L requirements.", "Charge vs. room"],
      ["imc",     "Newer editions include A2L-specific rules.", "Ch. 11"],
      ["irc",     "Newer editions include A2L-specific rules for homes.", "Ch. 14"],
      ["epa608",  "Handling and recovery still applies.", "Recovery"],
      ["osha",    "Flammable-gas handling safety.", "HazCom"]
    ]
  },
  {
    id: "ducts", cat: "air", icon: "📦",
    title: "Duct installation, sealing & leakage testing",
    desc: "New or altered ductwork, residential or commercial.",
    keywords: "duct ductwork flex sealing mastic leakage test insulation sheet metal plenum",
    roles: {
      tech: "Use listed materials, seal all joints with listed mastic/tape, support per standards, insulate in unconditioned space and be ready for a duct leakage test.",
      eng:  "Specify pressure/seal classes, leakage testing, insulation R-values, fire/smoke damper locations.",
      owner:"Leaky ducts waste a lot of energy — a duct leakage test result is good proof of quality."
    },
    items: [
      ["irc",     "Homes: duct systems.", "Ch. 16"],
      ["imc",     "Duct systems, plenums, insulation, dampers.", "Ch. 6"],
      ["iecc",    "Duct insulation, sealing and leakage testing.", "R403 / C403"],
      ["smacnaDuct","Duct construction.", "Pressure/seal classes"],
      ["smacnaLeak","Commercial leakage testing.", "Test procedure"],
      ["ul181",   "Listed flex duct, duct board and closures.", "181, 181A, 181B"],
      ["accaD",   "Residential duct design.", "Sizing"],
      ["nfpa90a", "Commercial duct fire safety.", "Materials"],
      ["nfpa90b", "Residential duct fire safety.", "Materials"]
    ]
  },
  {
    id: "ventilation", cat: "air", icon: "🌬️",
    title: "Ventilation, exhaust & IAQ (ERV/HRV)",
    desc: "Outdoor-air ventilation, bathroom/kitchen exhaust, ERVs/HRVs, filtration.",
    keywords: "ventilation erv hrv exhaust fan bathroom fan indoor air quality iaq filter merv outdoor air",
    roles: {
      tech: "Exhaust must terminate outdoors (not in attics), with proper termination clearances. Verify airflow, not just fan rating.",
      eng:  "Calculate ventilation rates (62.1/62.2 or IMC Ch. 4), intake separation, energy recovery requirements and filtration.",
      owner:"Tight homes need mechanical ventilation. Ask how fresh air is provided."
    },
    items: [
      ["irc",     "Homes: exhaust and mechanical ventilation.", "Ch. 15; R303/M1505 ventilation"],
      ["imc",     "Ventilation and exhaust.", "Ch. 4, Ch. 5"],
      ["ashrae621","Commercial ventilation.", "VRP, intakes"],
      ["ashrae622","Residential ventilation.", "Whole-house & local exhaust"],
      ["iecc",    "Mechanical ventilation, energy recovery requirements, fan efficacy.", "R403 / C403"],
      ["ashrae522","Filter ratings (MERV).", "MERV"],
      ["ashrae241","Infection-risk reduction (optional/required by some owners).", "Equivalent clean airflow"],
      ["iso16890","Filter ratings outside North America.", "ePM"],
      ["nbc",     "Canada: ventilation.", "9.32"]
    ]
  },
  {
    id: "fire-smoke", cat: "air", icon: "🚒",
    title: "Fire dampers, smoke dampers & smoke control",
    desc: "Ducts through fire-rated walls/floors, duct smoke detectors, smoke control systems.",
    keywords: "fire damper smoke damper rated wall penetration smoke control duct detector",
    roles: {
      tech: "Install dampers exactly per their listing (sleeve, angles, clearance), provide access doors, and test operation.",
      eng:  "Locate dampers per IBC/IMC, coordinate with fire alarm, design smoke control per NFPA 92.",
      owner:"Fire and smoke dampers need periodic inspection and testing — keep records."
    },
    items: [
      ["ibc",     "Where rated assemblies are and when dampers are required.", "Ch. 7 (ducts & air transfer openings)"],
      ["imc",     "Damper installation and duct smoke detection.", "Ch. 6 (Sec. 606, 607)"],
      ["ul555",   "Damper listings.", "555 / 555S"],
      ["smacnaDamper","Installation details.", "Sleeves, angles"],
      ["nfpa90a", "Air distribution fire safety.", "Dampers"],
      ["nfpa72",  "Duct smoke detectors.", "Installation & testing"],
      ["nfpa92",  "Smoke control systems.", "Design & testing"]
    ]
  },
  {
    id: "healthcare", cat: "com", icon: "🏥",
    title: "Healthcare facility HVAC",
    desc: "Hospitals, surgery centers, clinics, isolation rooms.",
    keywords: "hospital healthcare operating room isolation room clinic surgery pressure relationship",
    roles: {
      tech: "Pressure relationships, air change rates and filters are verified and often regulated — document everything.",
      eng:  "ASHRAE 170 drives design; also FGI Guidelines and state health department rules; infection control during construction.",
      owner:"Accreditation and state health departments may audit HVAC performance."
    },
    items: [
      ["local",   "State health department rules and FGI Guidelines adoption.", "Health facility licensing"],
      ["ashrae170","Core ventilation standard for healthcare.", "Tables of ACH, pressure, filtration"],
      ["imc",     "Mechanical code.", "Ch. 4"],
      ["ashrae241","Infectious aerosol control.", "Equivalent clean airflow"],
      ["ashrae522","Filter ratings.", "MERV"],
      ["ashrae188","Water management (Legionella).", "Program"],
      ["nfpa90a", "Air distribution fire safety.", "All"]
    ]
  },
  {
    id: "tab-cx", cat: "svc", icon: "📊",
    title: "Testing, adjusting, balancing & commissioning",
    desc: "TAB of air/water systems and building commissioning.",
    keywords: "tab testing adjusting balancing commissioning cx airflow hydronic balance startup",
    roles: {
      tech: "Calibrated instruments, procedures per the named standard (NEBB/AABC/TABB), and a complete report.",
      eng:  "Specify TAB standard and commissioning scope; energy code may require commissioning on larger projects.",
      owner:"Commissioning verifies you got the system you paid for."
    },
    items: [
      ["tab",     "Procedural standards for TAB work.", "Procedures & reporting"],
      ["ashrae111","Measurement methods.", "Instruments"],
      ["ashrae202","Commissioning process.", "Functional testing"],
      ["iecc",    "Commercial commissioning and balancing requirements.", "C408"],
      ["smacnaLeak","Duct leakage testing.", "Procedure"],
      ["acca5",   "Residential verification.", "Airflow, charge"]
    ]
  },
  {
    id: "maintenance", cat: "svc", icon: "🔧",
    title: "Preventive maintenance & service calls",
    desc: "Routine maintenance and troubleshooting on existing equipment.",
    keywords: "maintenance service call pm troubleshooting repair tune up",
    roles: {
      tech: "Lockout/tagout before servicing, EPA 608 for any refrigerant work, and follow maintenance task lists.",
      eng:  "Write maintenance programs that meet 180 and owner requirements.",
      owner:"Regular maintenance per ACCA 4 (homes) or ASHRAE/ACCA 180 (commercial) protects warranties and efficiency."
    },
    items: [
      ["osha",    "Lockout/tagout, ladders, fall protection.", "1910.147"],
      ["epa608",  "Refrigerant handling during service.", "Certification"],
      ["ashrae180","Commercial maintenance tasks/frequencies.", "Task tables"],
      ["acca4",   "Residential maintenance tasks.", "Task list"],
      ["nfpa96",  "Kitchen hood cleaning frequency.", "Cleaning schedule"],
      ["csd1",    "Boiler safety control testing.", "Testing"],
      ["ashrae188","Cooling tower water management.", "Program"],
      ["nec",     "Electrical repair work.", "Art. 440"]
    ]
  },
  {
    id: "electrical", cat: "svc", icon: "⚡",
    title: "HVAC electrical connections",
    desc: "Power wiring, disconnects and controls for HVAC equipment.",
    keywords: "electrical wiring disconnect breaker mca mocp nameplate control wiring",
    roles: {
      tech: "Size wire from MCA and breaker/fuse from MOCP on the nameplate, disconnect within sight, service receptacle within 25 ft, working clearances.",
      eng:  "Coordinate equipment nameplate data with electrical design.",
      owner:"Electrical work may need a separate permit and licensed electrician."
    },
    items: [
      ["local",   "Electrical permit/licensing rules.", "Licensing"],
      ["nec",     "Core electrical code.", "Art. 440, 430, 424, 210.63, 110.26"],
      ["osha",    "Electrical safety and lockout/tagout.", "1910.147"],
      ["csac221", "Canada: electrical code.", "All"]
    ]
  }
];

const GLOSSARY = [
  ["AHJ", "Authority Having Jurisdiction — the office or official (building department, fire marshal, inspector) that enforces codes and approves work."],
  ["Model code", "A code written by an organization like ICC or NFPA. It isn't law until a government adopts it."],
  ["Adoption", "When a state or city makes a specific edition of a model code law, often with local amendments."],
  ["Listed / Labeled", "Equipment tested by a recognized lab (UL, ETL, CSA) and marked. Codes require listed equipment to be installed per its listing and instructions."],
  ["Approved", "Acceptable to the AHJ."],
  ["A2L", "Refrigerant safety class: lower toxicity (A), lower flammability (2L). E.g., R-454B, R-32."],
  ["GWP", "Global Warming Potential — how much a refrigerant warms the climate compared to CO₂."],
  ["SEER2 / EER2 / HSPF2", "Cooling seasonal, cooling peak and heat pump heating efficiency metrics (new test procedure since 2023)."],
  ["AFUE", "Annual Fuel Utilization Efficiency for furnaces and boilers."],
  ["MERV", "Minimum Efficiency Reporting Value — filter rating per ASHRAE 52.2."],
  ["MCA / MOCP", "Minimum Circuit Ampacity / Maximum Overcurrent Protection — nameplate values used to size wire and breakers."],
  ["Machinery room", "A dedicated room for refrigeration equipment when refrigerant quantities exceed limits for occupied spaces."],
  ["Economizer", "Dampers/controls that use cool outdoor air for free cooling; required by energy codes on many commercial units."],
  ["TAB", "Testing, Adjusting and Balancing of air and water systems."],
  ["Cx", "Commissioning — verifying systems meet the owner's requirements."]
];
