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
              quantitative trading, where I see a vast potential to apply
              mathematical models and algorithms to financial markets.
            </p>
            {/* <p>
              My academic journey has been complemented by hands-on experiences, such as my internship at BNP Paribas CIB, where I was involved in counterparty credit risk analysis. These experiences have deepened my understanding of financial systems and my desire to explore the intersection of finance and technology.
            </p>
            <p>
              Beyond finance, I am also drawn to entrepreneurship. I have had the opportunity to co-found the BX Investment Club at Ecole Polytechnique, where I collaborate with peers to explore investment strategies and the latest financial technologies. This experience has fueled my ambition to one day lead innovative ventures in the finance sector or beyond.
            </p>
            <p>
              As I continue to build my expertise, I am eager to pursue opportunities that will allow me to contribute to the financial industry, particularly in roles that leverage my skills in quantitative analysis and programming. I’m also excited by the prospect of combining these interests with entrepreneurial endeavors, aiming to make an impact through innovation and leadership.
            </p> */}
            <div className="text-gray-700 rounded-lg border bg-zinc-100 px-6 py-4 dark:border-zinc-700 dark:bg-zinc-800">
              <h3 className="text-xl font-bold text-black dark:text-white">
                Relevant Profile Infos
              </h3>
              <hr className="border-gray-300 dark:border-gray-500" />
              <h4 className="mt-2 text-black dark:text-white">
                <span className="font-bold">
                  BNP Paribas CIB -{' '}
                  <span className="italic">Global Markets Summer Intern</span>
                </span>
              </h4>
              <ul className="mt-1 space-y-1 pl-6 text-sm text-black dark:text-gray-300">
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
              <h4 className="mt-4 text-black dark:text-white">
                <span className="font-bold">
                  Spoon Consulting Ltd -{' '}
                  <span className="italic">Machine Learning Intern</span>
                </span>
              </h4>
              <ul className="mt-1 space-y-1 pl-6 text-sm text-black dark:text-gray-300">
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
              <p>For more information:</p>
              <button className="mt-2 rounded border border-gray-500 px-4 py-1 hover:bg-gray-500 hover:text-white">
                Download CV
              </button>{' '}
              <span className="mx-2">or</span>{' '}
              <button className="mt-2 rounded border border-gray-500 px-4 py-1 hover:bg-gray-500 hover:text-white">
                View my projects
              </button>
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
              className="mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
            >
              adrien.dumont@polytechnique.edu
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
