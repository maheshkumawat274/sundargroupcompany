import React, { useEffect, useState } from 'react';

// ===== TYPE DEFINITIONS (API-Ready) =====
interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
}

interface CompanyInfo {
  mission: string;
  vision: string;
  history: string;
  values: string[];
}

// ===== MOCK DATA (Remove when API is ready) =====
const mockTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Rajesh Sundar",
    position: "Founder & CEO",
    image: "/images/team/ceo.jpg",
    bio: "With over 25 years of experience in business consulting, Rajesh founded Sundar Group with a vision to transform businesses across India."
  },
  {
    id: "2",
    name: "Priya Sharma",
    position: "Chief Operations Officer",
    image: "/images/team/coo.jpg",
    bio: "Priya oversees all branch operations and ensures seamless service delivery across all locations."
  },
  {
    id: "3",
    name: "Amit Patel",
    position: "Chief Technology Officer",
    image: "/images/team/cto.jpg",
    bio: "Amit leads our digital transformation initiatives and IT consulting services."
  },
  {
    id: "4",
    name: "Sneha Reddy",
    position: "Head of Human Resources",
    image: "/images/team/hr.jpg",
    bio: "Sneha manages talent acquisition and employee development programs across all branches."
  }
];

const mockCompanyInfo: CompanyInfo = {
  mission: "To empower businesses with innovative solutions that drive growth, efficiency, and sustainable success.",
  vision: "To be India's most trusted multi-sector consulting firm, known for excellence, integrity, and transformative impact.",
  history: "Founded in 2005, Sundar Group started as a small consulting firm in Mumbai. Over the years, we have expanded to multiple cities, serving hundreds of clients across various industries. Our journey has been marked by continuous innovation, client-centric approach, and a commitment to excellence. Today, we operate three major branches and continue to grow, driven by our passion for helping businesses succeed.",
  values: [
    "Integrity in all dealings",
    "Client-first approach",
    "Innovation and continuous improvement",
    "Collaboration and teamwork",
    "Excellence in service delivery",
    "Social responsibility"
  ]
};

// ===== API SERVICE FUNCTIONS (Future Integration) =====

// FUTURE: Uncomment when backend is ready
// const getTeamMembers = async (): Promise<TeamMember[]> => {
//   const res = await fetch(`${process.env.REACT_APP_API_URL}/team`);
//   if (!res.ok) throw new Error('Failed to fetch team members');
//   return res.json();
// };

// CURRENT: Mock implementation
const getTeamMembers = async (): Promise<TeamMember[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTeamMembers), 300);
  });
};

// FUTURE: Uncomment when backend is ready
// const getCompanyInfo = async (): Promise<CompanyInfo> => {
//   const res = await fetch(`${process.env.REACT_APP_API_URL}/company-info`);
//   if (!res.ok) throw new Error('Failed to fetch company info');
//   return res.json();
// };

// CURRENT: Mock implementation
const getCompanyInfo = async (): Promise<CompanyInfo> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCompanyInfo), 300);
  });
};

// ===== TEAM MEMBER CARD COMPONENT =====
interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-64 bg-gray-200 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=256&background=3b82f6&color=fff`;
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-3">{member.position}</p>
        <p className="text-gray-600 text-sm">{member.bio}</p>
      </div>
    </div>
  );
};

// ===== MAIN ABOUT PAGE COMPONENT =====
const About: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // FUTURE: These will be real API calls
        const [teamData, companyData] = await Promise.all([
          getTeamMembers(),
          getCompanyInfo()
        ]);
        setTeamMembers(teamData);
        setCompanyInfo(companyData);
      } catch (err) {
        setError('Failed to load page data. Please try again later.');
        console.error('Error fetching about page data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sundar Group</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Building partnerships, delivering excellence, and transforming businesses since 2005.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      {companyInfo && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Mission */}
              <div className="text-center md:text-left">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600">{companyInfo.mission}</p>
              </div>

              {/* Vision */}
              <div className="text-center md:text-left">
                <div className="inline-block p-4 bg-indigo-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600">{companyInfo.vision}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Our Story / History */}
      {companyInfo && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{companyInfo.history}</p>
            </div>
          </div>
        </section>
      )}

      {/* Core Values */}
      {companyInfo && companyInfo.values.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {companyInfo.values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced team is dedicated to driving your business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">18+</div>
              <div className="text-blue-100">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
              <div className="text-blue-100">Branch Locations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how Sundar Group can help transform your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;