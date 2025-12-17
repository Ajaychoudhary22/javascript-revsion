const peopleData = [
  {
    username: "ajay_dev",
    description: "Full-stack developer passionate about building scalable web apps.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    company: "TechNova Solutions",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    username: "rahul_codes",
    description: "Frontend engineer focused on UI/UX and performance optimization.",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind"],
    company: "PixelCraft",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    username: "neha_ai",
    description: "Data analyst with a strong interest in AI and machine learning.",
    skills: ["Python", "SQL", "Pandas", "Machine Learning"],
    company: "DataWave Analytics",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    username: "vikram_backend",
    description: "Backend developer experienced in REST APIs and databases.",
    skills: ["Java", "Spring Boot", "MySQL", "Docker"],
    company: "CloudCore Systems",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    username: "priya_designs",
    description: "Creative UI/UX designer turning ideas into intuitive designs.",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
    company: "DesignHub Studio",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    username: "arjun_mobile",
    description: "Mobile app developer building smooth Android and iOS apps.",
    skills: ["Flutter", "Dart", "Firebase"],
    company: "Appify Labs",
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    username: "simran_test",
    description: "QA engineer ensuring high-quality software delivery.",
    skills: ["Manual Testing", "Automation", "Selenium", "JIRA"],
    company: "QualityFirst Pvt Ltd",
    image: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    username: "rohit_cloud",
    description: "Cloud engineer specializing in scalable cloud infrastructure.",
    skills: ["AWS", "Linux", "Terraform", "Kubernetes"],
    company: "SkyNet Cloud",
    image: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    username: "kiran_security",
    description: "Cybersecurity analyst focused on application security.",
    skills: ["Ethical Hacking", "Network Security", "OWASP"],
    company: "SecureByte",
    image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    username: "meera_pm",
    description: "Product manager bridging business goals and technology.",
    skills: ["Agile", "Scrum", "Roadmapping", "Stakeholder Management"],
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/women/10.jpg"
    
  }
];

var main = document.getElementById('main');
let sum = '';

peopleData.forEach(function(person,idx) {
sum = sum + `<div class="card">
  <span class="price">$45</span>

     <img src="${person.image}" alt="Profile Picture of ${person.username}">
    <h1>${person.username}</h1>
    <p>${person.description}</p>
    <h3>${person.skills.join(', ')}</h3>
    <h3>${person.company}</h3>
    
      <button class="btn">View Profile</button> 


</div>`;


});
main.innerHTML = sum;

  main.addEventListener('click', function(dets) {
  
  
  
  });