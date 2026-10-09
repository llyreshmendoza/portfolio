export const profile = {
  name: "Sheryll Mendoza",
  firstName: "Sheryll",
  lastName: "Mendoza",
  initials: "SM",
  role: "Senior Full Stack Engineer",
  location: "Las Piñas City, Philippines",
  email: "sheryllsmendoza@yahoo.com",
  phone: "+63 925 531 3919",
  tagline:
    ".NET 8 | .NET Core | ASP.NET Core Web API | REST APIs | Azure | AWS | Microservices | React | Angular | SQL Server",
  bio: "Senior Full Stack Software Engineer with 24+ years of experience delivering enterprise software across web, cloud, and modern application platforms. Passionate about solving complex business problems, adopting emerging technologies including AI-assisted development, and building scalable, maintainable solutions that deliver lasting business value.",
  skillsLine:
    "C# • .NET 8 • ASP.NET Core • REST APIs • React • Angular • TypeScript • SQL Server • Azure • AWS • Microservices",
  socials: {
    github: "https://github.com/llyreshmendoza",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:sheryllsmendoza@yahoo.com",
  },
};

export const projects = [
  {
    number: "01",
    title: "NexusHR",
    tagline: "Cloud-Native Workforce Platform",
    description:
      "Enterprise employee management platform (a mini Workday/BambooHR) with role-based access for employees, managers, and admins — leave requests with file uploads, departments, user management, and audit logs.",
    tech: [".NET 8", "React 19", "TypeScript", "AWS", "Lambda", "Docker"],
    repo: "https://github.com/llyreshmendoza/nexushr",
    private: true,
  },
  {
    number: "02",
    title: "Stock API + React 18",
    tagline: "Stock Portfolio Tracker",
    description:
      "Full-stack stock portfolio app — ASP.NET Core Web API with stock, portfolio, comment, and account controllers, JWT authentication, and a React 18 + TypeScript frontend consuming financial market data.",
    tech: ["C#", ".NET 8", "ASP.NET Core", "EF Core", "React 18", "TypeScript", "SQL Server"],
    repo: "https://github.com/llyreshmendoza/stockapiwithReact18",
    private: true,
  },
  {
    number: "03",
    title: "Helpdesk",
    tagline: "IT Support Ticketing System",
    description:
      "Helpdesk ticketing platform for IT support — ticket creation and lifecycle tracking, priority queues, agent assignment, and status dashboards.",
    tech: ["C#", "ASP.NET Core", "React", "SQL Server"],
    repo: "https://github.com/llyreshmendoza/helpdesk",
    private: true,
  },
];

export const stats = [
  { label: "Years of Experience", value: "24+" },
  { label: "Enterprise Projects", value: "50+" },
  { label: "Technologies Mastered", value: "30+" },
];

export const services = [
  {
    number: "01",
    icon: "code",
    title: "Backend & API Development",
    description:
      "Scalable RESTful APIs and enterprise backends with C#, .NET 8, ASP.NET Core, Entity Framework, microservices, and event-driven architecture.",
  },
  {
    number: "02",
    icon: "layout",
    title: "Frontend Engineering",
    description:
      "Modern, responsive interfaces built with React, Angular, TypeScript, and Tailwind CSS — from enterprise dashboards to polished user experiences.",
  },
  {
    number: "03",
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Cloud-native development on Azure and AWS — AKS, Docker, CI/CD with Jenkins and Azure DevOps, SQS/SNS, Lambda, and containerized deployments.",
  },
  {
    number: "04",
    icon: "layers",
    title: "Architecture & Modernization",
    description:
      "Legacy modernization, distributed systems design, SOLID principles, Domain-Driven Design, and CQRS — turning complex systems into maintainable platforms.",
  },
];

export const experience = [
  {
    period: "2021 — Present",
    role: "Senior Full Stack Software Engineer",
    company: "Prophecy Software Solutions Philippines Inc.",
    location: "Makati City",
    summary:
      "Designing enterprise applications with C#, .NET 8, and ASP.NET Core Web API. Building scalable RESTful APIs consumed by React, Angular, and third-party systems; cloud-integrated backends across AWS, Azure, SQL Server, and OpenSearch; Docker and AKS deployments with Jenkins and Azure DevOps CI/CD.",
    tech: "C#, .NET 8, ASP.NET Core, React 18, Angular 17, TypeScript, SQL Server, MySQL, Redis, OpenSearch, AWS, Azure AKS, Docker, Jenkins",
  },
  {
    period: "2016 — 2021",
    role: "Senior Software Engineer",
    company: "Atos Information Technology (PH)",
    location: "",
    summary:
      "Led development and support of enterprise automation solutions, identity management platforms, and ServiceNow applications for global clients. Built automation for Active Directory provisioning, asset lifecycle management, and AI workflow automation with the Arago HIRO platform.",
    tech: "C#, .NET Framework, .NET Core, ASP.NET MVC, Angular, SQL Server, JavaScript, ServiceNow, Azure Service Bus",
  },
  {
    period: "2014 — 2016",
    role: "Senior .NET Developer",
    company: "ProV International",
    location: "",
    summary:
      "Developed and maintained modules for the Nokas Cash Portal — a modern solution for settlement registration and cash transport ordering. Implemented enhancements and resolved production issues for enterprise web applications.",
    tech: "C#, .NET Framework 4.0, SQL Server, JavaScript, jQuery, Web Services",
  },
  {
    period: "2012 — 2014",
    role: "Senior Software Developer — Assistant Manager",
    company: "Philippine Dealing and Exchange Corp. (PDEx)",
    location: "",
    summary:
      "Technical lead of Agile teams of up to 5 engineers building financial applications for securities trading, market data publishing, clearing and settlement, and regulatory reporting. Built real-time market data publishing for Philippine Bonds and Bills.",
    tech: "Python, Java, PHP, Django, CodeIgniter, MySQL, Redis, IBM Cast Iron, SQL Server",
  },
  {
    period: "2012",
    role: "Software Engineer II",
    company: "Asurion",
    location: "",
    summary:
      "Solution design, coding, debugging, and unit testing for Inventory and Purchasing modules in Microsoft Dynamics Axapta ERP. Mentored junior developers.",
    tech: "Microsoft Dynamics Axapta (X++), MS SQL",
  },
  {
    period: "2005 — 2012",
    role: "Junior Software Developer",
    company: "Tech Systems Infosource, Inc.",
    location: "",
    summary:
      "Designed logistics and maintenance management systems for port and terminal operations. Built desktop and web applications with Visual C++, C#, ASP.NET, SQL Server, and Telerik controls.",
    tech: "Visual C++, C#, ASP.NET, SQL Server, Telerik, NUnit",
  },
];

export const education = [
  {
    school: "Pamantasan ng Lungsod ng Maynila",
    degree: "Master in Engineering Management — Systems Management",
  },
  {
    school: "Lyceum of the Philippines University",
    degree: "BS Computer Science",
  },
];

export const certifications = [
  "ServiceNow Certified System Administrator",
  "Microsoft Certified Solutions Developer (MCSD)",
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["C#", "Java", "Python", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    label: "Backend",
    items: [
      ".NET 8 / .NET Core",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "JWT / Web API Security",
      "LINQ",
      "MediatR / CQRS",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Angular", "HTML5", "Tailwind CSS", "Telerik"],
  },
  {
    label: "Data",
    items: ["SQL Server", "MySQL", "Redis", "Elasticsearch", "OpenSearch"],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "Azure (AKS, DevOps)",
      "AWS (SQS/SNS, Lambda, S3, Cognito)",
      "Docker",
      "Jenkins",
      "CI/CD",
      "Git",
    ],
  },
  {
    label: "Architecture",
    items: [
      "Microservices",
      "Event-Driven Design",
      "Distributed Systems",
      "SOLID",
      "DDD",
      "Design Patterns",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
