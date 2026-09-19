import artData from "@/assets/art-data.jpg";
import ihmiGroupPhoto from "@/assets/ihmi-group.png";
import artChromatogram from "@/assets/art-chromatogram.jpg";
import artPetri from "@/assets/art-petri.jpg";
import artGut from "@/assets/art-gut.jpg";
import artMicrobes from "@/assets/art-microbes.png";
import artHand from "@/assets/art-hand.png";
import facilityAnaerobicWorkstation from "@/assets/facilities/anaerobic-workstation.jpg";
import facilityMiseq from "@/assets/facilities/miseq.jpg";
import facilityIonGeneStudio from "@/assets/facilities/ion-genestudio-s5-prime.jpg";
import facilityIonChef from "@/assets/facilities/ion-chef-system.jpg";
import facilityDnaAnalyzer3730xl from "@/assets/facilities/dna-analyzer-3730xl.jpg";
import pubHeart from "@/assets/pub-heart.jpg";
import pubMicfun from "@/assets/pub-micfunpred.jpg";
import pubFamily from "@/assets/pub-family.jpg";
import pubDiabetes from "@/assets/pub-diabetes.jpg";
import pubGluten from "@/assets/pub-gluten.jpg";
import pubSewage from "@/assets/pub-sewage.jpg";
import photoDhirajDhotre from "@/assets/people/dhiraj-dhotre.jpg";
import photoNirajRane from "@/assets/people/niraj-rane.jpg";
import photoSuyashJadhav from "@/assets/people/suyash-jadhav.jpg";
import photoHarshadaPardeshi from "@/assets/people/harshada-pardeshi.jpg";
import photoBhagyashreeKarmarkar from "@/assets/people/bhagyashree-karmarkar.jpg";
import photoTanayaGhanvatkar from "@/assets/people/tanaya-ghanvatkar.jpg";
import photoMitaliInamdar from "@/assets/people/mitali-inamdar.jpg";
import photoDattatrayMongad from "@/assets/people/dattatray-mongad.jpg";
import photoKunalDixit from "@/assets/people/kunal-dixit.jpg";
import photoMadhumitaBhattacharya from "@/assets/people/madhumita-bhattacharya.jpg";
import photoPujaGhosh from "@/assets/people/puja-ghosh.jpg";
import labGroupPhoto from "@/assets/lab-group.jpg";

/** Candid lab-life photos for the scrolling gallery on the People page.
 *
 * Auto-discovered from src/assets/gallery — drop a new image file into that
 * folder (any name, jpg/jpeg/png/webp) and it will automatically appear in
 * the gallery on the next build. No code changes needed.
 */
const galleryModules = import.meta.glob<{ default: string }>(
  "../assets/gallery/*.{jpg,jpeg,png,webp}",
  { eager: true },
);
export const galleryPhotos = Object.keys(galleryModules)
  .sort()
  .map((key) => galleryModules[key]!.default);

export { labGroupPhoto };

export const lab = {
  name: "DDOmics Lab",
  institute: "National Centre for Cell Science",
  city: "Pune",
  email: "dhiraj.dhotre@nccs.res.in",
  academics: "academics@nccs.res.in",
  twitter: "https://twitter.com/DDOmicsLab",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/publications", label: "Publications" },
  { to: "/people", label: "People" },
  { to: "/news", label: "News" },
  { to: "/dhiraj-dhotre", label: "Dr. Dhotre" },
  { to: "/about", label: "About" },
] as const;

/** Header navigation, including hover/tap dropdown menus.
 *
 * Each top-level item is a Link on its own (clicking the label goes to
 * `to`); items with a `menu` also show a dropdown of sub-links on hover
 * (desktop) or tap (mobile). Sub-links with a `hash` jump straight to the
 * matching `id="..."` on the target page — add or move an id and the menu
 * link follows it automatically.
 */
export type NavSubLink = { label: string; to: string; hash?: string };
export type NavMenuItem = { label: string; to: string; menu?: NavSubLink[] };

export const navMenu: NavMenuItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Research",
    to: "/research",
    menu: [
      { label: "Facilities", to: "/research/facilities" },
      { label: "Research Domains", to: "/research/domains" },
    ],
  },
  {
    label: "Publications",
    to: "/publications",
    menu: [
      {
        label: "Featured Publications",
        to: "/publications/featured",
      },
      {
        label: "All Publications",
        to: "/publications/all",
      },
    ],
  },
  {
    label: "People",
    to: "/people",
    menu: [
      { label: "Dr. Dhotre", to: "/dhiraj-dhotre" },
      { label: "Current Lab Members", to: "/people", hash: "current-members" },
      { label: "Alumni", to: "/people", hash: "alumni" },
    ],
  },
  { label: "About", to: "/about" },
  {
    label: "News",
    to: "/news",
    menu: [
      { label: "Publication", to: "/news/publications" },
      { label: "Career Notifications", to: "/news/career-notifications" },
      { label: "Announcements", to: "/news/announcements" },
      { label: "Media", to: "/news/media" },
    ],
  },
];

export const stats = [
  { value: 4000, suffix: "+", label: "Individuals sequenced so far" },
  { value: 17, suffix: "", label: "Endogamous populations sampled" },
  { value: 20000, suffix: "", label: "Target cohort for phase II of IHMI" },
  { value: 5, suffix: "", label: "Active research tracks" },
];

export const marqueeWords = [
  "Metagenomics",
  "Culturomics",
  "Metabolomics",
  "Amplicon sequencing",
  "Gut–Brain Axis",
  "Anaerobic cultivation",
  "Multi-omics",
  "Indian Microbiome",
];

export const methods = [
  {
    title: "We use classic microbiology",
    body: "Culture-based isolation and characterization ground our sequencing data in living, testable organisms — from gut anaerobes to potential probiotic strains.",
  },
  {
    title: "We use next-generation sequencing",
    body: "Targeted amplicon and metagenomic sequencing let us map community structure across thousands of individuals and dozens of endogamous populations.",
  },
  {
    title: "We integrate multi-omics data",
    body: "Genomic, metabolomic, and dietary datasets are combined to connect microbiome signatures to real health and disease outcomes.",
  },
];

/** Facilities, shown on their own page at /research/facilities.
 * EDIT ME — swap in the lab's actual instrument/facility photos whenever
 * they're ready; the images below are the lab's existing art assets used
 * as stand-ins so each facility has something to show meanwhile.
 */
export const facilities = [
  {
    title: "Anaerobic Workstation",
    body: "A Whitley A35 anaerobic workstation keeps a fully oxygen-free, temperature-controlled atmosphere for isolating and growing obligate anaerobes straight from human and animal gut samples. Integrated glove ports and an airlock let strains be plated, sub-cultured and screened without ever breaking anaerobic conditions — essential for recovering the strict anaerobes that dominate the gut microbiota, and for taking candidate probiotic isolates through to full characterisation.",
    images: [facilityAnaerobicWorkstation],
  },
  {
    title: "DNA Sequencing Facility",
    body: "Three sequencing platforms run in-house, covering single-gene reads through to whole-genome and metagenomic scale. An Illumina MiSeq handles targeted amplicon (16S rRNA/ITS), whole-genome and metagenomic sequencing-by-synthesis runs; an Ion GeneStudio S5 Prime performs semiconductor-based sequencing for genome and metagenome projects, with library and template preparation automated on an Ion Chef System; and an Applied Biosystems 3730xl DNA Analyzer is used for Sanger sequencing and capillary-based confirmatory reads. Together they support everything from strain identification and phylogenetic placement to population-scale microbiome profiling.",
    link: "https://www.nccs.res.in/Facilities/DNAseq",
    images: [
      facilityMiseq,
      facilityIonGeneStudio,
      facilityIonChef,
      facilityDnaAnalyzer3730xl,
    ],
  },
];

export type ResearchTrack = {
  code: string;
  slug: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
  /** Only IHMI has this for now — the click-to-play explainer video. */
  video?: { youtubeId: string; title: string };
  /** Only IHMI has this for now — link out to the dedicated project site. */
  externalLink?: { label: string; href: string };
};

export const researchTracks: ResearchTrack[] = [
  {
    code: "IHMI",
    slug: "ihmi",
    title: "Indian Human Microbiome Initiative",
    summary:
      "A flagship project of NCCS Pune and DBT, Government of India, mapping the gut and oral cavity microbiome of 3,400 individuals from 17 endogamous populations.",
    image: ihmiGroupPhoto,
    video: {
      youtubeId: "CcKmH3aTekU",
      title: "Indian Human Microbiome Initiative — overview",
    },
    externalLink: {
      label: "Visit the IHMI website",
      href: "https://microdm.github.io/IHMI_website/",
    },
    detail:
      "Phase I profiles the gut and oral cavity microbiome of 3,400 individuals from 17 endogamous populations across the country using targeted amplicon and metagenomic sequencing, followed by 20,000 individuals in the next phase. The aim is a comprehensive dietary and baseline microbiome map of India for comparative analysis, usable across microbiome-based studies in human health, disease and therapy. The project runs in parallel with a genotyping study on the same individuals, allowing the two datasets to be correlated.",
  },
  {
    code: "M / I",
    slug: "mother-infant",
    title: "Impact of maternal microbiome on infant health",
    summary:
      "Longitudinal study of maternal gut, milk and skin microbiomes and their role in establishing a healthy infant microbiome.",
    image: artGut,
    detail:
      "The development of microbiome in infant occurs through mother-infant axis during or after the birth. First few days of life represent a crucial window of opportunity for shaping the development of the gastrointestinal tract and immune system, as well as the adult microbiome. But any dysbiosis during the development of microbiome in new-born can cause IBD, obesity, diabetes, inflammatory bowel disease and other long-term lifestyle disorders. The initial exposure of microbes in infant is said to begin during pregnancy through intra-uterine passage (fetal membranes, umbical cords, amniotic fluids) followed by the mode of delivery and by the type of feeding (breast feeding/ formulae fed) given to the infant. Breast milk is one of the continuous sources of mutually beneficial bacteria that are hypothesized to seed the infant’s gut via breastfeeding. It is believed that bacteria from mother’s gut translocate to breast milk via an entero-mammary pathway and thereby populate the infant’s oral and gut subsequently. Whereas, another hypothesis suggests the retrograde flux where a backward movement of milk occurs due to infant suckling and transfers the bacteria from infant’s mouth into the mother’s mammary gland. Mother’s breast milk serves as an important component in shaping the health of infant short term and long term as it harbours ideal balance of nutrients and the abundance of microbes which further acts as perfect food and an optimum medium for growth and development of immunity. Among all bioactive components present in milk, HMOs (Human Milk Oligosaccharides) presents chemical, microbial and medical importance. HMOs form a category of nondigestible, unconjugated, multifunctional and structurally glyans which resist gastrointestinal hydrolysis by gastric acidity and are not absorbable in significant amounts. Thus, allows HMOs to reach infant gut and produce a variety of beneficial effects. HMO’s acts as substrate for various useful bacteria like Bifidobacterium sp. where they are fermented in intestine. Apart from the nutritional role of HMOs in the intestinal microbiota of infants, there is increasing evidence that their interaction with pathogens is important in terms of reducing infection, for example HMOs exhibit bacteriostatic properties against group B Streptococcus (GBS). HMOs play a valuable role in development and maturation of the immune response by activating the expression of multiple cytokines and chemokines, adhesion molecules and receptors, thus maturing the naive immunity in infants. Any deviant in early microbial colonization in new-borns may lead to autoimmune diseases such as diabetes, inflammatory bowel disease, atopy, and other severe health conditions. It is known, that mother microbiome serves as reservoir in transmitting the microbes to infants. However, the exact source and route of infant pioneering microbes are poorly understood. Hence, to address this we propose a study of how different body sites of mother help in shaping the early microbiome of infant. The proposed longitudinal study will compare the effect of different maternal microbial communities (gut, breast milk and areolar skin) on the development of infant’s gut and oral microbiome. Moreover, to address this we have proposed an animal study of how different body sites of mother Balb/c mice help in shaping the early microbiome of infant mice. The proposed longitudinal study will compare the effect of different maternal microbial communities (gut, breast milk and areolar skin) on the development of infant’s gut and oral microbiome through high throughput species level targeted metagenomics (16S rRNA gene sequencing). For this purpose, fluorescently tagged specific bacterial stains will be transformed with a plasmid and subsequently, the transformed strains will be orally administered to pregnant mice. This mice model will allow the visualization, isolation, and detection of the transformed bacteria in different body locations, including mammary tissue and milk and hence reinforcing the hypothesis that physiological translocation of maternal bacteria during pregnancy and lactation may contribute to the composition of the microbiota of infant mice.",
  },
  {
    code: "INSACOG",
    slug: "insacog",
    title: "Indian SARS-CoV-2 Consortium on Genomics",
    summary:
      "We are part of INSACOG, the forum set up under the Ministry of Health and Family Welfare, monitoring circulating SARS-CoV-2 variants in India.",
    image: artChromatogram,
    detail:
      "Our aim is to study and monitor genome sequencing and virus variation of circulating strains of COVID-19 in India. We carry out whole-genome sequencing of the SARS-CoV-2 virus, aiding the understanding of how the virus spreads and evolves, and providing information that supports the public health response.",
  },
  {
    code: "GRD",
    slug: "gluten-spectrum-disorders",
    title: "Microbiome associated with gluten spectrum disorders",
    summary:
      "Multi-omics study of intestinal and stool microbiomes in celiac disease, non-celiac gluten sensitivity and irritable bowel syndrome.",
    image: artPetri,
    detail:
      "We study intestinal and stool microbiomes associated with gluten-related disorders such as celiac disease, non-celiac gluten sensitivity and functional gastrointestinal disorders including irritable bowel syndrome, using a multi-omics approach. The aim is to establish site-specific microbial biomarkers and their role in the development of GRDs, and to look for novel approaches towards potential diagnostics and therapeutics.",
  },
  {
    code: "GBA",
    slug: "gut-brain-axis",
    title: "Gut–brain axis",
    summary:
      "Investigating gut–brain axis dysregulation in individuals with autism spectrum disorder.",
    image: artMicrobes,
    detail:
      "Our main goal is to understand how the microbiome present in the gastrointestinal tract affects neurodevelopmental disorders such as autism spectrum disorder. Microbes in the body produce secondary metabolites such as short-chain fatty acids that directly regulate brain gene expression, and we quantify these alongside community profiles to trace plausible mechanistic links. During the last decade or so, clinical as well as animal studies linked gut microbiota with many psychiatric disorders. Gut microbial dynamics is an enormously strong, intrinsic, biologically active non-genetic factor. It may be suggested that the microbiota may undertake epigenetic events through its impact on metabolism. In the current study, we are aiming to investigate the possibility of gut microbial changes affecting the brain epigenetic events which could be leading to regulation of downstream target genes implicated in neuronal communication and synaptic plasticity using rodent animal model. With the importance of epigenetics in shaping the experience-induced brain functions, it is paramount to establish the link, in gut microbiota and brain epigenetics. Our goal is to identify the epigenetic signatures of neuronal plasticity drawn in by gut microbiota with potential probiotic characteristics in the neurocircuitry of emotion and cognition, i.e., amygdala and hippocampus. Whole genome-wide epigenetic changes and whole metagenomic sequencing will be employed to establish the correlations in the gut microbiome and epigenetic changes in the brain of behaving animals. In addition, the observations drawn through these studies will be further employed to draw the mechanistic molecular model operative in behavioural implications of probiotics. ",
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi?: string;
  selected?: boolean;
  topic: PublicationTopic;
};

export type PublicationTopic =
  | "Human Microbiome & Disease"
  | "Gluten-Related Disorders"
  | "Bioinformatics & Multi-omics"
  | "Pathogen Genomics"
  | "Environmental Microbiology";

export const publicationTopics: PublicationTopic[] = [
  "Human Microbiome & Disease",
  "Gluten-Related Disorders",
  "Bioinformatics & Multi-omics",
  "Pathogen Genomics",
  "Environmental Microbiology",
];

export const publications: Publication[] = [
  {
    title:
      "Gut microbiomes of tribal communities in India vary with dairy and grain consumption",
    authors:
      "Ebel, E. R., Kulkarni, A. S., Mongad, D. S., … Sonnenburg, J. L., Dhotre, D. P.",
    venue: "Gut Microbes 18(1), 2694242",
    year: 2026,
    topic: "Human Microbiome & Disease",
    doi: "10.1080/19490976.2026.2694242",
    selected: true,
  },
  {
    title:
      "Evaluation of extraction solvents for untargeted metabolomics in characterizing Antarctic cryoconite hole dissolved organic matter",
    authors:
      "Mundhe, S., Maiti, S., Sanyal, A., Majumder, A., Kadoo, N. Y., Dhotre, D., …",
    venue: "Analytica Chimica Acta, 345648",
    year: 2026,
    topic: "Environmental Microbiology",
    doi: "10.1016/j.aca.2026.345648",
  },
  {
    title:
      "Harnessing gut microbiome enzymes: Segatella copri and Stenotrophomonas maltophilia prolyl peptidases degrade gliadin peptides and improve epithelial barrier function in a celiac disease model",
    authors: "Karmarkar, B., Dhotre, D.",
    venue: "Microbiology Spectrum",
    year: 2026,
    topic: "Gluten-Related Disorders",
    doi: "10.1128/spectrum.03214-25",
    selected: true,
  },
  {
    title:
      "Isolation and characterization of a bacteria of Cupriavidus genus from Indian Himalayan region and its evaluation for production of Poly-3-hydroxybutyrate",
    authors:
      "Sinha, S., Khonde, V., Mirza, Y., Nandi, S., Dhotre, D., Ghosalkar, A.",
    venue: "Archives of Microbiology 207(9), 231",
    year: 2025,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Microbiome and antibiotic resistance profile of milk and faeces from cattle in an organized dairy production system",
    authors:
      "Amarlapudi, M. R., Balasubramaniam, C., Akash, Singh, H., Yadav, A., Hirikyathanahalli Vishweswaraiah, R., Pradhan, D., Kumar, N., Dhotre, D., Kolte, A. P., Mallappa, R. H.",
    venue: "International Journal of Antimicrobial Agents, 107590",
    year: 2025,
    topic: "Environmental Microbiology",
    doi: "10.1016/j.ijantimicag.2025.107590",
  },
  {
    title:
      "Human gut microbiota, anaerobic probiotics and faecal microbiota transplant (FMT)",
    authors: "Jiya, N., Hagir, A., Prakash, O., Dhotre, D.",
    venue: "Anaerobes of Clinical Significance, 352",
    year: 2025,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Assessment of seasonal variations in antibiotic resistance genes and microbial communities in sewage treatment plants for public health monitoring",
    authors:
      "Keer, A., Oza, Y., Mongad, D., Ramakrishnan, D., Dhotre, D., Ahmed, A., Zumla, A., …",
    venue: "Environmental Pollution 375, 126367",
    year: 2025,
    topic: "Environmental Microbiology",
    doi: "10.1016/j.envpol.2025.126367",
  },
  {
    title: "Metagenomics-guided reengineering of the gut microbiome",
    authors: "Dhotre, D. P., Karmarkar, B.",
    venue: "Metagenomics, 225–264",
    year: 2025,
    topic: "Bioinformatics & Multi-omics",
  },
  {
    title:
      "Multi-meta-omics reveal distinct microbial genomic profiles and metabolic dysregulation in non-celiac gluten sensitivity",
    authors:
      "Dixit, K., Busi, S. B., Ahmed, A., Kshirsagar, A., Jäger, C., Singh, A., Shah, V., Saroj, S. D., Ahuja, V., Wilmes, P., Shouche, Y., Makharia, G., Dhotre, D.",
    venue: "mSphere",
    year: 2026,
    topic: "Gluten-Related Disorders",
    doi: "10.1128/msphere.00856-25",
    selected: true,
  },
  {
    title:
      "Prolonged exposure to insulin might cause epigenetic alteration leading to insulin resistance",
    authors:
      "Bano, S., More, S., Mongad, D. S., Khalique, A., Dhotre, D. P., Bhat, M. K., Seshadri, V.",
    venue: "FEBS Open Bio 15(1), 81–93",
    year: 2025,
    topic: "Bioinformatics & Multi-omics",
    doi: "10.1002/2211-5463.13891",
  },
  {
    title:
      "Site-specific gut microbial signatures in non-celiac gluten sensitivity",
    authors:
      "Dixit, K., Ahmed, A., Singh, A., Inamdar, M., Chavan, S., Bodkhe, R., Mehtab, W., Chauhan, A., Saroj, S. D., Ahuja, V., Shouche, Y., Dhotre, D., Makharia, G.",
    venue: "Gut Microbes Reports 1(1), 2438621",
    year: 2024,
    topic: "Gluten-Related Disorders",
    doi: "10.1080/29933935.2024.2438621",
  },
  {
    title:
      "Biochemical analyses can complement sequencing-based ARG load monitoring: a case study in Indian hospital sewage networks",
    authors: "Bhanushali, S., Pärnänen, K., Mongad, D., Dhotre, D., Lahti, L.",
    venue: "medRxiv preprint",
    year: 2024,
    topic: "Environmental Microbiology",
    doi: "10.1101/2024.05.31.24308262",
  },
  {
    title:
      "Holed up, but thriving: impact of multitrophic cryoconite communities on glacier elemental cycles",
    authors: "Antony, R., Mongad, D., Sanyal, A., Dhotre, D., Thamban, M.",
    venue: "Science of the Total Environment 933, 173187",
    year: 2024,
    topic: "Environmental Microbiology",
    doi: "10.1016/j.scitotenv.2024.173187",
  },
  {
    title:
      "Decoding the role of oxidative stress resistance and alternative carbon substrate assimilation in the mature biofilm growth mode of Candida glabrata",
    authors:
      "Raj, K., Paul, D., Rishi, P., Shukla, G., Dhotre, D., Shouche, Y.",
    venue: "BMC Microbiology 24(1), 128",
    year: 2024,
    topic: "Pathogen Genomics",
  },
  {
    title:
      "Correlation of severity & clinical outcomes of COVID-19 with virus variants: A prospective, multicentre hospital network study",
    authors: "Wadhwa, K., Malik, S., Balaji, S., … Dhotre, D., … Garg, P. K.",
    venue: "Indian Journal of Medical Research 159(1), 91–101",
    year: 2024,
    topic: "Pathogen Genomics",
    doi: "10.4103/ijmr.ijmr_1041_23",
  },
  {
    title:
      "Culture-based and culture-independent approach for the study of the methanogens and obligate anaerobes from different landfill sites",
    authors:
      "Prakash, O., Dewala, S. R., Nimonkar, Y., Patil, S. K., Chauhan, A., Yadav, A., … Dhotre, D.",
    venue: "Frontiers in Microbiology 14, 1273037",
    year: 2024,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Heart failure severity closely correlates with intestinal dysbiosis and subsequent metabolomic alterations",
    authors:
      "Spehlmann, M. E., Rangrez, A. Y., Dhotre, D. P., Schmiedel, N., Chavan, N., Bang, C., … Frey, N.",
    venue: "Biomedicines 10(4), 809",
    year: 2022,
    topic: "Human Microbiome & Disease",
    doi: "10.3390/biomedicines10040809",
    selected: true,
  },
  {
    title:
      "MicFunPred: A conserved approach to predict functional profiles from 16S rRNA gene sequence data",
    authors:
      "Mongad, D. S., Chavan, N. S., Narwade, N. P., Dixit, K., Shouche, Y. S., Dhotre, D. P.",
    venue: "Genomics 113(6), 3635–3643",
    year: 2021,
    topic: "Bioinformatics & Multi-omics",
    doi: "10.1016/j.ygeno.2021.08.016",
    selected: true,
  },
  {
    title:
      "Gut, oral and skin microbiome of Indian patrilineal families reveal perceptible association with age",
    authors:
      "Chaudhari, D. S., Dhotre, D. P., Agarwal, D. M., Gaike, A. H., Bhalerao, D., Jadhav, P., … Shouche, Y. S.",
    venue: "Scientific Reports 10(1), 5685",
    year: 2020,
    topic: "Human Microbiome & Disease",
    doi: "10.1038/s41598-020-62195-5",
    selected: true,
  },
  {
    title:
      "The gut microbial diversity of newly diagnosed diabetics but not of prediabetics is significantly different from that of healthy nondiabetics",
    authors:
      "Gaike, A. H., Paul, D., Bhute, S., Dhotre, D. P., Pande, P., Upadhyaya, S., … Shouche, Y. S.",
    venue: "mSystems 5(2), e00578-19",
    year: 2020,
    topic: "Human Microbiome & Disease",
    doi: "10.1128/msystems.00578-19",
    selected: true,
  },
  {
    title:
      "Comparative genomics of whole-cell pertussis vaccine strains from India",
    authors:
      "Alai, S., Ghattargi, V. C., Gautam, M., Patel, K., Pawar, S. P., Dhotre, D. P., … Gairola, S.",
    venue: "BMC Genomics 21, 1–15",
    year: 2020,
    topic: "Pathogen Genomics",
    doi: "10.1186/s12864-020-6724-8",
    selected: true,
  },
  {
    title:
      "Sieving out non-celiac gluten sensitivity amongst patients with irritable bowel syndrome",
    authors:
      "Ahmed, A., Dixit, K., Singh, A., Agarwal, A., Mehtab, W., Prasad, S., Rajput, M. S., et al.",
    venue: "Digestive and Liver Disease",
    year: 2023,
    topic: "Gluten-Related Disorders",
  },
  {
    title:
      "Recent advances in production and applications of ectoine, a compatible solute of industrial relevance",
    authors:
      "Kadam, P., Khisti, M., Ravishankar, V., Barvkar, V., Dhotre, D., Sharma, A., Shouche, Y., Zinjarde, S.",
    venue: "Bioresource Technology, 130016",
    year: 2023,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "High antibiotic resistance in Indian sewage shows distinct trends and might be disjoint from in-situ antibiotic levels",
    authors:
      "Singh, K. S., Keer, A., Zed, A., Jasmeen, R., Mishra, K., Mourya, N., Paul, D., Dhotre, D., Shouche, Y.",
    venue: "Water, Air, & Soil Pollution 234(7), 467",
    year: 2023,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Mo1869 Site-specific microbial signatures in non-celiac gluten sensitivity and irritable bowel syndrome",
    authors:
      "Dixit, K., Ahmed, A., Singh, A., Mehtab, W., Chauhan, A., Ahuja, V., Shouche, Y., Dhotre, D., Makharia, G. K.",
    venue: "Gastroenterology 164(6), S-923",
    year: 2023,
    topic: "Gluten-Related Disorders",
  },
  {
    title:
      "Prokaryotic communities adapted to microhabitats on the Indian lotus (Nelumbo nucifera) growing in the high-altitude urban Dal Lake",
    authors:
      "Chaudhari, D., Kiran, S., Choudhary, A., Silveira, K., Narwade, N., Dhotre, D., Khazir, J., Mir, B. A., Shouche, Y. S., Rahi, P.",
    venue: "International Microbiology 26(2), 257–267",
    year: 2023,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Bacterial Communities and Diversity of Western Ghats Soil: A Study of a Biodiversity Hotspot",
    authors:
      "Ghare, U., Narvekar, S., Lodha, T., Mallebhari, R., Dastager, S., Barvkar, V. T., Dhotre, D., Karmalkar, N. R., Pable, A. A.",
    venue: "Current Microbiology 80(4), 108",
    year: 2023,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Indian sewage microbiome has unique community characteristics and potential for population-level disease predictions",
    authors:
      "Singh, K. S., Paul, D., Gupta, A., Dhotre, D., Klawonn, F., Shouche, Y.",
    venue: "Science of The Total Environment 858, 160178",
    year: 2023,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Corrigendum: Diversity of resistant determinants, virulence factors, and mobile genetic elements in Acinetobacter baumannii from India: A comprehensive in silico genome analysis",
    authors:
      "Kumkar, S. N., Kamble, E. E., Chavan, N. S., Dhotre, D. P., Pardesi, K. R.",
    venue: "Frontiers in Cellular and Infection Microbiology 12, 1130394",
    year: 2023,
    topic: "Pathogen Genomics",
  },
  {
    title:
      "Diversity of resistant determinants, virulence factors, and mobile genetic elements in Acinetobacter baumannii from India: A comprehensive in silico genome analysis",
    authors:
      "Kumkar, S. N., Kamble, E. E., Chavan, N. S., Dhotre, D. P., Pardesi, K. R.",
    venue: "Frontiers in Cellular and Infection Microbiology 12, 997897",
    year: 2022,
    topic: "Pathogen Genomics",
  },
  {
    title:
      "Whole-Genome Sequencing of the Tropical Marine Bacterium Nocardiopsis dassonvillei NCIM 5124, Containing the Ectoine Biosynthesis Gene Cluster ectABC",
    authors:
      "Kadam, P., Kajale, S., Sharma, A., Dhotre, D., Barvkar, V., Shouche, Y., Zinjarde, S.",
    venue: "Microbiology Resource Announcements 11(10), e00435-22",
    year: 2022,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Dataset of ileum bacterial diversity in mice after heart failure due to pressure overload",
    authors:
      "Spehlmann, M. E., Dhotre, D. P., Schmiedel, N., Chavan, N., Bang, C., Rangrez, A. Y.",
    venue: "Data in Brief 44, 108498",
    year: 2022,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "False-positive detection of Group B Streptococcus (GBS) in chromogenic media (Strep B Carrot Broth) due to presence of Enterococcus faecalis in High Vaginal swabs",
    authors:
      "Singh, A., Husein, A., Singh, S., Ghattargi, V., Dhotre, D., Shouche, Y. S., Colaco, S., et al.",
    venue: "Journal of Medical Microbiology 71(8), 001577",
    year: 2022,
    topic: "Pathogen Genomics",
  },
  {
    title: "Paenibacillus oleatilyticus sp. nov., isolated from soil",
    authors:
      "Chauhan, N. S., Joseph, N., Shaligram, S., Chavan, N., Joshi, A., Dhotre, D., Lodha, T., Shouche, Y.",
    venue: "Archives of Microbiology 204(8), 516",
    year: 2022,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Characterization of Bordetella pertussis Strains Isolated from India",
    authors:
      "Alai, S., Gautam, M., Palkar, S., Oswal, J., Gairola, S., Dhotre, D. P.",
    venue: "Pathogens 11(7), 794",
    year: 2022,
    topic: "Pathogen Genomics",
  },
  {
    title:
      "A Microcosm Model for the Study of Microbial Community Shift and Carbon Emission from Landfills",
    authors:
      "Sagar, I., Nimonkar, Y., Dhotre, D., Shouche, Y., Ranade, D., Dewala, S., Prakash, O.",
    venue: "Indian Journal of Microbiology, 1–9",
    year: 2022,
    topic: "Environmental Microbiology",
  },
  {
    title: "Probiotics: A Mainstream Therapy for the Disease Suppression",
    authors:
      "Ghattargi, V. C., Shouche, Y. S., Dhakephalkar, P. K., Rao, P., Ramana, V., Dhotre, D. P., Lanjekar, V. B.",
    venue: "Probiotic Research in Therapeutics, 257–273",
    year: 2022,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Rectal administration of buttermilk processed with medicinal plants alters gut microbiome in obese individuals",
    authors:
      "Mane, S., Dixit, K. K., Lathwal, N., Dhotre, D., Kadus, P., Shouche, Y. S., Bhalerao, S.",
    venue: "Journal of Diabetes & Metabolic Disorders 20(2), 1415–1427",
    year: 2021,
    topic: "Human Microbiome & Disease",
  },
  {
    title: "Restoration of dysbiotic human gut microbiome for homeostasis",
    authors: "Dixit, K., Chaudhari, D., Dhotre, D., Shouche, Y., Saroj, S.",
    venue: "Life Sciences 278, 119622",
    year: 2021,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Integrated Genomic and Functional Characterization of the Anti-diabetic Potential of Arthrobacter sp. SW1",
    authors:
      "Shaligram, S., Narwade, N. P., Kumbhare, S. V., Bordoloi, M., Tamuli, K. J., Nath, S., Parimelazhagan, T., et al.",
    venue: "Current Microbiology 78(7), 2577–2588",
    year: 2021,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Disruptions in oral and nasal microbiota in biomass and tobacco smoke associated chronic obstructive pulmonary disease",
    authors:
      "Agarwal, D. M., Dhotre, D. P., Kumbhare, S. V., Gaike, A. H., Brashier, B. B., Shouche, Y. S., Juvekar, S. K., Salvi, S. S.",
    venue: "Archives of Microbiology 203, 2087–2099",
    year: 2021,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Contrasting composition, diversity and predictive metabolic potential of the rhizobacterial microbiomes associated with native and invasive Prosopis congeners",
    authors:
      "Kaushik, R., Pandit, M. K., Meyerson, L. A., Chaudhari, D. S., Sharma, M., Dhotre, D., Shouche, Y. S.",
    venue: "Current Microbiology 78, 2051–2060",
    year: 2021,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Benchmarking of 16S rRNA gene databases using known strain sequences",
    authors:
      "Dixit, K., Davray, D., Chaudhari, D., Kadam, P., Kshirsagar, R., Shouche, Y., Dhotre, D., Saroj, S. D.",
    venue: "Bioinformation 17(3), 377",
    year: 2021,
    topic: "Bioinformatics & Multi-omics",
  },
  {
    title:
      "Bioprospecting appraisal of Himalayan pindrow fir for pharmacological applications",
    authors:
      "Assad, R., Reshi, Z. A., Mir, S. H., Rashid, I., Shouche, Y., Dhotre, D.",
    venue: "Phytomedicine, 461–482. Academic Press",
    year: 2021,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Bacterial communities associated with the biofilms formed in high-altitude brackish water Pangong Tso located in the Himalayan Plateau",
    authors:
      "Chaudhari, D. S., Dhotre, D. P., Jani, K., Sharma, A., Singh, Y., Shouche, Y. S., Rahi, P.",
    venue: "Current Microbiology 77, 4072–4084",
    year: 2020,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Draft genome sequences of two phytoplasma strains associated with sugarcane grassy shoot (SCGS) and bermuda grass white leaf (BGWL) diseases",
    authors:
      "Kirdat, K., Tiwarekar, B., Thorat, V., Narawade, N., Dhotre, D., Sathe, S., Shouche, Y., Yadav, A.",
    venue: "Molecular Plant-Microbe Interactions 33(5), 715–717",
    year: 2020,
    topic: "Pathogen Genomics",
  },
  {
    title:
      "Treatment of industrial effluents and assessment of their impact on the structure and function of microbial diversity in a unique Anoxic-Aerobic sequential batch reactor (AnASBR)",
    authors:
      "Jena, J., Narwade, N., Das, T., Dhotre, D., Sarkar, U., Souche, Y.",
    venue: "Journal of Environmental Management 261, 110241",
    year: 2020,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Nitrincola tapanii sp. nov., a novel alkaliphilic bacterium from an Indian soda lake",
    authors:
      "Joshi, A., Thite, S., Dhotre, D., Moorthy, M., Joseph, N., Ramana, V. V., Shouche, Y.",
    venue:
      "International Journal of Systematic and Evolutionary Microbiology 70(2), 1106–1111",
    year: 2020,
    topic: "Environmental Microbiology",
  },
  {
    title: "Role of ectomycorrhizal biotechnology in pesticide remediation",
    authors: "Assad, R., Reshi, Z. A., Rashid, I., Shouche, Y., Dhotre, D.",
    venue:
      "Bioremediation and Biotechnology, Vol 3: Persistent and Recalcitrant Toxic Substances, 315–330",
    year: 2020,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Human gut microbiome research in India: A retrospect and future opportunities",
    authors: "Dhotre, D. P., Kumbhare, S. V., Sinkar, V. P., Shouche, Y. S.",
    venue: "Proc Indian Natn Sci Acad 85(4), 1051–1066",
    year: 2019,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Per rectum administration of buttermilk processed with medicinal plants alters gut microbiota in obese individuals",
    authors:
      "Mane, S., Dixit, K., Lathwal, N., Dhotre, D., Shouche, Y., Kadus, P., Bhalerao, S.",
    venue: "Journal of Gastroenterology and Hepatology 34, 272",
    year: 2019,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Repeated mild traumatic brain injury affects microbial diversity in rat jejunum",
    authors:
      "Matharu, D., Dhotre, D., Balasubramanian, N., Pawar, N., Sagarkar, S., Sakharkar, A.",
    venue: "Journal of Biosciences 44, 1–12",
    year: 2019,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Understanding the association between the human gut, oral and skin microbiome and the Ayurvedic concept of prakriti",
    authors:
      "Chaudhari, D., Dhotre, D., Agarwal, D., Gondhali, A., Nagarkar, A., Lad, V., Patil, U., Juvekar, S., Sinkar, V., Shouche, Y.",
    venue: "Journal of Biosciences 44, 1–8",
    year: 2019,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Microbiome and imputed metagenome study of crude and refined petroleum-oil-contaminated soils: Potential for hydrocarbon degradation and plant-growth promotion",
    authors: "Auti, A. M., Narwade, N. P., Deshpande, N. M., Dhotre, D. P.",
    venue: "Journal of Biosciences 44, 1–16",
    year: 2019,
    topic: "Environmental Microbiology",
  },
  {
    title: "Genome sequence of Bordetella pertussis vaccine strain BP 165",
    authors:
      "Alai, S., Ghattargi, V. C., Gautam, M., Dhotre, D. P., Patel, K., Pawar, S. P., Kumar, R., Shaligram, U., Deobagkar, D., Gairola, S.",
    venue: "Microbiology Resource Announcements 8(16)",
    year: 2019,
    topic: "Pathogen Genomics",
  },
  {
    title: "Mining the core gut microbiome from a sample Indian population",
    authors: "Kulkarni, A. S., Kumbhare, S. V., Dhotre, D. P., Shouche, Y. S.",
    venue: "Indian Journal of Microbiology 59, 90–95",
    year: 2019,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Comparison of small gut and whole gut microbiota of first-degree relatives with adult celiac disease patients and controls",
    authors:
      "Bodkhe, R., Shetty, S. A., Dhotre, D. P., Verma, A. K., Bhatia, K., Mishra, A., Kaur, G., et al.",
    venue: "Frontiers in Microbiology, 164",
    year: 2019,
    topic: "Gluten-Related Disorders",
  },
  {
    title:
      "Comparative genome analysis reveals key genetic factors associated with probiotic property in Enterococcus faecium strains",
    authors:
      "Ghattargi, V. C., Gaikwad, M. A., Meti, B. S., Nimonkar, Y. S., Dixit, K., Prakash, O., Shouche, Y. S., Pawar, S. P., Dhotre, D. P.",
    venue: "BMC Genomics 19(1), 1–16",
    year: 2018,
    topic: "Bioinformatics & Multi-omics",
  },
  {
    title:
      "World's largest mass bathing event influences the bacterial communities of Godavari, a holy river of India",
    authors:
      "Jani, K., Dhotre, D., Bandal, J., Shouche, Y., Suryavanshi, M., Rale, V., Sharma, A.",
    venue: "Microbial Ecology 76, 706–718",
    year: 2018,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Comparison of Small Gut and Whole Gut Microbiota of First-Degree Relatives with Adult Celiac Disease Patients and Controls",
    authors:
      "Shetty, S. A., Bodkhe, R., Dhotre, D. P., Verma, A. K., Bhatia, K., Mishra, A., Kaur, G., et al.",
    venue: "bioRxiv, 227272",
    year: 2017,
    topic: "Gluten-Related Disorders",
  },
  {
    title:
      "Effective biotransformation and detoxification of anthraquinone dye reactive blue 4 by using aerobic bacterial granules",
    authors: "Chaudhari, A. U., Paul, D., Dhotre, D., Kodam, K. M.",
    venue: "Water Research 122, 603–613",
    year: 2017,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "A cross-sectional comparative study of gut bacterial community of Indian and Finnish children",
    authors:
      "Kumbhare, S. V., Kumar, H., Chowdhury, S. P., Dhotre, D. P., Endo, A., Mättö, J., Ouwehand, A. C., et al.",
    venue: "Scientific Reports 7(1), 10555",
    year: 2017,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Induced sputum microbiome in smoker and non-smoker COPD subjects and its association with lung function in Indian subjects",
    authors:
      "Ghosh, B., Gaike, A., Kumbhare, S., Pyasi, K., Londhe, J., Vincent, V., Brashier, B., et al.",
    venue: "(2017)",
    year: 2017,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Potential of health and demographic surveillance system in asthma and chronic obstructive pulmonary disease microbiome research",
    authors:
      "Agarwal, D., Dhotre, D., Patil, R., Shouche, Y., Juvekar, S., Salvi, S.",
    venue: "Frontiers in Public Health 5, 196",
    year: 2017,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Reclassification of Phycicola gilvus and Leifsonia pindariensis as Microterricola gilva comb. nov. and Microterricola pindariensis comb. nov. and emended description of the genus Microterricola",
    authors:
      "Dhotre, D. P., Rajabal, V., Sharma, A., Kulkarni, G. J., Prakash, O., Vemuluri, V. R., Joseph, N., Rahi, P., Shouche, Y. S.",
    venue:
      "International Journal of Systematic and Evolutionary Microbiology 67(8), 2766–2772",
    year: 2017,
    topic: "Bioinformatics & Multi-omics",
  },
  {
    title:
      "Deep sequencing analysis of bacterial community structure of Soldhar hot spring, India",
    authors:
      "Sharma, A., Paul, D., Dhotre, D., Jani, K., Pandey, A., Shouche, Y. S.",
    venue: "Microbiology 86, 136–142",
    year: 2017,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Genomic and functional features of the biosurfactant producing Bacillus sp. AM13",
    authors:
      "Shaligram, S., Kumbhare, S. V., Dhotre, D. P., Muddeshwar, M. G., Kapley, A., Joseph, N., Purohit, H. P., Shouche, Y. S., Pawar, S. P.",
    venue: "Functional & Integrative Genomics 16, 557–566",
    year: 2016,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Molecular characterization and meta-analysis of gut microbial communities illustrate enrichment of Prevotella and Megasphaera in Indian subjects",
    authors:
      "Bhute, S., Pande, P., Shetty, S. A., Shelar, R., Mane, S., Kumbhare, S. V., Gawali, A., et al.",
    venue: "Frontiers in Microbiology 7, 660",
    year: 2016,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Nitrincola alkalisediminis sp. nov., an alkaliphilic bacterium isolated from an alkaline lake",
    authors:
      "Joshi, A., Thite, S., Kulkarni, G., Dhotre, D., Joseph, N., Ramana, V. V., Polkade, A., Shouche, Y.",
    venue:
      "International Journal of Systematic and Evolutionary Microbiology 66(3), 1254–1259",
    year: 2016,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Insights into diversity and imputed metabolic potential of bacterial communities in the continental shelf of Agatti Island",
    authors:
      "Kumbhare, S. V., Dhotre, D. P., Dhar, S. K., Jani, K., Apte, D. A., Shouche, Y. S., Sharma, A.",
    venue: "PLoS ONE 10(6), e0129864",
    year: 2015,
    topic: "Environmental Microbiology",
  },
  {
    title: "Selenomonas",
    authors:
      "Shouche, Y. S., Dighe, A. S., Dhotre, D. P., Patole, M. S., Ranade, D. R.",
    venue: "Bergey's Manual of Systematics of Archaea and Bacteria, 1–12",
    year: 2015,
    topic: "Bioinformatics & Multi-omics",
  },
  {
    title:
      "Distribution and molecular characterization of Wolbachia endosymbionts in Odonata (Insecta) from Central India by multigene approach",
    authors:
      "Salunkhe, R. C., Dhotre, D. P., Salunke, B. K., Patil, V. S., Mahale, V., Andrew, R. J., Patole, M. S., Narkhede, K. P., Shouche, Y. S.",
    venue: "Current Science, 971–978",
    year: 2015,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Draft genome sequences of Yersinia pestis strains from the 1994 plague epidemic of Surat and 2002 Shimla outbreak in India",
    authors:
      "Mahale, K. N., Paranjape, P. S., Marathe, N. P., Dhotre, D. P., Chowdhury, S., Shetty, S. A., Sharma, A., et al.",
    venue: "Indian Journal of Microbiology 54, 480–482",
    year: 2014,
    topic: "Pathogen Genomics",
  },
  {
    title:
      "Characterization of bacterial community shift in human Ulcerative Colitis patients revealed by Illumina based 16S rRNA gene amplicon sequencing",
    authors:
      "Walujkar, S. A., Dhotre, D. P., Marathe, N. P., Lawate, P. S., Bharadwaj, R. S., Shouche, Y. S.",
    venue: "Gut Pathogens 6(1), 1–11",
    year: 2014,
    topic: "Human Microbiome & Disease",
  },
  {
    title: "Comparative genome analysis of Mosquito vector",
    authors: "Dhotre, D. P.",
    venue: "(2013)",
    year: 2013,
    topic: "Bioinformatics & Multi-omics",
  },
  {
    title:
      "Draft genome sequence of Methylophaga lonarensis MPLT, a haloalkaliphilic (non-methane-utilizing) methylotroph",
    authors:
      "Shetty, S. A., Marathe, N. P., Munot, H., Antony, C. P., Dhotre, D. P., Murrell, J. C., Shouche, Y. S.",
    venue: "Genome Announcements 1(3)",
    year: 2013,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Transcriptome analysis of Anopheles stephensi embryo using expressed sequence tags",
    authors:
      "Gokhale, K., Patil, D. P., Dhotre, D. P., Dixit, R., Mendki, M. J., Patole, M. S., Shouche, Y. S.",
    venue: "Journal of Biosciences 38, 301–309",
    year: 2013,
    topic: "Bioinformatics & Multi-omics",
  },
  {
    title:
      "Draft genome of Ochrobactrum intermedium strain M86 isolated from non-ulcer dyspeptic individual from India",
    authors:
      "Kulkarni, G., Dhotre, D., Dharne, M., Shetty, S., Chowdhury, S., Misra, V., Misra, S., Patole, M., Shouche, Y.",
    venue: "Gut Pathogens 5(1), 1–5",
    year: 2013,
    topic: "Pathogen Genomics",
  },
  {
    title:
      "Genome sequence of Janibacter hoylei MTCC8307, isolated from the stratospheric air",
    authors:
      "Pawar, S. P., Dhotre, D. P., Shetty, S. A., Chowdhury, S. P., Chaudhari, B. L., Shouche, Y. S.",
    venue: "(2012): 6629–6630",
    year: 2012,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Molecular analysis of gut microbiota in obesity among Indian individuals",
    authors:
      "Patil, D. P., Dhotre, D. P., Chavan, S. G., Sultan, A., Jain, D. S., Lanjekar, V. B., Gangawani, J., et al.",
    venue: "Journal of Biosciences 37, 647–657",
    year: 2012,
    topic: "Human Microbiome & Disease",
  },
  {
    title:
      "Determination of Wolbachia diversity in butterflies from Western Ghats, India, by a multigene approach",
    authors:
      "Salunke, B. K., Salunkhe, R. C., Dhotre, D. P., Walujkar, S. A., Khandagale, A. B., Chaudhari, R., Chandode, R. K., et al.",
    venue: "Applied and Environmental Microbiology 78(12), 4458–4467",
    year: 2012,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Diversity of Wolbachia in Odontotermes spp. (Termitidae) and Coptotermes heimi (Rhinotermitidae) using the multigene approach",
    authors:
      "Salunke, B. K., Salunkhe, R. C., Dhotre, D. P., Khandagale, A. B., Walujkar, S. A., Kirwale, G. S., Ghate, H. V., Patole, M. S., Shouche, Y. S.",
    venue: "FEMS Microbiology Letters 307(1), 55–64",
    year: 2010,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Generation, annotation, and analysis of ESTs from midgut tissue of adult female Anopheles stephensi mosquitoes",
    authors:
      "Patil, D. P., Atanur, S., Dhotre, D. P., Anantharam, D., Mahajan, V. S., Walujkar, S. A., Chandode, R. K., et al.",
    venue: "BMC Genomics 10(1), 1–12",
    year: 2009,
    topic: "Bioinformatics & Multi-omics",
  },
  {
    title:
      "Molecular evidence and phylogenetic affiliations of Wolbachia in cockroaches",
    authors:
      "Vaishampayan, P. A., Dhotre, D. P., Gupta, R. P., Lalwani, P., Ghate, H., Patole, M. S., Shouche, Y. S.",
    venue: "Molecular Phylogenetics and Evolution 44(3), 1346–1351",
    year: 2007,
    topic: "Environmental Microbiology",
  },
  {
    title:
      "Evaluation of mitochondrial 12S rRNA gene in the identification of Panthera pardus fusca (Meyer, 1794) from field-collected scat samples in the Western Ghats, Maharashtra, India",
    authors:
      "Pandey, P. K., Dhotre, D. P., Dharne, M. S., Khadse, A. N., Hiremath, U. I., Chaudhari, R. D., Patole, M. S., Shouche, Y. S.",
    venue: "Current Science, 1129–1133",
    year: 2007,
    topic: "Environmental Microbiology",
  },
];

export type FeaturedPublication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi?: string;
  image: string;
};

export const featuredPublications: FeaturedPublication[] = [
  {
    title:
      "Heart failure severity closely correlates with intestinal dysbiosis and subsequent metabolomic alterations",
    authors: "Spehlmann, M. E., Rangrez, A. Y., Dhotre, D. P., et al.",
    venue: "Biomedicines",
    year: 2022,
    doi: "10.3390/biomedicines10040809",
    image: pubHeart,
  },
  {
    title:
      "MicFunPred: A conserved approach to predict functional profiles from 16S rRNA gene sequence data",
    authors:
      "Mongad, D. S., Chavan, N. S., Narwade, N. P., Dixit, K., Shouche, Y. S., Dhotre, D. P.",
    venue: "Genomics",
    year: 2021,
    doi: "10.1016/j.ygeno.2021.08.016",
    image: pubMicfun,
  },
  {
    title:
      "Gut, oral and skin microbiome of Indian patrilineal families reveal perceptible association with age",
    authors: "Chaudhari, D. S., Dhotre, D. P., Agarwal, D. M., et al.",
    venue: "Scientific Reports",
    year: 2020,
    doi: "10.1038/s41598-020-62195-5",
    image: pubFamily,
  },
  {
    title:
      "The gut microbial diversity of newly diagnosed diabetics is significantly different from that of healthy nondiabetics",
    authors: "Gaike, A. H., Paul, D., Bhute, S., Dhotre, D. P., et al.",
    venue: "mSystems",
    year: 2020,
    doi: "10.1128/msystems.00578-19",
    image: pubDiabetes,
  },
  {
    title:
      "Site-specific microbial signatures in non-celiac gluten sensitivity and irritable bowel syndrome",
    authors:
      "Dixit, K., Ahmed, A., Singh, A., et al., Dhotre, D., Makharia, G. K.",
    venue: "Gastroenterology",
    year: 2023,
    image: pubGluten,
  },
  {
    title:
      "Indian sewage microbiome has unique community characteristics and potential for population-level disease predictions",
    authors:
      "Singh, K. S., Paul, D., Gupta, A., Dhotre, D., Klawonn, F., Shouche, Y.",
    venue: "Science of The Total Environment",
    year: 2023,
    image: pubSewage,
  },
];

export type SocialLinks = {
  twitter?: string;
  linkedin?: string;
  scholar?: string;
  orcid?: string;
  github?: string;
  website?: string;
  instagram?: string;
};

export type PersonExperience = {
  role: string;
  place: string;
  period?: string;
};

export type PersonEducation = {
  degree: string;
  place?: string;
  period?: string;
};

export type PersonPublication = {
  title: string;
  venue?: string;
  year?: string;
  doi?: string;
};

/** All fields below `bio` are optional and used to build out a richer
 * /people/$personId page (education, prior roles, awards, selected
 * publications, hobbies, a personal quote, a CV link). Fill in whichever
 * a person has sent in — the profile page only renders the sections that
 * are present, so a bare-minimum entry (slug/name/role/group) still works.
 */
export type Person = {
  slug: string;
  name: string;
  role: string;
  group: "pi" | "scientist" | "student" | "staff" | "alumni";
  link?: string;
  photo?: string;
  bio?: string;
  socials?: SocialLinks;
  joinedYear?: string;
  researchFocus?: string;
  education?: PersonEducation[];
  experience?: PersonExperience[];
  awards?: string[];
  publications?: PersonPublication[];
  outsideLab?: string;
  quote?: string;
  cvUrl?: string;
  /** No profile submitted yet — show name/photo only on the People page,
   * not clickable through to a (mostly empty) profile page. */
  noProfilePage?: boolean;
};

/** A few lines shown beside the photo card for groups that currently have
 * only one member (PI, Scientists) — otherwise that row of the People page
 * is mostly empty space. EDIT ME freely; the PI text below is a separate
 * copy of `pi.about` so editing one doesn't change the other, and the
 * Niraj Rane text is placeholder copy pending his own bio.
 */
export const groupBlurbs: Record<string, string> = {
  pi: "Dr. Dhiraj Dhotre is a bioinformatician with a research interest in the human microbiome. His lab investigates the role of the human microbiome in health and disease using genomics, metabolomics and culturomics approaches. He believes it is crucial to study the taxonomic, functional and metabolic structure of the microbiome to understand the true potential and consequences of alterations within it. His group generates high-throughput sequencing data and combines computational analyses of multi-dimensional omics data with molecular and in-vivo experimentation to understand the potential of the human microbiome in diagnostics and therapeutics.",
  // EDIT ME — placeholder bio for Dr. Niraj Rane, pending his own text.
  scientist:
    "Dr. Niraj Rane works on the lab's project-scale genomics and sequencing efforts, helping coordinate sample processing, data generation and analysis across the group's ongoing microbiome studies.",
};

export const people: Person[] = [
  {
    slug: "dhiraj-dhotre",
    name: "Dr. Dhiraj Dhotre",
    role: "Principal Investigator, Scientist 'E'",
    group: "pi",
    link: "/dhiraj-dhotre",
    photo: photoDhirajDhotre,
  },
  {
    slug: "niraj-rane",
    name: "Dr. Niraj Rane",
    role: "Project Scientist",
    group: "scientist",
    photo: photoNirajRane,
    socials: {
      orcid: "https://orcid.org/0000-0002-2595-6549",
      linkedin: "https://www.linkedin.com/in/dr-niraj-rane-65759b6a/",
    },
  },
  {
    slug: "bhagyashree-karmarkar",
    name: "Bhagyashree Karmarkar",
    role: "Ph.D. Student",
    group: "student",
    photo: photoBhagyashreeKarmarkar,
    noProfilePage: true,
  },
  {
    slug: "harshada-pardeshi",
    name: "Harshada Pardeshi",
    role: "PhD Scholar",
    group: "student",
    photo: photoHarshadaPardeshi,
    joinedYear: "2023",
    bio: "I am a PhD Scholar at the DDOmics Lab, National Centre for Cell Science, India, interested in the intersection of microbial genomics, neuroendocrinology, and host-microbiome interactions. My doctoral research focuses on the gut-brain axis, specifically the identification and characterisation of neuropeptide mimics produced by gut bacteria and their role in host physiology. A key focus of my work is a bacterial peptide with structural homology to a human satiety hormone, which I am characterising through molecular cloning, recombinant protein expression, and planned in vivo validation studies. Alongside this, I have developed a Snakemake-based automated pipeline for bacterial whole genome analysis and have worked on the genomics and resistome characterisation of extensively drug-resistant (XDR) Klebsiella pneumoniae clinical isolates.",
    researchFocus:
      "The molecular dialogue of the gut-brain axis and how it modulates host physiology — specifically, lookalike peptides produced by gut bacteria that mimic human neuropeptides controlling hunger and satiety. Mapping these bacterial mimics aims to uncover novel pathways through which gut bacteria can influence appetite and host physiology.",
    education: [
      {
        degree: "M.Sc. Microbiology",
        place: "Department of Microbiology, Savitribai Phule Pune University",
        period: "2021",
      },
    ],
    experience: [
      {
        role: "Project Junior Research Fellow",
        place: "NCCS",
        period: "Jan 2023 – Jun 2023",
      },
      {
        role: "Assistant Professor",
        place: "Abasaheb Garware College",
        period: "Oct 2022 – Jan 2023",
      },
      {
        role: "Project Associate",
        place: "Dept. of Microbiology, SPPU",
        period: "Dec 2021 – Apr 2022",
      },
    ],
    awards: [
      "Senior Research Fellowship, CSIR-UGC (2025)",
      "Junior Research Fellowship, CSIR-UGC (2023)",
    ],
    outsideLab: "Enjoys painting and exploring art.",
    quote:
      "Guided by honesty and faith, I hope to pursue science with curiosity and contribute, in my own way, to something larger than myself.",
    socials: {
      linkedin: "https://www.linkedin.com/in/harshada-pardeshi-6180a21ba",
      orcid: "https://orcid.org/0009-0000-3726-0373",
      github: "https://github.com/HarshadaPardeshi",
      twitter: "https://x.com/harshadamilind",
    },
  },
  {
    slug: "madhumita-bhattacharya",
    name: "Madhumita Bhattacharyya",
    role: "Bioinformatics Scientist, DBT-BioCARe Fellow",
    group: "student",
    photo: photoMadhumitaBhattacharya,
    joinedYear: "2025",
    bio: "Dr. Madhumita Bhattacharyya is a bioinformatician with research experience spanning microbiome analysis, network analysis, structural biology, lipidomics, proteomics and transcriptome analysis. She completed her PhD at CSIR-Indian Institute of Chemical Biology, working on host–pathogen interaction networks, phylogenetic analysis and structural studies of biomolecular complexes. Her postdoctoral and research experience at the Institute of Environmental Medicine, Technical University Munich/University of Augsburg focused on skin and stool microbiomes, atopic dermatitis, lipid–microbe interactions, antibiotic resistance, and development of computational tools and pipelines for microbiome analysis. She has contributed to the development of AnnotIEM, a species-level annotation approach for 16S gene-based microbial sequencing, and MicrobIEM, a user-friendly tool for microbiome data analysis. Her current work focuses on identifying niche-specific microbiome patterns in healthy skin and gut using computational and integrative approaches.",
    researchFocus:
      "Understanding the composition and functional characteristics of the human microbiome, particularly the skin and gut microbiomes — identifying niche-specific microbial communities in healthy individuals and their interactions with the host and environmental factors. Her work combines microbiome data analysis, bioinformatics, multi-omics approaches, and the development of computational tools for microbial profiling and species-level annotation.",
    education: [
      {
        degree: "Ph.D.",
        place: "CSIR-Indian Institute of Chemical Biology",
        period: "2018",
      },
    ],
    experience: [
      {
        role: "Post-Doctoral Fellow, DBT-BioCARe",
        place: "DDOmics Lab, NCCS, Pune",
        period: "2025 – present",
      },
      {
        role: "Research Associate (Remote)",
        place: "Institute of Environmental Medicine, University of Augsburg",
        period: "2021 – 2025",
      },
      {
        role: "Postdoctoral Fellow",
        place:
          "Institute of Environmental Medicine, UNIKA-T, Technical University Munich",
        period: "2019 – 2021",
      },
      {
        role: "Guest Scientist",
        place:
          "Institute of Environmental Medicine, UNIKA-T / Helmholtz Zentrum München",
        period: "2017",
      },
      {
        role: "Senior Research Fellow",
        place: "CSIR-Indian Institute of Chemical Biology",
        period: "2010 – 2016",
      },
    ],
    awards: [
      "CSIR-NET Senior Research Fellowship, CSIR (2012–2015)",
      "CSIR-NET Junior Research Fellowship, CSIR (2010–2012)",
      "SERB National Post-Doctoral Fellowship, SERB (2018)",
      "Indira Gandhi Single Girl Child Scholarship for Postgraduate Studies (2007–2009)",
    ],
    publications: [
      {
        title:
          "AnnotIEM: A novel algorithm for species-level annotation of 16S gene based microbial OTUs",
        venue: "F1000Research / ISCB Comm J",
        year: "2019",
        doi: "10.12688/f1000research.20858.1",
      },
      {
        title:
          "Skin pH–dependent Staphylococcus aureus abundance as predictor for increasing atopic dermatitis severity",
        venue: "Allergy",
        year: "2020",
        doi: "10.1111/all.14402",
      },
      {
        title:
          "Efflux-linked accelerated evolution of antibiotic resistance at a population edge",
        venue: "Molecular Cell 82(22), 4368–4385.e6",
        year: "2022",
      },
      {
        title:
          "Skin microbiome and its association with host cofactors in determining atopic dermatitis severity",
        venue: "Journal of the European Academy of Dermatology and Venereology",
        year: "2023",
      },
      {
        title:
          "Skin lipid–microbe interplay links Staphylococcus hominis to barrier control in adult atopic dermatitis",
        venue: "Allergy",
        year: "2025",
      },
    ],
    outsideLab:
      "Avid reader and story buff; food enthusiast; likes art and craft.",
    quote:
      "Value is not what you are given, value is what you create for yourself.",
  },
  {
    slug: "mitali-inamdar",
    name: "Mitali Inamdar",
    role: "Senior Research Fellow",
    group: "student",
    photo: photoMitaliInamdar,
    joinedYear: "2018",
    researchFocus:
      "Human microbiome research spanning next-generation sequencing, mother–infant microbiome dynamics, microbial ecology, metagenomics, microbial genomics, microbial therapeutics and probiotics.",
    bio: "I am a microbiome researcher interested in understanding the human body as a dynamic ecosystem in which microbes, host physiology, diet, and metabolites continuously interact to shape health across the human lifespan. My work brings together microbiology, metagenomics, nutrition, physiology, and microbial ecology to study the human microbiome from its earliest beginnings to its complex dynamics in adulthood, and ultimately to explore how these microbial ecosystems can be translated into therapeutic and nutritional applications. As part of my PhD research, I investigate mother–infant microbial dynamics, with a particular focus on the potential entero-mammary pathway and other routes of early microbial acquisition. Breast milk is both a nutritional resource and a complex biological interface between mother and infant, carrying microbes, metabolites, and bioactive components that may influence the establishment of the infant gut ecosystem. I study these interactions across mother, breast milk, and infant compartments to understand how microbial communities are transferred, assembled, and functionally shaped during early life. Apart from this, I have been closely involved in the Indian Human Microbiome Initiative (IHMI), a flagship Government of India program, from its sampling phase through large scale microbiome data generation and analysis across diverse Indian populations. My broader work spans both culture-independent and culture-dependent approaches, including next-generation sequencing, metagenomics, microbial community analysis, anaerobic microbial isolation and cultivation, genomic characterization, and the development and application of potential probiotics.",
    education: [
      {
        degree: "M.Sc. Microbiology",
      },
    ],
    awards: ["Best Oral Award, 15th India Probiotic Symposium"],
    publications: [
      {
        title:
          "Oral microbiome profiles in oral potentially malignant disorders and oral cancer — a diagnostic perspective",
        doi: "10.4103/jomfp.jomfp_140_24",
      },
      {
        title:
          "Site-specific gut microbial signatures in non-celiac gluten sensitivity",
        doi: "10.1080/29933935.2024.2438621",
      },
      {
        title:
          "Anthropogenic activities induce depletion in microbial communities at urban sites of the River Ganges",
        doi: "10.1007/s00284-017-1352-5",
      },
    ],
    outsideLab:
      "Mountain person at heart! Happiest chasing trails, watching wildlife, stargazing under open skies or taking a refreshing swim in the summer — whenever possible, trading screens and city life for a little more time in nature.",
    quote:
      "I believe life is best lived with curiosity and with willingness to keep learning!",
    socials: {
      twitter: "https://x.com/mitali_inamdar",
      linkedin: "https://www.linkedin.com/in/mitali-inamdar",
    },
  },
  {
    slug: "puja-ghosh",
    name: "Puja Ghosh",
    role: "UGC-SRF / PhD Student",
    group: "student",
    photo: photoPujaGhosh,
    joinedYear: "2022",
    researchFocus:
      "The microbiota–gut–brain axis, and how gut dysbiosis drives core behavioral phenotypes in autism. This translational work focuses on isolating and characterizing indigenous psychobiotic candidates from the Indian pediatric gut microbiome, followed by in vitro and in vivo validation using Maternal Immune Activation (MIA) mouse models.",
    education: [
      {
        degree: "M.Sc. Biotechnology",
        place: "University of Madras",
        period: "2020",
      },
    ],
    experience: [
      {
        role: "Project Trainee",
        place: "CSIR-CLRI, Chennai",
        period: "6 months",
      },
      {
        role: "Subject Matter Expert (Biology)",
        place: "Cactus Communications",
      },
      {
        role: "Subject Matter Expert (Biology)",
        place: "Innovalance Learning",
      },
    ],
    awards: [
      "GATE Life Science (2022)",
      "GATE Biotechnology (2022)",
      "WBSET (2022)",
      "Rank Holder, University of Madras (2020)",
    ],
    quote:
      "A messy bench, a delayed timeline, and a failed assay teach you more than a perfect protocol ever could.",
  },
  {
    slug: "suyash-jadhav",
    name: "Suyash Jadhav",
    role: "Ph.D. Student",
    group: "student",
    photo: photoSuyashJadhav,
    joinedYear: "2026",
    quote:
      "On a given day, a given circumstance, you think you have a limit. You go for the limit, you reach that limit, something happens and you suddenly can go a little bit further. With your mind power, your determination, your instinct and the experience as well, you can fly very high.",
    education: [
      {
        degree: "M.Sc. Bioinformatics",
        place: "Bioinformatics Centre, Savitribai Phule Pune University",
        period: "2024 – 2026",
      },
      {
        degree: "B.Sc. Biotechnology",
        place: "H.P.T. Arts & R.Y.K. Science College, Nashik",
        period: "2021 – 2024",
      },
    ],
    experience: [
      {
        role: "PhD Scholar",
        place: "DDOmics Lab, NCCS, Pune",
        period: "Aug 2026 – present",
      },
      {
        role: "Tutor (Biology)",
        place: "Atharva Classes",
        period: "2021 – 2024",
      },
    ],
    awards: [
      "Junior Research Fellowship (JRF), CSIR-UGC NET (2026 – present)",
      "CSIR-UGC NET Junior Research Fellowship, AIR 105 (June 2025)",
      "GATE Biotechnology (GAT-B), AIR 31 (2024)",
      "Qualified IIT JAM (2024)",
      "Qualified NIV-SPPU Entrance Exam",
      "DBT Studentship (2024 – 2026)",
      "Late Shripad Ganesh Gokhale Fellowship (2024)",
      "Rathi Scholarship (2024)",
      "Best Student Award, H.P.T. Arts & R.Y.K. Science College (2023–24)",
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/suyash-jadhav-bioinformatician/",
      orcid: "https://orcid.org/0009-0000-1043-7044",
      twitter: "https://x.com/SuyashJ0710",
      instagram: "https://www.instagram.com/suyash.0.0.7/",
      github: "https://github.com/oktavianos",
    },
  },
  {
    slug: "hemangini-mahadeo",
    name: "Hemangini Mahadeo Shikhare",
    role: "Technical Officer 'A'",
    group: "staff",
    joinedYear: "2022",
    researchFocus:
      "Operating high-end instruments — flow cytometers and DNA Analyser.",
    education: [
      {
        degree: "B.Sc. Microbiology",
        place: "Mumbai University",
      },
    ],
    experience: [
      {
        role: "Clinical Pathology — RNTCP & Polio Vaccination Programmes",
        place: "Rural Hospital, Malvan, Sindhudurg, Maharashtra",
      },
    ],
    noProfilePage: true,
  },
  {
    slug: "tanaya-ghanvatkar",
    name: "Tanaya Ghanvatkar",
    role: "Project Staff",
    group: "staff",
    photo: photoTanayaGhanvatkar,
    noProfilePage: true,
  },
];

export const alumni: Person[] = [
  {
    slug: "dattatray-mongad",
    name: "Dr. Dattatray S. Mongad",
    role: "Ph.D. Student",
    group: "alumni",
    photo: photoDattatrayMongad,
    noProfilePage: true,
  },
  {
    slug: "kunal-dixit",
    name: "Dr. Kunal Dixit",
    role: "Ph.D. Student",
    group: "alumni",
    photo: photoKunalDixit,
    noProfilePage: true,
  },
  {
    slug: "varun-shah",
    name: "Dr. Varun Shah",
    role: "Project Scientist C",
    group: "alumni",
    noProfilePage: true,
  },
  {
    slug: "abhijit-kulkarni",
    name: "Abhijit Kulkarni",
    role: "Ph.D. Student",
    group: "alumni",
    noProfilePage: true,
  },
  {
    slug: "akshay-gaike",
    name: "Akshay Gaike",
    role: "Ph.D. Student",
    group: "alumni",
    noProfilePage: true,
  },
  {
    slug: "ashwini-hagir",
    name: "Ashwini Hagir",
    role: "JRF",
    group: "alumni",
    noProfilePage: true,
  },
  {
    slug: "aditi-deshpande",
    name: "Aditi Deshpande",
    role: "JRF",
    group: "alumni",
    noProfilePage: true,
  },
  {
    slug: "shivang-bhanushali",
    name: "Shivang Bhanushali",
    role: "JRF",
    group: "alumni",
    noProfilePage: true,
  },
  {
    slug: "swapnil-bodkhe",
    name: "Swapnil Bodkhe",
    role: "JRF",
    group: "alumni",
    noProfilePage: true,
  },
  {
    slug: "avinash-kshirsagar",
    name: "Avinash Kshirsagar",
    role: "JRF",
    group: "alumni",
    noProfilePage: true,
  },
  {
    slug: "abhishek-gupta",
    name: "Dr. Abhishek Gupta",
    role: "Research Associate III",
    group: "alumni",
    noProfilePage: true,
  },
  {
    slug: "mohak-gujare",
    name: "Mohak Gujare",
    role: "JRF",
    group: "alumni",
    noProfilePage: true,
  },
  {
    slug: "harshada-ghode",
    name: "Harshada Ghode",
    role: "JRF",
    group: "alumni",
    noProfilePage: true,
  },
];

/* ---------- Principal Investigator ---------- */

export const pi = {
  name: "Dr. Dhiraj Dhotre",
  title: "Principal Investigator, Scientist 'E'",
  institute: "National Centre for Cell Science, Pune",
  photo: photoDhirajDhotre,
  socials: {
    linkedin: "https://www.linkedin.com/in/dhiraj-dhotre-36ab7a75/",
    scholar: "https://scholar.google.com/citations?hl=en&user=wURU1tQAAAAJ",
    github: "https://github.com/DDOmicsLab",
    orcid: "https://orcid.org/0000-0002-5000-7396",
  },
  about:
    "Dr. Dhiraj Dhotre is a bioinformatician with a research interest in the human microbiome. His lab investigates the role of the human microbiome in health and disease using genomics, metabolomics and culturomics approaches. He believes it is crucial to study the taxonomic, functional and metabolic structure of the microbiome to understand the true potential and consequences of alterations within it. His group generates high-throughput sequencing data and combines computational analyses of multi-dimensional omics data with molecular and in-vivo experimentation to understand the potential of the human microbiome in diagnostics and therapeutics.",
  experience: [
    {
      role: "Scientist \u2018E\u2019",
      period: "Dec 2025 – present",
      place: "National Centre for Cell Science, Pune",
    },
    {
      role: "Scientist \u2018D\u2019",
      period: "July 2021 – Dec 2025",
      place: "National Centre for Cell Science, Pune",
    },
    {
      role: "Senior Research Scientist",
      period: "Dec 2019 – July 2021",
      place: "Reliance Life Sciences Pvt. Ltd.",
    },
    {
      role: "Scientist \u2018C\u2019",
      period: "Mar 2017 – Dec 2019",
      place: "National Centre for Microbial Resource, NCCS, Pune",
    },
    {
      role: "Scientist \u2018B\u2019",
      period: "May 2009 – Mar 2017",
      place: "Microbial Culture Collection, NCCS, Pune",
    },
  ],
  education: [
    {
      degree: "Ph.D. Biotechnology",
      period: "2006 – 2014",
      place: "Savitribai Phule Pune University (SPPU), Pune",
    },
    {
      degree: "M.Sc. Bioinformatics",
      period: "2003 – 2005",
      place: "Bioinformatics Centre, SPPU, Pune",
    },
    {
      degree: "B.Sc. Zoology",
      period: "1999 – 2003",
      place: "Mumbai University, Thane",
    },
  ],
  awards: [
    "Travel award for Management and Application of Microbial Data Resource, WFCC, UNESCO, WDCM and IMCAS (2014)",
    "Indo-Finnish Mobility Award, Academy of Finland (2019)",
    "Regional Young Investigators Meeting, India Bioscience (2023)",
  ],
  bookChapters: [
    {
      title: "Probiotics: A Mainstream Therapy for the Disease Suppression",
      authors:
        "Ghattargi, V. C., Shouche, Y. S., Dhakephalkar, P. K., Rao, P., Ramana, V., Dhotre, D. P., Lanjekar, V. B.",
      publisher: "Elsevier",
      year: 2022,
    },
    {
      title:
        "Bioprospecting appraisal of Himalayan pindrow fir for pharmacological applications",
      authors:
        "Assad, R., Reshi, Z. A., Mir, S. H., Rashid, I., Shouche, Y., Dhotre, D.",
      publisher: "Academic Press",
      year: 2021,
    },
    {
      title: "Role of ectomycorrhizal biotechnology in pesticide remediation",
      authors: "Assad, R., Reshi, Z. A., Rashid, I., Shouche, Y., Dhotre, D.",
      publisher: "Springer",
      year: 2020,
    },
    {
      title:
        "Per rectum administration of buttermilk processed with medicinal plants alters gut microbiota in obese individuals",
      authors: "Mane, S., Dixit, K., Lathwal, N., et al.",
      publisher: "Wiley",
      year: 2019,
    },
    {
      title:
        "Arsenic oxidation by hypertolerant Bacillus sp. L-148 in artificial groundwater microcosm",
      authors:
        "Bagade, A., Paul, D., Giri, A., Dhotre, D., Pawar, S., Kodam, K.",
      publisher: "CRC Press",
      year: 2019,
    },
    {
      title:
        "Diversity of arsenic resistant bacteria from Lonar lake: A meteorite impact alkaline crater lake in India",
      authors:
        "Bagade, A., Paul, D., Rikame, Giri, A. P., Dhotre, D., Pawar, S., Kodam, K. M.",
      publisher: "CRC Press",
      year: 2016,
    },
  ],
};

export type NewsItem = {
  category:
    "Publication" | "Media" | "Talks" | "Announcements" | "Career Notification";
  author: string;
  date: string;
  iso: string;
  title: string;
  excerpt: string;
  image: string;
};

export const newsItems: NewsItem[] = [
  {
    category: "Publication",
    author: "Dhiraj Dhotre",
    date: "6/18/26",
    iso: "2026-06-18",
    title:
      "Publication Alert: The Indian Gut Microbiome Across 17 Endogamous Populations",
    excerpt:
      "Deep shotgun profiling shows that diet and community structure — not geography alone — explain most of the variation in the Indian gut microbiome.",
    image: artData,
  },
  {
    category: "Publication",
    author: "Niraj Rane",
    date: "5/14/26",
    iso: "2026-05-14",
    title:
      "Publication Alert: Culturomics Recovers 42 Novel Anaerobes from Indian Donors",
    excerpt:
      "Anaerobic isolation pipelines add strains with no cultured representative in public repositories — several with promising bile-salt hydrolase activity.",
    image: artPetri,
  },
  {
    category: "Talks",
    author: "Dhiraj Dhotre",
    date: "3/22/26",
    iso: "2026-03-22",
    title:
      "Mother–infant transmission findings presented at the Indian Microbiome Meeting",
    excerpt:
      "Early-life strain sharing between mother and infant persists well past weaning in our Pune birth cohort.",
    image: artGut,
  },
  {
    category: "Media",
    author: "Mitali Inamdar",
    date: "9/9/25",
    iso: "2025-09-09",
    title: "Lab featured in a national feature on India's microbiome map",
    excerpt:
      "Why a country-scale reference matters for diagnostics, probiotics and nutrition research in Indian populations.",
    image: artMicrobes,
  },
];

export const news = newsItems.slice(0, 3).map((n) => ({
  date: n.date,
  title: n.title,
}));
