import React from 'react';
import { useParams } from 'react-router-dom';
import { useBranch } from '../hooks/useBranch';
import BranchPageLayout from '../components/home/BranchPageLayout';

const BranchLanding: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { branch, isLoading, error } = useBranch(slug!);

  if (isLoading) return <div className="text-center py-12">Loading branch information...</div>;
  if (error) return <div className="text-center py-12 text-red-500">Error: {error.message}</div>;
  if (!branch) return <div className="text-center py-12">Branch not found</div>;

  return <BranchPageLayout branch={branch} />;
};

export default BranchLanding;