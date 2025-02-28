import React from 'react';

interface DoctorCardProps {
  name: string;
  title: string;
  image: string;
  specialties: string[];
  bio: string;
  education?: string[];
  availability?: string;
}

const DoctorCard = ({ 
  name, 
  title, 
  image, 
  specialties, 
  bio, 
  education,
  availability 
}: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img 
          src={image} 
          alt={`Dr. ${name}`} 
          className="w-full h-64 md:h-full object-cover"
        />
      </div>
      <div className="p-6 md:w-2/3">
        <h3 className="text-2xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{title}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{bio}</p>
        
        {education && education.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-1">Education</h4>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              {education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>
        )}
        
        {availability && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-700 mb-1">Availability</h4>
            <p className="text-gray-600">{availability}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;