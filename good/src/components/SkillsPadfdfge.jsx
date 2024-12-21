import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SkillCard = ({ title, skills }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain mb-2" />
            <span className="text-sm text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", logo: "/logos/react.svg" },
        { name: "Next.js", logo: "/logos/nextjs.svg" },
        { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
        { name: "JavaScript", logo: "/logos/javascript.svg" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Express.js", logo: "/logos/express.svg" },
        { name: "Node.js", logo: "/logos/nodejs.svg" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", logo: "/logos/mongodb.svg" },
        { name: "SQL", logo: "/logos/sql.svg" },
        { name: "NoSQL", logo: "/logos/nosql.svg" },
        { name: "Prisma", logo: "/logos/prisma.svg" },
      ],
    },
    // Add more categories as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Skills & Tech Stack</h1>
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} title={category.title} skills={category.skills} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;