import tosstyles from "@/styles/Tos.module.css";

export default function Tos() {
  return (
    <section className={`${tosstyles.tos} uplift`}>
      <div className=" row">
        <div className={`${tosstyles.tos__container} container`}>
          <h1 className={tosstyles.tos__header}>Terms of Service</h1>
          <div className="space-y-6">
            <div className={tosstyles.tos__item}>
              <h2 className={tosstyles["tos__item--header"]}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using our Services, you affirm that you are at
                least 18 years old, or if you are under 18, you have obtained
                parental or legal guardian consent to use our Services. You
                agree to comply with these Terms and any applicable laws,
                regulations, and industry standards.
              </p>
            </div>
            <div className={tosstyles.tos__item}>
              <h2 className={tosstyles["tos__item--header"]}>
                2. Services Provided
              </h2>
              <p>
                Balance AI offers AI-powered business analytics solutions to
                help businesses make data-driven decisions. Our platform
                leverages artificial intelligence to analyze and interpret
                business data, providing users with actionable insights and
                recommendations.
              </p>
            </div>
            <div className={tosstyles.tos__item}>
              <h2 className={tosstyles["tos__item--header"]}>
                3. Account Registration
              </h2>
              <p>
                To use certain features of our Services, you may need to create
                an account. When you create an account, you must provide
                accurate and complete information. You are responsible for
                maintaining the confidentiality of your account credentials and
                for all activities that occur under your account. You agree to
                notify us immediately of any unauthorized use of your account or
                any other security breach.
              </p>
            </div>
            <div className={tosstyles.tos__item}>
              <h2 className={tosstyles["tos__item--header"]}>4. User Conduct</h2>
              <p>
                You agree not to use the Services for any unlawful or prohibited
                purpose. You may not:
                <ul className="list-disc list-inside ml-4">
                  <li>Violate any applicable laws or regulations.</li>
                  <li>Interfere with or disrupt the Services or servers.</li>
                  <li>
                    Use the Services to transmit harmful or malicious code.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    Services.
                  </li>
                  <li>
                    Misrepresent your identity or affiliation with any person or
                    entity.
                  </li>
                </ul>
              </p>
            </div>
            <div className={tosstyles.tos__item}>
              <h2 className={tosstyles["tos__item--header"]}>
                5. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of the Services,
                including but not limited to text, graphics, logos, and
                software, are the exclusive property of Balance AI or its
                licensors and are protected by intellectual property laws. You
                may not copy, modify, distribute, or create derivative works
                based on our content without our express written permission.
              </p>
            </div>
            <div className={tosstyles.tos__item}>
              <h2 className={tosstyles["tos__item--header"]}>6. Privacy Policy</h2>
              <p>
                Your use of the Services is also governed by our Privacy Policy,
                which explains how we collect, use, and disclose your
                information. By using our Services, you consent to our
                collection and use of your information as described in the
                Privacy Policy.
              </p>
            </div>
            <div className={tosstyles.tos__item}>
              <h2 className={tosstyles["tos__item--header"]}>7. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your data.
                However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
