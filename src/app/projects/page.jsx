import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoInvestmentClub from '@/images/logos/investment-club.svg'
import logoTradingCompetition from '@/images/logos/trading-competition.svg'
import logoMLPipeline from '@/images/logos/ml-pipeline.svg'
import logoResearchProject from '@/images/logos/research-project.svg'
import logoHackathon from '@/images/logos/hackathon.svg'


const projects = [
  {
    name: 'BX Investment Club',
    description:
      'Co-founded a student-led investment club focused on exploring financial markets and investment strategies.',
    link: { href: 'https://blockchain-polytechnique.com/fr/accueil/', label: 'blockchain-polytechnique.com' },
    logo: logoInvestmentClub,
  },
  {
    name: 'IMC Trading Competition',
    description:
      'Achieved 2nd place in France in a global trading competition, developing advanced algorithmic trading strategies.',
    link: { href: 'https://github.com/xplorers-team/IMC-Prosperity-Challenge---XPlorers/', label: 'github.com' },
    logo: logoTradingCompetition,
  },
  {
    name: 'Machine Learning Pipeline',
    description:
      'Developed a real-time machine learning pipeline for object detection, enhancing accuracy through advanced statistical techniques.',
    link: { href: 'https://github.com/EvolutionSimulator/EvolutionSimulator', label: 'github.com' },
    logo: logoMLPipeline,
  },
  {
    name: 'Credit Risk Research Project',
    description:
      'Conducted research on credit risk analysis using machine learning, contributing to a broader understanding of systemic risk in financial markets.',
    link: { href: '#', label: 'Research Details' },
    logo: logoResearchProject,
  },
  {
    name: 'X-QuantumBlackAI Hackathon',
    description:
      'Participated in a machine learning hackathon, achieving 3rd place by developing innovative solutions for leak detection in natural gas pipelines.',
    link: { href: '#', label: 'Hackathon Details' },
    logo: logoHackathon,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'A collection of projects that reflect my journey into finance, machine learning, and entrepreneurship.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects reflecting my journey in finance, technology, and entrepreneurship."
      intro="Here are some of the projects I’ve worked on that highlight my interests in finance, quantitative analysis, and machine learning. These projects showcase my growing expertise and enthusiasm for these fields."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
