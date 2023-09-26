import './landing.css'
import { useRef } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { hiThereTitle, hiThereDescription } from './content/hi-there'
import { saTitle, saDescription } from './content/staratlas'
import { tsTitle, tsDescription } from './content/tygershark'
import { outroTitle, outroDescription } from './content/outro'
import { EMAIL_LINK, LINKEDIN_LINK } from '../../consts';
import { e6Title, e6Description } from './content/element6';
import { bitbuyDescription, bitbuyTitle } from './content/bitbuy';

function LandingPage() {
    const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

    return (
        <main ref={parentScrollContainerRef}>
            <ScrollSpy scrollThrottle={100} parentScrollContainerRef={parentScrollContainerRef} useBoxMethod={false}>
                <section id="hi-there" data-to-scrollspy-id="hi-there"
                    style={{
                        backgroundImage: "url(/home-background.jpg)",
                        backgroundColor: 'var(--dark);'
                    }}>
                    <div>
                        <h3>{hiThereTitle}</h3>
                        <p>{hiThereDescription}</p>
                    </div>
                </section>
                <section id="staratlas" data-to-scrollspy-id="staratlas">
                    <div>
                        <h3>{saTitle}</h3>
                        <p>{saDescription}</p>
                        <a href="https://play.staratlas.com/" target='_blank'>
                            <img src="/logos/staratlas.svg" alt="Star Atlas" className="logo" />
                        </a>
                    </div>
                </section>
                <section id="element6" data-to-scrollspy-id="element6">
                    <div>
                        <h3>{e6Title}</h3>
                        <p>{e6Description}</p>
                        <a href="https://element6.io/" target='_blank'>
                            <img src="/logos/e6.png" alt="Element 6" className="logo" />
                        </a>
                    </div>
                </section>
                <section id="bitbuy" data-to-scrollspy-id="bitbuy">
                    <div>
                        <h3>{bitbuyTitle}</h3>
                        <p>{bitbuyDescription}</p>
                        <a href="https://bitbuy.ca/" target='_blank'>
                            <img src="/logos/bitbuy.svg" alt="Bitbuy" className="logo" />
                        </a>
                    </div>
                </section>
                <section id="tygershark" data-to-scrollspy-id="tygershark">
                    <div>
                        <h3>{tsTitle}</h3>
                        <p>{tsDescription}</p>
                        <a href="https://tygershark.com/" target='_blank'>
                            <img src="/logos/tygershark.svg" alt="Tyger Shark" className="logo" />
                        </a>
                    </div>
                </section>
                <section id="outro" className='last-slide' data-to-scrollspy-id="outro">
                    <div>
                        <h3><span>{outroTitle}</span> {outroDescription}</h3>
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