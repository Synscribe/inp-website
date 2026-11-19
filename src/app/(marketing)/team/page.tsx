import { Fragment } from "react";

import type { Metadata } from "next";
import Image from "next/image";

import { CursorFollower } from "@/components/cursor-follower";
import { EmailRail } from "@/components/email-rail";
import { InnerHero } from "@/components/inner-hero";
import { SectionRail } from "@/components/section-rail";
import { createPageMetadata } from "@/lib/seo";

import styles from "./team.module.css";

const intro =
  "We constantly work at being better to give you more. And we’re friendly and considerate to make our journey together mutually delightful.";

// Source title is "Our Team" with no brand suffix and no meta description;
// the description reuses the page's intro copy verbatim.
export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Our Team",
    description: intro,
    path: "/team",
  }),
  title: { absolute: "Our Team" },
};

// Write-ups keep the source's line structure: each entry is separated by a
// line break, and "\u200d" entries are the source's blank spacer lines.
const members = [
  {
    name: "Derek",
    role: "founder, director",
    image: "/media/team/derek.png",
    writeUp: [
      "Derek has been an active member of the creative and marketing industry for over a decade. As a BSc (Hons) in Marketing graduate, he has spent the last thirteen years leading and mentoring both creative and account servicing staff under his charge.",
      "\u200d",
      "Derek’s passion is achieving results, a value he has ingrained into the agency culture. He is adept at identifying clients' traditional and digital marketing needs, as well as their creative objectives, and devising an effective blueprint to turn every goal into reality with timely delivery.",
      "\u200d",
      "His firm grasp of traditional and digital marketing, coupled with his understanding of the business sector, provides an insightful perspective for helping clients develop solutions accurately.",
      "\u200d",
      "Major accounts he has worked on include City Developments Limited, LG Electronics Singapore, Google Singapore, BOSCH, Barclays Capital, TikTok, and various local tertiary institutions.",
      "\u200d",
      "He has also served public sector clients such as the Singapore Economic Development Board, Civil Aviation Authority of Singapore, Workforce Singapore, Public Utilities Board, Health Promotion Board, Supreme Court, SkillsFuture Singapore, and National Parks Board, just to name a few.",
    ],
  },
  {
    name: "Jaslyn",
    role: "general manager",
    image: "/media/team/jaslyn.png",
    writeUp: [
      "Jaslyn Long holds a Bachelor’s degree in Business (Marketing) from SIM-RMIT. With a warm, thoughtful approach and a sharp eye for detail, she is known for her ability to understand client needs deeply and translate them into clear, effective marketing strategies.",
      "\u200d",
      "Calm, composed, and meticulous, Jaslyn consistently goes the extra mile to ensure every brief is delivered with care and precision. She is trusted by clients and colleagues alike for her efficiency, thoroughness, and dedication. Her experience spans across both print and event-based campaigns, with recent key projects including TikTok Asia Pacific, Google Asia Pacific, Tote Board, and Workforce Singapore.",
      "\u200d",
      "In addition to client management, Jaslyn oversees the agency’s day-to-day operations and resource planning. She plays a key role in ensuring project timelines, team capacity, and workflow are well aligned to support smooth and efficient delivery across all accounts.",
    ],
  },
  {
    name: "Zhiwei",
    role: "strategic director",
    image: "/media/team/zhiwei.png",
    writeUp: [
      "Zhiwei began his career in advertising as a copywriter in 2004.",
      "",
      "A creative with a slight knack for business and a modest interest in anthropology, his former boss convinced him to take on the role of strategy planner for advertising campaigns in 2010.",
      "\u200d",
      "As a student studying civil engineering at the polytechnic and mass communications at a university, his education guided him to discover creativity at the intersection of art and science.",
      "\u200d",
      "He believes in research, data, and trusty, good old objective observation when formulating insights to address subjective communication and business challenges.",
      "",
      "Clients that have benefited from this belief include the Singapore Civil Defence Force (SCDF) for a recruitment campaign, the Land Transport Authority (LTA) for the opening of the Downtown Line, the National Council of Social Service (NCSS) for the social service industry career campaign, and CapitaLand Mall for Westgate’s mall branding campaign, to name a few.",
    ],
  },
] as const;

export default function TeamPage() {
  return (
    <>
      <CursorFollower smoothing={87} />

      <main id="main-content">
        <InnerHero intro={intro} titleLines={["our", "team"]}>
          <SectionRail inner linkDisplay="inline">
            our team
          </SectionRail>
        </InnerHero>

        {members.map((member, index) => (
          <Fragment key={member.name}>
            {index > 0 ? <div className={styles.divider} /> : null}
            <section aria-label={member.name} className={styles.member}>
              <div className={styles.container}>
                <div className={styles.wrapper}>
                  <div className={styles.split}>
                    <Image
                      alt=""
                      className={styles.mugshot}
                      height={2560}
                      sizes="(max-width: 991px) 100px, calc(38vw - 200px)"
                      src={member.image}
                      width={2560}
                    />
                    <h2 className={styles.name}>{member.name}</h2>
                    <p className={styles.role}>{member.role}</p>
                  </div>
                  <div className={styles.split}>
                    <p className={styles.writeUp}>
                      {member.writeUp.map((line, lineIndex) => (
                        <Fragment key={lineIndex}>
                          {lineIndex > 0 ? <br /> : null}
                          {line}
                        </Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        ))}
      </main>

      <EmailRail />
    </>
  );
}
