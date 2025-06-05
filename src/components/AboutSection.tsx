
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, Award, MapPin } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Building, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Team Members', value: '15+' },
    { icon: Award, label: 'Years of Excellence', value: '6+' },
    { icon: MapPin, label: 'Locations Served', value: '25+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pi-navy mb-6">About PI Consults</h2>
          <div className="w-24 h-1 bg-pi-blue mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-pi-navy mb-4">
              Leading Infrastructure Consultancy in Nepal
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Based in the heart of Kathmandu, PI Consults Pvt. Ltd. has been at the forefront of 
              Nepal's infrastructure development since 2018. We specialize in transforming visionary 
              ideas into architectural landmarks that serve communities and stand the test of time.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our comprehensive services span across master planning, infrastructure development, 
              hospital design, interior works, and residential architecture. We combine international 
              standards with local expertise to deliver projects that truly make a difference.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-pi-gray rounded-lg">
                <h4 className="text-xl font-bold text-pi-navy">Founded</h4>
                <p className="text-lg text-pi-earth font-semibold">2018</p>
              </div>
              <div className="text-center p-4 bg-pi-gray rounded-lg">
                <h4 className="text-xl font-bold text-pi-navy">Location</h4>
                <p className="text-lg text-pi-earth font-semibold">Kathmandu</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Modern architecture"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pi-navy/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <stat.icon className="h-8 w-8 text-pi-blue mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-pi-navy mb-2">{stat.value}</h4>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-pi-navy text-center mb-12">Our Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Master Planning',
                description: 'Comprehensive urban and regional planning solutions for sustainable development.',
                image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Infrastructure Design',
                description: 'Innovative infrastructure solutions including stadiums, bridges, and public facilities.',
                image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                title: 'Healthcare & Residential',
                description: 'Specialized hospital design and residential architecture tailored to local needs.',
                image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              }
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pi-navy/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-pi-navy mb-3">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
