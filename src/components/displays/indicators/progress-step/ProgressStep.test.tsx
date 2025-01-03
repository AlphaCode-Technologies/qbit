import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProgressStepGroup from './ProgressStepGroup';
import ProgressStep from './ProgressStep';
import ProgressStepSkin from '@skins/defaults/ProgressStep.default.skin';

const progressData = [
  { name: 'Fill form', active: false, completed: true, id: 'step-1', renderer: ProgressStepSkin },
  { name: 'Payment', active: true, completed: false, id: 'step-2', renderer: ProgressStepSkin },
  { name: 'Confirmation', active: false, completed: false, id: 'step-3', renderer: ProgressStepSkin },
];

describe('ProgressStepGroup', () => {
  it('renders all steps correctly', () => {
    render(
      <ProgressStepGroup properties={progressData} actions={{ onClick: () => {} }}>
        {progressData.map((step, index) => (
          <ProgressStep key={step.id} properties={{ ...step, index, total: progressData.length }} />
        ))}
      </ProgressStepGroup>,
    );

    expect(screen.getByText('Fill form')).toBeInTheDocument();
    expect(screen.getByText('Payment')).toBeInTheDocument();
    expect(screen.getByText('Confirmation')).toBeInTheDocument();
  });

  it('renders correct step properties', () => {
    render(
      <ProgressStepGroup properties={progressData} actions={{ onClick: () => {} }}>
        {progressData.map((step, index) => (
          <ProgressStep key={step.id} properties={{ ...step, index, total: progressData.length }} />
        ))}
      </ProgressStepGroup>,
    );

    const completedStep = screen.getByText('Fill form');
    const activeStep = screen.getByText('Payment');

    expect(completedStep).toBeInTheDocument();
    expect(activeStep).toBeInTheDocument();
  });

  it('calls onClick when a step is clicked', () => {
    const onClickMock = vi.fn();

    render(
      <ProgressStepGroup properties={progressData} actions={{ onClick: onClickMock }}>
        {progressData.map((step, index) => (
          <ProgressStep key={step.id} properties={{ ...step, index, total: progressData.length }} />
        ))}
      </ProgressStepGroup>,
    );

    const activeStep = screen.getByText('Payment');
    fireEvent.click(activeStep);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders connector line between steps', () => {
    render(
      <ProgressStepGroup properties={progressData} actions={{ onClick: () => {} }}>
        {progressData.map((step, index) => (
          <ProgressStep key={step.id} properties={{ ...step, index, total: progressData.length }} />
        ))}
      </ProgressStepGroup>,
    );

    const connectorLines = screen.getAllByRole('img', { name: /line/i });
    expect(connectorLines.length).toBe(2);
  });

  it('renders completed and active steps with correct styles', () => {
    render(
      <ProgressStepGroup properties={progressData} actions={{ onClick: () => {} }}>
        {progressData.map((step, index) => (
          <ProgressStep key={step.id} properties={{ ...step, index, total: progressData.length }} />
        ))}
      </ProgressStepGroup>,
    );

    const completedStepCircle = screen.getByText('✓').closest('svg')?.querySelector('circle');
    const activeStepCircle = screen.getByText('2').closest('svg')?.querySelector('circle');

    expect(completedStepCircle).toHaveAttribute('fill', '#34D399');
    expect(activeStepCircle).toHaveAttribute('fill', '#5547f5');
  });
});
