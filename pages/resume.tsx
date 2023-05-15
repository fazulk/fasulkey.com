import Head from 'next/head'

import { resumeCol } from '../lib/data'
import type { Linear, Resume, Sorting } from '../types/resume'
import Style from '../styles/resume.module.scss'

function slimUrl(url: string) {
  return (`${url}`).replace('https://', '')
}

function Home({
  location,
  name,
  email,
  url,
  github,
  objective,
  languages,
  education,
  experience,
}: Resume) {
  return (
    <div className={Style.resume}>
      <Head>
        <title>Jeff Fasulkey</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={Style.heading}>{name}</div>
      <div className={Style.contact}>
        <ul>
          <li>{location}</li>
          <br />
          <li>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <a href={url}>{slimUrl(url)}</a>
            <br />
            <a href={github}>{slimUrl(github)}</a>
          </li>
          <li>
            <a href="/docs/fasulkey-resume.pdf" target="_blank">
              download pdf
            </a>
          </li>
        </ul>
      </div>
      <div className={Style['sub-heading']}>Objective:</div>
      <div className={Style.content}>{objective}</div>
      <div className={Style['sub-heading']}>Languages, Software, Etc:</div>
      <div className={Style.languages}>
        <ul>
          {languages?.map((l: string, i: number) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </div>
      <div className={Style['sub-heading']}>Experience:</div>
      {experience?.map((e: Linear, i: number) => (
        <div className={Style.content} key={i}>
          <span className={(Style['job-title'], Style.stronger)}>
            {e.title}
          </span>
          <br />
          {`${e.location
            } ${
            e.startDate
            }-${
            e.endDate ? e.endDate : 'Present'}`}
          <br />
          <span className="stronger">{e.subTitle}</span>
          <ul>
            {e?.points?.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className={Style['sub-heading']}>Education:</div>
      <div className={Style.languages}>
        <ul>
          {education?.map((e: Linear, i: number) => (
            <li key={i} className={Style['top-padding']}>
              <span className={(Style['job-title'], Style.stronger)}>
                {e.title}
              </span>
              <br />
              {e.location}
              <br />
              <span className={Style.stronger}>{e.subTitle}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const base = await resumeCol.getResume({ type: 'non-linear' })
  const education = await resumeCol.getResume({ type: 'education' })
  const experience = (await resumeCol.getResume({ type: 'experience' }))
    .map((e: Sorting) => {
      const [month, year] = (`${e.endDate}`).split('-')
      e.sortDate = e.endDate
        ? new Date(Number(year), Number(month) - 1)
        : new Date()
      return e
    })
    .sort((a: Sorting, b: Sorting) => (b.sortDate as any) - (a.sortDate as any))
    .map((el: Sorting) => {
      el.sortDate = null
      return el
    })
  return { props: { ...base[0], education, experience } }
}

export default Home
