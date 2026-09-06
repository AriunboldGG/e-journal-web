import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Container } from "@/components/ui/container";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Нууцлалын бодлого",
  description: "Цахим дэвтэр аппын нууцлалын бодлого.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background pt-32 pb-20 sm:pt-40 sm:pb-28">
        <Container>
          <article className="mx-auto max-w-3xl [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mb-5 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-text sm:[&_h2]:text-3xl [&_li]:leading-relaxed [&_li]:text-text-secondary [&_p]:leading-relaxed [&_p]:text-text-secondary [&_p+p]:mt-5 [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-5">
            <header className="border-b border-border pb-10 sm:pb-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                Цахим дэвтэр
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
                This privacy policy applies to the Цахим дэвтэр app for mobile
                devices, together with any related services operated by Tsahim
                Devter Soft LLC (collectively, the &quot;Application&quot;).
                Tsahim Devter Soft LLC is hereby referred to as the
                &quot;Service Provider&quot;.
              </p>
              <p className="mt-4 text-sm text-text-secondary">
                Effective date: 2026-09-06
              </p>
            </header>

            <div className="divide-y divide-border">
              <section className="py-10">
                <h2>Information Collection and Use</h2>
                <p>
                  The Application collects information when you download and
                  use it. This information may include information such as:
                </p>
                <ul>
                  <li>Your device&apos;s Internet Protocol address</li>
                  <li>
                    The pages of the Application that you visit, the time and
                    date of your visit, and the time spent on those pages
                  </li>
                  <li>The time spent on the Application</li>
                  <li>The mobile operating system you use</li>
                </ul>
                <p>
                  The Service Provider may use the information you provide to
                  send important information, required notices, and, where
                  permitted by law, marketing communications.
                </p>
                <p>
                  For a better experience while using the Application, the
                  Service Provider may require you to provide certain
                  personally identifiable information, including but not
                  limited to your phone number. The information the Service
                  Provider requests will be retained and used as described in
                  this privacy policy.
                </p>
              </section>

              <section className="py-10">
                <h2>Cookies and tracking technologies</h2>
                <p>
                  The Application or its third-party SDKs may use cookies,
                  SDKs, pixels, and similar technologies to support
                  functionality, analytics, or service delivery. Where required
                  by applicable law, the Service Provider will obtain consent
                  before using non-essential tracking technologies.
                </p>
              </section>

              <section className="py-10">
                <h2>Your Rights</h2>
                <p>
                  You may request access to, correction of, or deletion of
                  your personal data held by the Service Provider. To exercise
                  these rights, or to withdraw consent where processing is
                  based on consent, contact the Service Provider at{" "}
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                </p>
              </section>

              <section className="py-10">
                <h2>Your California privacy rights (CCPA/CPRA)</h2>
                <p>
                  If you are a California resident, you have the right to know
                  what personal information is collected, the right to delete
                  personal information, the right to opt out of the sale or
                  sharing of personal information, and the right to
                  non-discrimination for exercising these rights. To exercise
                  your CCPA/CPRA rights, contact the Service Provider at{" "}
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                </p>
              </section>

              <section className="py-10">
                <h2>Third Party Access</h2>
                <p>
                  Only aggregated, anonymized data is periodically transmitted
                  to external services to aid the Service Provider in improving
                  the Application and their service. The Service Provider may
                  share your information with third parties in the ways that
                  are described in this privacy statement.
                </p>
                <p>
                  Please note that the Application utilizes third-party
                  services that have their own Privacy Policy about handling
                  data. Below is the link to the Privacy Policy of a
                  third-party service provider used by the Application:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://expo.io/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Expo Privacy Policy
                    </a>
                  </li>
                </ul>
                <p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
                <ul>
                  <li>as required by law, such as to comply with a subpoena or similar legal process;</li>
                  <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                  <li>with trusted service providers who work on their behalf, do not have an independent use of the information disclosed to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                </ul>
              </section>

              <section className="py-10">
                <h2>International Data Transfers</h2>
                <p>
                  The Service Provider or its third-party service providers
                  may transfer personal data to countries outside your country
                  of residence, including outside the European Economic Area
                  (EEA). Where applicable law requires safeguards for
                  international transfers, the Service Provider will use
                  appropriate mechanisms.
                </p>
                <ul>
                  <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                  <li>Adequacy decisions or other legally recognized transfer mechanisms</li>
                  <li>Your consent, where required and legally permitted</li>
                </ul>
                <p>
                  Data protection laws in other countries may differ from those
                  in your jurisdiction. Where required by law, the Service
                  Provider will apply appropriate safeguards and obtain any
                  consent required for the transfer.
                </p>
              </section>

              <section className="py-10">
                <h2>Opt-Out Rights</h2>
                <p>
                  You can stop further collection of information from your
                  mobile device by uninstalling the Application. Uninstalling
                  will stop the Application from collecting data from your
                  device, but it does not automatically delete information that
                  has already been transmitted to the Service Provider or to
                  third parties.
                </p>
                <p>
                  To request deletion of your personal data, to withdraw
                  consent, or to exercise any of your rights, contact the
                  Service Provider at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                </p>
              </section>

              <section className="py-10">
                <h2>Data Retention Policy</h2>
                <p>
                  The Service Provider retains personal data based on its
                  necessity for the stated purposes:
                </p>
                <ul>
                  <li>User Provided Data: Retained for the duration of your use of the Application plus 12 months thereafter, unless longer retention is required by law</li>
                  <li>Automatically Collected Data: Retained for up to 24 months from collection, unless longer retention is required for legal compliance</li>
                  <li>Aggregated and Anonymized Data: Retained indefinitely as it no longer identifies you</li>
                  <li>Data required for legal compliance: Retained as long as required by applicable law</li>
                </ul>
                <p>
                  You may request deletion of your personal data, subject to
                  any legal obligation to retain it. If you want the Service
                  Provider to delete User Provided Data submitted through the
                  Application, please contact them at{" "}
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Please
                  note that some User Provided Data may be required for the
                  Application to function properly.
                </p>
              </section>

              <section className="py-10">
                <h2>Data Deletion</h2>
                <p>
                  You can request deletion of your personal data or account by
                  contacting the Service Provider at{" "}
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. The
                  Service Provider will process your request within the
                  timeframes required by applicable law.
                </p>
                <p>
                  Upon verification of your identity, the Service Provider will
                  delete your personal data from its systems, except where
                  retention is required for legal compliance or legitimate
                  business purposes.
                </p>
              </section>

              <section className="py-10">
                <h2>Children</h2>
                <p>
                  The Application is not intended for children under 16 years
                  of age, or such higher age as required by applicable law. The
                  Service Provider does not knowingly solicit data from
                  children or market the Application to them.
                </p>
                <p>
                  Where parental or guardian consent is required under
                  applicable law, the Application is not intended for use
                  without that consent. The Service Provider does not knowingly
                  collect personally identifiable information from children
                  under 16 years of age in violation of applicable law. If the
                  Service Provider discovers that a child has provided personal
                  information, it will immediately delete this from its
                  servers. If you are a parent or guardian and are aware that
                  your child has provided personal information, please contact
                  the Service Provider at{" "}
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                </p>
              </section>

              <section className="py-10">
                <h2>Security</h2>
                <p>
                  The Service Provider is concerned about safeguarding the
                  confidentiality of your information. The Service Provider
                  provides physical, electronic, and procedural safeguards to
                  protect information it processes and maintains.
                </p>
              </section>

              <section className="py-10">
                <h2>Data Breach Notification</h2>
                <p>
                  If a data breach occurs that affects your personal data, the
                  Service Provider will notify you in accordance with applicable
                  legal requirements, including, where required, providing
                  information about the nature of the breach and the steps being
                  taken to address it.
                </p>
              </section>

              <section className="py-10">
                <h2>Changes</h2>
                <p>
                  The Service Provider may update this Privacy Policy from time
                  to time. The Service Provider will notify you of material
                  changes by posting the updated Privacy Policy with an
                  effective date. Where required by law, the Service Provider
                  will seek your consent to material changes before they take
                  effect.
                </p>
                <p>
                  Previous versions of this Privacy Policy will be maintained
                  and made available upon request by contacting the Service
                  Provider at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                </p>
              </section>

              <section className="py-10">
                <h2>Your Consent</h2>
                <p>
                  Where processing is based on consent, you provide that
                  consent by affirmatively opting in to the relevant feature or
                  action. You may withdraw consent at any time without
                  affecting processing carried out before withdrawal. Processing
                  based on other lawful bases is carried out as described above.
                </p>
              </section>

              <section className="py-10 pb-0">
                <h2>Contact Us</h2>
                <p>
                  If you have any questions regarding privacy while using the
                  Application, or have questions about the practices, please
                  contact the Service Provider via email at{" "}
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                </p>
              
              </section>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}