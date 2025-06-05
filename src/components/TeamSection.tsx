
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Rajesh Maharjan',
      role: 'Principal Architect & Founder',
      bio: 'With over 15 years of experience in architectural design and infrastructure planning, Rajesh leads our vision for sustainable development in Nepal.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      email: 'rajesh@piconsults.com.np',
    },
    {
      name: 'Priya Shrestha',
      role: 'Senior Project Manager',
      bio: 'Priya brings expertise in project coordination and stakeholder management, ensuring seamless execution of complex infrastructure projects.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b6d9f84e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      email: 'priya@piconsults.com.np',
    },
    {
      name: 'Amit Karki',
      role: 'Lead Structural Engineer',
      bio: 'Specializing in seismic-resistant design and innovative structural solutions, Amit ensures our buildings meet international safety standards.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      email: 'amit@piconsults.com.np',
    },
    {
      name: 'Sita Tamang',
      role: 'Interior Design Specialist',
      bio: 'With a keen eye for detail and cultural sensitivity, Sita creates interior spaces that blend modern functionality with traditional aesthetics.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      email: 'sita@piconsults.com.np',
    },
    {
      name: 'Krishna Thapa',
      role: 'Urban Planning Consultant',
      bio: 'Krishna specializes in master planning and urban development strategies, focusing on sustainable growth and community-centered design.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      email: 'krishna@piconsults.com.np',
    },
    {
      name: 'Maya Gurung',
      role: 'Healthcare Architecture Specialist',
      bio: 'Maya leads our healthcare projects with expertise in hospital design, medical facility planning, and patient-centered architectural solutions.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      email: 'maya@piconsults.com.np',
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pi-navy mb-6">Our Team</h2>
          <div className="w-24 h-1 bg-pi-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate professionals who bring our vision to life. Our diverse team 
            combines expertise, creativity, and local knowledge to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pi-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Contact overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pi-light-blue transition-colors duration-300"
                    >
                      <Mail className="h-5 w-5 text-pi-navy" />
                    </a>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pi-light-blue transition-colors duration-300 cursor-pointer">
                      <Linkedin className="h-5 w-5 text-pi-navy" />
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-pi-navy mb-1">{member.name}</h3>
                <p className="text-pi-blue font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pi-navy to-pi-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h3>
            <p className="text-lg mb-6 opacity-90">
              We're always looking for talented professionals who share our passion for innovative design and sustainable development.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-white text-pi-navy px-8 py-3 rounded-lg font-semibold hover:bg-pi-light-blue transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
