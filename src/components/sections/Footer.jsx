import { WEBINAR_FACTS } from '../../lib/webinar'

const DISCLAIMER =
  'This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc. As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn any money with my ideas, information, tools or strategies. I just want to help you by giving great content, direction and strategies that worked well for me and my students and that I believe can help you move forward. All of my terms, privacy policies and disclaimers for this program and website can be accessed via the links. I feel transparency is important and I hold ourselves (you & me) to a high standard of integrity. Thanks for stopping by. I hope this training and content brings you a lot of value & results.'

export default function Footer() {
  return (
    /* Bottom padding leaves room for the sticky bar so nothing is ever covered. */
    <footer className="border-t border-line bg-mint px-5 pb-32 pt-14 text-muted sm:px-6 sm:pb-36 sm:pt-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Program
            </h2>
            <p className="mt-3 text-lg font-bold text-heading">Super Women Thyroid</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Support
            </h2>
            <ul className="mt-3 space-y-2 text-[0.95rem]">
              <li>
                <a
                  href="tel:+918800603605"
                  className="inline-block py-1 transition-colors hover:text-heading"
                >
                  8800 603 605
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@myhealthnourish.com"
                  className="inline-block py-1 transition-colors hover:text-heading"
                >
                  contact@myhealthnourish.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Webinar
            </h2>
            <ul className="mt-3 space-y-1.5 text-[0.95rem]">
              <li>{WEBINAR_FACTS.dateLong}</li>
              <li>{WEBINAR_FACTS.time}</li>
              <li>{WEBINAR_FACTS.format}</li>
              <li>{WEBINAR_FACTS.language}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          {/* TODO: point this at the real main website URL once it exists. */}
          <a
            href="#"
            className="inline-block py-1 text-[0.9rem] font-medium transition-colors hover:text-heading"
          >
            Main Website
          </a>
          <p className="text-[0.9rem]">
            © {new Date().getFullYear()} Super Women Thyroid. All rights reserved.
          </p>
        </div>

        <p className="mt-8 text-[0.72rem] leading-relaxed text-muted/70">{DISCLAIMER}</p>
      </div>
    </footer>
  )
}
