import { useState, useEffect } from 'react';
import type { Branch } from '../components/types';
import { getBranchBySlug } from '../components/branch/BranchServices';

export const useBranch = (slug: string) => {
  const [branch, setBranch] = useState<Branch | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBranch = async () => {
      if (!slug) return;
      try {
        const data = await getBranchBySlug(slug);
        setBranch(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBranch();
  }, [slug]);

  return { branch, isLoading, error };
};