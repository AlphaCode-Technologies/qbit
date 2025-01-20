import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProgressStep from './ProgressStep';
import ProgressStepItem from './ProgressStepItem';
import { ProgressStepItemSkin, ProgressStepSkin } from '@skins/defaults/progress-step';

// Helper function to render ProgressStep with common props and children
const renderProgressStep = () => {
  return render(
    <ProgressStep
      renderers={{ renderer: ProgressStepSkin, childRenderer: ProgressStepItemSkin }}
      keyExtractor={(value: string, i: number) => `${value}-${i}`}
    >
      <ProgressStepItem label="Step 1" completed={true} />
      <ProgressStepItem label="Step 2" active={true} />
      <ProgressStepItem label="Step 3" disabled />
      <ProgressStepItem label="Step 4" />
    </ProgressStep>,
  );
};

describe('ProgressStep Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the ProgressStep component with child items', () => {
    renderProgressStep();

    // Check if all steps are rendered
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
    expect(screen.getByText('Step 4')).toBeInTheDocument();
  });

  it('applies the correct styles for completed, active, and disabled steps', () => {
    renderProgressStep();

    // Check completed step
    const step1 = screen.getByText('Step 1').closest('div');
    expect(step1).toHaveClass('text-green-600');

    // Check active step
    const step2 = screen.getByText('Step 2').closest('div');
    expect(step2).toHaveClass('text-blue-600');

    // Check disabled step
    const step3 = screen.getByText('Step 3').closest('div');
    expect(step3).toHaveClass('text-gray-400');

    // Check default step
    const step4 = screen.getByText('Step 4').closest('div');
    expect(step4).toHaveClass('text-gray-500');
  });
});
