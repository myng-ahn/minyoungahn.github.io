function typewrite(element, text, i = 0) {
  if (i === 0) {
    element.textContent = "";
  }

  element.textContent += text[i];

  if (i === text.length - 1) {
    return;
  }

  setTimeout(() => typewrite(element, text, i + 1), 75);
}

const greeting = document.querySelector(".greeting");
text = "Hi, I'm Minyoung";
typewrite(greeting, text);

const experiences = [
  {
    start: "Jun 2023",
    end: "Present",
    title: `Research Intern,
      <a 
        class="intext-link" href="http://mollahlab.wustl.edu/"
      >Mollah Lab</a
      >`,
    bullets: [
      `Redesigned data layout for
      <a
        class="intext-link"
        href="http://34.66.27.91/crewdb/confirm.php"
      >CrewDB</a
      >, a web application for visualizing protein-protein interaction
      networks for various chromatin regulators and diseases correlated
      with their abnormal functioning.`,
      `Developed an ontology for chromatin regulator proteins'
      biochemical information including domains, family classification,
      and annotated GO-terms, available for viewing and download on
      <a
        class="intext-link"
        href="https://bioportal.bioontology.org/ontologies/CHRO"
      >Bioportal</a
      >.
      `,
    ],
  },
  {
    start: "Sep 2022",
    end: "Aug 2024",
    title: `Research Assistant,
      <a
        class="intext-link"
        href="https://dbmi.ucsd.edu/people/faculty.html"
      >Dr. Jejo Koola</a
      >`,
    bullets: [
      `Developed a computational framework to improve assessment of medical
      device safety by distinguishing the effect of the physician learning from 
      the adverse event risk inherent to the device.`,
      `Tested efficacy of XGBoost hyperparameter tuning, GPBoost hierarchical 
      modeling, and tree-based transfer learning methods to improve prediction 
      accuracy of event outcome.`,
    ],
  },
  {
    start: "Jan 2022",
    end: "Aug 2022",
    title: `Intern,
      <a class="intext-link" href="https://www.nanotoolsbio.com/"
      >Nanotools Bioscience</a
      >`,
    bullets: [
      `Developed Java plugin for ImageJ to display fluorescence intensity of 
      calcium imaging data of neuronal cells within an ROI over time.`,
      `Implemented program to identify regions containing neuronal cells in 
      calcium imaging movies based on thresholding of calcium trace gradient 
      and fluorescence variability per pixel over time.`,
    ],
  },
  {
    start: "Oct 2021",
    end: "May 2023",
    title: `Research Assistant,
            <a
              class="intext-link"
              href="https://cardiology.ucsd.edu/research/labs/chi/research/index.html"
            >Chi Lab</a
            >`,
    bullets: [
      `Investigated the enhancer switching mechanism between the MYH6 and MYH7 
      myosin heavy chain genes in human ventricular cardiomyocytes (vCM).`,
      `Wet-lab skills: agarose gel preparation, gel extraction, plasmis 
      extraction, plasmid digestion and ligation, vector transformation, 
      immunohistochemistry staining.`,
    ],
  },
  {
    start: "Sep 2020",
    end: "May 2021",
    title: `Research Assistant,
      <a class="intext-link" href="https://mesl.ucsd.edu/"
      >Microelectronic Embedded Systems Laboratory</a
      >`,
    bullets: [
      `Classified data sensors in the UCSD EBU3B Computer Science building 
      according to the BRICK ontology to enable computational control of HVAC
      resources.`,
      `Measured energy cost and temperature change of different air conditioning
      schedules and validated a duty-cycling schedule that increased air change
      rate by up to three times with marginal increase in energy consumption.`,
    ],
  },
];

function createBullet(text) {
  const bullet = document.createElement("div");
  bullet.className = "item-bullet";
  bullet.innerHTML = text;
  return bullet;
}

function createExperienceEntry(exp) {
  const template = document.getElementById("experience-template");
  const entry = template.content.cloneNode(true);

  entry.querySelector(".start-date").textContent = exp.start;
  entry.querySelector(".end-date").textContent = exp.end;
  entry.querySelector(".item-title").innerHTML = exp.title;

  body = entry.querySelector(".item-body");

  exp.bullets.forEach((bulletText) => {
    body.appendChild(createBullet(bulletText));
  });

  return entry;
}

const container = document.getElementById("experience");
experiences.forEach((exp) => {
  container.appendChild(createExperienceEntry(exp));
});
