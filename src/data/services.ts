import { 
  Stethoscope, 
  Clock, 
  HeartPulse, 
  Baby, 
  Syringe, 
  Plane, 
  Users, 
  Microscope, 
  Activity 
} from 'lucide-react';
import React from 'react';

export interface Service {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ReactNode;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Family Medicine",
    slug: "family-medicine-edmonton",
    shortDescription: "Comprehensive healthcare for patients of all ages, focusing on preventative care and managing chronic conditions.",
    fullDescription: `
      <h2>Comprehensive Family Medicine in Edmonton</h2>
      <p>At Grace Family Medical Clinic, our family medicine services provide comprehensive healthcare for patients of all ages. Our experienced family physicians build long-term relationships with patients and their families, offering personalized care that addresses your unique health needs.</p>
      
      <h3>Our Family Medicine Services Include:</h3>
      <ul>
        <li>Routine check-ups and physical examinations</li>
        <li>Preventative healthcare and screenings</li>
        <li>Diagnosis and treatment of acute illnesses</li>
        <li>Management of chronic conditions</li>
        <li>Health education and counseling</li>
        <li>Coordination of care with specialists when needed</li>
      </ul>
      
      <h3>Benefits of Having a Family Doctor</h3>
      <p>Having a dedicated family physician ensures continuity of care throughout your life. Your doctor becomes familiar with your medical history, personal health goals, and family dynamics, allowing for more effective healthcare delivery. Regular visits to your family doctor can help detect health issues early, potentially preventing more serious problems down the road.</p>
      
      <h3>Our Approach</h3>
      <p>We believe in a patient-centered approach to family medicine. This means we take the time to listen to your concerns, answer your questions, and involve you in decisions about your healthcare. Our goal is to empower you with the knowledge and resources you need to maintain optimal health and well-being.</p>
    `,
    icon: <Stethoscope size={40} />,
    metaTitle: "Family Medicine Services in Edmonton | Grace Family Medical Clinic",
    metaDescription: "Comprehensive family medicine services in Edmonton. Our experienced doctors provide personalized care for patients of all ages. Book an appointment today.",
    keywords: "family doctor Edmonton, family medicine Edmonton, family physician, primary care, general practitioner, Edmonton healthcare"
  },
  {
    id: 2,
    title: "Walk-in Clinic",
    slug: "walk-in-clinic-edmonton",
    shortDescription: "Convenient medical care for non-emergency conditions without an appointment, with extended hours to accommodate your schedule.",
    fullDescription: `
      <h2>Convenient Walk-in Clinic Services in Edmonton</h2>
      <p>Our walk-in clinic at Grace Family Medical Clinic provides convenient medical care for non-emergency conditions without the need for an appointment. We understand that illness and injury don't always occur during regular business hours, which is why we offer extended hours to accommodate your busy schedule.</p>
      
      <h3>When to Use Our Walk-in Clinic</h3>
      <p>Our walk-in clinic is ideal for non-emergency medical concerns that require prompt attention, such as:</p>
      <ul>
        <li>Cold and flu symptoms</li>
        <li>Sore throats and ear infections</li>
        <li>Minor cuts and burns</li>
        <li>Sprains and strains</li>
        <li>Rashes and skin conditions</li>
        <li>Urinary tract infections</li>
        <li>Allergies and asthma</li>
        <li>Minor eye infections</li>
      </ul>
      
      <h3>What to Expect</h3>
      <p>When you visit our walk-in clinic, you'll be seen by one of our qualified healthcare providers who will assess your condition, provide appropriate treatment, and refer you to specialists if necessary. We strive to minimize wait times while ensuring each patient receives thorough and compassionate care.</p>
      
      <h3>Walk-in Clinic Hours</h3>
      <p>Monday to Friday: 9:00 AM - 6:00 PM<br>
      Saturday: 10:00 AM - 2:00 PM<br>
      Sunday: Closed</p>
      
      <p>No appointment necessary. Simply walk in during our operating hours, and we'll be happy to assist you.</p>
    `,
    icon: <Clock size={40} />,
    metaTitle: "Walk-in Clinic Edmonton | No Appointment Needed | Grace Family Medical",
    metaDescription: "Convenient walk-in clinic in Edmonton with extended hours. Get prompt medical care for non-emergency conditions without an appointment.",
    keywords: "walk-in clinic Edmonton, no appointment doctor Edmonton, urgent care, same day doctor, medical clinic Edmonton"
  },
  {
    id: 3,
    title: "Preventative Care",
    slug: "preventative-care-edmonton",
    shortDescription: "Proactive healthcare services designed to prevent illness, detect health issues early, and promote overall wellness.",
    fullDescription: `
      <h2>Preventative Care Services in Edmonton</h2>
      <p>At Grace Family Medical Clinic, we believe that preventing illness is just as important as treating it. Our preventative care services are designed to help you maintain optimal health, detect potential issues early, and reduce your risk of developing serious health conditions.</p>
      
      <h3>Comprehensive Preventative Services</h3>
      <p>Our preventative care services include:</p>
      <ul>
        <li>Annual physical examinations</li>
        <li>Health risk assessments</li>
        <li>Immunizations for all ages</li>
        <li>Cancer screenings (breast, cervical, colorectal, prostate, skin)</li>
        <li>Cardiovascular disease screenings</li>
        <li>Diabetes screenings</li>
        <li>Bone density testing</li>
        <li>Lifestyle counseling</li>
        <li>Nutritional guidance</li>
        <li>Smoking cessation support</li>
      </ul>
      
      <h3>The Importance of Regular Check-ups</h3>
      <p>Regular check-ups are a cornerstone of preventative care. These appointments allow your doctor to monitor your health over time, identify changes that might indicate developing problems, and address risk factors before they lead to disease. Even if you feel healthy, routine screenings can detect issues like high blood pressure, high cholesterol, and diabetes before symptoms appear.</p>
      
      <h3>Personalized Prevention Plans</h3>
      <p>We develop personalized prevention plans based on your age, gender, family history, lifestyle, and personal health risks. This tailored approach ensures you receive the most appropriate screenings and preventative services for your specific needs.</p>
      
      <h3>Empowering Through Education</h3>
      <p>An important aspect of our preventative care is patient education. We provide you with the knowledge and tools you need to make informed decisions about your health and adopt lifestyle habits that promote wellness and longevity.</p>
    `,
    icon: <HeartPulse size={40} />,
    metaTitle: "Preventative Care Services Edmonton | Grace Family Medical Clinic",
    metaDescription: "Comprehensive preventative healthcare services in Edmonton. Regular check-ups, screenings, and personalized prevention plans to maintain optimal health.",
    keywords: "preventative care Edmonton, preventive medicine, health screenings, annual physical, wellness exam, disease prevention Edmonton"
  },
  {
    id: 4,
    title: "Chronic Disease Management",
    slug: "chronic-disease-management-edmonton",
    shortDescription: "Specialized care for ongoing health conditions such as diabetes, hypertension, asthma, and heart disease.",
    fullDescription: `
      <h2>Chronic Disease Management in Edmonton</h2>
      <p>At Grace Family Medical Clinic, we provide comprehensive care for patients living with chronic health conditions. Our goal is to help you effectively manage your condition, minimize symptoms, prevent complications, and maintain the highest possible quality of life.</p>
      
      <h3>Conditions We Manage</h3>
      <p>Our healthcare team has extensive experience managing a wide range of chronic conditions, including:</p>
      <ul>
        <li>Diabetes (Type 1 and Type 2)</li>
        <li>Hypertension (high blood pressure)</li>
        <li>Heart disease</li>
        <li>Asthma and COPD</li>
        <li>Arthritis</li>
        <li>Thyroid disorders</li>
        <li>Chronic pain</li>
        <li>Depression and anxiety</li>
        <li>Osteoporosis</li>
        <li>Kidney disease</li>
      </ul>
      
      <h3>Our Approach to Chronic Disease Management</h3>
      <p>We take a collaborative, patient-centered approach to chronic disease management that includes:</p>
      <ul>
        <li>Thorough assessment and monitoring of your condition</li>
        <li>Development of personalized treatment plans</li>
        <li>Regular follow-up appointments to track progress</li>
        <li>Medication management and optimization</li>
        <li>Coordination with specialists when needed</li>
        <li>Patient education and self-management support</li>
        <li>Lifestyle modification guidance</li>
      </ul>
      
      <h3>Empowering Self-Management</h3>
      <p>We believe that patients who are actively involved in managing their own health achieve better outcomes. That's why we emphasize education and self-management skills, providing you with the knowledge, tools, and confidence you need to take control of your health condition.</p>
      
      <h3>Comprehensive Care Team</h3>
      <p>Our chronic disease management program involves a team of healthcare professionals working together to provide you with comprehensive care. Depending on your needs, your care team may include your family physician, nurses, dietitians, and other specialists.</p>
    `,
    icon: <Activity size={40} />,
    metaTitle: "Chronic Disease Management Edmonton | Grace Family Medical Clinic",
    metaDescription: "Specialized chronic disease management in Edmonton. Comprehensive care for diabetes, hypertension, heart disease, asthma, and other ongoing health conditions.",
    keywords: "chronic disease management Edmonton, diabetes care, hypertension treatment, asthma management, heart disease care, chronic condition Edmonton"
  },
  {
    id: 5,
    title: "Women's Health",
    slug: "womens-health-edmonton",
    shortDescription: "Specialized healthcare services addressing the unique health needs of women at every stage of life.",
    fullDescription: `
      <h2>Women's Health Services in Edmonton</h2>
      <p>At Grace Family Medical Clinic, we offer comprehensive women's health services designed to address the unique healthcare needs of women at every stage of life. Our team provides compassionate, personalized care in a comfortable and supportive environment.</p>
      
      <h3>Comprehensive Women's Health Services</h3>
      <p>Our women's health services include:</p>
      <ul>
        <li>Well-woman exams and preventative care</li>
        <li>Pap smears and cervical cancer screenings</li>
        <li>Breast health and breast cancer screenings</li>
        <li>Family planning and contraception counseling</li>
        <li>Menstrual disorder management</li>
        <li>Menopause management</li>
        <li>Osteoporosis screening and prevention</li>
        <li>Urinary tract infection treatment</li>
        <li>Sexual health counseling</li>
        <li>Prenatal and postnatal care</li>
      </ul>
      
      <h3>Preventative Care for Women</h3>
      <p>Regular preventative care is essential for maintaining optimal health and detecting potential issues early. We recommend regular well-woman exams that include screenings appropriate for your age, health history, and risk factors. These may include Pap tests, mammograms, bone density scans, and other important screenings.</p>
      
      <h3>Reproductive Health</h3>
      <p>We provide comprehensive reproductive health services, including contraception counseling, family planning, and management of menstrual disorders. Our physicians take the time to discuss your options and help you make informed decisions about your reproductive health.</p>
      
      <h3>Menopause Management</h3>
      <p>We offer support and treatment for women experiencing menopause and perimenopause. Our approach includes managing symptoms, preventing long-term health effects, and maintaining quality of life during this transition.</p>
      
      <h3>Personalized Care</h3>
      <p>We understand that every woman's health needs are unique. That's why we take the time to listen to your concerns, answer your questions, and develop personalized care plans that address your specific needs and health goals.</p>
    `,
    icon: <Users size={40} />,
    metaTitle: "Women's Health Services Edmonton | Grace Family Medical Clinic",
    metaDescription: "Comprehensive women's health services in Edmonton. Well-woman exams, reproductive health, menopause management, and preventative care for women of all ages.",
    keywords: "women's health Edmonton, gynecology, well-woman exam, women's clinic, menopause treatment, reproductive health Edmonton"
  },
  {
    id: 6,
    title: "Pediatric Care",
    slug: "pediatric-care-edmonton",
    shortDescription: "Comprehensive healthcare for infants, children, and adolescents, including well-child visits, immunizations, and illness treatment.",
    fullDescription: `
      <h2>Pediatric Care Services in Edmonton</h2>
      <p>At Grace Family Medical Clinic, we provide comprehensive healthcare services for children from birth through adolescence. Our family physicians are experienced in pediatric care and committed to supporting your child's health and development at every stage.</p>
      
      <h3>Comprehensive Pediatric Services</h3>
      <p>Our pediatric care services include:</p>
      <ul>
        <li>Well-child check-ups and developmental assessments</li>
        <li>Immunizations according to the recommended schedule</li>
        <li>Growth and development monitoring</li>
        <li>Diagnosis and treatment of acute illnesses</li>
        <li>Management of chronic conditions</li>
        <li>Behavioral and mental health assessments</li>
        <li>Nutrition counseling</li>
        <li>School and sports physicals</li>
        <li>Preventative health education</li>
      </ul>
      
      <h3>Well-Child Visits</h3>
      <p>Regular well-child visits are essential for monitoring your child's growth and development, providing recommended immunizations, and addressing any concerns you may have about your child's health. These visits also give our physicians the opportunity to detect and address potential health issues before they become serious.</p>
      
      <h3>Immunizations</h3>
      <p>We follow the recommended immunization schedule to protect your child against preventable diseases. Our team will discuss each vaccine with you, answer your questions, and ensure your child stays up-to-date with their immunizations.</p>
      
      <h3>Acute Illness Care</h3>
      <p>Children frequently experience acute illnesses such as colds, ear infections, strep throat, and other conditions. Our physicians provide prompt diagnosis and treatment to help your child recover quickly and comfortably.</p>
      
      <h3>Child-Friendly Environment</h3>
      <p>We understand that medical visits can be intimidating for children. Our clinic provides a welcoming, child-friendly environment, and our staff is experienced in making children feel comfortable and at ease during their visits.</p>
      
      <h3>Partnership with Parents</h3>
      <p>We believe in partnering with parents to ensure the best possible care for their children. We take the time to listen to your concerns, answer your questions, and provide the guidance and support you need to make informed decisions about your child's health.</p>
    `,
    icon: <Baby size={40} />,
    metaTitle: "Pediatric Care Edmonton | Children's Healthcare | Grace Family Medical",
    metaDescription: "Comprehensive pediatric care in Edmonton for infants, children, and adolescents. Well-child visits, immunizations, illness treatment, and developmental monitoring.",
    keywords: "pediatric care Edmonton, children's doctor, well-child visits, immunizations, child healthcare, pediatrician Edmonton"
  },
  {
    id: 7,
    title: "Vaccinations",
    slug: "vaccinations-edmonton",
    shortDescription: "Routine and travel immunizations for patients of all ages to prevent infectious diseases and protect community health.",
    fullDescription: `
      <h2>Vaccination Services in Edmonton</h2>
      <p>At Grace Family Medical Clinic, we offer comprehensive vaccination services for patients of all ages. Immunizations are one of the most effective ways to protect yourself, your family, and your community from preventable infectious diseases.</p>
      
      <h3>Routine Immunizations</h3>
      <p>We provide all recommended routine vaccinations according to the Canadian Immunization Schedule, including:</p>
      <ul>
        <li>Childhood vaccines (DTaP, MMR, Polio, Hib, Hepatitis B, etc.)</li>
        <li>Adolescent vaccines (HPV, Meningococcal, Tdap booster)</li>
        <li>Adult vaccines and boosters (Td/Tdap, Shingles, Pneumococcal)</li>
        <li>Annual influenza (flu) vaccines</li>
        <li>COVID-19 vaccines and boosters</li>
      </ul>
      
      <h3>Travel Vaccinations</h3>
      <p>If you're planning international travel, we can provide the necessary vaccinations to protect you from diseases that may be present in your destination. Our travel vaccination services include:</p>
      <ul>
        <li>Assessment of your travel plans and health history</li>
        <li>Recommendations for appropriate travel vaccines</li>
        <li>Administration of required and recommended vaccines</li>
        <li>Advice on preventing travel-related illnesses</li>
        <li>Prescriptions for antimalarial medications when needed</li>
      </ul>
      
      <h3>Vaccine Education</h3>
      <p>We understand you may have questions about vaccines. Our healthcare providers take the time to discuss the benefits and potential risks of each vaccine, answer your questions, and address any concerns you may have. We believe in providing evidence-based information so you can make informed decisions about your health.</p>
      
      <h3>Convenient Scheduling</h3>
      <p>We offer flexible scheduling for vaccinations, including dedicated flu shot clinics during flu season. Many vaccines can be administered during your regular check-up or as a quick visit to our clinic.</p>
      
      <h3>Immunization Records</h3>
      <p>We maintain complete records of all vaccinations administered at our clinic. We can provide you with documentation of your immunization history for school, work, travel, or personal records.</p>
    `,
    icon: <Syringe size={40} />,
    metaTitle: "Vaccination Services Edmonton | Routine & Travel Immunizations | Grace Family Medical",
    metaDescription: "Comprehensive vaccination services in Edmonton. Routine immunizations for all ages and travel vaccines to protect against preventable diseases.",
    keywords: "vaccinations Edmonton, immunizations, flu shots, travel vaccines, childhood vaccines, adult vaccines Edmonton"
  },
  {
    id: 8,
    title: "Travel Medicine",
    slug: "travel-medicine-edmonton",
    shortDescription: "Pre-travel consultations, vaccinations, and health advice to keep you healthy during international travel.",
    fullDescription: `
      <h2>Travel Medicine Services in Edmonton</h2>
      <p>Planning an international trip? At Grace Family Medical Clinic, our travel medicine services help ensure you stay healthy while traveling abroad. We provide comprehensive pre-travel consultations, necessary vaccinations, and expert advice tailored to your specific destination and health needs.</p>
      
      <h3>Comprehensive Travel Health Services</h3>
      <p>Our travel medicine services include:</p>
      <ul>
        <li>Pre-travel health consultations</li>
        <li>Destination-specific health risk assessments</li>
        <li>Travel vaccinations (Yellow Fever, Typhoid, Hepatitis A & B, etc.)</li>
        <li>Malaria prevention and prescriptions</li>
        <li>Traveler's diarrhea prevention and treatment</li>
        <li>Altitude sickness prevention</li>
        <li>Customized travel health kits</li>
        <li>Post-travel evaluations if you return ill</li>
      </ul>
      
      <h3>Pre-Travel Consultations</h3>
      <p>During your pre-travel consultation, our healthcare providers will:</p>
      <ul>
        <li>Review your travel itinerary, including destinations, duration, and planned activities</li>
        <li>Assess your health history and current medications</li>
        <li>Identify health risks specific to your destination</li>
        <li>Recommend and administer appropriate vaccinations</li>
        <li>Prescribe medications for malaria prevention or other travel-related concerns</li>
        <li>Provide advice on food and water safety, insect protection, and other preventative measures</li>
      </ul>
      
      <h3>When to Schedule Your Travel Consultation</h3>
      <p>We recommend scheduling your travel consultation 4-6 weeks before your departure date. This allows sufficient time for vaccinations to become effective and for any potential vaccine reactions to resolve before you travel. However, even if you're departing sooner, we can still provide valuable services to help protect your health while traveling.</p>
      
      <h3>International Certificate of Vaccination</h3>
      <p>If you require vaccines like Yellow Fever for entry into certain countries, we can provide the International Certificate of Vaccination or Prophylaxis (ICVP), also known as the "Yellow Card," which is officially recognized proof of vaccination.</p>
      
      <h3>Post-Travel Care</h3>
      <p>If you become ill after returning from international travel, our physicians are experienced in recognizing and treating travel-related illnesses. Contact our clinic promptly if you develop fever, persistent diarrhea, skin rashes, or other concerning symptoms after returning from abroad.</p>
    `,
    icon: <Plane size={40} />,
    metaTitle: "Travel Medicine Edmonton | Pre-Travel Consultations & Vaccines | Grace Family Medical",
    metaDescription: "Comprehensive travel medicine services in Edmonton. Pre-travel consultations, vaccinations, and health advice for international travelers.",
    keywords: "travel medicine Edmonton, travel vaccines, pre-travel consultation, yellow fever vaccine, malaria prevention, travel health Edmonton"
  },
  {
    id: 9,
    title: "Laboratory Services",
    slug: "laboratory-services-edmonton",
    shortDescription: "On-site laboratory testing for convenient and timely diagnostic services, including blood work and other medical tests.",
    fullDescription: `
      <h2>Laboratory Services in Edmonton</h2>
      <p>At Grace Family Medical Clinic, we offer convenient on-site laboratory services to provide you with timely and accurate diagnostic testing. Our in-house laboratory allows us to perform many common tests during your visit, eliminating the need for additional appointments at external facilities.</p>
      
      <h3>Comprehensive Laboratory Services</h3>
      <p>Our laboratory services include:</p>
      <ul>
        <li>Blood tests (complete blood count, metabolic panels, lipid profiles, etc.)</li>
        <li>Urinalysis</li>
        <li>Rapid strep testing</li>
        <li>Pregnancy testing</li>
        <li>Blood glucose monitoring</li>
        <li>Hemoglobin A1C testing for diabetes monitoring</li>
        <li>INR testing for patients on blood thinners</li>
        <li>Rapid flu and COVID-19 testing</li>
        <li>Collection services for tests processed at external laboratories</li>
      </ul>
      
      <h3>Benefits of On-Site Laboratory Services</h3>
      <p>Having laboratory services available in our clinic offers several advantages:</p>
      <ul>
        <li>Convenience: Complete your doctor's visit and laboratory tests in one location</li>
        <li>Faster results: Many tests can be processed while you wait or within hours</li>
        <li>Immediate treatment: Quick results allow for prompt diagnosis and treatment</li>
        <li>Continuity of care: Your physician has direct access to your test results</li>
        <li>Reduced anxiety: Less waiting time for results means less stress for you</li>
      </ul>
      
      <h3>Preparing for Laboratory Tests</h3>
      <p>Some laboratory tests require special preparation, such as fasting before blood work. When your doctor orders laboratory tests, we'll provide clear instructions on how to prepare. If you have any questions about preparing for your tests, please don't hesitate to ask.</p>
      
      <h3>Accessing Your Results</h3>
      <p>Your test results will be reviewed by your physician, who will contact you to discuss any abnormal findings. For normal results, you may be notified during your next visit or through our secure patient portal. If you have questions about your test results, please contact our office.</p>
      
      <h3>Laboratory Hours</h3>
      <p>Our laboratory services are available during regular clinic hours. For some specialized tests, specific collection times may be recommended. Please check with our staff for details.</p>
    `,
    icon: <Microscope size={40} />,
    metaTitle: "Laboratory Services Edmonton | On-Site Medical Testing | Grace Family Medical",
    metaDescription: "Convenient on-site laboratory services in Edmonton. Blood work, urinalysis, and other diagnostic tests available at our medical clinic.",
    keywords: "laboratory services Edmonton, blood work, medical testing, diagnostic lab, urinalysis, on-site lab Edmonton"
  }
];