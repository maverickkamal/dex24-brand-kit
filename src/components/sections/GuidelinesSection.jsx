import { Heart, Target, Users, Zap, MessageCircle, FileText, Check } from 'lucide-react'
import Accordion from '../ui/Accordion'
import styles from './GuidelinesSection.module.css'

function GuidelinesSection() {
  return (
    <section id="guidelines" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Brand Guidelines</h2>
          <p className="section-subtitle">
            Our brand voice, personality, and messaging principles that guide all Dexterous Medics communications
          </p>
        </div>

        {/* Brand Personality */}
        <div className={styles.personalitySection}>
          <h3 className={styles.sectionTitle}>
            <Target size={24} />
            Brand Personality
          </h3>
          
          <div className={styles.personalityGrid}>
            <div className={styles.personalityCard}>
              <div className={styles.iconWrapper} style={{ backgroundColor: 'var(--color-deep-teal)' }}>
                <Heart size={32} />
              </div>
              <h4>Caring & Compassionate</h4>
              <p>We approach healthcare with empathy, understanding that behind every patient is a person with unique needs and concerns.</p>
            </div>

            <div className={styles.personalityCard}>
              <div className={styles.iconWrapper} style={{ backgroundColor: 'var(--color-light-teal)' }}>
                <Target size={32} />
              </div>
              <h4>Professional & Trustworthy</h4>
              <p>We maintain high standards of medical excellence while communicating with clarity and confidence.</p>
            </div>

            <div className={styles.personalityCard}>
              <div className={styles.iconWrapper} style={{ backgroundColor: 'var(--color-yellow)' }}>
                <Zap size={32} />
              </div>
              <h4>Innovative & Forward-Thinking</h4>
              <p>We embrace modern healthcare solutions while staying grounded in proven medical practices.</p>
            </div>

            <div className={styles.personalityCard}>
              <div className={styles.iconWrapper} style={{ backgroundColor: 'var(--color-crimson)' }}>
                <Users size={32} />
              </div>
              <h4>Community-Focused</h4>
              <p>We believe in building strong connections within our community through education and preventive care.</p>
            </div>
          </div>
        </div>

        {/* Brand Voice */}
        <div className={styles.voiceSection}>
          <h3 className={styles.sectionTitle}>
            <MessageCircle size={24} />
            Brand Voice & Tone
          </h3>

          <Accordion title="Voice Characteristics">
            <div className={styles.voiceCharacteristics}>
              <div className={styles.characteristic}>
                <h4>Clear & Accessible</h4>
                <p className={styles.do}><Check size={16} /> Use simple, jargon-free language that everyone can understand</p>
                <p className={styles.example}>✓ "We'll help you manage your blood pressure"</p>
                <p className={styles.avoid}>✗ "We provide comprehensive hypertensive management protocols"</p>
              </div>

              <div className={styles.characteristic}>
                <h4>Warm & Approachable</h4>
                <p className={styles.do}><Check size={16} /> Speak directly to people with genuine concern</p>
                <p className={styles.example}>✓ "Your health matters to us. Let's work together."</p>
                <p className={styles.avoid}>✗ "Patients should consult with medical professionals regarding health concerns."</p>
              </div>

              <div className={styles.characteristic}>
                <h4>Confident & Reassuring</h4>
                <p className={styles.do}><Check size={16} /> Inspire confidence without being arrogant</p>
                <p className={styles.example}>✓ "We're here to support you every step of the way"</p>
                <p className={styles.avoid}>✗ "We are the leading healthcare provider in the region"</p>
              </div>

              <div className={styles.characteristic}>
                <h4>Educational & Empowering</h4>
                <p className={styles.do}><Check size={16} /> Share knowledge that helps people make informed decisions</p>
                <p className={styles.example}>✓ "Understanding your symptoms helps us provide better care"</p>
                <p className={styles.avoid}>✗ "Follow our medical advice without question"</p>
              </div>
            </div>
          </Accordion>

          <Accordion title="Tone Guidelines">
            <div className={styles.toneGuide}>
              <div className={styles.toneCard}>
                <h4>Emergency/Urgent Communications</h4>
                <ul>
                  <li><strong>Tone:</strong> Direct, clear, calm</li>
                  <li><strong>Language:</strong> Short sentences, action-oriented</li>
                  <li><strong>Colors:</strong> Crimson or Red for urgency</li>
                  <li><strong>Example:</strong> "Vaccination clinic open today. Walk-ins welcome. No appointment needed."</li>
                </ul>
              </div>

              <div className={styles.toneCard}>
                <h4>Educational Content</h4>
                <ul>
                  <li><strong>Tone:</strong> Informative, friendly, supportive</li>
                  <li><strong>Language:</strong> Clear explanations, helpful tips</li>
                  <li><strong>Colors:</strong> Deep Teal for authority, Yellow for highlights</li>
                  <li><strong>Example:</strong> "Did you know? Regular check-ups can catch health issues early. Schedule yours today."</li>
                </ul>
              </div>

              <div className={styles.toneCard}>
                <h4>Community Engagement</h4>
                <ul>
                  <li><strong>Tone:</strong> Warm, inclusive, celebratory</li>
                  <li><strong>Language:</strong> Conversational, community-focused</li>
                  <li><strong>Colors:</strong> Light Teal, Yellow for positivity</li>
                  <li><strong>Example:</strong> "Thank you for making our health fair a success! Together, we're building a healthier community."</li>
                </ul>
              </div>

              <div className={styles.toneCard}>
                <h4>Promotional/Services</h4>
                <ul>
                  <li><strong>Tone:</strong> Professional, clear, benefit-focused</li>
                  <li><strong>Language:</strong> Highlight value, clear CTAs</li>
                  <li><strong>Colors:</strong> Deep Teal for trust, Yellow for CTAs</li>
                  <li><strong>Example:</strong> "Comprehensive care, right in your neighborhood. New patient appointments available."</li>
                </ul>
              </div>
            </div>
          </Accordion>
        </div>

        {/* Messaging Principles */}
        <div className={styles.messagingSection}>
          <h3 className={styles.sectionTitle}>
            <FileText size={24} />
            Messaging Principles
          </h3>

          <div className={styles.principlesGrid}>
            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>1</div>
              <h4>Put People First</h4>
              <p>Every message should center on the people we serve—their needs, concerns, and well-being. We're not just treating patients; we're caring for people.</p>
              <div className={styles.principleExample}>
                <strong>In practice:</strong> Use "you" more than "we". Focus on benefits to the community, not just our services.
              </div>
            </div>

            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>2</div>
              <h4>Be Honest & Transparent</h4>
              <p>Healthcare requires trust. We communicate openly about what we do, how we do it, and what people can expect.</p>
              <div className={styles.principleExample}>
                <strong>In practice:</strong> Clear pricing, honest wait times, transparent processes. No hidden information or fine print.
              </div>
            </div>

            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>3</div>
              <h4>Educate & Empower</h4>
              <p>Knowledge is healthcare's greatest tool. We share information that helps people understand their health and make informed decisions.</p>
              <div className={styles.principleExample}>
                <strong>In practice:</strong> Explain medical terms, share preventive care tips, provide resources for further learning.
              </div>
            </div>

            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>4</div>
              <h4>Show, Don't Just Tell</h4>
              <p>Actions speak louder than words. We demonstrate our commitment through real stories, tangible results, and community impact.</p>
              <div className={styles.principleExample}>
                <strong>In practice:</strong> Share success stories, showcase community programs, highlight real patient experiences (with permission).
              </div>
            </div>

            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>5</div>
              <h4>Maintain Consistency</h4>
              <p>Our brand identity should be recognizable across all touchpoints. Consistency builds trust and professional credibility.</p>
              <div className={styles.principleExample}>
                <strong>In practice:</strong> Use brand colors correctly, maintain typography standards, keep tone consistent across platforms.
              </div>
            </div>

            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>6</div>
              <h4>Respect & Include</h4>
              <p>Healthcare is for everyone. Our messaging reflects the diversity of our community and respects all backgrounds, abilities, and identities.</p>
              <div className={styles.principleExample}>
                <strong>In practice:</strong> Use inclusive language, represent diverse communities in visuals, ensure accessibility in all communications.
              </div>
            </div>
          </div>
        </div>

        {/* Writing Dos and Don'ts */}
        <div className={styles.writingGuide}>
          <h3 className={styles.sectionTitle}>Writing Best Practices</h3>
          
          <div className={styles.dosDonts}>
            <div className={styles.dosColumn}>
              <h4 className={styles.dosTitle}><Check size={20} /> DO</h4>
              <ul>
                <li>Use active voice ("We provide care" not "Care is provided")</li>
                <li>Write in second person ("You can schedule..." not "Patients can schedule...")</li>
                <li>Keep sentences short and scannable (12-15 words average)</li>
                <li>Use bulleted lists for easy reading</li>
                <li>Start with the most important information</li>
                <li>Include clear calls-to-action</li>
                <li>Use contractions for a conversational tone ("we're" not "we are")</li>
                <li>Ask questions to engage readers</li>
                <li>End with next steps or contact information</li>
              </ul>
            </div>

            <div className={styles.dontsColumn}>
              <h4 className={styles.dontsTitle}>✕ AVOID</h4>
              <ul>
                <li>Medical jargon without explanation</li>
                <li>Fear-based messaging or scare tactics</li>
                <li>Overly formal or corporate language</li>
                <li>Making promises we can't keep</li>
                <li>Comparing ourselves negatively to competitors</li>
                <li>Using passive voice excessively</li>
                <li>Long paragraphs without breaks</li>
                <li>All caps (except for acronyms like CPR, DEX24)</li>
                <li>Emojis in professional/urgent communications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tagline & Key Messages */}
        <div className={styles.taglineSection}>
          <h3 className={styles.sectionTitle}>Official Tagline & Key Messages</h3>
          
          <div className={styles.taglineCard}>
            <div className={styles.taglineMain}>
              <span className={styles.label}>Official Tagline</span>
              <h2 className={styles.tagline}>"Marketing beyond walls"</h2>
              <p>This encapsulates our mission to bring healthcare directly to communities, breaking down barriers to access.</p>
            </div>

            <div className={styles.keyMessages}>
              <h4>Core Messages (Use consistently)</h4>
              <ul>
                <li><strong>"Your health, our priority"</strong> — Emphasizes patient-centered care</li>
                <li><strong>"Healthcare that comes to you"</strong> — Highlights accessibility and mobile services</li>
                <li><strong>"Building healthier communities together"</strong> — Underscores community partnership</li>
                <li><strong>"Compassionate care, professional excellence"</strong> — Balances warmth and expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuidelinesSection

