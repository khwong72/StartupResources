import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={fadeIn('up', 'tween', 0.1, 0.7)}
          initial="hidden"
          animate="show"
        >
          <Link href="/">
            <a className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </a>
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="bg-white rounded-xl shadow-sm p-8 prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold mb-3">Who are we?</h2>
            <p className="text-gray-600">
              The Data Controller is Startup Resources, trading name working under Careerbend Limited, based at 33 Greenwich South Street, London SE10 8NT. We provide permanent and temporary recruitment services to clients looking to recruit personnel for their businesses. We also provide payroll services for contractors.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Who does this Privacy Policy apply to?</h2>
            <p className="text-gray-600">
              This Privacy Policy applies to the personal data of our Website Users, Candidates, Clients, Suppliers, and other people whom we may contact in order to find out more about our Candidates.
            </p>
            <p className="text-gray-600">
              It is important to point out that we may amend this Privacy Policy from time to time. Please just visit this page if you want to stay up to date, as we will post any changes here.
            </p>
            <p className="text-gray-600">
              If you are dissatisfied with any aspect of our Privacy Policy, you may have legal rights and, where relevant, we have described these as well.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">What does this Policy cover?</h2>
            <p className="text-gray-600">
              We at Careerbend Limited take your personal data seriously. This policy:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>sets out the types of personal data that we collect about you</li>
              <li>explains how and why we collect and use your personal data</li>
              <li>explains how long we keep your personal data for</li>
              <li>explains when, why and with who we will share your personal data;</li>
              <li>sets out the legal basis we have for using your personal data;</li>
              <li>explains the effect of refusing to provide the personal data requested;</li>
              <li>explains the different rights and choices you have when it comes to your personal data; and</li>
              <li>explains how we may contact you and how you can contact us.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">What personal data do we collect about you?</h2>
            <p className="text-gray-600">
              <strong>Candidates:</strong> We collect and use only the information necessary to be able to find the best available opportunities and any further information needed to assess your eligibility through the different stages of recruitment. This information includes CVs, identification documents, educational records, work history, employment and references and financial information.
            </p>
            <p className="text-gray-600">
              We may also collect sensitive personal data about you, related to your health, diversity information or details of any criminal convictions of. We only collect sensitive personal data from you, and further process this data, where you have given your explicit consent.
            </p>
            <p className="text-gray-600">
              <strong>Clients:</strong> We collect and use only the information necessary to provide you, or people in your organisation with services such as finding the best available candidates for your opportunities.
            </p>
            <p className="text-gray-600">
              <strong>Other data subjects:</strong> We collect and use only the information necessary to be able to contact you and pay you for the services you provide.
            </p>
            <p className="text-gray-600">
              <strong>Website Users:</strong> We collect and use only the information necessary to improve your experience when using our website. This may include how, when and how often you visit us.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Where do we collect personal data about you from?</h2>
            <p className="text-gray-600">
              The following are the different sources we may collect personal data about you from:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li><strong>Directly from you.</strong> This is information you provide while searching for a new opportunity and/or during the different recruitment stages, or during the course of our work with you to ensure that our relationship runs efficiently.</li>
              <li><strong>From an agent/third party acting on your behalf.</strong> e.g. A Contractor's Limited Company.</li>
              <li><strong>Through publicly available sources.</strong> For example:
                <ul className="list-disc pl-6 mt-2">
                  <li>LinkedIn</li>
                  <li>Job Boards</li>
                </ul>
              </li>
              <li><strong>By Reference or word of mouth.</strong> For example, you may be recommended by a friend, a former employer, a former colleague or even a present employer.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Where we collect your information through publicly available sources as set out above, we may do this with the aid of software programs' such as Linkedin. These programs' are given parameters on the requirements of a role and search through publicly available sources to find such candidates. These programs' are designed to only output information on candidates that meet the search criteria. The parameters of this program are restricted to only searching for candidate information from public sites where there is a reasonable expectation that such information may be collected and further processed by job recruiters for the purpose of sourcing candidates for different job roles.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">How do we use your personal data?</h2>
            <p className="text-gray-600">
              <strong>Candidates:</strong> We use your personal data to match your skills and experience with a potential employer. We will initially collect basic information on you such as contact details, job role and experience and then pass this on to the client in search of personnel. If you are chosen by the client and go through to the next stage we will then be collecting more information from you at the interview (or equivalent) stage and onwards in that manner. We may use your data to send you information that you may find interesting such as suggesting other jobs to you.
            </p>
            <p className="text-gray-600">
              <strong>Clients:</strong> We use your personal data to ensure that we can find the right candidates for the opportunities that you may have or for contractual obligations.
            </p>
            <p className="text-gray-600">
              <strong>Suppliers:</strong> We use your personal data to ensure that we can contact you and for contractual obligations.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">How long do we keep your personal data for?</h2>
            <p className="text-gray-600">
              We will only retain your information for as long as is necessary for us to use your information as described above or to comply with our legal obligations. However, we may retain some of your information after you cease to use our services, if we believe in good faith that it is necessary to meet our legal obligations, such as retaining the information for tax and accounting purposes.
            </p>
            <p className="text-gray-600">
              When determining the relevant retention periods, we will take into account factors including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>our contractual obligations and rights in relation to the information involved;</li>
              <li>legal obligation(s) under applicable law to retain data for a certain period of time;</li>
              <li>statute of limitations under applicable law(s);</li>
              <li>(potential) disputes;</li>
              <li>if you have made a request to have your information deleted; and</li>
              <li>guidelines issued by relevant data protection authorities.</li>
            </ul>
            <p className="text-gray-600 mt-2">
              Otherwise, we securely erase your information once this is no longer needed.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Who do we share your personal data with?</h2>
            <p className="text-gray-600">
              <strong>Candidates:</strong> We share your personal data with the client who has a position to fill, in order to determine with the client whether you are a good fit for the available position.
            </p>
            <p className="text-gray-600">
              We may also conduct checks on you to verify the information you have provided and where we do this we share your information with our appointed background checking company.
            </p>
            <p className="text-gray-600">
              Unless you specify otherwise we may share your data with any of our associated third parties - for example our payroll and pension providers – to provide you with the best possible service.
            </p>
            <p className="text-gray-600">
              <strong>Clients:</strong> We share your data with candidates during the course of providing recruitment services to you, and with third parties as part of our contractual relationship.
            </p>
            <p className="text-gray-600">
              <strong>Suppliers:</strong> We share your data third parties as part of our contractual relationship.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">What legal basis do we have for using your information?</h2>
            <p className="text-gray-600">
              For prospective candidates, contractors, referees and clients, our processing is necessary for our legitimate interests - we need this information in order to be able to assess suitability for potential roles, to find potential candidates and to contact clients and referees, and suppliers.
            </p>
            <p className="text-gray-600">
              We carry out a 'balancing test' to ensure that our processing is necessary and that your fundamental rights of privacy are not outweighed by our legitimate interests, before we go ahead with such processing. We keep a record of these balancing tests. You have a right to and can find out more about the information in these balancing tests by contacting us using the details below.
            </p>
            <p className="text-gray-600">
              If you are interviewed and submitted as a candidate, then this may involve the processing of more detailed personal data including sensitive data such as health information that you or others provide about you. In that case we always ask for your consent before undertaking such processing.
            </p>
            <p className="text-gray-600">
              Where we need consent for some activities such as contacting candidates about other recruitment-related services we will ask for it. We rely on soft opt-in consent for these activities where you have previously engaged with us by submitting a CV, applying for a job, or registering on our website. This means we take you consent as given unless or until you opt-out. For other types of e-marketing we require your explicit consent.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">What happens if you do not provide us with the information we request or ask that we stop processing your information?</h2>
            <p className="text-gray-600">
              If you do not provide the personal data necessary, or withdraw your consent for the processing of your personal data, we may not be able to match you with available job opportunities.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Do we make automated decisions concerning you?</h2>
            <p className="text-gray-600">
              We may make automated decisions about you during the assessment stage of the recruitment process. We put assessment candidates through a structured screening process to assess whether each candidate meets the specific criteria for a particular position. These assessments may be fully automated e.g. online pre-screening tests. As these assessments may result in a candidate being deemed not suitable for a position by means of a solely automated assessment, we only undertake this activity with the candidate's explicit consent. We also carry out personality profiling on candidates with the candidate's consent.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Do we use Cookies to collect personal data on you?</h2>
            <p className="text-gray-600">
              To provide better service to you on our websites, we use cookies to collect your personal data when you browse. See our <a href="/cookie-policy" className="text-primary hover:underline">cookie policy</a> for more details.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">Do we transfer your data outside the EEA?</h2>
            <p className="text-gray-600">
              No, we do not transfer personal data out of the EEA.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">How do we safeguard your personal data?</h2>
            <p className="text-gray-600">
              We take the security of your data very seriously and have put in place appropriate measures that are designed to prevent unauthorised access to or misuse of your personal data.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">What rights do you have in relation to the data we hold on you?</h2>
            <p className="text-gray-600">
              By law, you have a number of rights when it comes to your personal data. Further information and advice about your rights can be obtained from the data protection regulator in your country.
            </p>
            <ol className="list-decimal pl-6 text-gray-600 mt-4 space-y-4">
              <li>
                <strong>The right to be informed</strong>
                <p>You have the right to be provided with clear, transparent and easily understandable information about how we use your information and your rights. This is why we are providing you with the information in this Policy.</p>
              </li>
              <li>
                <strong>The right of access</strong>
                <p>You have the right to obtain access to your information (if we're processing it), and certain other information (similar to that provided in this Privacy Policy). This is so you're aware and can check that we're using your information in accordance with data protection law.</p>
              </li>
              <li>
                <strong>The right to rectification</strong>
                <p>You are entitled to have your information corrected if it's inaccurate or incomplete.</p>
              </li>
              <li>
                <strong>The right to erasure</strong>
                <p>This is also known as 'the right to be forgotten' and, in simple terms, enables you to request the deletion or removal of your information where there's no compelling reason for us to keep using it. This is not a general right to erasure; there are exceptions.</p>
              </li>
              <li>
                <strong>The right to restrict processing</strong>
                <p>You have rights to 'block' or suppress further use of your information. When processing is restricted, we can still store your information, but may not use it further. We keep lists of people who have asked for further use of their information to be 'blocked' to make sure the restriction is respected in future.</p>
              </li>
              <li>
                <strong>The right to data portability</strong>
                <p>You have rights to obtain and reuse your personal data for your own purposes across different services. For example, if you decide to switch to a new provider, this enables you to move, copy or transfer your information easily between our IT systems and theirs safely and securely, without affecting its usability.</p>
              </li>
              <li>
                <strong>The right to object to processing</strong>
                <p>You have the right to object to certain types of processing, including processing for direct marketing.</p>
              </li>
              <li>
                <strong>The right to lodge a complaint</strong>
                <p>You have the right to lodge a complaint about the way we handle or process your personal data with your national data protection regulator.</p>
              </li>
              <li>
                <strong>The right to withdraw consent</strong>
                <p>If you have given your consent to anything we do with your personal data, you have the right to withdraw your consent at any time (although if you do so, it does not mean that anything we have done with your personal data with your consent up to that point is unlawful). This includes your right to withdraw consent to us using your personal data for marketing purposes.</p>
              </li>
            </ol>
            <p className="text-gray-600 mt-4">
              We usually act on requests and provide information free of charge, but may charge a reasonable fee to cover our administrative costs of providing the information for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>baseless or excessive/repeated requests, or</li>
              <li>further copies of the same information.</li>
            </ul>
            <p className="text-gray-600 mt-2">
              Alternatively, we may be entitled to refuse to act on the request.
            </p>
            <p className="text-gray-600 mt-2">
              Please consider your request responsibly before submitting it. We'll respond as soon as we can. Generally, this will be within one month from when we receive your request but, if the request is going to take longer to deal with, we'll come back to you and let you know.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">How will we contact you?</h2>
            <p className="text-gray-600">
              We may contact you by phone, email or social media. If you prefer a particular contact means over another please just let us know.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">How can you contact us?</h2>
            <p className="text-gray-600">
              If you are unhappy with how we've handled your information, or have further questions on the processing of your personal data, contact here:
            </p>
            <p className="text-gray-600">
              Louisa Maglieri- Founder - louisa@startupresources.co.uk or louisa@careerbend.com
            </p>
            
            <div className="mt-8 text-sm text-gray-500 border-t border-gray-200 pt-6">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              <div className="mt-4 flex flex-col space-y-2">
                <h3 className="font-semibold">Contact</h3>
                <p>louisa@startupresources.co.uk</p>
                <p>5 Brayford Square, London, E1 0SG</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 