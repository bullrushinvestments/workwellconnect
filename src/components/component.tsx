import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<BusinessSpec>('https://api.example.com/business-spec')
      .then((response) => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load business specification');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const renderFeature = ({ title, details }: Feature) => (
    <div key={title} className={clsx('p-4 mb-2', isMobile ? 'bg-gray-100' : 'bg-white')}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: details }} />
    </div>
  );

  return (
    <section aria-label="Business Specification" className={clsx('max-w-screen-xl mx-auto p-4', isMobile ? 'px-2' : '')}>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{businessSpec?.name}</h1>
        <p className="mt-2 text-gray-700">{businessSpec?.description}</p>
      </header>
      {businessSpec?.features.map(renderFeature)}
    </section>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

interface BusinessSpec {
  id: string;
  name: string;
  description: string;
  features: Feature[];
}

interface Feature {
  title: string;
  details: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<BusinessSpec>('https://api.example.com/business-spec')
      .then((response) => {
        setBusinessSpec(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load business specification');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const renderFeature = ({ title, details }: Feature) => (
    <div key={title} className={clsx('p-4 mb-2', isMobile ? 'bg-gray-100' : 'bg-white')}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: details }} />
    </div>
  );

  return (
    <section aria-label="Business Specification" className={clsx('max-w-screen-xl mx-auto p-4', isMobile ? 'px-2' : '')}>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{businessSpec?.name}</h1>
        <p className="mt-2 text-gray-700">{businessSpec?.description}</p>
      </header>
      {businessSpec?.features.map(renderFeature)}
    </section>
  );
};

export default CreateBusinessSpecification;