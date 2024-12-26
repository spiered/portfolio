import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Adrien Dumont, a student with a passion for finance, quantitative analysis, and entrepreneurship, aspiring to build a career in these dynamic fields.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Adrien Dumont...
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
            <p>
              I’m currently studying Mathematics, Economics, and Computer
              Science at Ecole Polytechnique, where I’m developing a strong
              foundation in quantitative analysis and programming. These skills
              have sparked my interest in the field of finance, particularly
              market and quantitative finance as well as in other scientific fields like data science.
            </p>
            <div className="rounded-lg border bg-zinc-50 px-6 py-4 text-gray-700 dark:border-zinc-700 dark:bg-zinc-800">
              <h3 className="text-xl font-bold text-black dark:text-white">
                Relevant Experiences
              </h3>
              <hr className="border-gray-300 dark:border-gray-500" />
              <h4 className="mt-2 text-black dark:text-white">
                <span className="font-bold">
                  Banque de France -{' '}
                  <span className="italic">Financial Economist Intern</span>
                </span>
              </h4>
              <ul className="mt-1 pl-6 pr-4 text-justify text-sm text-black dark:text-gray-300">
                <li>
                  - Bachelor Thesis
                </li>
              </ul>
              <h4 className="mt-2 text-black dark:text-white">
                <span className="font-bold">
                  Center for Economic Research and Statistics -{' '}
                  <span className="italic">Research Assistant</span>
                </span>
              </h4>
              <ul className="mt-1 pl-6 pr-4 text-justify text-sm text-black dark:text-gray-300">
                <li>
                  - Part of the Blockchain@X research team, supervised by Julien Prat and Natkamon Tovanich
                </li>
                <li>
                  - Evaluating user risk propagation in dencentralized lending networks
                </li>
                <li>
                  - Used network analysis (Python, NetworkX) to assess systemic risk; applied Random Forest models
                  for predictive analysis of user contagion
                </li>
              </ul>
              <h4 className="mt-2 text-black dark:text-white">
                <span className="font-bold">
                  BNP Paribas CIB -{' '}
                  <span className="italic">Global Markets Summer Intern</span>
                </span>
              </h4>
              <ul className="mt-1 pl-6 pr-4 text-justify text-sm text-black dark:text-gray-300">
                <li>
                  - Participation in the implementation phase of the CCR
                  (Counterparty Credit Risk) project, including the new stress
                  testing indicators.
                </li>
                <li>
                  - Interaction with the main stakeholders of this project, GM
                  Quantitative Research, GM Trading Risk & Strategy, and the
                  RISK department.
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2">For more information:</p>
              <a
                href="/Curriculum_vitae_Adrien_Dumont.pdf"
                download="Curriculum_vitae_Adrien_Dumont.pdf"
                className="mt-2 rounded border border-gray-500 px-4 py-2 hover:bg-gray-500 hover:text-white"
              >
                Download CV
              </a>
              <span className="mx-2">or</span>{' '}
              <a
                href="/projects"
                className="mt-2 rounded border border-gray-500 px-4 py-2 hover:bg-gray-500 hover:text-white"
              >
                View my projects
              </a>
            </div>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <h2 className="font-bold text-zinc-800 dark:text-zinc-100">
              Contact me!
            </h2>
            <hr className="my-2 border-gray-500" />
            {/* <SocialLink href="https://twitter.com/yourprofile" icon={XIcon}>
              Follow on X
            </SocialLink> */}
            <SocialLink
              target="_blank"
              href="https://www.linkedin.com/in/adrien-dumont-x/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              target="_blank"
              href="https://github.com/spiered"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              target="_blank"
              href="mailto:adrien.dumont@polytechnique.edu"
              icon={MailIcon}
              className="mt-6 border-t border-zinc-100 pt-2 dark:border-zinc-700/40"
            >
              adrien.dumont@polytechnique.edu
            </SocialLink>
            <SocialLink
              target="_blank"
              href="mailto:adrien.dumont@polytechnique.edu"
              icon={MailIcon}
              className="mt-2"
            >
              +33 7 86 89 91 13
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
