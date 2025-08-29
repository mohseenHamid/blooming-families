import BulletIcon from '@/components/ui/BulletIcon'

export default function About() {
  return (
    <section className="pt-16 lg:pt-10 pb-16 lg:pb-20 bg-gradient-to-br from-background-white to-primary-green/5 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mx-auto">
          {/* Coach Story */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-primary-navy/10 text-primary-navy px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm font-medium mb-4">
                About your coach
              </span>
              <h2 className="text-[clamp(1.5rem,3.8vw+0.4rem,2.5rem)] font-heading font-bold text-primary-navy mb-5 lg:mb-4">
                A personal approach to family support
              </h2>
            </div>
            
            <div className="space-y-4 text-text-grey leading-relaxed text-base md:text-lg">
              <p>
                I understand that every family's journey is unique. Having worked with families for over a decade, 
                I've learned that the most meaningful change happens when you feel truly heard and supported.
              </p>
              
              <p>
                My approach combines professional expertise with genuine warmth. Whether you're navigating 
                relationship challenges, parenting transitions, or seeking to strengthen family bonds, 
                I'm here to walk alongside you with compassion and practical guidance.
              </p>
              
              <p>
                Through my partnership work with local councils and private practice, I've had the privilege 
                of supporting hundreds of families through their most important transitions. Each family 
                teaches me something new about resilience, love, and growth.
              </p>
            </div>

            {/* Personal Touch */}
            <div className="bg-primary-green/5 p-4 md:p-6 rounded-lg border-l-4 border-primary-green">
              <p className="text-text-grey italic leading-relaxed text-base md:text-lg">
                "I believe that with the right support, every family has the capacity to thrive. 
                My role is simply to help you discover your own strengths and navigate your path forward."
              </p>
            </div>
          </div>

          {/* Credentials & Approach */}
          <div className="space-y-8">
            {/* Professional Background */}
            <div className="card">
              <h3 className="text-xl font-heading font-semibold text-primary-navy mb-4">
                Professional background
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <BulletIcon className="w-2 mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary-navy">Certified family & relationship coach</p>
                    <p className="text-sm text-text-grey">Accredited training in family systems and therapeutic approaches</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BulletIcon className="w-2 mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary-navy">Council partnership specialist</p>
                    <p className="text-sm text-text-grey">Trusted provider of family support services for local authorities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BulletIcon className="w-2 mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-primary-navy">10+ years experience</p>
                    <p className="text-sm text-text-grey">Supporting families through transitions, challenges, and growth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* My Approach */}
            <div className="card">
              <h3 className="text-xl font-heading font-semibold text-primary-navy mb-4">
                My approach
              </h3>
              <div className="space-y-4 text-text-grey leading-[1.5]">
                <p className="flex items-center">
                  <BulletIcon className="w-2 mr-3" />
                  Confidential, non-judgmental support
                </p>
                <p className="flex items-center">
                  <BulletIcon className="w-2 mr-3" />
                  Practical strategies tailored to your family
                </p>
                <p className="flex items-center">
                  <BulletIcon className="w-2 mr-3" />
                  Focus on your strengths and resources
                </p>
                <p className="flex items-center">
                  <BulletIcon className="w-2 mr-3" />
                  Flexible support that fits your life
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
