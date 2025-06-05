
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Master Plans',
    'Stadiums',
    'Agro Infrastructure',
    'Interior Design',
    'Hospitals',
    'Academic Buildings',
    'Residential'
  ];

  const projects = [
    {
      title: 'Kathmandu Valley Master Plan 2030',
      category: 'Master Plans',
      date: '2023',
      location: 'Kathmandu Valley, Nepal',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Comprehensive urban development plan for sustainable growth of Kathmandu Valley.'
    },
    {
      title: 'Pokhara International Stadium',
      category: 'Stadiums',
      date: '2022',
      location: 'Pokhara, Nepal',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Modern multi-purpose stadium with capacity for 25,000 spectators.'
    },
    {
      title: 'Agro Processing Complex',
      category: 'Agro Infrastructure',
      date: '2023',
      location: 'Chitwan, Nepal',
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'State-of-the-art agricultural processing and storage facility.'
    },
    {
      title: 'Luxury Hotel Interior Design',
      category: 'Interior Design',
      date: '2023',
      location: 'Bhaktapur, Nepal',
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Contemporary interior design blending traditional Newari architecture with modern luxury.'
    },
    {
      title: 'Children\'s Hospital Complex',
      category: 'Hospitals',
      date: '2022',
      location: 'Lalitpur, Nepal',
      image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Specialized pediatric healthcare facility with patient-centered design.'
    },
    {
      title: 'International School Campus',
      category: 'Academic Buildings',
      date: '2023',
      location: 'Biratnagar, Nepal',
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Modern educational campus with sustainable design principles.'
    },
    {
      title: 'Eco-Friendly Housing Project',
      category: 'Residential',
      date: '2022',
      location: 'Dhulikhel, Nepal',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Sustainable residential development with green building technologies.'
    },
    {
      title: 'Corporate Office Complex',
      category: 'Interior Design',
      date: '2023',
      location: 'Kathmandu, Nepal',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Modern office spaces designed for productivity and employee well-being.'
    },
    {
      title: 'Regional Hospital Extension',
      category: 'Hospitals',
      date: '2023',
      location: 'Butwal, Nepal',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Hospital expansion project with advanced medical facilities and patient care areas.'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-pi-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pi-navy mb-6">Our Projects</h2>
          <div className="w-24 h-1 bg-pi-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of innovative projects that have shaped Nepal's infrastructure 
            landscape and continue to serve communities across the nation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-pi-navy text-white hover:bg-pi-blue'
                  : 'text-pi-navy border-pi-navy hover:bg-pi-navy hover:text-white'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pi-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-pi-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* View Project Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white text-pi-navy hover:bg-pi-light-blue">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-pi-navy mb-2 group-hover:text-pi-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2 text-pi-blue" />
                    {project.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2 text-pi-blue" />
                    {project.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-pi-navy mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Let's discuss how we can bring your vision to life with our expertise and innovation.
            </p>
            <Button 
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-pi-navy hover:bg-pi-blue text-white px-8 py-3"
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
