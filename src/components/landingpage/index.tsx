import { useRef } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { EMAIL_LINK, LINKEDIN_LINK } from '../../consts';
import { pageContent, HiThere, Outro, Studying } from './content/index'
import './landing.css'

function LandingPage(): JSX.Element {
    const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

    return (
        <main ref={parentScrollContainerRef}>
            <ScrollSpy
                scrollThrottle={100}
                parentScrollContainerRef={parentScrollContainerRef}
                useBoxMethod={false}
            >
                {/* Intro */}
                <section id={HiThere.id} data-to-scrollspy-id={HiThere.id}
                    style={{ backgroundImage: `url(${HiThere.image})` }}>
                    <div>
                        <h3>{HiThere.title}</h3>
                        <p>{HiThere.description}</p>
                    </div>
                </section>
                {/* Work Experience */}
                {pageContent.map((content) => {
                    return (
                        <section key={content.title} id={content.id} data-to-scrollspy-id={content.id}>
                            <div>
                                <h3>{content.title}</h3>
                                <p>{content.description}</p>
                                {content.image &&
                                    <a href={content.link} target='_blank'>
                                        <img src={content.image} alt={content.company} className="logo" />
                                    </a>
                                }
                            </div>
                        </section>
                    )
                })}
                {/* What I'm Up To */}
                <section id={Studying.id} data-to-scrollspy-id={Studying.id}>
                    <div>
                        <h3>{Studying.title}</h3>
                        <p>{Studying.description}</p>
                        <span className="skills">
                            {Studying.skills.map((skill) => {
                                return (
                                    <h2 key={skill} className="skill">{skill}</h2>
                                )
                            })}
                        </span>
                    </div>
                </section>
                {/* Outro */}
                <section id={Outro.id} data-to-scrollspy-id={Outro.id}>
                    <div>
                        <h3><span>{Outro.title}</span> {Outro.description}</h3>
                        <address>
                            <a href={EMAIL_LINK} target="_blank"><img src="/icon/mail.svg" alt="Catch up over email" /></a>
                            <a href={LINKEDIN_LINK} target="_blank"><img src="/icon/linkedin.svg" alt="View the resume on LinkedIn" /></a>
                        </address>
                    </div>
                </section>
            </ScrollSpy>
        </main>
    )
}

export default LandingPage