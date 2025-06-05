
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Target } from 'lucide-react';

const VisionMissionSection = () => {
  return (
    <section id="vision-mission" className="py-20 bg-gradient-to-br from-pi-gray to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pi-navy mb-6">Vision & Mission</h2>
          <div className="w-24 h-1 bg-pi-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guided by our commitment to excellence and sustainable development, 
            we shape Nepal's infrastructure landscape with innovation and purpose.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vision */}
          <Card className="relative overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pi-blue to-pi-navy"></div>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pi-blue rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-pi-navy">Our Vision</h3>
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-pi-light-blue pl-6">
                "To be Nepal's leading infrastructure consultancy, shaping the future with 
                sustainable and innovative design."
              </blockquote>
              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pi-blue rounded-full mr-3"></div>
                  <span className="text-gray-600">Leading innovation in infrastructure design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pi-blue rounded-full mr-3"></div>
                  <span className="text-gray-600">Sustainable development practices</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pi-blue rounded-full mr-3"></div>
                  <span className="text-gray-600">Shaping Nepal's architectural future</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="relative overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pi-navy to-pi-earth"></div>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pi-navy rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-pi-navy">Our Mission</h3>
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-pi-light-earth pl-6">
                "Delivering professional excellence through quality design, research, and 
                execution across diverse sectors."
              </blockquote>
              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pi-navy rounded-full mr-3"></div>
                  <span className="text-gray-600">Professional excellence in every project</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pi-navy rounded-full mr-3"></div>
                  <span className="text-gray-600">Quality-driven design solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pi-navy rounded-full mr-3"></div>
                  <span className="text-gray-600">Research-based approach to execution</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-pi-navy text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Innovation', description: 'Pioneering creative solutions for complex challenges' },
              { title: 'Sustainability', description: 'Building for future generations responsibly' },
              { title: 'Excellence', description: 'Maintaining highest standards in all deliverables' },
              { title: 'Integrity', description: 'Honest, transparent, and ethical practices' }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pi-blue to-pi-navy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{value.title[0]}</span>
                </div>
                <h4 className="text-xl font-semibold text-pi-navy mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
