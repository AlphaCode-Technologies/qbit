import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressStepGroup from './ProgressStepGroup';
import ProgressStep from './ProgressStep';

export default {
  title: 'Components/ProgressStepGroup',
  component: ProgressStepGroup,
  tags: ['autodocs'],
} as Meta;

const initialProgressData = [
  { name: 'Fill form', active: false, completed: true, id: 'step-1' },
  { name: 'Payment', active: true, completed: false, id: 'step-2' },
  { name: 'Confirmation', active: false, completed: false, id: 'step-3' },
];

export const Default: StoryFn = () => {
  const [progressData, setProgressData] = useState(initialProgressData);

  const handleStepClick = (stepId: string) => {
    setProgressData((prevData) =>
      prevData.map((step) => ({
        ...step,
        active: step.id === stepId,
        completed: step.id === stepId ? false : step.completed,
      })),
    );
  };

  return (
    <ProgressStepGroup properties={progressData} actions={{ onClick: () => console.log('Step clicked') }}>
      {progressData.map((step, index) => (
        <ProgressStep
          key={step.id}
          properties={{ ...step, index, total: progressData.length }}
          actions={{ onClick: () => handleStepClick(step.id) }}
        />
      ))}
    </ProgressStepGroup>
  );
};

export const Interactive: StoryFn = () => {
  const [progressData, setProgressData] = useState(initialProgressData);

  const handleStepClick = (stepId: string) => {
    setProgressData((prevData) =>
      prevData.map((step) => {
        if (step.id === stepId) {
          return { ...step, active: true, completed: false };
        }
        if (step.completed) {
          return { ...step };
        }
        return { ...step, active: false };
      }),
    );
  };

  return (
    <ProgressStepGroup properties={progressData}>
      {progressData.map((step, index) => (
        <ProgressStep
          key={step.id}
          properties={{ ...step, index, total: progressData.length }}
          actions={{ onClick: () => handleStepClick(step.id) }}
        />
      ))}
    </ProgressStepGroup>
  );
};
