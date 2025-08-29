export default function Testimonials() {
  const testimonials = [
    {
      name: "– A & M",
      content: "The sessions gave us clarity and hope again.",
    },
    {
      name: "– Z.T.",
      content: "A deeply insightful, spiritual and practical experience.",
    },
  ]

  return (
    <section className="pt-16 lg:pt-10 pb-16 lg:pb-20 bg-background-light overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-10 lg:mb-8">
          <h2 className="text-[clamp(1.5rem,3.8vw+0.4rem,2.5rem)] font-heading font-bold text-primary-navy mb-3 lg:mb-2">
            Client experiences
          </h2>
          <p className="text-base md:text-lg text-text-grey max-w-2xl mx-auto">
            Feedback from families who have worked with our professional coaching and support services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <p className="text-text-grey mb-4 italic text-lg">"{testimonial.content}"</p>
              <p className="font-semibold text-primary-navy">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
