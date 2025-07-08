export default function Projects() {
  const projects = [
    {
      title: "Kişisel Portfolyo Sitesi",
      description: "Next.js ile yaptığım portfolyo ve blog projesi.",
      link: "https://github.com/alper/portfolio"
    },
    {
      title: "E-Ticaret Template",
      description: "React + Tailwind ile hazır e-ticaret template tasarımı.",
      link: "https://github.com/alper/ecommerce-template"
    },
    {
      title: "API Tracker",
      description: "Node.js + Prisma + PostgreSQL ile geliştirdiğim REST API.",
      link: "https://github.com/alper/tracker"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Projelerim</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Github’a Git
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
