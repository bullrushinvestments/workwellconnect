import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

interface GatherRequirementsFormValues {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset, formState: { errors }, trigger } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = async data => {
    try {
      setError(null);
      setLoading(true);

      await axios.post('https://api.example.com/requirements', data);

      // Reset the form after successful submission
      reset();
      fetchRequirements(); // Refresh requirements list

    } catch (err) {
      setError('Failed to submit requirement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="requirementName" className="block text-sm font-medium text-gray-700">Requirement Name</label>
              <input
                id="requirementName"
                type="text"
                {...register('requirementName', { required: 'This is required' })}
                className={clsx(
                  "mt-1 block w-full rounded-md shadow-sm",
                  errors.requirementName && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                )}
              />
            </div>

            <div>
              <label htmlFor="requirementDescription" className="block text-sm font-medium text-gray-700">Requirement Description</label>
              <textarea
                id="requirementDescription"
                {...register('requirementDescription', { required: 'This is required' })}
                rows={4}
                className={clsx(
                  "mt-1 block w-full rounded-md shadow-sm",
                  errors.requirementDescription && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                )}
              />
            </div>

            <button
              type="submit"
              className={clsx(
                "w-full inline-flex items-center justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                loading && "opacity-50 cursor-not-allowed"
              )}
            >
              {loading ? 'Submitting...' : 'Submit Requirement'}
            </button>
          </form>

          <div className="mt-6">
            <h2 className="text-lg font-medium mb-4">Requirements List</h2>
            <ul role="list" className="divide-y divide-gray-200">
              {requirements.map(requirement => (
                <li key={requirement.id} className="py-4 flex justify-between items-center">
                  <div className="flex-grow">
                    <p className="text-sm font-medium text-gray-900">{requirement.name}</p>
                    <p className="mt-1 text-sm text-gray-500">{requirement.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

interface GatherRequirementsFormValues {
  requirementName: string;
  requirementDescription: string;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset, formState: { errors }, trigger } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = async data => {
    try {
      setError(null);
      setLoading(true);

      await axios.post('https://api.example.com/requirements', data);

      // Reset the form after successful submission
      reset();
      fetchRequirements(); // Refresh requirements list

    } catch (err) {
      setError('Failed to submit requirement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="requirementName" className="block text-sm font-medium text-gray-700">Requirement Name</label>
              <input
                id="requirementName"
                type="text"
                {...register('requirementName', { required: 'This is required' })}
                className={clsx(
                  "mt-1 block w-full rounded-md shadow-sm",
                  errors.requirementName && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                )}
              />
            </div>

            <div>
              <label htmlFor="requirementDescription" className="block text-sm font-medium text-gray-700">Requirement Description</label>
              <textarea
                id="requirementDescription"
                {...register('requirementDescription', { required: 'This is required' })}
                rows={4}
                className={clsx(
                  "mt-1 block w-full rounded-md shadow-sm",
                  errors.requirementDescription && "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                )}
              />
            </div>

            <button
              type="submit"
              className={clsx(
                "w-full inline-flex items-center justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                loading && "opacity-50 cursor-not-allowed"
              )}
            >
              {loading ? 'Submitting...' : 'Submit Requirement'}
            </button>
          </form>

          <div className="mt-6">
            <h2 className="text-lg font-medium mb-4">Requirements List</h2>
            <ul role="list" className="divide-y divide-gray-200">
              {requirements.map(requirement => (
                <li key={requirement.id} className="py-4 flex justify-between items-center">
                  <div className="flex-grow">
                    <p className="text-sm font-medium text-gray-900">{requirement.name}</p>
                    <p className="mt-1 text-sm text-gray-500">{requirement.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default GatherRequirements;