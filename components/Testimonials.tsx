import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I recommend Wondlo to all travelers. It's given me so much more confidence when booking adventures.",
      name: "Sarah Johnson",
      role: "Adventure Traveler",
      location: "United Kingdom",
      rating: 5,
      avatar: "SJ"
    },
    {
      quote: "Finally a tool that helps me know which risks actually matter before I book anything.",
      name: "Michael Chen",
      role: "Solo Traveler",
      location: "Singapore",
      rating: 5,
      avatar: "MC"
    },
    {
      quote: "The safety reports are incredibly detailed. I never book an adventure without checking Wondlo first.",
      name: "Emma Rodriguez",
      role: "Group Travel Organizer",
      location: "Spain",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#C7B5F5] to-[#7E6BB3]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-2">
          What our users say
        </h2>
        <p className="text-purple-200 text-center mb-12">
          Hear directly from other travelers from our beta.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-purple-500/30">
              <FaQuoteLeft className="text-purple-300 text-2xl mb-4" />
              <p className="text-sm mb-4">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-purple-200 text-xs">{testimonial.role}, {testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}