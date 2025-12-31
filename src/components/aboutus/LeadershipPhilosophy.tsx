

const LeadershipPhilosophy = () => {
  return (
    <>
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Leadership Philosophy
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Sundar Group, leadership is not about titles or positions—it's 
                  about responsibility, accountability, and leading by example. Our 
                  leadership philosophy is built on the belief that true leaders 
                  serve their teams, support their partners, and stewarding resources 
                  with care and foresight.
                </p>
                <p>
                  We prioritize long-term thinking over short-term gains. Decisions 
                  are made with consideration for their lasting impact on our 
                  employees, customers, communities, and the environment.
                </p>
                <p>
                  Our leaders are committed to fostering a culture of openness, 
                  continuous learning, and ethical conduct. We encourage initiative 
                  while maintaining the discipline needed to deliver consistent results.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">Leadership Team</p>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default LeadershipPhilosophy